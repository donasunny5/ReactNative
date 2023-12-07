import React from 'react';
import { StyleSheet, Text, View, Switch, Button } from 'react-native';
import useTaskStatus from '../useTaskStatus';

const RowComponent = ({ task , onChangeStatus }) => {
  const { todoCompletionValue, toggle } = useTaskStatus(task.isComplete);
  onChangeStatus(todoCompletionValue)
  return (
    <View style={styles.todoTask}>
      <Text>{`Name: ${task.name}`}</Text>
      <View style={styles.todoTaskToggle}>
        <Text>{`Status: ${task.isComplete ? 'Finished' : 'Pending'}`}</Text>
        <Switch value={todoCompletionValue} onValueChange={toggle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your existing styles
  todoTask:{
    borderBottomWidth: 1
  },
  todoTaskToggle:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default RowComponent;
