import React, {Component} from 'react';
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../../navigation/ReduxNavigation';

class AppContainer extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
    );
  }
}

export default AppContainer;
