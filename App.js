import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text, Pressable, StyleSheet } from 'react-native';
import quotes from './quotes';

// Pick a random index that differs from the current one (no back-to-back repeats).
function randomIndex(exclude) {
  if (quotes.length < 2) return 0;
  let i;
  do {
    i = Math.floor(Math.random() * quotes.length);
  } while (i === exclude);
  return i;
}

export default function App() {
  const [index, setIndex] = useState(() => randomIndex(-1));
  const quote = quotes[index];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Random Quote Generator</Text>
      <View style={styles.card}>
        <Text style={styles.mark}>“</Text>
        <Text style={styles.text}>{quote.text}</Text>
        <Text style={styles.author}>— {quote.author}</Text>
      </View>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={() => setIndex((cur) => randomIndex(cur))}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>New Quote</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6FB', alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 22, fontWeight: '700', color: '#1F2A44', marginBottom: 24 },
  card: {
    width: '100%', maxWidth: 520, backgroundColor: '#fff', borderRadius: 16, padding: 28,
    shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 12, shadowOffset: { width: 0, height: 4 }, elevation: 3,
  },
  mark: { fontSize: 56, color: '#4F6BED', lineHeight: 56 },
  text: { fontSize: 20, lineHeight: 30, color: '#1F2A44', fontStyle: 'italic' },
  author: { marginTop: 18, fontSize: 16, fontWeight: '600', color: '#4F6BED', textAlign: 'right' },
  button: { marginTop: 32, backgroundColor: '#4F6BED', paddingVertical: 14, paddingHorizontal: 40, borderRadius: 30 },
  pressed: { opacity: 0.8 },
  buttonText: { color: '#fff', fontSize: 17, fontWeight: '600' },
});
