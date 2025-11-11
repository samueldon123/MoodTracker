import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditMoodScreen from './src/screens/EditMoodScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Mood Tracker'}} />
        <Stack.Screen name="History" component={HistoryScreen} options={{ title: 'Histórico'}} />
        <Stack.Screen name="EditMoodScreen" component={EditMoodScreen} options={{ title: 'Editar Humor'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}