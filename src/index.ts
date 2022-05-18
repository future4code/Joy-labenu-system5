import { app } from "./app";
import createClass from "./endpoints/createClass";
import createInstructor from "./endpoints/createInstructor";
import createStudent from "./endpoints/createStudent";
import getClasses from "./endpoints/getClasses";
import getInstructors from "./endpoints/getInstructors";
import getStudents from "./endpoints/getStudents";

app.get("/student/:name", getStudents)

app
  .get("/class", getClasses)
  .post("/class", createClass)

app.post("/instructor", createInstructor)

app.post("/student", createStudent)

app.get("/instructors", getInstructors)

