import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
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
