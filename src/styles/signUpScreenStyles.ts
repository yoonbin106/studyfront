import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#Ffffff',
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  input: {
    height: 50,
    borderColor: '#B7E5B7',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#F2F0E7',
  },
  passwordContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    width: '100%',
    borderWidth: 1,
    borderColor: '#B7E5B7',
    borderRadius: 8,
    backgroundColor: '#F2F0E7',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    paddingHorizontal: 10,
    backgroundColor: '#F2F0E7',
  },
  toggleText: {
    padding: 10,
    fontSize: 16,
    color: '#888',
    marginRight: 5,
  },
  button: {
    padding: 15,
    margin: 3,
    borderColor: '#228B22', 
    borderWidth: 2,
    backgroundColor: '#228B22',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  }
});
