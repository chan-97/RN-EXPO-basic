import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export function InputForm({ handleChangeText, todo, onPressButton }) {
  return (
    <View style={styles.row}>
      <TextInput 
        onChangeText={handleChangeText}
        value={todo}
        style={styles.textInput} 
        placeholder="할일을 입력하세요" 
      />
      <Button 
        onPress={onPressButton}
        title="ADD" 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 2
  },
  textInput: {
    width: "80%",
    padding: 10,
    backgroundColor: "#fff"
  }
})