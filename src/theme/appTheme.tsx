import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#5856d6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  buttonTO: {
    width: 100,
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    margin: 10,
  },
  textTO: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  menuContainer: {
    margin: 30,
  },
  menuButton: {
    marginVertical: 10,
  },
  menuText: {
    fontSize: 20,
  },
});
