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
import {connect} from 'react-redux';
import styles from './styles';
import Api from '../../lib/api';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class MemeContainer extends Component {
  constructor(props) {
    super(props);
    const templateId = props.navigation.state.params.id;
    const template = props.templates.find(t => t.id === templateId);
    this.state = {
      template,
      text0: '',
      text1: '',
    }
  }

  handleSubmit() {
    const {template: {id}, text0, text1} = this.state;

    return Api.post('/caption_image', {
      template_id: id,
      text0: text0.toUpperCase(),
      text1: text1.toUpperCase(),
      username: 'aleksei.kurichenko',
      password: 'uuOXJ11',
    }).then((response) => {
      return this.props.navigation.navigate('GeneratedScreen', {url: response.data.url});
    })
  }

  render() {
    const {template} = this.state;
    const {width} = Dimensions.get('window');
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.headerIcon}>
              <Icon name="arrow-left" size={20} color="#fff"/>
            </TouchableHighlight>
            <Text style={styles.headerTitle}>{this.state.template.name}</Text>
          </View>
          <Image source={{url: template.url}} style={{width, height: template.height * width / template.width}}/>
          <View style={styles.form}>
            <View style={styles.formRow}>
              <TextInput style={styles.formRowInput}
                         value={this.state.text0}
                         placeholder='Text top'
                         placeholderTextColor='#888'
                         onChangeText={(text0) => this.setState({...this.state, text0})}/>
            </View>
            <View style={styles.formRow}>
              <TextInput style={styles.formRowInput}
                         placeholder='Text bottom'
                         placeholderTextColor='#888'
                         value={this.state.text1}
                         onChangeText={(text1) => this.setState({...this.state, text1})}/>
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
    templates: state.memes.templates,
  };
}

export default connect(mapStateToProps)(MemeContainer);
