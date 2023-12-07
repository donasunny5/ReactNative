// useTaskStatus.js

import { useState } from 'react';

const useTaskStatus = (initialValue) => {
  const [todoCompletionValue, setTodoCompletionValue] = useState(initialValue);

  const toggle = (todoId) => {
    setTodoCompletionValue((prev) => !prev);
  };
  return { todoCompletionValue, toggle };
};

export default useTaskStatus;
