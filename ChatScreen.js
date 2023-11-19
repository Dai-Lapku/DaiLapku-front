import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim().length > 0) {
      setMessages([...messages, { id: Date.now().toString(), text: message }]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text style={styles.message}>{item.text}</Text>}
        keyExtractor={item => item.id}
        style={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message..."
          placeholderTextColor="#6e6658"
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FDE7E2', // Background color similar to other screens
    },
    messageList: {
      flex: 1,
      padding: 10,
    },
    inputContainer: {
      flexDirection: 'row',
      padding: 10,
      backgroundColor: 'white', // For clear distinction of input area
    },
    input: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      borderColor: '#F9BE84', // Border color from the palette
      borderWidth: 1,
      marginRight: 10,
      borderRadius: 30,
      paddingHorizontal: 10,
      color: 'black', // Text color
    },
    sendButton: {
      backgroundColor: '#F9BE84', // Button color from the palette
      borderRadius: 30,
      justifyContent: 'center',
      padding: 10,
    },
    buttonText: {
      color: 'white', // Text color on the button
    },
    message: {
      backgroundColor: 'white', 
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'lightgray',
      borderRadius: 50,
      marginVertical: 5,
    },
  });

export default ChatScreen;
