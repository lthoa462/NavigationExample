import react from 'react';
import { StyleSheet, Text, View, Platform , StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import StackNavigate from './screen/StackNavigate';
import SettingScreen from './screen/SettingScreen';
import GalleryScreen from './screen/GalleryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Main" options={{headerShown:false, tabBarIcon: ({ color, size }) => (<Icon name="home-outline" color={color} size={size} />), tabBarLabel:'Home'}}  component={StackNavigate} />
          <Tab.Screen name="Gallery" options={{headerShown:true,headerTitleAlign: 'center', tabBarIcon: ({ color, size }) => (<Icon name="images-outline" color={color} size={size} />)}} component={GalleryScreen} />
          <Tab.Screen name="Settings" options={{headerShown:true,headerTitleAlign: 'center', tabBarIcon: ({ color, size }) => (<Icon name="settings-outline" color={color} size={size} />)}} component={SettingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight:0
  },
});
