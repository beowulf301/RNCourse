import { useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [ enteredGoalText, setEnteredGoalText ] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    //console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      enteredGoalText
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} 
          placeholder="Your course goal" 
          onChangeText={ goalInputHandler } />
        <Button title="Add Goal" 
          onPress={ addGoalHandler } />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
        {
          courseGoals.map( (goal) => <Text key={goal}>{goal}</Text> )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 20,
    paddingHorizontal: 8,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  textInput: {
    borderWidth:1,
    borderColor: '#ccc',
    width: '75%',
    padding: 5,
  },
  goalsContainer: {
    flex: 5,
  }
});
