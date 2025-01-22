import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  profileButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
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
    backgroundColor: '#ffe4b5',
    borderRadius: 10,
    marginBottom: 10,
  },
  dDayButton: {
    padding: 15,
    backgroundColor: '#b0e0e6',
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
    backgroundColor: '#87cefa',
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