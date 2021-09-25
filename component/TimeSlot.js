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
//const {Value,event,cond,eq,add,set,interpolate}=Animated;
//height of 1 hour is 119
const TimeSlot =({height,width,color,timeBegin,timeEnd,image,taskTitle,taskSubTitle})=>{

  
  if(height>0.5)
  {
  return(
    <View style={{height:height*119,justifyContent:"center",alignItems:'center' }}>
    <View style={{
      backgroundColor: color ,
      borderTopLeftRadius:25,
      borderTopRightRadius:25,
      borderBottomRightRadius:25,
      marginVertical:1,
      alignSelf:'center',
      paddingTop:20,
      paddingLeft:20,
      width:"100%",
      height:(height*119)-4,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,  
      elevation: 14
      , 
    }}>

    <Text style={styles.taskTitle}> {taskTitle} </Text>
     <Text  style={styles.timeText}> {timeBegin} - {timeEnd} </Text>

    </View>
    </View>

  )}
  else
  {
    return(
<View style={{height:height*119,justifyContent:"center",alignItems:'center'}}>
    <View style={{
      backgroundColor: color ,
      borderTopLeftRadius:25,
      borderTopRightRadius:25,
      borderBottomRightRadius:25,
      paddingLeft:20,
      paddingRight:20,
     // alignSelf:'center',
     height:(height*119)-4,

    //  height:110*height,
      width:"100%",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,  
      elevation: 14,
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems:'center'
    }}>
    <Text style={styles.taskTitle}> {taskTitle} </Text>
     <Text  style={styles.timeText}> {timeBegin} - {timeEnd} </Text>

    </View>
    </View>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    // borderColor:'red',
    alignContent:'center',
    justifyContent:'center',
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
} })

  export default TimeSlot;