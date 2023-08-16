'use strict'; 

 
class Job {
    

    constructor(id,title,speciality,type,link,requirement=null,startDate=null,endDate=null) {
    
       this.id = id; 
       this.title = splitTitleAndNumber(title);
       this.requirement = requirement;
       this.speciality = betterTextSpecialty(speciality);
       this.link = link;
       this.type = type;

       this.startDate = startDate;
       this.endDate = endDate; 
    }

    title(){
        return this.title;
    }
    id(){
      return this.id;
    }

    link(){
        return this.link;
    }

    setDetailedInfo(requirement,startDate,endDate){
        this.requirement = requirement;
        this.startDate = startDate;
        this.endDate = endDate;
    }


    getDict(){
        // Esta funcion devuelve un diccionario de la forma: 
        // id :{ 
        //      title: "titulo",
        //      requirement: "requisitos",
        //      speciality: "especialidad",
        //      link: "link",
        //      type: "tipo"
        //      startDate: "fecha de inicio",
        //      endDate: "fecha de fin"
        //      }
        return {
            id: this.id,
            title: this.title,
            requirement: this.requirement,
            speciality: this.speciality,
            link: this.link,
            type: this.type,
            startDate: this.startDate,
            endDate: this.endDate
        }
    
    }
    // funcion que devuelve true o false segun si posee en el arreglo "speciality" la especialidad pasada por parametro
    hasSpeciality(speciality){ return this.speciality.includes(speciality); }

}

// let jobs = [];

 module.exports = Job;


// function showJobs() {
//     jobs.forEach(function (job) {
        
//          console.log(job.id);
//          console.log(job.title); 
//     });
// }

// function returnPathForJobs(a) {
//     return "#oGrid > tbody > tr:nth-child(" + a + ") > td:nth-child(6) > a"
// }

// function returnPathForSpecialty(a) {
//     return " #oGrid > tbody > tr:nth-child(" + a + ") > td:nth-child(4)";
// }

// function returnAmountOfJobs(textHTML) {
//     let contenido = textHTML.match(/[0-9]+/i);
//     return contenido[0];
// }

function transformText(coleccion) {
    for (let trabajo in coleccion) {
        trabajo.specialty = betterTextSpecialty(trabajo.specialty);
        let titleAndNumber = splitTitleAndNumber(trabajo.title);
        trabajo.title = titleAndNumber.title;
        trabajo.number = titleAndNumber.number;

    }
}

function splitDescriptionAndOthers(text) {
    text = text.replaceAll('\\n', ' ');
    text = text.replace('Area/Dpto: ', '')

    // HACE FALTA GUARDAR Y ELIMINAR DEL TEXTO LAS PARTES DE LA REMUNERACIÓN Y DEMAS DATOS
    // pueden aparecer de distintas maneras por ejemplo "Dias y remuneracion estipulada" || "remuneracion estipulada"
    return text;
}

function splitTitleAndNumber(text) {
    let numberJob = text.match(/[0-9]+/i);
    numberJob = numberJob[0];
    text = text.replace(/[0-9]+/i, '');
    text = text.replace(' - ', '')

    return {
        number: numberJob,
        txt: text
    };

}

function betterTextSpecialty(text) {
    text = text.replace(' ', '').replace(/\t/g, '').replace(/\n/g, '').trim();
    text = text.split(',').map(item => item.trim()).filter(item => item != '')
    // text = text.replace(',', '').replace('\n','').replace('\t','').replace('\r','').replace(' ','');
    return text;
}

 