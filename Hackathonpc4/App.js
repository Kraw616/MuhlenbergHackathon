//Imports
import { StatusBar } from 'expo-status-bar';
//import React, { Component } from 'react';
import * as React from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import { Button } from "react-native-elements"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/native' ;
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import checkDHall from './commands/checkDHall';
import checkGQ from './commands/checkGQ';
import checkLSC from './commands/checkLSC';
import checkHealthCenter from './commands/checkHealthCenter';
import checkBusOff from './commands/checkBusOff';
import checkMailroom from './commands/checkMailroom';



import styles from './styles/Component.style.js';

import moment from 'moment';

var date = moment().utcOffset('-05:00').format('YYYY-MM-DD'); //hh:mm:ss a');
var hour = new Date().getHours();
var min = new Date().getMinutes();
var both = hour + (min / 100);

var date2 = moment().day();

function Food() {
  return (
    <View style={styles.container}>
      <Text style={styles.realTitle}>MuhlenTime</Text>

      <View style={styles.space} />

      <Text>Today's date: {date}</Text>

      <View style={styles.space} />

      <Button
      style={styles.button}
       buttonStyle={{backgroundColor: checkDHall(date2, both)[0]}}  //change color red
       title="Dining Hall" 
       onPress={() => alert(checkDHall(date2, both)[1])}
       />

       <View style={styles.space} />

       <Button
       style={styles.button}
       buttonStyle={{backgroundColor: checkGQ(date2, both)[0]}}
       title="GQ" 
       onPress={() => alert(checkGQ(date2, both)[1])} 
       />
      <StatusBar style="auto" />
    </View>
  );
}

function Health() {
  return (
    <View style={styles.container}>
      <Text style={styles.realTitle}>MuhlenTime</Text>

      <View style={styles.space} />

      <Text>Today's date: {date}</Text>

      <View style={styles.space} />

      <Button
      style={styles.button}
       buttonStyle={{backgroundColor: checkHealthCenter(date2, both)[0]}}
       title="Health Center" 
       onPress={() => alert(checkHealthCenter(date2, both)[1])}
       />

      <View style={styles.space} />

       <Button
       style={styles.button}
       buttonStyle={{backgroundColor: checkLSC(date2, both)[0]}}
       title="LSC" 
       onPress={() => alert(checkLSC(date2, both)[1])} 
       />
      <StatusBar style="auto" />
    </View>
  );
    /*<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Health!</Text>
    </View>*/
}

function Student() {
  return (
    <View style={styles.container}>
      <Text style={styles.realTitle}>MuhlenTime</Text>

      <View style={styles.space} />

      <Text>Today's date: {date}</Text>

      <View style={styles.space} />

      <Button
       style={styles.button}
       buttonStyle={{backgroundColor: checkBusOff(date2,both)[0]}}
       title="Business Office" 
       onPress={() => alert(checkBusOff(date2,both)[1])}
       /> 

       <View style={styles.space} />

       <Button
       style={styles.button}
       buttonStyle={{backgroundColor: checkMailroom(date2, both)[0]}}
       title="Mailroom" 
       onPress={() => alert(checkMailroom(date2, both)[1])} 
       />
      <StatusBar style="auto" />
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Food"
      barStyle = {{backgroundColor: '#821426'}}
      activeColor="#fff" // Color of the tab when it is clicked
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Food"
        component={Food}
        options={{
          tabBarLabel: 'Food',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food" color={'grey'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Student Life"
        component={Student}
        options={{
          tabBarLabel: 'Student Life',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="school" color={'grey'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Health"
        component={Health}
        options={{
          tabBarLabel: 'Health',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={'grey'} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>{date}</Text>
      <Text style={styles.title}>Yo</Text>

      <Button
       color="#20232a"
       title="Click Me" 
       onPress={() => alert('Button pressed')}
       />

      <StatusBar style="auto" />
    </View>
    
  ); 
}
*/
