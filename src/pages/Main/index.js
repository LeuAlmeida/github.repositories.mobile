import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

export default function Main() {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={['#f15b84', '#ee5676', '#e54649']}
      style={styles.linearGradient}
    >
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
          />
          <SubmitButton>
            <Icon name="add" size={20} color="#f15b84" />
          </SubmitButton>
        </Form>
      </Container>
    </LinearGradient>
  );
}

Main.navigationOptions = {
  title: 'Usuários',
};
