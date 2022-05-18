import { app } from "./app";
import createClass from "./endpoints/createClass";
import createInstructor from "./endpoints/createInstructor";

app.post("/class", createClass)
app.post("/instructor", createInstructor)