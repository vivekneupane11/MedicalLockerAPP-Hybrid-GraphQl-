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
  ToastAndroid,
} from "react-native";
import Modal from "react-native-modal";
import { MaterialIcons,AntDesign } from '@expo/vector-icons'; 

import { useMutation, useQuery } from "@apollo/client";
import { CREATE_QUESTION_QUERY, GET_DEPARTMENT_BY_ADMIN, GET_SERVICE } from "./query";
import Header from "./components/header";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const width = Dimensions.get("window").width;
export default function QuestionaireFour({ navigation, route }) {
  const { serviceId,data } = route.params;
  console.log(data);
const [CheckOne ,setCheckOne] = useState('')
const [CheckTwo ,setCheckTwo] = useState('')
const [reactionOne,setReactionOne] = useState('')
const [reactionTwo,setReactionTwo] = useState('')
const [reactionThree,setReactionThree] = useState('')
const [reactionFour,setReactionFour] = useState('')
const [comment,setComment] = useState('')
const [isModalVisible, setModalVisible] = useState(false);

const toggleModal = () => {
  setModalVisible(!isModalVisible);
};

const  [createQuestion]  = useMutation(
  CREATE_QUESTION_QUERY
); //execute query


  return (
    <ScrollView contentContainerStyle={{backgroundColor:'#fff',height:'100%'}}>

  
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <View style={styles.head}>
          <Text style={styles.labelHead}> QUESTIONNAIRE DE SATISFACTION </Text>
        </View>
     <View style={styles.content}>
<View style={styles.box}>
<Text style={[styles.labelHead,{    color:'#77E17A'
}]}>Questions pour le patience: </Text>
<View style={styles.group}>
<Text style={styles.labelHead}> Sortie: </Text>
<View style={styles.buttonPanel}>
<TouchableOpacity onPress={()=>setCheckOne('Oul')} style={[styles.button,CheckOne==='Oul'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]}>
    <Text style={styles.buttonText}>Oul</Text>

</TouchableOpacity>
<TouchableOpacity onPress={()=>setCheckOne('Non')} style={[styles.button,CheckOne==='Non'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]}>
    <Text style={styles.buttonText}>Non</Text>

</TouchableOpacity>
</View>
</View>
</View>

<View style={styles.box}>

<View style={styles.group}>
<View style={styles.buttonPanel}>
<TouchableOpacity style={styles.buttonEmoji}>
    <Text style={[styles.buttonText,{fontSize:48}]}> 
😇</Text>

</TouchableOpacity>
<TouchableOpacity style={styles.buttonEmoji}>
   <Text style={[{fontSize:56}]}>  😀</Text>

</TouchableOpacity>
<TouchableOpacity style={styles.buttonEmoji}>
   <Text style={[{fontSize:56}]}> ☺️</Text>

</TouchableOpacity>
<TouchableOpacity style={styles.buttonEmoji}>
   <Text style={[{fontSize:56}]}> 😞</Text>

</TouchableOpacity>
</View>
</View>
</View>

<View style={styles.box}>
<Text style={[styles.labelHead,{paddingTop:25,fontSize:18}]}> Vos reclamations, vos commentaires, vos suggestions:
 </Text>
<TextInput multiline={true} onChangeText={e=>setComment(e)} style={{height:100,marginVertical:20,fontSize:22,padding:15,backgroundColor:'#f5f5f5'}}></TextInput>

</View>
   
<Modal isVisible={isModalVisible}>
        <View style={{ flex: 1,justifyContent:'center',alignItems:'center' }}>
<View style={{height:500,width:'75%',backgroundColor:'#fff',borderRadius:9,justifyContent:'center',alignItems:'center'}}>
<AntDesign onPress={toggleModal}  name="closecircleo" size={24} color="black" style={{position:'absolute',top:15,right:15}} />
<MaterialIcons name="celebration" size={118} color="#81E9AA" />
<Text style={{fontSize:28,fontWeight:'400'}}>Merci d'avoir rempli ce questionnaire de
satisfaction. II nous permettra grâce a
vous, d'améliorer notre...</Text>
</View>
          {/* <Button title="Hide modal" onPress={toggleModal} /> */}
        </View>
      </Modal>

<LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={[
          styles.button,
          { justifyContent: "center",paddingHorizontal:60, marginLeft:600,marginTop:20, alignItems:'center',alignSelf:'center'},
        ]}
>
<TouchableOpacity
style={styles.finalButton}
      onPress={ async ()=>{
        try{
          let value = JSON.stringify({
            dataStepOne:data.dataStepOne,
                  dataStepTwo:data.dataStepTwo,
                  dataStepThree:data.dataStepThree,
                  dataStepFour:{
                      CheckOne,
                      comment
                  }
          })
       await   createQuestion({
        variables:{
          input:{
            data:value
          } 
      }
       })
          toggleModal()
        }
        catch(err){
ToastAndroid.show('Something went wrong')
        }
      }}
   
>
      
        <Text style={[ {fontSize:24, color: "#fff", }]}>Valider</Text>
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
    flexGrow:1,
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
  },
  labelHeadOne: {
    fontSize: 18,
    fontWeight: "300",
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
  box:{
marginTop:10,    width:'98%',

  },
group:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'92%',
    marginTop:10
},
buttonPanel:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:20
},
button:{
    padding:18,
    paddingHorizontal:14,
    backgroundColor:'#d3d3d3',
    marginHorizontal:10,
    borderRadius:6
},
buttonEmoji:{
    padding:15,
    paddingHorizontal:0,
    marginHorizontal:8,
    borderRadius:6
},
buttonText:{
    fontSize:20,
    paddingVertical:4,
    paddingHorizontal:20
},

});
