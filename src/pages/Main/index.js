import React, { Component } from 'react';
import { StyleSheet, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import Header from '../../components/Header';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

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

  handleAddUser = async () => {
    const { users, newUser } = this.state;

    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    this.setState({
      users: [...users, data],
      newUser: '',
    });

    Keyboard.dismiss();
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

            <List
              data={users}
              keyExtractor={user => user.login}
              renderItem={({ item }) => (
                <User>
                  <Avatar source={{ uri: item.avatar }} />
                  <Name>{item.name}</Name>
                  <Bio>{item.bio}</Bio>

                  <ProfileButton onPress={() => {}}>
                    <ProfileButtonText>Ver Perfil</ProfileButtonText>
                  </ProfileButton>
                </User>
              )}
            />
          </Container>
        </LinearGradient>
      </>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuários',
};
