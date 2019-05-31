import React from 'react';
import { Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { Camera, Permissions } from 'expo';
let pic;

export default class CameraExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      photo: ''
    };
  }
  

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  async snapPhoto() {
    if (this.camera) {
      await this.camera.takePictureAsync().then(photo => {
        console.log(photo);
        this.setState({photo})
      });
    }
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (this.state.photo) {
      // pic = <Image
      //   style={{ width: 50, height: 50 }}
      //   source={{ uri: this.state.photo }}
      // />
      console.log('this.state.photo', this.state.photo)
    }
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1, height: 400 }}>
          <Camera ref={(ref) => { this.camera = ref }} style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
          <Button onPress={this.snapPhoto.bind(this)} title="Tomar foto" color="red" />
          <Image
            style={{ width: undefined, height: 200 }}
            source={{ uri: this.state.photo.uri }}
          />
        </View>
      );
    }
  }
}