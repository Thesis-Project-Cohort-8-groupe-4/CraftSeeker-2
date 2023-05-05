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
    workerFirstName: '',
    workerLastName: '',
    workerEmail: '',
    workerPassword: '',
    confirmPassword: '',
    workerPhoneNumber: '',
    workerJob: '',
    workerAdress: '',
    workerDateOfBirth: '456123',
    workerCategory: ''
  });
 
  useEffect(() => {
    console.log(userInfo,"the object");
  }, [userInfo]);


  const handleSignup = () => {
    if (userInfo.confirmPassword !== userInfo.workerPassword) {
      Alert.alert("Passwords Dont Match!")
    } else {
      userInfo && axios.post("http://192.168.104.10:4000/api/workers/addworker", userInfo
        // workerFirstName: firstName,
        // workerLastName: lastName,
        // workerAdress: address,
        // workerEmail: email,
        // workerCategory: category,
        // workerDateOfBirth: dateOfBirth,
        // workerPhoneNumber: phoneNumber,
        // workerJob: job,
        // workerPassword: password
      ).then((result) => console.log(result))
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
      <Title>Sign Up as a Worker</Title>
      <ScrollView style={styles.scrollView}>
        <TextInput style={styles.input} placeholder="First Name" onChangeText={text => handleInputChange('workerFirstName', text)} />
        <TextInput style={styles.input} placeholder="Last Name" onChangeText={text => handleInputChange('workerLastName', text)} />
        <TextInput style={styles.input} placeholder="Email Adress" keyboardType="email-address" onChangeText={text => handleInputChange('workerEmail', text)} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={false} onChangeText={text => handleInputChange('workerPassword', text)} />
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={false} onChangeText={text => handleInputChange('confirmPassword', text)} />
        <TextInput style={styles.input} placeholder="Phone Number" keyboardType="numeric" onChangeText={text => handleInputChange('workerPhoneNumber', text)} />
        <TextInput style={styles.input} placeholder="Job" onChangeText={text => handleInputChange('workerJob', text)} />
        <TextInput style={[styles.input, { marginBottom: 5 }]} placeholder="Address" onChangeText={text => handleInputChange('workerAdress', text)} />
        {/* DATE */}
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>Select Date Of Birth</Text>
          <TouchableOpacity style={styles.button} onPress={showDatepicker}>
            {/* <Image source={calendarImage} style={styles.calendarIcon} /> */}
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

        {/* <View style={styles.CategoryContainer}>
          <Text>Select Job Category</Text>
          <Picker
            selectedValue={userInfo.category}
            onValueChange={value => handleInputChange('category', value)}
            style={[styles.picker, { width: 150 }]}>
            <Picker.Item label="Category" />
            <Picker.Item label="Cleaning" value="Cleaning" />
            <Picker.Item label="Lawn & Garden" value="Lawn & Garden" />
            <Picker.Item label="Handyman" value="Handyman" />
            <Picker.Item label="Home Automation" value="Home Automation" />
            <Picker.Item label="Organization" value="Organization" />
            <Picker.Item label="Moving & Storage" value="Moving & Storage" />
            <Picker.Item label="Renovation" value="Renovation" />
            <Picker.Item label="Pest Control" value="Pest Control" />
            <Picker.Item label="Other" value="Other" />

          </Picker>

        </View> */}
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
    marginVertical: 5,
  },
  title: {
    color: '#0386D0',
    fontSize: 3,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: '5%',
    marginRight: '5%',
    // textAlign: 'center',
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