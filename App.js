import { useState} from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalVisibility] = useState(false);

  function startAddGoalHandler() {
    setModalVisibility(true);
  }

  function endAddGoalHandler() {
    setModalVisibility(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      { text: enteredGoalText, id: Math.random.toString()},
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((item) => item.id !== id);
    })
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="darkblue" 
          onPress={ startAddGoalHandler }/>
        <GoalInput visible={modalIsVisible} 
          onAddGoal={addGoalHandler} 
          onCloseInput={ endAddGoalHandler }/>
        <View style={styles.goalsContainer}>
        <FlatList alwaysBounceVertical={false}
          keyExtractor={(item, index) => { 
            return item.id;
          }}
          data={courseGoals} renderItem={(itemData) => {
            return <GoalItem
              id = {itemData.item.id} 
              text={itemData.item.text} 
              onDeleteItem={deleteGoalHandler} />
        }}/>
        </View>      
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 20,
    paddingHorizontal: 8,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
  goalScrollView: {
    alwaysBoundVertical: false,
  }
});
