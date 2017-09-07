import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Modal,
  TouchableHighlight,
  Image,
  Dimensions,
  Button,
  CameraRoll,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class GeneratedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {source: {uri: this.props.navigation.state.params.url}, modalVisible: false};
  }

  componentWillMount() {
    const windowWidth = Dimensions.get('window').width;
    Image.getSize(this.props.navigation.state.params.url, (width, height) => {
      if (this.props.width && !this.props.height) {
        this.setState({width: this.props.width, height: height * (this.props.width / width)});
      } else if (!this.props.width && this.props.height) {
        this.setState({width: width * (this.props.height / height), height: this.props.height});
      } else {
        this.setState({width: windowWidth, height: height * windowWidth / width});
      }
    });
  }

  download() {
    CameraRoll.saveToCameraRoll(this.props.navigation.state.params.url).then(() => alert('Saved to camera roll.'));
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.headerIcon}>
            <Icon name="arrow-left" size={20} color="#fff"/>
          </TouchableHighlight>
          <Text style={styles.headerTitle}>Generated image</Text>
        </View>
        <Image source={this.state.source} style={{height: this.state.height, width: this.state.width}}/>
        <Button onPress={() => this.download()} title="Download" />
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    templates: state.memeTemplates,
  };
}

export default connect(mapStateToProps)(GeneratedContainer);
