import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity, KeyboardAvoidingView,Text, View,Button } from 'react-native';
import TextBoxCust from './component/TextBoxCust'
import TimeSlot  from './component/TimeSlot'
import ColorPickerCust from './ColorPickerCust'
import React, { useState } from 'react';
import {addNewData} from './DataTaskQuery'     

export default function AddTaskTimelinePage({ navigation, route }) {
  var x;
  var y;
  const [titleText, onChangetitleText] = React.useState();
  const [subTitleText, onChangesubtitleText] = React.useState();
  const [color, onChangeColor] = React.useState();
  const [timeStartHour, onChangetimeStartHour] = React.useState(0);
  const [timeStartMin, onChangetimeStartMin] = React.useState(0);
  const [timeEndHour, onChangetimeEndHour] = React.useState(0);
  const [timeEndMin, onChangetimeEndMin] = React.useState(0);
  const [currentColorChosen, onChangecurrentColorChosen] = React.useState(7);
  const allColors= ['#A1a','#5aa','#468','#881','#56a']

  var task =  {
    title:titleText,
    subTitle:subTitleText,
    hourBegin:timeStartHour*1,
    minuteBegin:timeStartMin*1,
    hourEnd:timeEndHour*1,
    minuteEnd:timeEndMin*1,
    completed:false,
    image:"",
    color:allColors[currentColorChosen],
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextBoxCust width={'100%'} textSize={40} placeholderText={"Task"} onTextChange={onChangetitleText} value={titleText}/>
      <TextBoxCust width={'100%'} textSize={20}  placeholderText={"Sub-Title"} onTextChange={onChangesubtitleText} value={subTitleText}/>
      <View style={[{paddingHorizontal: 20,flexDirection:'row'  ,alignContent:'space-around'}]}>
      <View style={[{alignSelf:'center' ,width:'50%'}]}>

      <Text style={[styles.textTimeStyle]}>Start</Text>
      </View>
      <TextBoxCust width={'25%'} textSize={20} placeholderText={"HH"} onTextChange={onChangetimeStartHour} value={timeStartHour}/>
      
      <TextBoxCust width={'25%'} textSize={20} placeholderText={"MM"} onTextChange={onChangetimeStartMin} value={timeStartMin}/>
      </View>
      <View style={[{paddingHorizontal: 20,flexDirection:'row', alignContent:'space-around' }]}>
        <View style={[{alignSelf:'center' ,width:'50%'}]}>
      <Text style={[styles.textTimeStyle]}>End</Text>
      </View>
      <TextBoxCust width={'25%'} textSize={20}  placeholderText={"HH"} onTextChange={onChangetimeEndHour} value={timeEndHour}/>
      <TextBoxCust width={'25%'} textSize={20} placeholderText={"MM"} onTextChange={onChangetimeEndMin} value={timeEndMin}/>
      </View>


  {/* Color Picker Section */}
<ColorPickerCust currentColorChosen={currentColorChosen} onChangecurrentColorChosen={onChangecurrentColorChosen}></ColorPickerCust>
  
      <TouchableOpacity onPress={() => { //addNewData(task)
        navigation.navigate({name: 'Test',params: { taskObject: task }, merge: true,}) }} style={styles.appButtonContainer}>
    <Text style={styles.buttonStyle}>Add Task</Text>
  </TouchableOpacity>

     <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:30,
    paddingHorizontal:10
    //justifyContent: 'center',
  
  },
  innerCircleStyle:{
    height : 40 ,
    width :40,
    backgroundColor:'green',
    borderWidth:3,
    borderColor:'#52AADC',
    borderRadius: 1000,
  },
  buttonStyle:{
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
    },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#52AADC",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width:'100%'
    },
  textTimeStyle:{
    //width:'50%',
    paddingLeft:10,
    fontSize:20
  }
});