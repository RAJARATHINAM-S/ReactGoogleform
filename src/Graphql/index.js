import { loader } from "graphql.macro";

const getAllTasks = loader("./task/gettasks.graphql");
const UpdateTask = loader("./task/updatetask.graphql");
// const deleteTask = loader("../task/deletetask.graphql");
// const addTask=loader("../task/addtask.graphql");
export { getAllTasks,UpdateTask};
