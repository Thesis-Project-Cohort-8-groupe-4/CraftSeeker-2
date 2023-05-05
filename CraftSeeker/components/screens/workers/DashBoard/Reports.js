import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import HorizontalRule from '../../shared/HorizontalRule';
import { Button } from '@rneui/themed';
const ClientReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.100.17:4000/api/reportsofclients/getAll')
      .then(response => {
        const lastThreeReports = response.data.slice(-10); // Get the last three reports
        setReports(lastThreeReports);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <ScrollView>
        <View>
          {reports.map(report => {
            return (
              <View key={report.clientReportId}>
                <Text>{report.clientReportingWorkerTitle}</Text>
                <HorizontalRule />
              </View>
            )
          })}
        </View>
      </ScrollView>
      <Button
              title="Show More ..."
              buttonStyle={{
                backgroundColor: '#a14141',
                borderRadius: 8,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 12 }}
              containerStyle={{
                alignSelf:"center",
                width:"90%",
                height: 35,
                marginBottom:5,
              }}
              onPress={() => console.log('aye')}
            />
    </>


  );
};

export default ClientReports;
