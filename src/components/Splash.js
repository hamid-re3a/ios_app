import React from 'react';
import { StatusBar } from 'react-native';
import { Container , Spinner, Text } from 'native-base';
export default class Splash extends React.Component {
    render() {
        return (
            <Container style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center' , backgroundColor : '#34495e'}}>
                <StatusBar backgroundColor="#2c3e50" barStyle="light-content"/>
                <Text style={{ color : 'white'}}>مجله آموزشی راکت</Text>
                <Spinner />
            </Container>
        )
    }
}