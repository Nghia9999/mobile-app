import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Home,Chat,Profile,Location} from '../screens'
import {Ionicons} from '@expo/vector-icons'
import { COLORS } from '../constrants/theme'
const Tab = createBottomTabNavigator()
const tabBarStyle = {
  borderRadius: 10,
  height: 60,
  position: "absolute",
}
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor="#EB6A58"
      tabBarHideKeyBoard={false}
      headerShown={false}
      inactiveColor="3e2465"
      barStyle={{paddingBottom: 48}}

    >
      <Tab.Screen name='Home' component={Home} options={{
        tabBarStyle:tabBarStyle,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <Ionicons
            name={focused? 'home':'home-outline'}
            color={focused?COLORS.blue:COLORS.gray}
            size={28}
          />
        )
      }} />
      <Tab.Screen name='Location' component={Location} options={{
        tabBarStyle:tabBarStyle,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <Ionicons
            name={focused? 'grid':'grid-outline'}
            color={focused?COLORS.blue:COLORS.gray}
            size={28}
          />
        )
      }} />
      <Tab.Screen name='Chat' component={Chat} options={{
        tabBarStyle:tabBarStyle,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <Ionicons
          name={focused? 'chatbubble-ellipses':'chatbubble-ellipses-outline'}
          color={focused?COLORS.blue:COLORS.gray}
            size={28}
          />
        )
      }} />
      <Tab.Screen name='Profile' component={Profile} options={{
        tabBarStyle:tabBarStyle,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <Ionicons
            name={focused? 'person':'person-outline'}
            color={focused?COLORS.blue:COLORS.gray}
            size={28}
          />
        )
      }} />

    </Tab.Navigator>
  )
}

export default BottomTabNavigation