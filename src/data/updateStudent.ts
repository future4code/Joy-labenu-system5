import connection from "../data/connection";

//função para alterar um instrutor

export default async function updateStudent(
      id: string,
      class_id: string
    ) {
      await connection("student")
      .where({id})
      .update({class_id})
      
    }
      