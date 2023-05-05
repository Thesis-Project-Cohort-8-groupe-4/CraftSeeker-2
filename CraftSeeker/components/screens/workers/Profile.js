import React from 'react';
import { StyleSheet, View, Image, Text  } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
// import Edit from './Edit.js'

const WorkerProfil = () => {
  const [available, setAvailable] = useState(true);
   const navigation = useNavigation();

  return (
    
    <View  style={styles.container}>
      <View style={styles.card}>
        <View style={styles.info}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>johndoe@example.com</Text>
          <Text style={styles.address}>123 Main Street, Anytown USA</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor velit eget metus fringilla, quis ultricies lectus hendrerit. Nulla eu dui a enim dictum vehicula.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.website}>Website: www.johndoe.com</Text>
        <Text style={styles.phone}>Phone: (555) 123-4567</Text>
      </View>

      <Card containerStyle={styles.card}>
        <Text style={styles.title}>Social Media</Text>
        <View style={styles.social}>
          <Icon name="instagram" type="font-awesome" />
          <Icon name="facebook" type="font-awesome" />
          <Icon name="linkedin" type="font-awesome" />
        </View>
      </Card>

          <Button 
  icon={<Icon name="edit" type="font-awesome" color="#ffffff" />}
  title="Edit"
  onPress={() => navigation.navigate('Edit')}
  buttonStyle={styles.editButton}
/>

      <View style={styles.availablContainer }>
        <Button
          icon={<Icon name="check-circle" />}
          title={available ? 'Available' : 'Not Available'}
          onPress={() => setAvailable(prev => !prev)}
          buttonStyle={styles.editButton}
        />
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#E6F0FA',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
      overflow: 'hidden',
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  info: {
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    marginTop: 5,
  },
  address: {
    fontSize: 16,
    marginTop: 5,
  },
  bio: {
    fontSize: 16,
  },
  website: {
    fontSize: 16,
    marginTop: 5,
  },
  phone: {
    fontSize: 16,
    marginTop: 5,
  },
  socialIcon: {
    fontSize: 5,
    color: '#333',
    flexDirection: 'row'
  },
  editContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  editButton: {
    backgroundColor: '#007aff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    
  },
  availablContainer: {
    position: 'absolute',
    bottom: 100,
    right: 10,
    marginVertical: 20,
  },
  availableButton: {
    backgroundColor: 'green',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  notAvailableButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default WorkerProfil;