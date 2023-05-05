import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar, ScrollView, Image, Alert, TouchableHighlight } from 'react-native';
// import calendarImage from 'C:/Users/akram/Desktop/forkedcraft/CraftSeeker/CraftSeeker/assets/calender.png';
import DateTimePicker from '@react-native-community/datetimepicker';
import Title from '../shared/Title';
import { Button } from '@rneui/themed/dist';
import axios, { Axios } from 'axios';
import { Picker } from '@react-native-picker/picker';
const SignUpWorker = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    job: '',
    address: '',
    dateOfBirth: '456123',
    category: ''
  });
  useEffect(() => {
    const { firstName, lastName, email, password, phoneNumber, job, address, dateOfBirth, category } = userInfo
    console.log(  {
        clientFirstName: firstName,
        clientLastName: lastName,
        clientAdress: address,
        clientEmail: email,
        clientDateOfBirth: dateOfBirth,
        clientPhone: phoneNumber,
        clientPassword: password
      })
  }, [userInfo]);


  const handleSignup = () => {
    const { firstName, lastName, email, password, phoneNumber, address, dateOfBirth } = userInfo
    if (userInfo.confirmPassword !== userInfo.password) {
      Alert.alert("Passwords Dont Match!")
    } else {
      axios.post("http://192.168.104.19:4000/api/clients/addclient", {
        clientFirstName: firstName,
        clientLastName: lastName,
        clientAdress: address,
        clientEmail: email,
        clientDateOfBirth: dateOfBirth,
        clientPhone: phoneNumber,
        clientPassword: password
      }).then((result) => console.log(result))
        .catch(err => console.log(err))
    }
  }
  const handleInputChange = (name, value) => {
    setUserInfo({ ...userInfo, [name]: value });
  };

  const showDatepicker = () => {
    setOpen(true);
  }

  const onDateChange = (event, selectedDate) => {
    setDate(selectedDate);
    setOpen(false);
    const isoString = selectedDate.toISOString();
    const year = isoString.substring(0, 4);
    const month = isoString.substring(5, 7);
    const day = isoString.substring(8, 10);
    const formattedDate = `${year}-${month}-${day}`;
    setUserInfo({ ...userInfo, dateOfBirth: formattedDate });
  };

  return (
    <View>
      <StatusBar backgroundColor="#4a90e2" barStyle="light-content" />
      <Title>Sign Up as a Client</Title>
      <ScrollView style={styles.scrollView}>
        <TextInput style={styles.input} placeholder="First Name" onChangeText={text => handleInputChange('firstName', text)} />
        <TextInput style={styles.input} placeholder="Last Name" onChangeText={text => handleInputChange('lastName', text)} />
        <TextInput style={styles.input} placeholder="Email Adress" keyboardType="email-address" onChangeText={text => handleInputChange('email', text)} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={text => handleInputChange('password', text)} />
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} onChangeText={text => handleInputChange('confirmPassword', text)} />
        <TextInput style={styles.input} placeholder="Phone Number" keyboardType="numeric" onChangeText={text => handleInputChange('phoneNumber', text)} />
        <TextInput style={[styles.input, { marginBottom: 5 }]} placeholder="Address" onChangeText={text => handleInputChange('address', text)} />
        {/* DATE */}
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>Select Date Of Birth</Text>
          <TouchableOpacity style={styles.button} onPress={showDatepicker}>
            <Image source={calendarImage} style={styles.calendarIcon} />
          </TouchableOpacity>
          {open && (
            <DateTimePicker
              display="calendar"
              mode="date"
              value={date}
              onChange={onDateChange}
            />
          )}
        </View>

        <TouchableHighlight
          style={{ flex: 1, alignSelf: "center", backgroundColor: '#83b5ed', width: "40%", borderRadius: 10, height: 30, justifyContent: "center" }}
          activeOpacity={0.6}
          underlayColor="#24b9e6"
          onPress={handleSignup}>
          <Text style={{ textAlign: "center" }}>Submit</Text>

        </TouchableHighlight>

      </ScrollView>



    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  scrollView: {
    marginVertical: 15,
  },
  title: {
    color: '#0386D0',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: '15%',
    marginRight: '15%',
    textAlign: 'center',
  },
  input: {
    marginVertical: 7,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    height: 40,
    borderColor: '#dedede',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  calendarIcon: {
    width: 24,
    height: 24,
  },
  datePickerContainer: {
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  picker: {
    width: '30%',
  },
  CategoryContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default SignUpWorker;







// const onDayChange = (value) => {
//   setDay(value);
// }

// const onMonthChange = (value) => {
//   setMonth(value);
// }

// const onYearChange = (value) => {
//   setYear(value);
// }
{/*<View style={styles.dateContainer}>
            <View style={styles.pickerContainer}>
               <Picker
                selectedValue={day}
                onValueChange={onDayChange}
                style={styles.picker}>
                <Picker.Item label="Day" value="" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="31" value="31" />
              </Picker>
              <Picker
                selectedValue={month}
                onValueChange={onMonthChange}
                style={styles.picker}>
                <Picker.Item label="Month" value="" />
                <Picker.Item label="January" value="1" />
                <Picker.Item label="February" value="2" />
                <Picker.Item label="December" value="12" />
              </Picker>
              <Picker
                selectedValue={year}
                onValueChange={onYearChange}
                style={styles.picker}>
                <Picker.Item label="Year" value="" />
                <Picker.Item label="2023" value="2023" />
                <Picker.Item label="2022" value="2022" />
                <Picker.Item label="1900" value="1900" />
              </Picker>
            </View>

          </View>*/}