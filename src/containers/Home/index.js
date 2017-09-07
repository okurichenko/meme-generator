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
import * as HomeActions from './actions';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchMemes();
  }

  getFilteredTemplates() {
    const { filterLine, templates } = this.props;
    return templates.filter(t => t.name.indexOf(filterLine) + 1);
  }

  memeTemplates() {
    return Object.keys(this.props.templates).map(key => this.props.templates[key]);
  }

  updateFilterLine(filterLine) {
    this.props.setFilterLine(filterLine);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.searchBar}>
            <TextInput style={styles.searchBarTextInput}
                       placeholder={'Search'}
                       placeholderTextColor="#888"
                       value={this.props.filterLine}
                       onChangeText={(text) => this.updateFilterLine(text)} />
            <TouchableHighlight onPress={() => this.updateFilterLine('')} style={styles.searchBarIcon}>
              <Icon name={this.props.filterLine ? 'close' : 'magnifier'} size={18} color="#fff" />
            </TouchableHighlight>
          </View>
          <View style={styles.scrollView}>
            <View style={styles.memeList}>
              {this.getFilteredTemplates().filter((m, i) => i % 2 !== 0 ).map((meme) => {
                return (
                  <TouchableHighlight key={meme.id} onPress={() => this.props.navigation.navigate('MemeScreen', {id: meme.id})}>
                    <View style={styles.memePlate}>
                      <Image source={{ url: meme.url }} style={{width: width / 2 - 18, height: (width/2 * meme.height / meme.width) - 18}} />
                    </View>
                  </TouchableHighlight>
                );
              })}
            </View>
            <View style={styles.memeList}>
              {this.getFilteredTemplates().filter((m, i) => i % 2 === 0 ).map((meme) => {
                return (
                  <TouchableHighlight key={meme.id} onPress={() => this.props.navigation.navigate('MemeScreen', {id: meme.id})}>
                    <View style={styles.memePlate}>
                      <Image source={{ url: meme.url }} style={{width: width / 2 - 18, height: (width/2 * meme.height / meme.width) - 18}} />
                    </View>
                  </TouchableHighlight>
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
    templates: state.memes.templates,
    filterLine: state.memes.filterLine,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...HomeActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
