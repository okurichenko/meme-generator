import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
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
    padding: 3,
    width: width / 2 - 10,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    marginVertical: 7,
  },
  searchBar: {
    position: 'relative',
  },
  searchBarIcon: {
    position: 'absolute',
    right: 18,
    top: 20,
  },
  searchBarTextInput: {
    color: '#FFFFFF',
    marginVertical: 10,
    marginHorizontal: 5,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  scrollView: {
    flex: 1,
    flexDirection: 'row',
    width: width,
    paddingHorizontal: 5,
  },
  memeList: {
    flexDirection: 'column',
    width: width / 2,
  }
});
