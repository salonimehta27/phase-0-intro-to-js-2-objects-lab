// New attempt for Phase 1

const employee={
    name:'Sam',
    streetAddress:'11 Broadway'
  }
  function updateEmployeeWithKeyAndValue(obj,key,value)
  {
    return Object.assign({},obj,{[key]:value});
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value)
  {
    obj[key]=value;
    return obj;
  }
  function deleteFromEmployeeByKey(obj,key)
{ const newObj={...obj};
  delete newObj[key];
  return newObj;
}
  function destructivelyDeleteFromEmployeeByKey(obj,key)
  {

    delete obj[key];
    return obj;
  }

// phase 0 attempt for prework

// const employee = {
//     name:'Sam',
//     streetAddress:'11 Broadway'
// };

// function updateEmployeeWithKeyAndValue(employee,key,value)
// {
//     const newObj={...employee};
//     newObj[key]=value;
//     return newObj;
     
// }
// function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value)
// {   
//     employee[key]= value;
//     return employee;
// }

// function deleteFromEmployeeByKey(employee,key)
// {
//     const newEmployee = {...employee};
//     delete newEmployee[key];
//     return newEmployee;
// }
// function destructivelyDeleteFromEmployeeByKey(employee, key)
// {
//     delete employee[key];
//     return employee;

// }


