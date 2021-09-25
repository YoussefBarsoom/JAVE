// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import Animated, {
//   useSha#D54C4CValue,
//   withTiming,
//   useAnimatedStyle,
//   Easing,
// } from 'react-native-reanimated';

import {Dimensions,StyleSheet, View, Button, ScrollView, Text } from 'react-native';
import React, { useState } from 'react';
import TimeSlot from './component/TimeSlot';
import { Icon } from 'react-native-elements'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TextBoxCust from './component/TextBoxCust'
import {getAllData} from './DataTaskQuery'     
var width = Dimensions.get('window').width; 

 


export default function DayTimelinePage({navigation,route}) {
  React.useEffect(() => {

    console.log("USE EfFECT")
    
    
  }, [route.params?.taskObject]);


  function insertionSort(inputArray, newELm)
  {
    let current = 0
    let arr = inputArray;
    while( current<arr.length &&newELm.hourBegin> arr[current].hourBegin)
    {
      current++
    }
    arr.splice(current,0,newELm)
    arr.join();
   // todos=arr
    console.log(arr)
  }
  const timeState ={time:["12:00 am","1:00 am","2:00 am","3:00 am","4:00 am","5:00 am","6:00 am","7:00 am","8:00 am","9:00 am","10:00 am","11:00 am","12:00 pm","1:00 pm","2:00 pm","3:00 pm","4:00 pm","5:00 pm","6:00 pm","7:00 pm","8:00 pm","9:00 pm","10:00 pm","11:00 pm","12:00 am"]}
  const toDoSlot= {
    title:"Programming",
    subTitle:"",
    hourBegin:0,
    minuteBegin:0,
    hourEnd:1,
    minuteEnd:0,
    completed:false,
    image:"",
    color:"#7C83FD",
  }
  const toDoSlot1= {
    title:"Sleep",
    subTitle:"",
    hourBegin:2,
    minuteBegin:30,
    hourEnd:4,
    minuteEnd:30,
    completed:false,
    image:"",
    color:"#FF7600",
  }
  const toDoSlot2= {
    title:"Sleep Again",
    subTitle:"",
    hourBegin:5,
    minuteBegin:0,
    hourEnd:7,
    minuteEnd:30,
    completed:false,
    image:"",
    color:"#FF7600",
  }
  const [ todos, setTodos ] = useState(getAllData);
//var todos = []

  const [ timeLineMask, setTimelineMasj] = useState([]);

  //const timeLineMask = [0,0,0,0,0,1,1,1,1,0,0,0,0,0]


  const renderTasks=()=>
  {
    const arr = todos
    if (route.params?.taskObject) {
      //setTodos( arr => [...arr,route.params?.taskObject ]);
      insertionSort(arr,route.params?.taskObject)
      console.log("RESETTING")
       }
  //  setTodos([toDoSlot]);
    var pointer = {
      hour:0,
      minute:0
    }
    var flag= false;
  var spaceMultiper=0
  console.log("Masks"+todos)
  console.log("Masks")

  return(
  arr.map((todoElement , i)=>{
    console.log(todoElement)
    flag=false
    if(todoElement["hourBegin"]==pointer["hour"] && todoElement["minuteBegin"]==pointer["minute"])
  {
   
  }
  else
  {
    flag=true;
    spaceMultiper= ((todoElement["hourBegin"]+(todoElement["minuteBegin"]/60))-(pointer["hour"] +(pointer["minute"]/60)))
    console.log("HEREEEEEE"+spaceMultiper);

    

  }
  pointer = { hour:todoElement["hourEnd"],
                minute:todoElement["minuteEnd"]}
  console.log(pointer)
      var slotHeight=((todoElement["hourEnd"]+(todoElement["minuteEnd"]/60))-(todoElement["hourBegin"] +(todoElement["minuteBegin"]/60)))
  

      var minBeg = "";
      var minEnd="";
      console.log("HEight"+slotHeight)
      if(todoElement["minuteBegin"]<10)
      {
        minBeg="0"+todoElement["minuteBegin"]
      }
      else
      {
        minBeg=""+todoElement["minuteBegin"]
      }
      if(todoElement["minuteEnd"]<10)
      {
        minEnd="0"+todoElement["minuteEnd"]
      }
      else
      {
        minEnd=""+todoElement["minuteEnd"]

      }
     // Console.log("Height:"+slotHeight)
      return(
        <View>

        {(flag)?<View style={   {height:119*spaceMultiper,  width:"100%"} } />: null }
        <TimeSlot timeBegin={todoElement["hourBegin"]+":"+minBeg} timeEnd={todoElement["hourEnd"]+":"+minEnd} taskTitle={todoElement["title"]} height={slotHeight} color={todoElement["color"]}></TimeSlot>
        </View>

      )
    }
   
  ))  

}

  

  const Line= (props)=>{
    return( 
      <View style={styles.timeStyle}>
      <Text>{props.time}</Text>
      <View style={{
        justifyContent:'center',
        alignContent:'center',
        width:"80%"
      }}>
       <View style={styles.line}></View>
       </View>
       </View>
    )
  }
  const renderTimeline= ()=>{
  return(
    
    [...Array(25)].map((e, i) => <Line time = {timeState.time[i]}/>)

  )
  
  }
 
  return (
    <View
      style={styles.container}>
        <View style={styles.timelineContainer}>
       
        <ScrollView style={styles.timeline}>
          
      { renderTimeline()}
       <View style={{  position:'absolute', marginTop:9, alignContent:"flex-start", justifyContent:'flex-start',height:"100%",width:"80%", alignSelf:"flex-end"}}>
      {renderTasks()}
          </View>
     </ScrollView>
   
     <View style={styles.addWrapper} >
     <Button
 // reverse
 onPress={() => navigation.navigate('add')}
 //name='add'
title="Add"
  //type='flaticon'
  color='#52AADC'
  size= {30}
/>

    </View>

     </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#52AADC',

  },
  boxS:{
    backgroundColor: '#52AADC',
    borderRadius:30,
    padding:10,
    height:119*0.75,
    width:"100%"
  },
  addWrapper:{
    justifyContent:"center",
    alignContent:'center',
    alignSelf:'center',
    //borderRadius:75,
    width:60,
    height:60,
  //  backgroundColor: '#52AADC',

  },
  addButton:{
    //backgroundColor: '#D54C4C',

    textAlign:'center',
    color:'white',
    fontWeight: 'bold',
    fontSize:35
  },
  timelineContainer:{
   // borderRadius:50,
   // marginVertical:10,
   flex:1,
   paddingHorizontal:3,
    borderBottomRightRadius:70,
    borderBottomLeftRadius:70,

    backgroundColor:'white',
    marginBottom:20,
    paddingTop:50,
    paddingBottom:10
  },
  timeStyle:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginBottom:100
  },
  line:{
 borderBottomColor: 'black',
  borderBottomWidth: 1},
  space:{
    height:119*0.5,
    width:"100%"  },
  timeline :{
  
    backgroundColor:'white'
  }
})