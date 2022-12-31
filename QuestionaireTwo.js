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
export default function QuestionaireTwo({ navigation, route }) {
  const { serviceId,data } = route.params;
  console.log(data);
const [CheckOne ,setCheckOne] = useState('')
const [CheckTwo ,setCheckTwo] = useState('')
const [reactionOne,setReactionOne] = useState('')
const [reactionTwo,setReactionTwo] = useState('')
const [reactionThree,setReactionThree] = useState('')
const [reactionFour,setReactionFour] = useState('')
const [reactionFive,setReactionFive] = useState('')
const [reactionSix,setReactionSix] = useState('')




  return (
    <ScrollView>

  
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <View style={styles.head}>
          <Text style={styles.labelHead}> QUESTIONNAIRE DE SATISFACTION </Text>
        </View>
     <View style={styles.content}>
<View style={styles.box}>
<Text style={[styles.labelHead,{    color:'#77E17A'
}]}>Questions pour le patient: (Durant votre hospitalisation: Soins)
Avez-vous été informé des soins dispensés? </Text>
<View style={styles.group}>
<Text style={styles.labelHead}> Avez-vous facilement identifié la fonction de chaque soignant? </Text>
<View style={styles.buttonPanel}>
<TouchableOpacity onPress={()=>setCheckOne('Oul')} style={[styles.button,CheckOne ==='Oul'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]}>
    <Text style={styles.buttonText}>Oul</Text>

</TouchableOpacity>
<TouchableOpacity onPress={()=>setCheckOne('Non')} style={[styles.button,CheckOne ==='Non'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]}>
    <Text style={styles.buttonText}>Non</Text>

</TouchableOpacity>
</View>
</View>
</View>
<View style={styles.box}>

<View style={styles.group}>
<Text style={styles.labelHead}> Avez-vous facilement identifié la fonction de chaque soignant?
 </Text>
<View style={styles.buttonPanel}>
<TouchableOpacity onPress={()=>setCheckTwo('Oul')} style={[styles.button,CheckTwo ==='Oul'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]}>
    <Text style={styles.buttonText}>Oul</Text>

</TouchableOpacity>
<TouchableOpacity onPress={()=>setCheckTwo('Non')} style={[styles.button,CheckTwo ==='Non'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]}>
    <Text style={styles.buttonText}>Non</Text>

</TouchableOpacity>
</View>
</View>
</View>
<View style={styles.box}>

<View style={styles.group}>
<Text style={styles.labelHeadOne}>  </Text>
<View style={styles.buttonPanel}>
<TouchableOpacity style={styles.buttonEmoji}>
    <Text style={[styles.buttonText,{fontSize:48}]}> 
😇</Text>

</TouchableOpacity>
<TouchableOpacity style={styles.buttonEmoji}>
   <Text style={[{fontSize:48}]}>  😀</Text>

</TouchableOpacity>
<TouchableOpacity style={styles.buttonEmoji}>
   <Text style={[{fontSize:48}]}> ☺️</Text>

</TouchableOpacity>
<TouchableOpacity style={styles.buttonEmoji}>
   <Text style={[{fontSize:48}]}> 😞</Text>

</TouchableOpacity>
</View>
</View>
</View>
<View style={styles.box}>

<View style={styles.group}>
<Text style={styles.labelHeadOne}> Du respect de votre intimite </Text>
<View style={styles.buttonPanel}>
<TouchableOpacity style={[styles.button,reactionOne==='Best'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionOne('Best')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
<TouchableOpacity style={[styles.button,reactionOne==='Good'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionOne('Good')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
<TouchableOpacity style={[styles.button,reactionOne==='Average'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionOne('Average')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
<TouchableOpacity style={[styles.button,reactionOne==='Bad'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionOne('Bad')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
</View>
</View>
</View><View style={styles.box}>

<View style={styles.group}>
<Text style={styles.labelHeadOne}>Du respect de la confidentialite </Text>
<View style={styles.buttonPanel}>
<TouchableOpacity style={[styles.button,reactionTwo==='Best'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionTwo('Best')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
<TouchableOpacity style={[styles.button,reactionTwo==='Good'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionTwo('Good')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
<TouchableOpacity style={[styles.button,reactionTwo==='Average'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionTwo('Average')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
<TouchableOpacity style={[styles.button,reactionTwo==='Bad'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionTwo('Bad')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
</View>
</View>
</View><View style={styles.box}>

<View style={styles.group}>
<Text style={styles.labelHeadOne}> De la prise en charge de votre douleur
 </Text>
<View style={styles.buttonPanel}>
<TouchableOpacity style={[styles.button,reactionThree==='Best'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionThree('Best')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
<TouchableOpacity style={[styles.button,reactionThree==='Good'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionThree('Good')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
<TouchableOpacity style={[styles.button,reactionThree==='Average'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionThree('Average')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
<TouchableOpacity style={[styles.button,reactionThree==='Bad'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionThree('Bad')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
</View>
</View>
</View><View style={styles.box}>

<View style={styles.group}>
<Text style={styles.labelHeadOne}> De la prise en charge medicale
 </Text>
<View style={styles.buttonPanel}>
<TouchableOpacity style={[styles.button,reactionFour==='Best'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionFour('Best')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
<TouchableOpacity style={[styles.button,reactionFour==='Good'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionFour('Good')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
<TouchableOpacity style={[styles.button,reactionFour==='Average'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionFour('Average')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
<TouchableOpacity style={[styles.button,reactionFour==='Bad'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionFour('Bad')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
</View>
</View>
</View><View style={styles.box}>

<View style={styles.group}>
<Text style={styles.labelHeadOne}> De la qualite des soins infirmiers </Text>
<View style={styles.buttonPanel}>
<TouchableOpacity style={[styles.button,reactionFive==='Best'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionFive('Best')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
<TouchableOpacity style={[styles.button,reactionFive==='Good'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionFive('Good')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
<TouchableOpacity style={[styles.button,reactionFive==='Average'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionFive('Average')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
<TouchableOpacity style={[styles.button,reactionFive==='Bad'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionFive('Bad')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
</View>
</View>
</View><View style={styles.box}>

<View style={styles.group}>
<Text style={styles.labelHeadOne}> De la disponiblite et de la convivialite de l'equipe </Text>
<View style={styles.buttonPanel}>
<TouchableOpacity style={[styles.button,reactionSix==='Best'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionSix('Best')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
<TouchableOpacity style={[styles.button,reactionSix==='Good'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionSix('Good')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
<TouchableOpacity style={[styles.button,reactionSix==='Average'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionSix('Average')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
<TouchableOpacity style={[styles.button,reactionSix==='Bad'?{backgroundColor:'#7DE373'}:{backgroundColor:'#d3d3d3'}]} onPress={()=>setReactionSix('Bad')}>
    <Text style={styles.buttonText}></Text>

</TouchableOpacity>
</View>
</View>
<LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={[
          styles.button,
          { justifyContent: "center", marginLeft:450,marginTop:20, alignItems:'center',alignSelf:'center'},
        ]}
>
<TouchableOpacity
style={styles.finalButton}
      onPress={()=>{
        navigation.navigate('questionthree',{
            data:{
                dataStepOne:data,
                dataStepTwo:{
                    CheckOne,
                    CheckTwo,
                    reactionOne,
                    reactionTwo,reactionThree,reactionFour,reactionFive,reactionSix
                }
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
    fontSize: 18,
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
    flexDirection:'row'
},
button:{
    padding:15,
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
