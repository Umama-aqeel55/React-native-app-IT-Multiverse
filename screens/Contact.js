import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Please fill all fields');
      return;
    }
    // For now just show a success alert
    Alert.alert('Submitted Successfully!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Contact Us</Text>

        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Your Message"
          multiline
          numberOfLines={5}
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
});
