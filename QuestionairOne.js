import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useQuery } from "@apollo/client";
import { GET_DEPARTMENT_BY_ADMIN, GET_SERVICE } from "./query";
import Header from "./components/header";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const width = Dimensions.get("window").width;
export default function Questionaire({ navigation, route }) {
  const { serviceId } = route.params;
  const [serviceHospital,setServiceHospital] = useState('')
  const [nom,setNom] = useState('')
  const [prenom,setPrenom] = useState('')
  const [date,setDate] = useState('')
  const [endDate,setEndDate] = useState('')
  const [age,setAge] = useState('')
  const [type,setType] = useState('')


  return (
    <ScrollView>

  
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <View style={styles.head}>
          <Text style={styles.labelHead}> Afin de nous aider a ameliorer les conditions d'accueil et de prise en charge,
nous vous remercions de remplir ce questionnaire. </Text>
        </View>
     <View style={styles.content}>
<View style={styles.box}>
<Text style={styles.labelText}>Service hospitalisation:
 </Text>
<View style={styles.group}>
    <TouchableOpacity onPress={()=>setServiceHospital('Reanimation')} style={[styles.button,{backgroundColor:'#7DE373'}]}><Text style={styles.buttonText}>Reanimation
</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>setServiceHospital('USC(Unite de soins continus)')} style={[styles.button,{backgroundColor:'#1AC0E7'}]}><Text style={styles.buttonText}>USC (Unite de soins continus)
</Text></TouchableOpacity>

</View>
</View>
<View style={styles.box}>
<View style={styles.group}>
<View style={styles.inputGroup}>
<Text style={styles.labelText}>Nom (facultatif): </Text>

<TextInput
        style={styles.input}
        onChangeText={(e)=>{setNom(e)}}

      /></View>
<View style={styles.inputGroup}>
<Text style={styles.labelText}>Prenom (facultatif): </Text>

<TextInput
        style={styles.input}
        onChangeText={(e)=>{setPrenom(e)}}

      />
</View>

</View>
</View>
<View style={styles.box}>
<View style={styles.group}>
<View style={styles.inputGroup}>
<Text style={styles.labelText}>Date d'entrée : </Text>

<TextInput
        style={styles.input}
        onChangeText={(e)=>{setDate(e)}}

      />
</View>
<View style={styles.inputGroup}>
<Text style={styles.labelText}>Date de sortie
 </Text>

<TextInput
        style={styles.input}
        onChangeText={(e)=>{setEndDate(e)}}

      />
</View>

</View>
</View>
<View style={styles.box}>
<View style={styles.group}>
<View style={styles.inputGroup}>
<Text style={styles.labelText}> Age </Text>

<TextInput
        style={styles.input}
        onChangeText={(e)=>{setAge(e)}}

      />
</View>
<View style={styles.inputGroup}>

</View>

</View>
</View>
<View style={styles.box}>
<Text style={styles.labelText}>Qui renseigne ce questionnaire: </Text>
<View style={styles.group}>
    <TouchableOpacity onPress={()=>setType('Patient')} style={[styles.button,{width:'22%'},type==='Patient'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]}><Text style={[styles.buttonText,{fontSize:16}]}>Patient</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>setType('Conjoint')} style={[styles.button,{width:'22%'},type==='Conjoint'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]}><Text style={[styles.buttonText,{fontSize:16}]}>Conjoint(e)
</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>setType('Famille proche')} style={[styles.button,{width:'25%'},type==='Famille proche'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]}><Text style={[styles.buttonText,{fontSize:16}]}>Famille proche</Text></TouchableOpacity>
    <TouchableOpacity onPress={()=>setType('Autre')} style={[styles.button,{width:'22%'},type==='Autre'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]}><Text style={[styles.buttonText,{fontSize:16}]}>Autre</Text></TouchableOpacity>

</View>
</View>
<LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={[
          styles.button,
          { justifyContent: "center", marginLeft:420, alignItems:'center',alignSelf:'center'},
        ]}
>
      <TouchableOpacity
      onPress={()=>{
        navigation.navigate('questiontwo',{
            data:{
                serviceHospital,
                nom,
                prenom,
                date,
                endDate,
                age,
                type
            }
        })
      }}
>
      
        <Text style={[ {fontSize:24, color: "#fff", }]}>Question suivante</Text>
      </TouchableOpacity>
      </LinearGradient>

     </View>

    </View>
    </View>
    </ScrollView>
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
    fontSize: 28,
    fontWeight: "600",
    color:'#77E17A'
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
  labelText:{
    fontSize:22,
    fontWeight:'600',
    marginVertical:10
  },
  group:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    paddingVertical:25,
    paddingHorizontal:40,
    backgroundColor:'blue',
    margin:10,
    borderRadius:6,
    width:'48%'
  },
  buttonText:{
    fontSize:22,
    color:'#fff',
    fontWeight:'600'
  },
  box:{
    paddingVertical:20
  },
  inputGroup:{
    width:'50%'
  },
  input: {
    height: 55,
    margin: 12,
backgroundColor:'#f7f7f7',
borderRadius:6,
    padding: 10,
    fontSize:22
  },
 
});
