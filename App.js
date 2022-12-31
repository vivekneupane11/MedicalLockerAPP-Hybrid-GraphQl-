import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home'
import ScannerScreen from './ScannerScreen'
import LoginScreen from "./LoginScreen";
import TrackerOptionScreen from "./TrackerOptionScreen";
import VerifyPicture  from './VerifyPicture';
import ChecklistScreen from "./ChecklistScreen";
import TakePicture from './TakePicture';
import TrackerScreen from "./TrackerScreen";
import CheckListEquipmentScreen from "./ChecklistEquipment";
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import VerifyMonthlyCheck from './VerifyMonthlyCheck'
import ServiceList from './ServiceList'
import WelcomeScreen from './Welcome';
import Questionaire from './QuestionairOne';
import QuestionaireTwo from './QuestionaireTwo';
import QuestionaireThree from './QuestionaireThree';
import QuestionaireFour from './questionaireFour';
import PatientInventory from './PatientInventory';
import PatientInventoryTwo from './PatientInventoryTwo';
import PatientInventoryThree from './PatientInventoryThree';
import PatientInventoryFour from './PatientInventoryFour';
import PatientInventoryFive from './PatientInventoryFive';
import PatientInventorySix from './PatientInventorySix';
// Initialize Apollo Client
const client = new ApolloClient({
  uri: "http://192.168.100.5:3000/api/graphql",
  cache: new InMemoryCache(),
});
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaProvider>

<ApolloProvider client={client}>

<NavigationContainer>
<Stack.Navigator   screenOptions={{
headerShown: false
}}>
   <Stack.Screen name="home" component={HomeScreen} />
  <Stack.Screen name="Scanner" component={ScannerScreen} />
  <Stack.Screen name="Login" component={LoginScreen} />
  <Stack.Screen name="TrackerOption" component={TrackerOptionScreen} />
  <Stack.Screen name="welcome" component={WelcomeScreen} />
  <Stack.Screen name="question" component={Questionaire} />
  <Stack.Screen name="questiontwo" component={QuestionaireTwo} />
  <Stack.Screen name="questionthree" component={QuestionaireThree} />

  <Stack.Screen name="questionfour" component={QuestionaireFour} />
  <Stack.Screen name="patientinventory" component={PatientInventory} />
  <Stack.Screen name="patientinventorytwo" component={PatientInventoryTwo} />
  <Stack.Screen name="patientinventorythree" component={PatientInventoryThree} />
  <Stack.Screen name="patientinventoryfour" component={PatientInventoryFour} />
  <Stack.Screen name="patientinventoryfive" component={PatientInventoryFive} />
  <Stack.Screen name="patientinventorysix" component={PatientInventorySix} />

  <Stack.Screen name="Checklist" component={ChecklistScreen} />
  <Stack.Screen name="Tracker" component={TrackerScreen} />
  <Stack.Screen name="CheckListEquipment" component={CheckListEquipmentScreen}/>
  <Stack.Screen name="TakePicture" component={TakePicture} />
  <Stack.Screen name="VerifyPicture" component={VerifyPicture} /> 
  
  <Stack.Screen name="VerifyMonthlyCheck" component={VerifyMonthlyCheck} />

  <Stack.Screen name="ServiceList" component={ServiceList} />


</Stack.Navigator>
</NavigationContainer>
</ApolloProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});