import React from 'react';
import { StyleSheet, Text, View, Switch, Button } from 'react-native';
import useTaskStatus from '../useTaskStatus';

const RowComponent = ({ task, onChangeStatus }) => {
  const { todoCompletionValue, toggle } = useTaskStatus(task.isComplete);
  onChangeStatus(todoCompletionValue)
  return (
    <View style={styles.todoTask}>
      <Text style={styles.taskNameText}>{`Name: ${task.name}`}</Text>
      <View style={styles.todoTaskToggle}>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Status:</Text>
          <Text style={[styles.statusValue, task.isComplete && styles.completedStatus]}>
            {task.isComplete ? ' Finished' : ' Pending'}
          </Text>
        </View>
        <Switch value={todoCompletionValue} onValueChange={toggle}  testID={'toggle-switch'}/>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  todoTask: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10
  },
  todoTaskToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  taskNameText: {
    fontSize: 18,
    color: '#333',
    //fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
    fontWeight: 'bold',
  },
  statusContainer: {
    flexDirection: 'row',
  },
  statusText: {
    fontSize: 16,
    color: '#555',
    //fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
    marginRight: 4,
  },
  statusValue: {
    fontSize: 16,
    color: '#555',
    //fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
  },
  completedStatus: {
    color: 'green',
  },
});

export default RowComponent;