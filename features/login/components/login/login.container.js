import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native';

import { 
  form, 
  box, 
  color 
} from '../../../../assets/styles';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: ''
    }
  }

  handleInputChange(stateName, value) {
    this.setState({
      [stateName]: value
    })
  }

  handleSubmit() {
    AsyncStorage.setItem('userToken', '123');
    this.props.navigation.navigate('App')
  }

  render() {
    return (
      <View style={Object.assign({}, box.padding, box.alignCenter)}>
        <View>
          <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 20 }}>Login</Text>
        </View>
        <View style={form.row}>
          <Text style={form.label}>Usuario</Text>
          <TextInput
            style={form.control}
            onChangeText={this.handleInputChange.bind(this, 'user')}
            value={this.state.text}
          />
        </View>
        <View style={form.row}>
          <Text style={form.label}>Contraseña</Text>
          <TextInput
            style={form.control}
            onChangeText={this.handleInputChange.bind(this, 'password')}
            value={this.state.text}
            secureTextEntry={true}
          />
        </View>
        <View style={form.row}>
          <Button
            onPress={this.handleSubmit.bind(this)}
            title="Entrar"
            color={color.primary}
          />
        </View>
      </View>
    );
  }
}

export {
  LoginScreen
}
