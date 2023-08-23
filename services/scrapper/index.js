const express = require('express');
const app = express()
require("dotenv").config();
// const app = express();
const Scrapper = require('./Scrapper.js');
const PORT = process.env.PORT;


const url = 'https://bolsadetrabajo.frro.utn.edu.ar/postulante/inicioSesion.aspx';

var _clave = process.env.SCRAP_USERTYPE;
var _usuario = process.env.SCRAP_USER;
var _pass = process.env.SCRAP_PASS;

var information = {
    "jobs": [],
    "last_update": ""
}


app.use(express.json());

app.listen(
    PORT,
    () => console.log("Funciona la API")
)

app.get('/', (req, res) => {
    res.status(200).send('Bienvenido a la API de Trabajos FRRO');
});

app.get('/login/:user/:password', async (req, res) => {
    try {
        const username = req.params.user;
        const password = req.params.password;

        let mensaje_respuesta = {
            200: "Usuario validado correctamente",
            401: "Usuario o contraseña incorrectos",
            500: "Error en la petición"

        }
        // Aca habría que desencriptar la contraseña
        mensaje = {
            "code": null,
            "message": null
        };

        if (username && password) {
            var axios_scrapper = new Scrapper(url, _clave, username, password);
            const login_response = await axios_scrapper.login();

            if (login_response["status"] == true && login_response["jobs"] != null) {
                mensaje["code"] = 200;
                mensaje["message"] = mensaje_respuesta[mensaje["code"]];
            } else {
                mensaje["code"] = 401;
                mensaje["message"] = mensaje_respuesta[mensaje["code"]];
            }

        }

        console.log(req.params);
        res.status(mensaje["code"]).send(mensaje["message"]);


    } catch (error) {
        console.log(error);
        res.status(500).send('Error en la petición')
    }

})

app.get('/jobs', async (req, res) => {
    try {

        let diff_in_days = (new Date() - information.last_update) / 86400000;
        if (diff_in_days > 1) {
            const axios_scrapper = new Scrapper(url, _clave, _usuario, _pass);
            const jobs_response = await axios_scrapper.getJobs();
            information.jobs = jobs_response;
            information.last_update = new Date();
        }

        if (information.jobs.length > 0) {
            answer = information.jobs;

            if (req.query.speciality) {
                answer = information.jobs.filter((job) => {
                    return job.hasSpeciality(req.query.speciality)
                });
            }


            res.status(200).send(answer);


        } else {
            // No hay trabajos, devolver un error 404
            res.status(404).send('No hay trabajos disponibles');

        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en la petición')
    }

});

app.get('/jobs/id/', async (req, res) => {
    try {
        // devuelve la info de un trabajo en particular 
        //  axios_scrapper = new Scrapper(url,_clave,_usuario,_pass);    
        //  const jobs_response =  await axios_scrapper.getJobs(); 
        res.status(200).send(information.jobs[req]);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en la petición')
    }

});