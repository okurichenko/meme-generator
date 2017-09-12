import { StackNavigator } from 'react-navigation'
import HomeScreen from '../containers/Home'
import MemeScreen from '../containers/Meme'
import GeneratedScreen from '../containers/Generated'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  MemeScreen: { screen: MemeScreen },
  GeneratedScreen: { screen: GeneratedScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeScreen'
});

export default PrimaryNav
