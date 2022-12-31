import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  ToastAndroid,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDownPicker from "react-native-dropdown-picker";
import { GETUSER_QUERY, LOGIN_QUERY, UPDATE_SERVICE_QUERY } from "./query";
import { useMutation, useQuery } from "@apollo/client";
import { MaterialIcons, Fontisto, Entypo } from "@expo/vector-icons";
import leftPanelImage from "./assets/left.png";
import { LinearGradient } from "expo-linear-gradient";

const width = Dimensions.get("window").width - 100;
export default function LoginScreen({ route, navigation }) {
  const { serviceId } = route.params;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [password, setPassword] = useState("");
  const [items, setItems] = useState([]);
  const { data, loading } = useQuery(GETUSER_QUERY); //execute query

  const [loginUser, { data: logindata, loading: loginloading, error }] =
    useMutation(LOGIN_QUERY);
  const [
    updateService,
    { data: servicedata, loading: serviceloading, eservicerror },
  ] = useMutation(UPDATE_SERVICE_QUERY);

  useEffect(() => {
    const nurseList = data?.getCaregivers.user.filter(
      (e) => e.role === "nurse"
    );
    const dropDownList = nurseList?.map((e, i) => {
      return {
        label: e.name,
        value: e.email,
      };
    });
    if (dropDownList?.length) {
      setItems(dropDownList);
    }
  }, [loading]);

  const passwordHandler = (e) => {
    setPassword(e);
  };
  const handleConnecter = () => {
    loginUser({
      variables: { input: { email: value, password: password } },
    })
      .then((res) => {
        if (!res?.data) return;
        if (res?.data.loginUser.status === "success") {
          updateService({
            variables: {
              input: {
                assignedTo: value,
                assignedAt: Date.now().toString(),
              },
              updateServiceId: serviceId,
            },
          })
            .then((res) => {
              if (res?.data.updateService.status === "success") {
                navigation.navigate("welcome", {
                  serviceId: serviceId,
                });
              }
            })
            .catch((err) => {
              console.log(err);
              ToastAndroid.show(
                "Cannot validate user!",
                ToastAndroid.SHORT,
                ToastAndroid.TOP
              );
            });
        } else {
          ToastAndroid.showWithGravity(
            "Invalid User!",
            ToastAndroid.SHORT,
            ToastAndroid.TOP
          );
        }
      })
      .catch((err) => {
        ToastAndroid.show(
          "Cannot validate user!",
          ToastAndroid.SHORT,
          ToastAndroid.TOP
        );
      });
  };
  return (

<View style={styles.main}>
<Image style={styles.leftPanel} resizeMode="stretch" source={leftPanelImage} height='100%' width="50%" />
<View style={styles.rightPanel}>
  <Text style={styles.textOne}>Service de soins critiques</Text>
  <Text style={styles.textTwo}>CENTRE HOSPITALIER DE RAMBOUILLET</Text>

       <View style={[styles.formContainer]}>
          <View style={styles.formGroup}>
     
            <Text style={styles.formValue}> Date</Text>
        <View style={styles.formContent}>
        <Text style={styles.formLabel}>
              <MaterialIcons name="date-range" size={18} color="#4D4A95" />
            </Text>
            <Text style={styles.formValue}> {Date().toLocaleString()}</Text>
        </View>
          </View>

      <View style={styles.formGroup}>
      <Text style={styles.formValue}>    
                 Heure 
</Text>
<View style={styles.formContent}>

              <MaterialIcons name="date-range" size={18} color="#4D4A95" />
            <Text style={styles.formValue}> 20.20.2022</Text>
          </View>
          </View>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>
           Veuillez selectionner votre identite:
            </Text>
            <DropDownPicker
              translation={{
                PLACEHOLDER: "Soignant",
              }}
              placeholderStyle={{
                color: "grey",
              }}
              dropDownContainerStyle={{
                backgroundColor: "#ffffff",
                borderColor: "#4D4A95",
              }}
              style={styles.dropDown}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>
           Mot de passe :
            </Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={passwordHandler}
            />
          </View>
          <LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={styles.button}>
        <TouchableOpacity onPress={handleConnecter} style={styles.button}>
          <Text style={styles.buttonText}>SE CONNECTER</Text>
        </TouchableOpacity>
            </LinearGradient>
        </View>


        </View>




  );
}

const styles = StyleSheet.create({

main:{
  flex:1,
  height:'100%',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  height: Dimensions.get('window').height,

},
leftPanel:{
height: '100%',
  width:'50%',
  backgroundColor:'yellow'
},
textOne:{
textAlign:'center',
paddingVertical:10,
fontSize:22
},
textTwo:{
textAlign:'center',
fontSize:28,
textTransform:'capitalize',
color:'#77E17A'
},
formValue:{
fontWeight:'400'
},
rightPanel:{
  width:'50%',
  height:'100%',
  padding:20,
  backgroundColor:'#fff',
  paddingVertical:'20%'
},
formContent:{
  flexDirection:'row',
  justifyContent:'flex-start',
  alignItems:'center',
  paddingVertical:15,
  width:'80%',
  borderBottomWidth:1,
  borderColor:'#f5f5f5',
  marginVertical:15
},
dropDown:{
  borderColor:'#f5f5f5',
marginVertical:15
},
input:{
  borderColor:'#f5f5f5',
  borderWidth:1,
  padding:7,
  marginVertical:15
},
formLabel:{
  fontWeight:'600'
},  button: {
  paddingVertical:5,
  marginVertical:10,
  paddingLeft: 35,
  paddingRight: 35,
  color: "white",
  borderRadius: 6,
  width:'100%',
justifyContent:'center',
alignItems:'center'},
buttonText:{
  fontWeight:'400',
  color:'#fff',
  fontSize:18
}
});
