import React from 'react';
import { render, fireEvent, waitFor} from '@testing-library/react-native';
import App from '../App';

describe('Testing the App.js screen', () => {
  it('displays a message indicating no tasks on initial load', async () => {
    const { getByText } = render(<App />);
    const messageElement = getByText('No tasks in the list');
    expect(messageElement).toBeTruthy();
  });

  it('After adding a todo, the FlatList should update', async () => {
    const { getByPlaceholderText, getByText, findByText } = render(<App />);
    const input = getByPlaceholderText('Enter task name');
    const addButton = getByText('Add Task');

    fireEvent.changeText(input, 'Task2');
    fireEvent.press(addButton);

    const newTaskElement =  findByText('Task2');    
    expect(newTaskElement).toBeTruthy();
  });
});