import { Text, SafeAreaView, StyleSheet,View ,TouchableOpacity,TextInput,ScrollView} from 'react-native';
import React,{useState} from 'react';
import Task from './task';

const App = ()  => {
 const [task,setTask] = useState('');
 const [tasks,setTasks] = useState([]);
 
 const addTask = () => {
   if(task){
     setTasks([...tasks,task]);
     setTask('');
   }
 }
 const removeTask = (index) => {
   const newTasks = [...tasks];
   newTasks.splice(index,1);
   setTasks(newTasks)
 }
 return(
   <View style={styles.container}>
   <Text style={styles.header}> to do list</Text>
   <View style= {styles.inputContainer}>
   <TextInput style= {styles.input}
   placeholder='add a task'
   value= {task}
   onChangeText= {(text) => setTask(text)}
   />
   <TouchableOpacity onPress= {addTask}>
   <View style= {styles.addButton}>
   <Text style = {styles.addButtonText}> + </Text>
   </View>
   </TouchableOpacity>
   </View>
   <ScrollView style = {styles.taskContainer}>{
     tasks.map((task,index)=>(
       <Task key= {index} text={task} onPress={() => removeTask(index)}  />
     ))
   }
   </ScrollView>
   </View>
 )
}
const styles = StyleSheet.create({
 container:{
   flex: 1,
   backgroundColor: 'lightblue',
   padding: 20,
 },
 header:{
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
 },
 inputContainer:{
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: 20
 },
 input:{
   flex:1,
   backgroundColor: 'pink',
   padding: 10,
   borderRadius:5,
   marginRight: 10,
 },
 addButton:{
   backgroundColor: 'white',
   padding: 8,
   borderRadius: 5,
},
addButtonText:{
  color: "black",
  fontSize: 15,
},
taskContainer:{
  flex: 1
}
})
export default App;