import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#000000',
  },
  header: {
    position: 'relative',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  headerIcon: {
    position: 'absolute',
    left: 0,
    paddingHorizontal: 10,
    top: 10,
  },
  inputField: {
    flex: 1,
    color: '#FFFFFF',
    marginVertical: 10,
    marginHorizontal: 5,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
});
