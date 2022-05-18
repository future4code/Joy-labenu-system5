import { app } from "./app";
import createClass from "./endpoints/createClass";
import createInstructor from "./endpoints/createInstructor";
import createStudent from "./endpoints/createStudent";
import getStudents from "./endpoints/getStudents";

app.get("/student", getStudents)

app.post("/class", createClass)

app.post("/instructor", createInstructor)

app.post("/student", createStudent)