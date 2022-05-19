import connection from "../data/connection";

//função para alterar um instrutor

export default async function updateInstructor(
      id: string,
      class_id: string
    ) {
      await connection("instructor")
      .where({id})
      .update({class_id})
      
    }
      





