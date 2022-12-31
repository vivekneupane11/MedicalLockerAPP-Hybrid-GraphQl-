import React, { useState, useEffect } from 'react';
import { StyleSheet ,Text, View, Button, Image, TouchableOpacity} from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons,Ionicons } from '@expo/vector-icons'; 

export default function TakePicture({navigation,route}) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const {serviceId} = route.params;


useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
})();
  }, []);
const takePicture = async () => {
    if(camera){
        const data = await camera.takePictureAsync(null)
        setImage(data.uri);
    }
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
   <View style={{ flex: 1}}>
      <View style={styles.cameraContainer}>
            <Camera 
            ref={ref => setCamera(ref)}
            style={styles.fixedRatio} 
            type={type}
            ratio={'1:1'} />
      </View>
      <TouchableOpacity
            title="Flip Image"
            style={styles.flipbutton}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
          <MaterialIcons name="flip-camera-android" size={54} color="#fff" />
        </TouchableOpacity>
       <TouchableOpacity style={styles.button} title="Take Picture" onPress={() => takePicture()} > 
       <Ionicons name="ios-camera-outline" size={54} color="#fff" />
       </TouchableOpacity>
        {image && <Image source={{uri: image}} style={{flex:1}}/>}

        <TouchableOpacity style={styles.buttonSave} title="Take Picture" onPress={() =>{navigation.navigate('VerifyPicture',{
            image:image,
            serviceId:serviceId
        })}} > 
      <Text style={styles.saveText}>Save</Text>
       </TouchableOpacity>
   </View>
  );
}
const styles = StyleSheet.create({
  cameraContainer: {
      flex: 1,
      flexDirection: 'row'
  },
  fixedRatio:{
      flex: 1,
      aspectRatio: 1
  },
  button:{
    position:'absolute',
    bottom:50,
    zIndex:1000,
    right:20
  },
  flipbutton:{
    position:'absolute',
    bottom:50,
    zIndex:1000,
    left:20,
  },
  buttonSave:{
    backgroundColor:'#000',
    padding:20
  },
  saveText:{
    color:'#fff',
    textAlign:'center',
    fontSize:18
  }
})
