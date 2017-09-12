import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import baseStyles from '../../styles/base';

class Header extends Component {
  render() {
    return (
      <View style={baseStyles.header}>
        <TouchableHighlight onPress={() => this.props.backArrowAction()} style={baseStyles.headerIcon}>
          <Icon name="arrow-left" size={20} color="#fff"/>
        </TouchableHighlight>
        <Text style={baseStyles.headerTitle}>{this.props.title}</Text>
      </View>
    );
  }
}

export default Header;
