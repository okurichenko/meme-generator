import React, { Component } from 'react';
import {
  ScrollView,
  Image,
  Dimensions,
  Button,
  CameraRoll,
} from 'react-native';
import Header from '../../components/Header';
import baseStyles from '../../styles/base';
import { connect } from 'react-redux';

class GeneratedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {source: {uri: this.props.generatedMemeUrl}};
  }

  componentWillMount() {
    const windowWidth = Dimensions.get('window').width;
    Image.getSize(this.props.generatedMemeUrl, (width, height) => {
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
    CameraRoll.saveToCameraRoll(this.props.generatedMemeUrl).then(() => alert('Saved to camera roll.'));
  }

  render() {
    return (
      <ScrollView style={baseStyles.container}>
        <Header title="Generated image" backArrowAction={ () => this.props.navigation.goBack() } />
        <Image source={this.state.source} style={{height: this.state.height, width: this.state.width}}/>
        <Button onPress={() => this.download()} title="Download" />
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    generatedMemeUrl: state.generator.generatedMemeUrl,
  };
}

export default connect(mapStateToProps)(GeneratedContainer);
