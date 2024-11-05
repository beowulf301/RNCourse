import { useState } from "react";
import { StyleSheet, View,  TextInput, Button, Modal, Image} from "react-native";
function GoalInput(props) {
  const [ enteredGoalText, setEnteredGoalText ] = useState(''); 
  
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
    props.onCloseInput();
  }

  function closeModel() {
    props.onCloseInput();
  }

    return (
      <Modal visible={ props.visible } animationType="slide">
          <View style={styles.inputContainer}>
              <Image source={ require( '../assets/images/splash.png' ) } 
                style = { styles.image }/>
              <View style={ styles.textContainer }>
                <TextInput style={styles.textInput} 
                placeholder="Your course goal" 
                onChangeText={ goalInputHandler }
                value={enteredGoalText} />
              </View>
              <View style={ styles.buttonContainer } >
                <View style={styles.eachButtonView}>
                  <Button 
                    title="Set Goal" 
                    onPress={ addGoalHandler } />
                </View>
               <View style={styles.eachButtonView}>
                <Button                  
                    title="Cancel"
                    onPress={ closeModel }/>
               </View>               
              </View>
          </View>
        </Modal>
    );
};

const styles = StyleSheet.create({    
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b'
  },
  textContainer: {
    width: '95%',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  eachButtonView: {
    marginTop: 16,
    marginHorizontal: 5,
    width: '40%'
  },
  textInput: {
    borderWidth:1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    width: '100%',
    padding: 5,
  },
  image: {
    width: 100,
    height: 100
  }
 });

export default GoalInput;