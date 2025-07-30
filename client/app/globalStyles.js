// styles/globalStyles.js
import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#6200EE',
  background: '#F2F2F2',
  text: '#333333',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
});
