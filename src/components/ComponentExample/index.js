import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ComponentExample extends Component {
  render() {
    const greeting = 'Hello from ComponentExample!!!';
    return (
      <Text>
        {greeting}
      </Text>
    );
  }
}

export default ComponentExample;