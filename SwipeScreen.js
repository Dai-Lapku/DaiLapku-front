import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const SwipeScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [profiles, setProfiles] = useState([
   // Add your profiles here
    { id: '1', image: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg', name: 'Bunny', age: "3,5", description: "Duis tincidunt tempus malesuada. Pellentesque sodales neque non semper mollis. Duis accumsan lacus fermentum odio mattis sagittis. Nulla commodo, mi vitae tristique ornare, nisi nisl rutrum quam, non dictum odio justo eu dolor. Morbi dignissim, erat non egestas convallis, ipsum quam consequat libero, at accumsan est nunc vitae nisi." },
    { id: '2', image: 'https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg', name: 'Rex', age: "6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis augue ac ipsum condimentum semper. Duis metus purus, facilisis vel elementum id, sagittis sit amet nunc. Nulla vehicula eros orci, nec porta sem maximus ac. Nullam sed venenatis sapien. Cras placerat sit amet enim sit amet vestibulum." },
  ]);

  const handleLike = () => {
    navigation.navigate('Chat');
  };

  const handleDislike = () => {
    // Update currentIndex to show next profile
    setCurrentIndex(currentIndex + 1);
  };

  // Load profiles from a server or local storage
  useEffect(() => {
    // Fetch or generate profiles
  }, []);

  if (currentIndex >= profiles.length) {
    // No more profiles to show
    return (
      <View style={styles.container}>
        <Text>No more profiles</Text>
        {/* Optionally navigate back or to another screen */}
      </View>
    );
  }

  const currentProfile = profiles[currentIndex];

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={{ uri: currentProfile.image }} style={styles.image} />
        <Text style={styles.description}>Name: {currentProfile.name}</Text>
        <Text style={styles.description}>Age: {currentProfile.age}</Text>
        <Text style={styles.description}>Description: {currentProfile.description}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.dislikeButton} onPress={handleDislike}>
            <Image source={require('./pics/dislike.png')} style={styles.likeIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.likeButton} onPress={handleLike}>
            <Image source={require('./pics/heart.png')} style={styles.likeIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FDE7E2', // Consistent background color
    },
    image: {
      width: 300,
      height: 300,
      resizeMode: 'cover',
      marginBottom: 15,
      marginTop: 50, 
      borderRadius: 50
    },
    description: {
      fontSize: 16,
      color: 'black',
      marginBottom: 15,
      width: "80%"
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    },
    likeButton: {
      width: 100,
      height: 100,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    dislikeButton: {
      width: 100,
      height: 100,
      borderRadius: 30,
      backgroundColor: '#FDE7E2',
      justifyContent: 'center',
      alignItems: 'center',
    },
    likeIcon: {
      width: 60,
      height: 60,
    },
  });

export default SwipeScreen;
