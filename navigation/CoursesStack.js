import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Courses from '../screens/Courses';
import CourseDetails from '../screens/CourseDetails';

const Stack = createNativeStackNavigator();

export default function CoursesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CoursesMain" component={Courses} options={{ title: 'Courses' }} />
      <Stack.Screen name="CourseDetails" component={CourseDetails} options={{ title: 'Course Details' }} />
    </Stack.Navigator>
  );
}
