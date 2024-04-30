import Dexie from "dexie";


//Create Database and it's version
export const db = new Dexie("todoApp");
db.version(1).stores({
    todos: "++id,task,completed"
})

