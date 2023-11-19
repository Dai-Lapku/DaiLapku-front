import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle the login logic here
    console.log(username, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo} 
          source={require('./assets/images/DaiLapkuLogo.png')}
          resizeMode="contain"
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#6e6658"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#6e6658"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
<View style={styles.buttonContainer}>
        <Button
          color="#FFFFFF" // Your button color
          title="LOGIN"
          onPress={() => navigation.navigate('Swipe')}
        />
      </View>
      <View style={styles.buttonContainer2}>
        <Button
          color="#f2a65a"
          title="Create Account"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDE7E2', // Updated color
    paddingHorizontal: 20
  },
  logoContainer: {
    marginBottom: 30,
  },
  logo: {
    width: 50,
    height: 50
  },
  input: {
    height: 50,
    marginBottom: 15,
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
  },
  buttonContainer: {
    backgroundColor: "#F9BE84",
    borderRadius: 50, // Border radius for rounded corners
    overflow: 'hidden', // Ensures the border wraps the button properly
    marginBottom: 10, // Margin bottom for spacing between buttons
    width: '50%', // Width of the button container
  },
  buttonContainer2: {
    backgroundColor: "#FDE7E2",
    borderRadius: 50, // Border radius for rounded corners
    overflow: 'hidden', // Ensures the border wraps the button properly
    marginBottom: 10, // Margin bottom for spacing between buttons
    width: '50%', // Width of the button container
  },
});

export default LoginScreen;
