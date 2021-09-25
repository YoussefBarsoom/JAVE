import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DayTimelinePage from './DayTimlinePage';
import AddTaskTimelinePage from './AddTaskTimelinePage';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
<Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen
          name="Test"
        
          component={DayTimelinePage}
        
        />
         <Stack.Screen
          name="add"
          
          component={AddTaskTimelinePage}
        
        />
      </Stack.Navigator>    
      
    </NavigationContainer>
  );
};

export default App;