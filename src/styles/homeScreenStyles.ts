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
    marginBottom: 10,
    backgroundColor: '#fff',
    elevation: 3,
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
    width: 30,
    height: 30,
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
    paddingVertical: 2, 
    paddingHorizontal: 5, 
    marginBottom: 8, 
  },
  noticeContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noticeIcon: {
    marginRight: 8,
  },
  noticeButton: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
    
  },
  noticeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
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
    borderColor : '#B7E5B7',
    borderWidth: 1,
    
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