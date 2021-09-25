

import React,{useState,useEffect}  from 'react';
import { Alert, Keyboard, KeyboardAvoidingView,FlatList, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableHighlight } from 'react-native';
// const [taskTtl,setTaskTtl] = useState();
// const [task,setTask] = useState();
// const [taskItems,setTaskItems] = useState([]);


 
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  useColorScheme,
} 
from 'react-native';
import { withTheme } from 'react-native-elements';
//const {Value,event,cond,eq,add,set,interpolate}=Animated;
//height of 1 hour is 119
const TimeSlot =({height,textSize,width,color,text,placeholderText,image,onTextChange,value,taskSubTitle})=>{

  return(
    <KeyboardAvoidingView style={[{width:width},styles.textBoxWrapper]}>
    <TextInput multiline={true }style={[{fontSize:textSize}]}  onChangeText = {onTextChange} value={value} placeholder = {placeholderText} />
    </KeyboardAvoidingView>

  )
 
}

const styles = StyleSheet.create({
  container: {
    // borderColor:'red',
    //alignContent:'center',
    //justifyContent:'center',
   // flexDirection:"row"
    // marginBottom:1,
  },
taskTitle:{
  color:'white',
  fontSize:14,
  fontWeight:'bold'
},
timeText:{
  color:'white',
}
,
textBoxWrapper:{
  margin:10,
  padding:10,
  //marginHorizontal:50,
  paddingHorizontal:10,
  // backgroundColor:'white',
    // borderRadius:30,
    // shadowColor: "#000",
    //   shadowOffset: {
    //     width: 0,
    //     height: 6,
    //   },
    //   shadowOpacity: 0.37,
    //   shadowRadius: 7.49,  
    //   elevation: 14,    
}
})

  export default TimeSlot;