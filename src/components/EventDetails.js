import React, { Component } from 'react';
import { ListView, TouchableOpacity, View, Text } from 'react-native';

class EventDetails extends Component {
    render() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
          <Text>Press me </Text>
          </TouchableOpacity>
          </View>
        );
      }
}

export default EventDetails;
