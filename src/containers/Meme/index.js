import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Image,
  Dimensions,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MemeActions from './actions';
import styles from './styles';
import baseStyles from '../../styles/base';

class MemeContainer extends Component {
  handleSubmit() {
    this.props.generateMeme().then(() => {
      this.props.navigation.navigate('GeneratedScreen');
    });
  }

  render() {
    const { template } = this.props;
    const { width } = Dimensions.get('window');
    return (
      <KeyboardAvoidingView behavior="padding" style={ baseStyles.container }>
        <ScrollView>
          <Header title={template.name} backArrowAction={ () => this.props.navigation.goBack() } />
          <Image source={{url: template.url}} style={{width, height: template.height * width / template.width}}/>
          <View style={styles.form}>
            <View style={styles.formRow}>
              <TextInput style={baseStyles.inputField}
                         value={this.props.text0}
                         placeholder='Text top'
                         placeholderTextColor='#888'
                         onChangeText={(text) => this.props.setText0(text)}/>
            </View>
            <View style={styles.formRow}>
              <TextInput style={baseStyles.inputField}
                         placeholder='Text bottom'
                         placeholderTextColor='#888'
                         value={this.props.text1}
                         onChangeText={(text) => this.props.setText1(text)}/>
            </View>
            <Button onPress={() => this.handleSubmit()} title="Submit"/>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.generator
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...MemeActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MemeContainer);
