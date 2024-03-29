import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';

import {
  box
} from '../../../../assets/styles';

import {
  FormUser
} from '../';

import {
  UserService
} from '../../../../api';

class UserAddScreen extends Component {
  static navigationOptions = {
    title: 'Agregar Usuarios',
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      git: '',
      email: '',
      avatar: ''
    }

    this.userService = new UserService();
  }

  handleInputChange(stateName, value) {
    this.setState({
      [stateName]: value
    })
  }

  handleSubmit() {
    console.log('handle!!!!')
    this.userService.createUser(this.state)
  }

  render() {
    return (
      <ScrollView>
        <View style={Object.assign({}, box.padding, { flex: 1, paddingTop: 20 })}>
          <FormUser
            onChange={this.handleInputChange.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
            {...this.state}
          />
        </View>
      </ScrollView>
    );
  }
}

export {
  UserAddScreen
}
