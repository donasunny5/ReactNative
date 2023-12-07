// useTaskStatus.js

import { useState } from 'react';

const useTaskStatus = (initialValue) => {
  const [todoCompletionValue, setTodoCompletionValue] = useState(initialValue);

  const toggle = (todoId) => {
    setTodoCompletionValue((prev) => !prev);
    // Implement logic to update the corresponding todo list item's isComplete property
    // You can call the changeStatus function from TodoList.js here
  };

  return { todoCompletionValue, toggle };
};

export default useTaskStatus;
