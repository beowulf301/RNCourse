import { StyleSheet, View,  Text, Pressable } from "react-native";
function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.goalListItem}>
                <Text style={styles.goalListItemText}>{props.text}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    goalListItem: {
        margin:5,
        padding: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        backgroundColor: 'darkblue',
      },
      goalListItemText: {
        color: '#fff'
      }
});

export default GoalItem;

