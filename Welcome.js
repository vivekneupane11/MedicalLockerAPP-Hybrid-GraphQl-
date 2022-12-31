import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { useQuery } from "@apollo/client";
import { GET_DEPARTMENT_BY_ADMIN, GET_SERVICE } from "./query";
import Header from "./components/header";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const width = Dimensions.get("window").width;
export default function WelcomeScreen({ navigation, route }) {
  const { serviceId } = route.params;


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <View style={styles.head}>
          <Text style={styles.labelHead}> Veuillez sélectionner le contrôle à effectuer</Text>
        </View>
        <View style={styles.content}>
        <LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={[
          styles.button,
          { justifyContent: "center", },
        ]}
>
    
<TouchableOpacity style={styles.box} onPress={()=>{       navigation.navigate("TrackerOption", {
                  serviceId: serviceId,
                });}}>
<FontAwesome5 name="user-nurse" size={42} color="white" />

<Text style={styles.navLabel}>Chariot d'urgence</Text>
</TouchableOpacity>
  
      </LinearGradient>
      
      <LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={[
          styles.button,
          { justifyContent: "center", },
        ]}
>
<TouchableOpacity style={styles.box} onPress={()=>{       navigation.navigate("question", {
                  serviceId: serviceId,
                });}}>
<FontAwesome5 name="user-nurse" size={42} color="white" />

<Text style={styles.navLabel}>Questionnaire satisfaction</Text>
</TouchableOpacity>
  
      </LinearGradient>
      <LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={[
          styles.button,
          { justifyContent: "center", },
        ]}
>
<TouchableOpacity style={styles.box} onPress={()=>{       navigation.navigate("TrackerOption", {
                  serviceId: serviceId,
                });}}>
<FontAwesome5 name="user-nurse" size={42} color="white" />

<Text style={styles.navLabel}>Entretien chambre</Text>
</TouchableOpacity>
  
      </LinearGradient>
      <LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={[
          styles.button,
          { justifyContent: "center", },
        ]}
>
<TouchableOpacity onPress={()=> navigation.navigate('patientinventory')} style={styles.box}>
<FontAwesome5 name="user-nurse" size={42} color="white" />

<Text style={styles.navLabel}>Inventaire patient</Text>
</TouchableOpacity>
  
      </LinearGradient>
          {/* <View style={styles.grouper}>
            <View style={styles.accountContent}>
              <View style={styles.accountLabel}>
                <Text>
                  <FontAwesome5 name="user-nurse" size={18} color="white" />
                </Text>
                <View style={styles.nameList}>
                  <Text style={styles.name}>
                  {data?.getService?.service?.admin}
                  </Text>
                  <Text style={styles.detail}> Email :  {data?.getService?.service?.admin} </Text>
                </View>
              </View>
              <View style={styles.accountLabel}>
                <Text>
                  <FontAwesome5 name="user-nurse" size={18} color="white" />
                </Text>
                <View style={styles.nameList}>
                  <Text style={styles.name}> {data?.getService?.service?.assignedTo} </Text>
                  <Text style={styles.detail}> Email: {data?.getService?.service?.assignedTo} </Text>
                </View>
              </View>
            </View>
            <View style={styles.dateContainer}>
              <View style={styles.formGroup}>
                <Text style={styles.date}>Date :</Text>
                <View style={styles.dateGroup}>
                  <Fontisto name="date" size={22} color="black" />
                  <Text style={styles.dateText}>{Date(data?.getService?.service?.assignedAt).split("GMT")[0]}</Text>
                </View>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.date}>Heure :</Text>
                <View style={styles.dateGroup}>
                  <Fontisto name="date" size={22} color="black" />
                  <Text style={styles.dateText}>5069-234-34</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.buttonPanel}>
          <LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={styles.button}>
<TouchableOpacity onPress={()=>handleMonthlyCheck('monthly')}>
        <Text style={styles.buttonText}>Mensuel </Text>
      </TouchableOpacity>
      </LinearGradient>
      <LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={styles.button}>
<TouchableOpacity onPress={()=>navigation.navigate('Checklist',{
  serviceId:serviceId,
  tapsType:'daily'
})}>
        <Text style={styles.buttonText}>Daily </Text>
      </TouchableOpacity>
      </LinearGradient>

      <LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={styles.button}>
      <TouchableOpacity onPress={()=>handleMonthlyCheck('emergency')}>
        <Text style={styles.buttonText}> Hebdomadarie </Text>
      </TouchableOpacity>
      </LinearGradient>

      <LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={styles.button}>
    <TouchableOpacity >
        <Text style={styles.buttonText}>Apres ouverture du chariot</Text>
      </TouchableOpacity>
      </LinearGradient>
</View> */}
        </View>

    </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    flexDirection: "row",
    paddingHorizontal: 25,
    alignItems: "center",
  },
  labelHead: {
    fontSize: 36,
    fontWeight: "600",
  },
  content: {
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor: "#fff",
    width: "95%",
    alignSelf: "center",
    justifyContent:'space-between',
    padding: 20,
    marginVertical: 40,borderRadius:9
  },
  textHead: {
    fontSize: 22,
    paddingVertical: 10,
  },
  grouper: {
    flexDirection: "row",
    paddingVertical: 20,
    justifyContent:'space-between'
  },
  accountLabel: {
    flexDirection: "row",
    padding: 15,
    paddingRight:100,
    elevation: 2,
    backgroundColor: "#fff",
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 6,
    backgroundColor: "#55D6A2",
  },
  nameList: {
    paddingHorizontal: 20,
  },
  name: {
    paddingBottom: 5,
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18,
  },
  detail: {
    color: "#fff",
  },
  dateContainer: {
    paddingVertical: 10,
    paddingHorizontal:30,
    marginHorizontal:20
  },
  date: {
    fontWeight: "bold",
    fontSize:18
  },
  dateGroup:{
    flexDirection:'row',
    paddingVertical:14,
    borderBottomColor:'#D3D3D3',
    borderBottomWidth:1,
    width:300
  },
  dateText:{
    fontSize:20,
    paddingHorizontal:10
  },
  buttonPanel:{
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:20
  },
  button:{
    paddingVertical:20,
    paddingHorizontal:15,
    marginVertical:10,
    justifyContent:'center',

    elevation:2,
    backgroundColor:"#f2f2f2",
    borderRadius:12,
    width:'22%'
  },
  buttonText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:22
  },
  formGroup:{
    marginBottom:3
  },
  box:{
    paddingVertical:16,
  },
  navLabel:{
    paddingVertical:10,
    fontSize:22,
    fontWeight:'600',
    color:'#fff'
  }

});
