import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Hero */}
        <View style={styles.hero}>
          <Image style={styles.heroImg} source={require('../assets/home.jpg')} />
          <Text style={styles.heroTitle}>Empowering Your Digital Journey</Text>
          <Text style={styles.heroSub}>Web, Mobile, AI & more — all in one platform.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Contact')} style={styles.ctaBtn}>
            <Text style={styles.ctaText}>Get Started</Text>
          </TouchableOpacity>
        </View>

        {/* Services */}
        <View style={styles.section}>
          <Text style={styles.title}>Our Services</Text>
          <View style={styles.cards}>
            {['Web Dev', 'App Dev', 'UI/UX', 'Digital Mkt'].map((label, i) => (
              <View key={i} style={styles.card}>
                <Ionicons
                  name={['laptop', 'phone-portrait', 'brush', 'megaphone'][i]}
                  size={28}
                  color="#007AFF"
                />
                <Text style={styles.cardLabel}>{label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Stats */}
        <View style={styles.section}>
          <Text style={styles.title}>Quick Stats</Text>
          <View style={styles.stats}>
            {['1000+', '4.8/5', '500+'].map((num, i) => (
              <View key={i} style={styles.stat}>
                <Text style={styles.statNum}>{num}</Text>
                <Text style={styles.statLabel}>{['Projects', 'Rating', 'Students'][i]}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  hero: { alignItems: 'center', marginBottom: 30 },
  heroImg: { width: '100%', height: 300, borderRadius: 10, marginBottom: 20 },
  heroTitle: { fontSize: 26, fontWeight: 'bold', textAlign: 'center' },
  heroSub: { marginTop: 8, fontSize: 16, color: '#555', textAlign: 'center' },
  ctaBtn: { marginTop: 16, backgroundColor: '#007AFF', padding: 12, borderRadius: 25 },
  ctaText: { color: '#fff', fontSize: 16 },

  section: { marginBottom: 30 },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 15 },
  cards: { flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' },
  card: { width: '23%', alignItems: 'center', marginBottom: 15 },
  cardLabel: { marginTop: 8, textAlign: 'center', color: '#333' },

  stats: { flexDirection: 'row', justifyContent: 'space-around' },
  stat: { alignItems: 'center', flex: 1 },
  statNum: { fontSize: 24, fontWeight: 'bold', color: '#007AFF' },
  statLabel: { fontSize: 14, color: '#555', textAlign: 'center' },
});
