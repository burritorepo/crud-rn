'use strict'
import React from "react";
import ImagePicker from 'react-native-image-picker';
import {
  Text,
  View,
  TextInput,
  Picker,
  Button
} from 'react-native';

import {
  form,
  box,
  color
} from '../../../../assets/styles';


function launchImage() {
  console.log('lauch!!!', ImagePicker)
  // const options = {
  //   title: 'Select Avatar',
  //   customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  //   storageOptions: {
  //     skipBackup: true,
  //     path: 'images',
  //   },
  // };
  // ImagePicker.showImagePicker((response) => {
  //   console.log('Response = ', response);

  //   if (response.didCancel) {
  //     console.log('User cancelled image picker');
  //   } else if (response.error) {
  //     console.log('ImagePicker Error: ', response.error);
  //   } else if (response.customButton) {
  //     console.log('User tapped custom button: ', response.customButton);
  //   } else {
  //     const source = { uri: response.uri };

  //     // You can also display the image using data:
  //     // const source = { uri: 'data:image/jpeg;base64,' + response.data };

  //     // this.setState({
  //     //   avatarSource: source,
  //     // });
  //   }
  // });

  // ImagePicker.launchCamera((response) => {
  //   // Same code as in above section!
  // });
}

function FormUser(props) {
  const {
    name,
    lastname,
    git,
    email,
    phone,
    avatar,
    about,
    onSubmit,
    onChange
  } = props;

  return (
    <View>
      <View style={form.row}>
        <Text style={form.label}>Nombre</Text>
        <TextInput
          style={form.control}
          onChangeText={(value) => onChange('name', value)}
          value={name}
        />
      </View>
      <View style={form.row}>
        <Text style={form.label}>Apellido</Text>
        <TextInput
          style={form.control}
          onChangeText={(value) => onChange('lastname', value)}
          value={lastname}
        />
        
      </View>
      <View style={form.row}>
        <Text style={form.label}>Url Imagen</Text>
        <TextInput
          style={form.control}
          onChangeText={(value) => onChange('avatar', value)}
          value={avatar}
        />
        <Button onPress={launchImage} title="imagen"/>
      </View>
      <View style={form.row}>
        <Text style={form.label}>Usuario Git</Text>
        <TextInput
          style={form.control}
          onChangeText={(value) => onChange('git', value)}
          value={git}
        />
      </View>
      <View style={form.row}>
        <Text style={form.label}>Email</Text>
        <TextInput
          style={form.control}
          onChangeText={(value) => onChange('email', value)}
          value={email}
        />
      </View>
      <View style={form.row}>
        <Button
          onPress={onSubmit}
          title="Agregar"
          color={color.primary}
        />
      </View>
    </View>
  )
}

export {
  FormUser
}
