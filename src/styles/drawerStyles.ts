import { StyleSheet } from 'react-native';

export const drawerStyles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#ffffff', // Drawer 전체 배경색
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  drawerItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff', // 기본 배경색
  },
  drawerItemActive: {
    backgroundColor: '#F2F0E7', // 활성 상태 배경색
    color: '#00796b', // 활성 상태 텍스트 색상
  },
  drawerItemInactive: {
    color: '#333', // 비활성 상태 텍스트 색상
  },
  drawerLabel: {
    fontSize: 20,
    fontWeight: '500',
  },
});
