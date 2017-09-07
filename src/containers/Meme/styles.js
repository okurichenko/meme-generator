import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 20,
  },
  form: {
    flexDirection: 'column'
  },
  formRow: {
    flexDirection: 'row',
    borderColor: '#000000',
    borderWidth: 1,
  },
  formRowInput: {
    flex: 1,
    borderLeftWidth: 1,
    color: '#FFFFFF',
    marginVertical: 10,
    marginHorizontal: 5,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 15,
    paddingVertical: 8,
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
  }
});
