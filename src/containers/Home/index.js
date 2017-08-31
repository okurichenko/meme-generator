import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';
import ComponentExample from '../../components/ComponentExample';
import { connect } from 'react-redux';
import styles from './styles';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchMemes();
  }

  memeTemplates() {
    return Object.keys(this.props.templates).map(key => this.props.templates[key]);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.scrollView}>
            <View style={styles.memeList}>
              {this.memeTemplates().filter((m, i) => i % 2 !== 0 ).map((meme) => {
                return (
                  <View key={meme.id} style={styles.memePlate}>
                    <Image source={{ url: meme.url }} style={{width: width / 2 - 5, height: (width/2 * meme.height / meme.width) - 5}}></Image>
                    <Text>{meme.name}</Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.memeList}>
              {this.memeTemplates().filter((m, i) => i % 2 === 0 ).map((meme) => {
                return (
                  <View key={meme.id} style={styles.memePlate}>
                    <Image source={{ url: meme.url }} style={{width: width / 2 - 5, height: (width/2 * meme.height / meme.width) - 5}}></Image>
                    <Text>{meme.name}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    templates: state.memeTemplates,
  };
}

export default connect(mapStateToProps)(HomeContainer);
