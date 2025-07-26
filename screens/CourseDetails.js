import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CourseDetails({ route }) {
  const { title, desc, image } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  desc: { fontSize: 16, color: '#444' },
});
