import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import { Container, Form, Input, SubmitButton } from './styles';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
  };

  handleAddUser = () => {
    console.tron.log(this.state.newUser);
  };

  render() {
    const { newUser, users } = this.state;

    return (
      <>
        <Header title="Teste" />
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
                value={newUser}
                onChangeText={text => this.setState({ newUser: text })}
                returnKeyType="send"
                onSubmitEditing={this.handleAddUser}
              />
              <SubmitButton onPress={this.handleAddUser}>
                <Icon name="add" size={20} color="#f15b84" />
              </SubmitButton>
            </Form>
          </Container>
        </LinearGradient>
      </>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuários',
};
