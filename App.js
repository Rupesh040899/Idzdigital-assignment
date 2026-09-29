import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmployeeListScreen from './screens/EmployeeListScreen';
import EmployeeDetailsScreen from './screens/EmployeeDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="EmployeeList"
          component={EmployeeListScreen}
          options={{ title: 'Employees' }}
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
