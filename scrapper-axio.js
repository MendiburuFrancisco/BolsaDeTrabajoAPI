// import { Job } from './Job.js';
const Job = require('./entities/Job.js');
const cheerio = require('cheerio');
const axios = require('axios');
const FormData = require('form-data');

const selectors = {
  
  // USUARIO: '#usuario',
  // PASSWORD: '#pass',
  ROW_PATH: '#oGrid > tbody > tr',
  LOGIN_BUTTON: '#frmPOSTULANTE > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > input[type=submit]',
  PROCEED_BUTTON: '#proceed-button',
  AMOUNT_JOBS: '#cantReg',
  REQUIREMENT_JOB: '#txtotroRequisitos',
  TITLE_JOB: '#txttitulo',
  START_DATE_JOB: '#txtfechaDesde',
  END_DATE_JOB: '#txtfechaHasta',
  ID_JOB: '#txtidBusqueda',
  TYPE_JOB: '#capVinculo'


};


class Scrapper{

  constructor(url,clave,usuario,pass)
  {
    this.url = url;
    this.clave = clave;
    this.usuario = usuario;
    this.pass = pass;
    this.config = null;
  }

  getFormData()
  {
    let data = new FormData(); 
    data.append('clave', this.clave+'\n');
    data.append('usuario', this.usuario);
    data.append('pass', this.pass);
    return data;
  }

  async _getHTML()
  {
    try 
    {
      const response = await axios.request(this.config);
      const $ = cheerio.load(response.data);
      return $;

    } catch (error) 
    {
      console.log(error); 
      throw new Error('Error en la petición');
    }
  }

  _setConfigForJobs(metod,url=this.url){
    let data = this.getFormData();
    let config = {
      method: metod,
      maxBodyLength: Infinity,
      url: url,
      headers: { 
        'Cookie': 'ASP.NET_SessionId=jhfxoeabhudnek45ey5udv3b; ROUTEIDGS=.http47', 
        ...data.getHeaders()
      },
      data : data
    };  

    this.config = config;
  }

  async getJobDetail(job)
  {
    
      const jobDetailedURL = job.link;
      this._setConfigForJobs("get",jobDetailedURL);


      try { 
        const $ = await this._getHTML()  

      
      // const returnTextFromElement = ($, path, index) => $(path).find('td').eq(index).text(); 
        const returnTextFromElement = ($, path,atribb=null) => {
          if(atribb){
            return $(path).attr(atribb);
          }else{
            return $(path).text(); 
          }
        } 
          

      // const ID = returnTextFromElement($, selectors.START_DATE_JOB, 'value');
      const startDate = returnTextFromElement($, selectors.START_DATE_JOB, 'value');
      const endDate = returnTextFromElement($, selectors.START_DATE_JOB, 'value');
      const requirement = returnTextFromElement($, selectors.REQUIREMENT_JOB);
      
      job.setDetailedInfo(requirement,startDate,endDate);

      return job;

    } catch (error) {
      console.log(error); 
      throw new Error('Error para encontrar detalles del trabajo');
    }
      
    
    
  }

  async getJobs()
  {  
    this._setConfigForJobs("post");

    try { 
      
      const $ = await this._getHTML() 
      const job_listing_rows = $(selectors.ROW_PATH); 
      
      let jobs = [];

      job_listing_rows.each(async(i, fila) => 
      {
      
        const returnTextFromElement = ($, fila, index) => $(fila).find('td').eq(index).text(); 
        const returnAtribbFromElement = ($, fila, element,atribb) => $(fila).find('td >'+ element).attr(atribb); 



        const ID = returnTextFromElement($, fila, 0);
        const nombre = returnTextFromElement($, fila, 1);
        const tipo = returnTextFromElement($, fila, 3);
        const especialidad = returnTextFromElement($, fila, 2);
        const estado = returnTextFromElement($, fila, 4);
        
        const url_ = 'https://bolsadetrabajo.frro.utn.edu.ar/postulante/'; 
        const _link = url_+ returnAtribbFromElement($, fila, 'a', 'href'); 

        if (ID != "")
        {
          
          
          let Trabajo = new Job(
            ID,
            nombre.trim(),
            tipo,  
            especialidad.trim(),
            _link);
            
            jobs.push(Trabajo); 
          }  
      });

      
      console.log("Se devuelven los trabajos de la bolsa de trabajo el ".concat(new Date().toLocaleString()));
      return jobs;

    } catch (error) {
      // console.log(error);
      // console.log("Error en la petición para encontrar trabajos disponibles");
      // console.log(error); 
      throw new Error('Error en la petición para encontrar trabajos disponibles');
    }

  }

  async login()
  {
     

    try { 
   
        const jobs = await this.getJobs();
        return {"status":true,"jobs":jobs};
      
    }
    catch (error) {
      return {"status":false,"jobs":null};

      // console.log(error); 
      // throw new Error('Error en la petición');
    }
  }

  } 

module.exports = Scrapper; 