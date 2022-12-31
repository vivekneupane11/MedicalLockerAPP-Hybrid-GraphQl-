import { useState } from 'react';
import { Text,View,StyleSheet,TouchableOpacity,Dimensions,Image,ToastAndroid } from 'react-native'
import LottieView from "lottie-react-native";

import {
    GETUSER_QUERY,
    GET_SERVICE,
    LOGIN_QUERY,
    UPDATE_SERVICE_QUERY,
  } from "./query";
  import { useMutation, useQuery } from "@apollo/client";
import { useEffect } from 'react';
import moment from 'moment';
import Header from './components/header';
import { LinearGradient } from 'expo-linear-gradient';

export default function VerifyMonthlyCheck({ navigation,route }) {
    const [validate,setValidate] = useState(false)

    const {serviceId,tapsType} = route.params;

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
 
  
    const handleValidate = async () => {

   

      let input = {};
  
       let monthlyTapDoneAt = [...data?.getService?.service?.monthlyTapDoneAt];
      let monthlyTap = [...data?.getService?.service?.monthlyTap];
        input.monthlyTap = monthlyTap;    input.monthlyTap[input.monthlyTap.length] = true;
            input.monthlyTapDoneAt = tapsType === 'monthly' ? [ ...monthlyTapDoneAt,moment(Date.now())]: [ ...monthlyTapDoneAt,moment(Date.now()).add(1,'month')];


  
      console.log(input);
  
      updateService({
        variables: {
          input: input,
          updateServiceId: serviceId,
        },
      })
        .then((res) => {
          if (res?.data?.updateService?.status === "success") {
            setValidate(init=>!init)

            ToastAndroid.show('Monthly check completed',   ToastAndroid.SHORT,
            ToastAndroid.TOP)
            navigation.navigate("Tracker", {
              serviceId: serviceId,
              tapsType:tapsType,
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


  return (
    <View style={styles.container}>
<Header/>
<View style={styles.main}>
        <View style={styles.head}>
          <Image source={require("./assets/verifyicons.png")} />
          <Text style={styles.labelHead}> Checklist mensuelle du chariot d'urgence  </Text>
        </View>
        <View style={styles.content}>
        <View style={styles.leftPanel}>
    <Text style={styles.panelHead}>Verification Details :</Text>
    <View style={styles.group}>
<View style={styles.list}>
  <Text style={styles.textOne}>Current Date :</Text>
  <Text>{new Date().toJSON().slice(0,10)}</Text>
</View>
<View style={styles.list}>
  <Text style={styles.textOne}>Current Time :</Text>
  <Text>{new Date().getHours() +':'+new Date().getMinutes()}</Text>
</View>
    </View>
    <View style={styles.group}>
<View style={styles.list}>
  <Text style={styles.textOne}>UserName</Text>
  <Text>{data?.getService?.service.assignedTo}</Text>
</View>
<View style={styles.list}>
  <Text style={styles.textOne}>Last Check :</Text>
  <Text>{data?.getService?.service.assignedAt}</Text>
</View>
    </View>
    <View style={styles.group}>
<View style={styles.list}>
  <Text style={styles.textOne}>User Email :</Text>
  <Text>{data?.getService?.service.assignedTo}</Text>
</View>

<View style={styles.list}>
  <Text style={styles.textOne}>Next Check :</Text>
  <Text>{     moment(Date(data?.getService?.service.assignedAt)).add(1,'days').toString().split('GMT')[0]}</Text>
</View>
    </View>
    <LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={[
          styles.button,
          { justifyContent: "center", },
        ]}
>
      <TouchableOpacity
onPress={()=>navigation.replace('home')}

      >
        <Text style={[styles.title, { color: "#fff" }]}>Valider et  se Deconnector</Text>
      </TouchableOpacity>
      </LinearGradient>
        </View>
        <View style={styles.rightPanel}>
        <Text style={styles.panelHead}>Verification Validee :</Text>

        <Image height='40' width='70' source={require('./assets/check.png')} />
        <LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={[
          styles.button,
          { justifyContent: "center", },
        ]}
>
      <TouchableOpacity
onPress={()=>handleValidate()}>
      
        <Text style={[styles.title, { color: "#fff" }]}>Completez les elements manquants?</Text>
      </TouchableOpacity>
      </LinearGradient>
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
    alignItems: "center",
  },
  header:{
    fontSize:20,
    color:'#4D4A95',
    paddingTop:20
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
  },
  main:{
width:'92%'
  },
  labelHead: {
    fontSize: 36,
    fontWeight: "600",
    color: "#77E17A",
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
  textOne:{
paddingVertical:5,
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
content:{
  padding:20,
  marginVertical:30,
  flexDirection:"row",
  justifyContent:'space-between',
  elevation:2,
  backgroundColor:'#fff'
},
panelHead:{
  fontSize:22,
  fontWeight:'600',
  paddingVertical:8,
  borderBottomColor:"#d3d3d3",
  borderBottomWidth:0.7
},
group:{
  flexDirection:'row',
  padding:15,
  paddingVertical:20,
  justifyContent:'space-between'
},
list:{
  textAlign:'right'
},  
button:{
  paddingVertical:15,
  paddingHorizontal:30,
  textAlign:'center',
  justifyContent:'center',
  alignItems:'center',
  elevation:2,
  borderRadius:6
},
title:{
  fontSize:18
}
});
