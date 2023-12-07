import React from 'react';
import { StyleSheet, Text, View, Switch, Button } from 'react-native';
import useTaskStatus from '../useTaskStatus';

const RowComponent = ({ task }) => {
  const { todoCompletionValue, toggle } = useTaskStatus(task.isComplete);

  return (
    <View>
      <Text>{`ID: ${task.id}, Name: ${task.name}`}</Text>
      <Text>{`Status: ${task.isComplete ? 'Finished' : 'Pending'}`}</Text>
      <Switch value={todoCompletionValue} onValueChange={toggle} />
    </View>
  );
};

const styles = StyleSheet.create({
  // Your existing styles
});

export default RowComponent;
