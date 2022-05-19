
import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/DetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
export default function StackNavigate(params) {
    return(
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerTitleAlign: 'center'}}/>
                <Stack.Screen name="Detail" component={DetailScreen} options={{headerBackButtonMenuEnabled:'true'}}/>
            </Stack.Navigator>
    )
};




