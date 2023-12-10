import React from 'react';
import {render} from '@testing-library/react-native'
import RowComponent from "../components/RowComponent"

describe("Row Component test", () => { 
  it('renders the component for incomplete task', () => {
    const incompleteTask = { id: 1, name: 'Incomplete Task', isComplete: false };
    const mockOnChangeStatus = jest.fn(); 
    const { getByText, getByTestId } = render(
      <RowComponent task={incompleteTask} onChangeStatus={mockOnChangeStatus} />
    );
    const pendingTextElement = getByText('Pending');
    const switchElement = getByTestId('toggle-switch');
    expect(pendingTextElement).toBeTruthy();
    expect(switchElement).toHaveProp('value', false);
  });

  it('renders the component for completed task', () => {
    const completedTask = { id: 2, name: 'Completed Task', isComplete: true };
    const mockOnChangeStatus = jest.fn();
    const { getByText, getByTestId } = render(
      <RowComponent task={completedTask} onChangeStatus={mockOnChangeStatus} />
    );
    const finishedTextElement = getByText('Finished');
    const switchElement = getByTestId('toggle-switch');
    expect(finishedTextElement).toBeTruthy();
    expect(switchElement).toHaveProp('value', true);
  });
})
