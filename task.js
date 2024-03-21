import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

const Task = ({text,onPress}) => {
  return(
    <TouchableOpacity onPress= {onPress}>
    <View style= {styles.task}>
    <Text>{ text }</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  task:{
    backgroundColor: 'pink',
    padding: 15,
    margin: 5,
    borderRadius: 5,   
  }
})

export default Task;