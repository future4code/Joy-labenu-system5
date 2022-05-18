import { Request, Response } from "express"
import { Student } from "../classes/student"
import { v4 as generateId } from 'uuid';
import connection from "../data/connection";

export default async function createStudent(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, email, birth_date, class_id, hobby } = req.body
    const id = generateId()

    if (!name || !email || !class_id || !birth_date) {
      throw new Error("Está faltando algum dado")
    }

    const student = new Student(
      id,
      name,
      email,
      birth_date,
      class_id
    )

    const student_hobbyId = generateId()

    const hobbyId = generateId() 

    await connection("student")
      .insert(student)

    await connection("hobby")
    .insert({
        id: hobbyId,
        name: hobby
    })

    await connection("student_hobby")
      .insert({
        id: student_hobbyId,
        student_id: id,
        hobby_id: hobbyId
      })

    res.send('student - tudo certo Brasil!')

  } catch (error: any) {
    res.send(error.message).status(201)
  }
}