import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const RegistrationScreen  = ({ navigation }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = () => {
    // Handle the registration logic here
    console.log(name, surname, email, sex, age, description, password);
  };


const RadioButton = ({ label, value, selectedValue, onValueChange }) => {
    return (
      <TouchableOpacity style={styles.radioButton} onPress={() => onValueChange(value)}>
        <View style={[styles.radioButtonDot, selectedValue === value ? styles.radioButtonDotActive : {}]} />
        <Text style={styles.radioButtonLabel}>{label}</Text>
      </TouchableOpacity>
    );
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
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Surname"
        value={surname}
        onChangeText={setSurname}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
     <View style={styles.radioGroup}>
        <RadioButton label="Male" value="male" selectedValue={sex} onValueChange={setSex} />
        <RadioButton label="Female" value="female" selectedValue={sex} onValueChange={setSex} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        keyboardType="number-pad"
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Description (You may add this later)"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        secureTextEntry
        onChangeText={setConfirmPassword}
      />
      <View style={styles.buttonContainer}>
        <Button
          color="#FFFFFF" // Button text color
          title="Create an Account"
          onPress={handleRegistration}
        />
      </View>
      <View style={styles.buttonContainer2}>
        <Button
          color="#F9BE84" // Button text color
          title="Already have an account?"
          onPress={() => navigation.navigate('Login')}
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
    backgroundColor: '#FDE7E2', // Consistent background color
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
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
    width: '50%',
  },
  buttonContainer2: {
    backgroundColor: "#FDE7E2",
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
    width: '50%',
  },
  radioButton: {
    flexDirection: 'row',
      alignItems: 'left',
    marginBottom: 10
  },
  radioButtonDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioButtonDotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray'
  },
  radioButtonLabel: {
    fontSize: 16
  }  
});


export default RegistrationScreen;