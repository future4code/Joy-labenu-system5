import {Request, Response} from 'express';
import updateClass from '../data/updateClass';



//validar as entradas

export default async function changeClass(
 req:Request,
 res: Response
){
    try {
         const  module = req.body.module;
         const id = req.params.id;
        //
         if(!req.body.module){
            throw new Error("class_id is required");
        }  
         
         //chamando o banco de dados
        await updateClass (
               id,
               module
        )
               
         res
             .status(200)
             .send({
                 message: "Campo alterado com sucesso!"
         });
          
 
        
        
       
        } catch (error:any) {
         res
             .status(400)
             .send({
                 message: error.message || error.sqlMessage
         });
         
     }
 
 }
    
         
