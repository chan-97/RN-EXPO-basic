import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";

export function TodoItem({ data, deleteTodo }) {
  return (
    <TouchableOpacity onPress={() => deleteTodo(data.id)} key={data.id}>
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>{data.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 7,
    backgroundColor: "#FFA500"
  },
  todoText: {
    color: "#fff"
  }
})