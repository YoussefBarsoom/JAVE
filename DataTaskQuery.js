const DataTaskQuery =()=>{

  
//for JSON 
//List Of Tasks

  
}

export function addNewData() {
    const allUsers = require('./userTasks.json');
    const list = allUsers.tasks;
    //console.log("HI" +list);
    return list;
}
export function getAllData() {
    const allUsers = require('./userTasks.json');
    const list = allUsers.tasks;
    //console.log("HI" +list);
    return list;
}