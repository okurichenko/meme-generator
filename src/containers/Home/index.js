import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';
import styles from './styles';
import baseStyles from '../../styles/base';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import * as HomeActions from './actions';
import * as MemeActions from '../Meme/actions';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { connect } from 'react-redux';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchMemes();
  }

  getFilteredTemplates() {
    const { filterLine, templates } = this.props;
    return templates.filter(t => t.name.indexOf(filterLine) + 1);
  }

  visitTemplatePage(templateId) {
    this.props.setSelectedTemplate(this.props.templates.find(t => t.id === templateId));
    this.props.navigation.navigate('MemeScreen');
  }

  render() {
    return (
      <View style={baseStyles.container}>
        <ScrollView>
          <View style={styles.searchBar}>
            <TextInput style={baseStyles.inputField}
                       placeholder={'Search'}
                       placeholderTextColor="#888"
                       value={this.props.filterLine}
                       onChangeText={(text) => this.props.setFilterLine(text)} />
            <TouchableHighlight onPress={() => this.props.setFilterLine('')} style={styles.searchBarIcon}>
              <Icon name={this.props.filterLine ? 'close' : 'magnifier'} size={18} color="#fff" />
            </TouchableHighlight>
          </View>

          <View style={styles.scrollView}>
            <View style={styles.memeList}>
              {this.getFilteredTemplates().filter((m, i) => i % 2 !== 0 ).map((meme) => {
                return (
                  <TouchableHighlight key={meme.id} onPress={() => this.visitTemplatePage(meme.id)}>
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
                  <TouchableHighlight key={meme.id} onPress={() => this.visitTemplatePage(meme.id)}>
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
  return bindActionCreators({
    ...HomeActions,
    setSelectedTemplate: MemeActions.setSelectedTemplate
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
