import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#Ffffff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    borderColor : '#000000',
    borderWidth: 1,
  },
  menuButton: {
    padding: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  profileButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  noticeContainer: {
    marginBottom: 20,
    
  },
  noticeButton: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
    
  },
  dDayButton: {
    padding: 15,
    backgroundColor: '#F2F0E7',
    borderRadius: 10,
  },
  calendarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  footerButton: {
    width: '45%',
    padding: 15,
    backgroundColor: '#F2F0E7',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});