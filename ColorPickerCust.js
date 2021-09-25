

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
import { color } from 'react-native-reanimated';
//const {Value,event,cond,eq,add,set,interpolate}=Animated;
//height of 1 hour is 119
const colorL ='#a13'


function _changeStyle() {
 
  }

const ColorPickerCust =({currentColorChosen, onChangecurrentColorChosen})=>{
  var defaultColor = '#000';
  //var currentColorChosen=null ;
 // const [currentColorChosen, onChangecurrentColorChosen] = React.useState(7);
 
  const [buttonBackColor1, onChangeButtonBackColor1] = React.useState(defaultColor);
  const [buttonBackColor2, onChangeButtonBackColor2] = React.useState(defaultColor);
  const [buttonBackColor3, onChangeButtonBackColor3] = React.useState(defaultColor);
  const [buttonBackColor4, onChangeButtonBackColor4] = React.useState(defaultColor);
  const [buttonBackColor5, onChangeButtonBackColor5] = React.useState(defaultColor);
  const allBackgroundColors= [buttonBackColor1,buttonBackColor2,buttonBackColor3,buttonBackColor4,buttonBackColor5]

  const allColors= ['#A1a','#5aa','#123','#881','#56a']
const arrOfChangeColorFun = [onChangeButtonBackColor1,onChangeButtonBackColor2,onChangeButtonBackColor3,onChangeButtonBackColor4,onChangeButtonBackColor5  ]
  const setColor=(colorBut)=>{
onChangeButtonColor(colorBut)
  }

  
  const renderAllColorButtons=()=>
  {
    return(
      allColors.map((currentColor , i)=>{
        return(

          <TouchableOpacity  style={[{backgroundColor:allBackgroundColors[i],height : 45 ,
            alignContent:'center',
            alignItems:'center',
            justifyContent:'center',
            marginHorizontal:10,
            width :45,
            borderRadius: 1000,}]} onPress={()=>{if(currentColorChosen!=7){ arrOfChangeColorFun[currentColorChosen](defaultColor);} onChangecurrentColorChosen(i); arrOfChangeColorFun[i]('#9a1')}}>
                <View  style={[styles.innerCircleStyle,{    backgroundColor:currentColor}]} > 
        
                </View>
                </TouchableOpacity>
        )

        
      })

    )
  }
    return(
    <KeyboardAvoidingView style={[styles.textBoxWrapper]}>
          {/* <TouchableOpacity  style={[{backgroundColor:buttonColor,height : 45 ,
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center'
    width :45,
    borderRadius: 1000,}]} onPress={()=>{onChangeButtonColor('#f0f')}}>
        <View  style={[styles.innerCircleStyle]} > 

        </View>
        </TouchableOpacity> */}
        <View style={[styles.colorPickerWrapper]}>

        {renderAllColorButtons()}
        </View>
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
  colorPickerWrapper:{
flexDirection: 'row'
  },
  innerCircleStyle:{
    height : 40 ,
    width :40,
    borderRadius: 1000,
  },
  outerCircleStyle:{
    height : 45 ,
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    width :45,
    backgroundColor: 'green',
    borderRadius: 1000,
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
   //backgroundColor:'blue',
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

  export default ColorPickerCust;