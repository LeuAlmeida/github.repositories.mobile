/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { HeaderTitle } from './styles';

const styles = StyleSheet.create({
  linearGradient: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
  },
});

function Header(props) {
  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['#f15b84', '#ee5676', '#e54649']}
        style={styles.linearGradient}
      >
        <HeaderTitle>{props.title}</HeaderTitle>
      </LinearGradient>
    </>
  );
}

export default Header;
