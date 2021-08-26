import React from 'react';
import {StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/FeedScreen";
import CreatePost from "../screens/CreatePost";
import { RFValue } from 'react-native-responsive-fontsize';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    labeled = {false}
    barStyle = {styles.bottomTabStyles}
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Feed') {
          iconName = focused
            ? 'home'
            : 'home-outline';
          } else if (route.name === 'CreatePost') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          return <Ionicons name={iconName} size={RFValue(25)} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    > 
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="CreatePost" component={CreatePost} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  bottomTabStyles :{
    backgroundColor:'#2A2A2A',
    height:'8%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    overflow:'hidden',
    position:'absolute'
  }
})
export default BottomTabNavigator


