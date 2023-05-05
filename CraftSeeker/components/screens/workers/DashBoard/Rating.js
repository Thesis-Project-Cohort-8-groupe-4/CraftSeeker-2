import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AirbnbRating } from '@rneui/themed';


const Rating = () => {
    return (
        <View>
            <Text>Ratings:</Text>
            <AirbnbRating
                count={5}
                reviews={[
                    'Terrible',
                    'Bad',
                    'Meh',
                    'Good',
                    'Amazing',
                ]}
                defaultRating={5}
                size={20}
            />

        </View>
    )
}

export default Rating

const styles = StyleSheet.create({})