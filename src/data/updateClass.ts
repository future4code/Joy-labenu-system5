import connection from "../data/connection";

//função para alterar um instrutor

export default async function updateClass(
     id: string,
      module: string
     ) {
      await connection ("class")
      .where ({id})
      .update ({module})

     }
        
 

      






