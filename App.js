import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import CoursesStack from './navigation/CoursesStack'; // ✅ only stack used

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color }) => {
      const icons = {
        Home: focused ? 'home' : 'home-outline',
        Courses: focused ? 'book' : 'book-outline',
        About: focused ? 'information-circle' : 'information-circle-outline',
        Contact: focused ? 'call' : 'call-outline',
      };
      return <Ionicons name={icons[route.name]} size={24} color={color} />;
    },
    tabBarActiveTintColor: '#007AFF',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: { height: 60, paddingBottom: 5, paddingTop: 5 },
    headerTitleAlign: 'center', // 👈 Center align
  })}
>
  <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
  <Tab.Screen name="Courses" component={CoursesStack} options={{ title: 'Courses' }} />
  <Tab.Screen name="About" component={About} options={{ title: 'About' }} />
  <Tab.Screen name="Contact" component={Contact} options={{ title: 'Contact' }} />
</Tab.Navigator>

    </NavigationContainer>
  );
}
