import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Modal, Button } from 'react-native';
import { TodoItem } from "./App/components/TodoItem";
import { InputForm } from "./App/components/InputForm";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addTodo = (text) => setTodo(text);

  const deleteTodo = (todoId) => {
    setTodoList(() => {
      return todoList.filter((todoItem) => {
        return todoItem.id !== todoId;
      })
    })
  }

  const onPressButton = () => {
    if(todo) {
      const updatedTodoWithId = { id: Math.random(), text: todo };
      setTodoList(prev => [...prev, updatedTodoWithId]);
      setTodo("");
    }
  }

  return (
    <View style={styles.container}>
      <Button onPress={() => setModalVisible(true)} title="TODOLIST" />
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modal}>
          <Button onPress={() => setModalVisible(false)} title="CLOSE" color="red" />
          <InputForm 
            handleChangeText={addTodo}
            todo={todo}
            onPressButton={onPressButton}
          />
          <FlatList 
            data={todoList} 
            renderItem={data => {
              return <TodoItem data={data.item} deleteTodo={deleteTodo} />
            }} 
          />
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingVertical: 50,
    paddingHorizontal: 30,
    justifyContent: "center"
  },
  modal: {
    height: "100%",
    paddingVertical: 50,
    paddingHorizontal: 30
  }
});
