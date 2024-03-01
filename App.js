import { useState } from "react";
import { StyleSheet, View, FlatList, Button, Text, Image } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler () {
    setModalIsVisible(false);
  }

  const goalSubmitHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>App metas </Text>
        <Image style={styles.image} source={require("./assets/meta.png")}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
        />
      </View>
      <Button title="Añadir nueva meta" color="#ACB0BD" onPress={startAddGoalHandler}/>
      <GoalInput visible={modalIsVisible} onAddGoal={goalSubmitHandler} onCancel={endAddGoalHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    justifyContent: "flex-end",
    padding: 24,
    backgroundColor: "#756D88",
    flex: 1,
  },

  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    flexDirection: "row",
  },
  
  titleText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },

  image: {
    height: 24,
  },

  goalsContainer: {
    marginTop: 8,
    flex: 10,
  },
});
