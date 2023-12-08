import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Platform, StatusBar, Button, TextInput, TouchableOpacity } from 'react-native';
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
  };
  const handleClearAll = () => {
    const updatedList = clearAll();
    setListData(updatedList);
  };

  <Button onPress={handleClearAll} title="Clear All" />

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Task Manager</Text>
        </View>

        {listData.length === 0 ? (
          <View style={styles.centeredContainer}>
            <Text style={styles.emptyText}>No tasks in the list</Text>
          </View>
        ) : (
          <FlatList
            style={styles.list}
            data={listData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <RowComponent
                task={item}
                onChangeStatus={(todoCompletionValue) => changeStatus(item.id, todoCompletionValue)}
              />
            )}
          />
        )}

        <View style={styles.footer}>
          <TextInput
            style={styles.input}
            placeholder="Enter task name"
            value={newTaskName}
            onChangeText={(text) => setNewTaskName(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
            <Text style={styles.buttonText}>Add Task</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.clearButton} onPress={handleClearAll}>
            <Text style={styles.buttonText}>Clear All</Text>
          </TouchableOpacity>
        </View>
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
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700'
  },
  headerContainer: {
    backgroundColor: '#e2e2e2',
    paddingVertical: 10
  },
  list: {
    marginTop: 10,
    marginBottom: 10
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "700"
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: '#f2f2f2',
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    padding: 10,
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
    alignItems: 'center',
  },
  input: {
    height: 45,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '90%',
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
    marginBottom: 10,
  },
  clearButton: {
    backgroundColor: '#b22222',
    padding: 10,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
