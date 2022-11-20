import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from "./Home"
import {RecoilRoot} from "recoil"
import RecoilNexus from "recoil-nexus"

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <RecoilRoot>
      <RecoilNexus/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  )
}

export default App
