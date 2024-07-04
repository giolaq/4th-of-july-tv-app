import React from 'react';
import { View, Text, StyleSheet, Animated, Pressable, useTVEventHandler } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const fireworkAnim = React.useRef(new Animated.Value(0)).current;

  const animateFireworks = () => {
    fireworkAnim.setValue(0);
    Animated.timing(fireworkAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => setTimeout(() => fireworkAnim.setValue(0), 500));
  };

  return (
    <LinearGradient
      colors={['#B22234', '#FFFFFF', '#3C3B6E']}
      style={styles.container}
    >
      <Text style={styles.text}>Happy 4th of July!</Text>
      <Animated.Text style={[styles.firework, {
        opacity: fireworkAnim,
        transform: [{ scale: fireworkAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1.5],
        }) }],
      }]}>🎆</Animated.Text>
      <PressableButton title="Press to Start Fireworks" onPress={animateFireworks} />
      <PressableButton title="Press to Chill" onPress={() => {}} />
      <Text style={[styles.text, styles.subtitle]}>Celebrate Independence Day</Text>
    </LinearGradient>
  );
}

const PressableButton = ({ title, onPress }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed, focused }) => pressed || focused ? styles.pressableFocused : styles.pressable}
  >
    {({ focused }) => (
      <Text style={styles.buttonText}>
        {title}
      </Text>
    )}
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  subtitle: { fontSize: 24, marginTop: 20 },
  firework: { fontSize: 72 },
  pressable: { padding: 10, margin: 10, borderRadius: 5, backgroundColor: 'rgba(0,0,0,0.3)' },
  pressableFocused: { padding: 10, margin: 10, borderRadius: 5, backgroundColor: 'rgba(255,255,255,0.3)' },
});