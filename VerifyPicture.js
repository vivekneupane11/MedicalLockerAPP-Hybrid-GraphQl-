import { useState } from 'react';
import { Text,View,StyleSheet,TouchableOpacity,Dimensions,Image,ToastAndroid } from 'react-native'
import { Entypo ,AntDesign} from "@expo/vector-icons";

import {
    GETUSER_QUERY,
    GET_SERVICE,
    LOGIN_QUERY,
    UPDATE_SERVICE_QUERY,
  } from "./query";
  import { useMutation, useQuery } from "@apollo/client";
import Header from './components/header';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { LinearGradient } from 'expo-linear-gradient';

export default function VerifyPicture({ navigation,route }) {
  const [validate,setValidate] = useState(false)

    const {image,serviceId} = route.params;

    const { data, loading } = useQuery(
      GET_SERVICE,
   
      {
        variables: {
          getServiceId: serviceId,
        },
        fetchPolicy:'no-cache'
        
      },
    ); //execute query
  
    const [
      updateService,
      { data: servicedata, loading: serviceloading, eservicerror },
    ] = useMutation(UPDATE_SERVICE_QUERY, {
      refetchQueries: [
        {
          query: GET_SERVICE,
          variables: {
            getServiceId: serviceId,
          },
        },
      ],
    });
  
    const handleValidate = () => {

        setValidate(init=>!init)
      let input = {};
  
      let dailyTapDoneAt = [...data.getService.service.dailyTapDoneAt];
      let dailyTap = [...data.getService.service.dailyTap];
  
  
        input.dailyTap = dailyTap;
        input.dailyTap[input.dailyTap.length] = true;
        input.dailyTapDoneAt = [Date.now().toString(), ...dailyTapDoneAt];

      console.log(input);
  
      updateService({
        variables: {
          input: input,
          updateServiceId: serviceId,
        },
      })
        .then((res) => {
          if (res?.data.updateService.status === "success") {
            console.log("Done");
            ToastAndroid.show('Daily check completed',   ToastAndroid.SHORT,
            ToastAndroid.TOP)
            navigation.navigate("Tracker", {
              serviceId: serviceId,
              tapsType:'daily',
            });
          }
        })
        .catch((err) => {
          console.log(err);
          ToastAndroid.show(
            "Cannot submit your request!",
            ToastAndroid.SHORT,
            ToastAndroid.TOP
          );
        });
    };

console.log(image,"here");

  return (
    <View style={styles.container}>
    <Header />

<View style={styles.main}>
<View style={styles.head}>
  <Image source={require("./assets/verifyicons.png")} height="50" width="70" />
  <Text style={styles.labelHead}> RECAPTUTULIATE  </Text>
</View>
<View style={styles.content}>
<Image style={styles.image} source={{uri: image?image:"https://requirements.com/Portals/0/EasyDNNnews/34/img-report.png"}} />
<View style={styles.rightPanel}>
<View style={styles.checklistcontainer}>
  <Text style={styles.checkboxLabel}>
    Assessiblitte et position du chariot
  </Text>
  <View style={styles.checkPanel}>
    <BouncyCheckbox
      size={25}
      iconComponent={<Entypo name="cross" color="white" size={16} />}
      fillColor="red"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "red" }}
      innerIconStyle={{ borderWidth: 2 }}
      onPress={(isChecked) => {
        console.log(isChecked);
      }}
    />
    <BouncyCheckbox
      size={25}
      fillColor="blue"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "red" }}
      innerIconStyle={{ borderWidth: 2 }}
      onPress={(isChecked) => {
        console.log(isChecked);
      }}
    />
  </View>
</View>
<View style={styles.checklistcontainer}>
  <Text style={styles.checkboxLabel}>
    Assessiblitte et position du chariot
  </Text>
  <View style={styles.checkPanel}>
    <BouncyCheckbox
      size={25}
      iconComponent={<Entypo name="cross" color="white" size={16} />}
      fillColor="red"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "red" }}
      innerIconStyle={{ borderWidth: 2 }}
      onPress={(isChecked) => {
        console.log(isChecked);
      }}
    />
    <BouncyCheckbox
      size={25}
      fillColor="blue"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "red" }}
      innerIconStyle={{ borderWidth: 2 }}
      onPress={(isChecked) => {
        console.log(isChecked);
      }}
    />
  </View>
</View>
<View style={styles.checklistcontainer}>
  <Text style={styles.checkboxLabel}>
    Assessiblitte et position du chariot
  </Text>
  <View style={styles.checkPanel}>
    <BouncyCheckbox
      size={25}
      iconComponent={<Entypo name="cross" color="white" size={16} />}
      fillColor="red"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "red" }}
      innerIconStyle={{ borderWidth: 2 }}
      onPress={(isChecked) => {
        console.log(isChecked);
      }}
    />
    <BouncyCheckbox
      size={25}
      fillColor="blue"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "red" }}
      innerIconStyle={{ borderWidth: 2 }}
      onPress={(isChecked) => {
        console.log(isChecked);
      }}
    />
  </View>
</View>
<View style={styles.checklistcontainer}>
  <Text style={styles.checkboxLabel}>
    Assessiblitte et position du chariot
  </Text>
  <View style={styles.checkPanel}>
    <BouncyCheckbox
      size={25}
      iconComponent={<Entypo name="cross" color="white" size={16} />}
      fillColor="red"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "red" }}
      innerIconStyle={{ borderWidth: 2 }}
      onPress={(isChecked) => {
        console.log(isChecked);
      }}
    />
    <BouncyCheckbox
      size={25}
      fillColor="blue"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "red" }}
      innerIconStyle={{ borderWidth: 2 }}
      onPress={(isChecked) => {
        console.log(isChecked);
      }}
    />
  </View>
</View>
<View style={styles.buttonPanel}>
<LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#d3d3d3', '#d3d3d3', '#d3d3d3']}
        style={styles.button}>
        <TouchableOpacity onPress={()=>navigation.navigate('TakePicture',{
     
     serviceId: serviceId,

})} style={styles.button}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={styles.button}>
        <TouchableOpacity 
        onPress={handleValidate}
        style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
            </LinearGradient>

</View>
</View>
  </View>
  </View>
  </View>
  
  
 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor:'#ffffff',
    alignItems:'center'
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal:10
  },
  main:{
width:'90%'
  },
  checkPanel: {
    flexDirection: "row",
    marginLeft: 10,
  },
  checklistcontainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical:10,
    justifyContent: "space-between",
    marginHorizontal: 10,
    borderRadius:9,
    borderWidth:0.7,
    borderColor:'#000',
    width:'60%'
  },
  checkboxLabel: {
    marginRight: 10,
    fontSize: 14,
  },
  labelHead: {
    fontSize: 36,
    fontWeight: "600",
    color: "#77E17A",
  },
  content:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:20,
      elevation:2,
      backgroundColor:'#fff',
      marginTop:30,
      borderRadius:12,
  },
  header:{
    fontSize:20,
    color:'#4D4A95',
    paddingTop:20
  },
  rightPanel:{
marginLeft:20
  },
  details:{
    margin:50,
    width:'90%',
    elevation:12,
    backgroundColor:'#fff',
    borderRadius:12,
    justifyContent:'center',
    alignItems:"center"
  },
  validateButton:{
backgroundColor:"#4D4A95",
width:'85%',
padding:20,
justifyContent:'center',
alignItems:'center',
marginVertical:10,
marginBottom:30,
borderRadius:12,
elevation:4
  },
  lottie:{
height:300,
width:300
  },
  validateText:{
fontSize:18,
fontWeight:'bold',
color:'#fff',
  },
  validateLinkText:{
    fontSize:14,
    color:'blue',
    paddingVertical:10
      },
image:{
    height:300,
    width:300,
    padding:20,
    margin:20,
    elevation:4,
    borderRadius:12

},
buttonPanel:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'flex-end',
  alignSelf:'flex-start',
  width:'40%',
  marginVertical:20
},
button:{
marginHorizontal:10,
paddingVertical:8,
paddingHorizontal:24,
borderRadius:4
},
buttonText:{
  fontWeight:'600',
  fontSize:18,
  color:'#fff'
}
});
