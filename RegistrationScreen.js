import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const RegistrationScreen = () => {
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
      <Image 
        style={styles.logo} 
        source={require('./assets/images/DaiLapkuLogo.png')}
        resizeMode="contain"
      />
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
     <View style={{ marginBottom: 10 }}>
        <Text>Select Sex</Text>
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
      <Button title="Create an Account" onPress={handleRegistration} />
      <Button title="Already have an account?" onPress={() => {/* Navigate to Login Screen or Handle logic */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  logo: {
    position: 'absolute',
    top: 30,
    left: 10,
    width: 40,
    height: 40
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
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
    backgroundColor: 'gray'
  },
  radioButtonLabel: {
    fontSize: 16
  }  
});

export default RegistrationScreen;