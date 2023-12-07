// TodoList.js

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

const changeStatus = (id) => {
  // implementation for changing status
};

export { todoList, addTask, clearAll, changeStatus };
