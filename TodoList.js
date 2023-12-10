let todoList = [];
let idCounter = 0;

const addTask = (name) => {
  const newTask = {
    id: idCounter++,
    name,
    isComplete: false,
  };
  todoList.push(newTask);
  return newTask.id;
};


const clearAll = () => {
  todoList.length = 0;
  idCounter = 0; 
  return [...todoList];
};

const changeStatus = (id,todoCompletionValue) => {
  let findIndex = todoList.findIndex((list) => {return list.id == id});
  //todoList[findIndex] && (todoList[findIndex].isComplete = todoCompletionValue)
  if (findIndex !== -1) {
    todoList[findIndex].isComplete = todoCompletionValue;
  }
};
    
export { todoList, addTask, clearAll, changeStatus };
 