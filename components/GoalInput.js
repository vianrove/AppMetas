import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const goalSubmitHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Tu meta para el curso  "
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonsContainer}>
          <View>
            <Button style={styles.button} color="#D9DBF1" title="Cancelar "  onPress={props.onCancel}/>
          </View>
          <View>
            <Button
              style={styles.button}
              color="#ACB0BD"
              title="Añadir meta"
              onPress={goalSubmitHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C3C7E9",
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ACB0BD",
  },
  buttonsContainer: {
    marginTop: 18,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  button: {
    backgroundColor: "red",
    width: "60%",
    marginHorizontal: 8,
  }
});
