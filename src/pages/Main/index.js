import React, { Component } from 'react';
import { StyleSheet, Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
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
  // eslint-disable-next-line react/state-in-constructor
  state = {
    newUser: '',
    users: [],
    loading: false,
  };

  async componentDidMount() {
    const users = await AsyncStorage.getItem('users');

    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { users } = this.state;

    if (prevState.users !== users) {
      AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

  handleAddUser = async () => {
    const { users, newUser } = this.state;

    this.setState({ loading: true });

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
      loading: false,
    });

    Keyboard.dismiss();
  };

  render() {
    const { newUser, users, loading } = this.state;

    return (
      <>
        <Header title="Usuários" />
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
              <SubmitButton loading={loading} onPress={this.handleAddUser}>
                {loading ? (
                  <ActivityIndicator color="#f15b84" />
                ) : (
                  <Icon name="add" size={20} color="#f15b84" />
                )}
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
