import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import EmployeeListScreen from './screens/EmployeeListScreen';
import EmployeeDetailsScreen from './screens/EmployeeDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#ddd',
          headerTitleStyle: { fontWeight: 'normal' },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: '#121212' },
        }}
      >
        <Stack.Screen
          name="EmployeeList"
          component={EmployeeListScreen}
          options={{ title: 'EmployeeDummy' }}
        />
        <Stack.Screen
          name="EmployeeDetails"
          component={EmployeeDetailsScreen}
          options={{ title: 'Employee Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
