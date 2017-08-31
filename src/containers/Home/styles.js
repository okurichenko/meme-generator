import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  memePlate: {
    padding: 5,
    width: width / 2,
  },
  scrollView: {
    flex: 1,
    flexDirection: 'row',
    width: width,
  },
  memeList: {
    flexDirection: 'column',
    width: width / 2,
  }
});
