import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';

export default function About() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.cnt}>
        <Text style={styles.title}>About ITMultiverse</Text>
        <Text style={styles.txt}>We deliver cutting-edge digital solutions...</Text>
        <Text style={styles.subtitle}>Vision</Text>
        <Text style={styles.txt}>To be a global leader...</Text>
        <Text style={styles.subtitle}>Mission</Text>
        <Text style={styles.txt}>To upskill youth and deliver quality...</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cnt: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 20, fontWeight: '600', marginTop: 20, marginBottom: 6 },
  txt: { fontSize: 16, lineHeight: 22, color: '#444' },
});
