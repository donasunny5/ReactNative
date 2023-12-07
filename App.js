import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Platform, StatusBar, Button, TextInput } from 'react-native';
import RowComponent from './components/RowComponent';
import { todoList, addTask, clearAll, changeStatus } from './TodoList';

export default function App() {
  const [listData, setListData] = useState(todoList);
  const [newTaskName, setNewTaskName] = useState('');

  const handleAddTask = () => {
    if (newTaskName.trim() === '') {
      // Do not add empty tasks
      return;
    }

    const taskId = addTask(newTaskName);
    setListData([...todoList]); // Update the FlatList data
    setNewTaskName(''); // Clear the input field
    console.log(taskId);
  };
  const handleClearAll = () => {
    const updatedList = clearAll();
    setListData(updatedList);
  };
<Button onPress={handleClearAll} title="Clear All" />
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text>Todo List</Text>
        <FlatList
          style={styles.list}
          data={listData}
          renderItem={({ item }) => {
            return <RowComponent task={item} onChangeStatus={() => changeStatus(item.id)} />;
          }}
        />
        <Text>{listData.length === 0 ? 'No tasks in the list' : ''}</Text>

        {/* Text input for task name */}
        <TextInput
          style={styles.input}
          placeholder="Enter task name"
          value={newTaskName}
          onChangeText={(text) => setNewTaskName(text)}
        />

        {/* Button to add task */}
        <Button onPress={handleAddTask} title="Add Task" />

        {/* Button to clear all tasks */}
        <Button onPress={() => handleClearAll()} title="Clear All" />
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  list: {
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});
