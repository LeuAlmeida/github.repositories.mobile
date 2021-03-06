import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  // eslint-disable-next-line react/state-in-constructor
  state = {
    stars: [],
    loading: false,
    page: 1,
    refreshing: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data, loading: false });
  }

  loader = async (page = 1) => {
    const { stars } = this.state;
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`, {
      params: { page },
    });

    this.setState({
      stars: page >= 2 ? [...stars, ...response.data] : response.data,
      page,
      loading: false,
      refreshing: false,
    });
  };

  loadMore = () => {
    const { page } = this.state;

    this.loader(page + 1);
  };

  refreshList = () => {
    this.setState(
      {
        refreshing: true,
        stars: [],
      },
      this.loader
    );
  };

  handleNavigate = repository => {
    const { navigation } = this.props;

    navigation.navigate('Repository', { repository });
  };

  render() {
    const { navigation } = this.props;
    const { stars, loading, refreshing } = this.state;
    const user = navigation.getParam('user');

    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['#f15b84', '#ee5676', '#e54649']}
        style={styles.linearGradient}
      >
        <Container>
          <Header loading={loading}>
            <Avatar source={{ uri: user.avatar }} />
            <Name>{user.name}</Name>
            <Bio>{user.bio}</Bio>
          </Header>

          {loading ? (
            <ActivityIndicator color="#fff" style={{ flex: 1 }} size={28} />
          ) : (
            <Stars
              data={stars}
              onRefresh={this.refreshList}
              refreshing={refreshing}
              onEndReachedThreshold={0.5}
              onEndReached={this.loadMore}
              keyExtractor={star => String(star.id)}
              renderItem={({ item }) => (
                <Starred onPress={() => this.handleNavigate(item)}>
                  <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                  <Info>
                    <Title>{item.name}</Title>
                    <Author>{item.owner.login}</Author>
                  </Info>
                </Starred>
              )}
            />
          )}
        </Container>
      </LinearGradient>
    );
  }
}
