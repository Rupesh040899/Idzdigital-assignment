import { View, Text, StyleSheet } from 'react-native';

export default function EmployeeDetailsScreen({ route }) {
  const { employee } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{employee.name}</Text>
      <Text style={styles.text}>Age: {employee.age}</Text>
      <Text style={styles.text}>Salary: {employee.salary}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
});
