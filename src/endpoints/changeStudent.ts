import {Request, Response} from 'express';
import updateStudent from '../data/updateStudent';

export default async function changeStudent(
 req:Request,
 res: Response
){
    try {
       const class_id = req.body.class_id;
       const id = req.params.id;
        
         if(!class_id){
        throw new Error("class_id is required");
         }

         await updateStudent (
            id,
            class_id
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
    
         
