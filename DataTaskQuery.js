const DataTaskQuery =()=>{

  
//for JSON 
//List Of Tasks

  
}

export function addNewData(obj) {
    const allUsers = require('./userTasks.json');
    const list = allUsers.tasks;
    let current = 0
    let arr = list;
    while( current<arr.length &&newELm.hourBegin> arr[current].hourBegin)
    {
      current++
    }
    arr.splice(current,0,newELm)
    arr.join();
    
    console.log(arr)
}
export function getAllData() {
    const allUsers = require('./userTasks.json');
    const list = allUsers.tasks;
    //console.log("HI" +list);
    return list;
}