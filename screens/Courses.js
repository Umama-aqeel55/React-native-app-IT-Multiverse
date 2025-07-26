import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const courseData = [
  {
    title: 'Web Development',
    desc: 'HTML, CSS, JavaScript, React, WordPress',
    image: require('../assets/course1.png'),
  },
  {
    title: 'App Development',
    desc: 'React Native, Expo, Play Store Publishing',
    image: require('../assets/appDevelopment.png'),
  },
  {
    title: 'AI & Machine Learning',
    desc: 'Python, AI Tools, ChatGPT Integration',
    image: require('../assets/Ai-Course.png'),
  },
  {
    title: 'Freelancing & Career',
    desc: 'Fiverr, Upwork, Portfolio, LinkedIn',
    image: require('../assets/freelance.png'),
  },
];

export default function Courses({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Our Popular Courses</Text>

        {courseData.map((course, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            style={styles.card}
            onPress={() =>
              navigation.navigate('CourseDetails', {
                title: course.title,
                desc: course.desc,
                image: course.image,
              })
            }
          >
            <Image source={course.image} style={styles.image} />
            <Text style={styles.title}>{course.title}</Text>
            <Text style={styles.desc}>{course.desc}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  image: { width: '100%', height: 300 },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 10,
  },
  desc: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 10,
    marginBottom: 15,
  },
});
