import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Interface } from './styles';

export default class Repository extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
  });

  // eslint-disable-next-line react/state-in-constructor
  state = {
    thisRepo: '',
  };

  componentDidMount() {
    const { navigation } = this.props;

    const repository = navigation.getParam('repository');

    this.setState({ thisRepo: repository });
  }

  render() {
    const { thisRepo } = this.state;

    return <Interface source={{ uri: thisRepo.html_url }} />;
  }
}

Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

Repository.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repository').name,
});
