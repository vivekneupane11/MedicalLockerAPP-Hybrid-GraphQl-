import { Text,View,StyleSheet,TouchableOpacity,Dimensions, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import Header from './components/header';
import { LinearGradient } from 'expo-linear-gradient';


export default function ServiceList({ navigation,route }) {

    const {serviceId,tapsType} = route.params;


const validateEquipment = (trolleyName)=>{
    navigation.navigate('CheckListEquipment',{
        serviceId:serviceId,
        trolleyName

    })
}

const monthlyCheck=()=>{
     navigation.navigate('VerifyMonthlyCheck',{
        serviceId:serviceId,
        tapsType:tapsType
     })
}
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.main}>
        <View style={styles.head}>
          <Image source={require("./assets/verifyicons.png")} />
          <Text style={styles.labelHead}> Verification Du Chariot </Text>
        </View>
<View style={styles.serviceContainer}>
<Text style={styles.labelThree}> Commencer par le tiroir de votre choix </Text>

<TouchableOpacity onPress={()=>validateEquipment('trolleyOne')} style={styles.button}  >
        <Text style={styles.title}>TIROIR-1</Text>
<AntDesign name="downcircleo" size={24} color="gray" />        
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>validateEquipment('trolleyTwo')} style={styles.button}  >
        <Text style={styles.title}>TIROIR-2</Text>
<AntDesign name="downcircleo" size={24} color="gray" />        
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>validateEquipment('trolleyThree')} style={styles.button}  >
        <Text style={styles.title}>TIROIR-3</Text>
<AntDesign name="downcircleo" size={24} color="gray" />        
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>validateEquipment('trolleyFour')} style={styles.button}  >
        <Text style={styles.title}>TIROIR-4</Text>
<AntDesign name="downcircleo" size={24} color="gray" />        
        </TouchableOpacity>
        <LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={[styles.button,{justifyContent:'center'}]}>
<TouchableOpacity onPress={()=>monthlyCheck()}>
        <Text style={[styles.title,{color:'#fff',textAlign:'center',alignSelf:'center'}]}>Valider</Text>
        
        </TouchableOpacity>
        </LinearGradient>
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
  marginTop:130,
  fontSize: 22,
  fontWeight: "bold",
  color: "#007EBE",
},
head: {
  flexDirection: "row",
  paddingHorizontal: 25,
  alignItems: "center",
},
main:{
  width:'100%',

},
labelHead: {
  fontSize: 36,
  fontWeight: "600",
  color: "#77E17A",
},
serviceContainer:{
    padding:30,
    marginVertical:"8%",
    alignSelf:'center',
    width:'90%',
    borderRadius:12,
    elevation:2,
    backgroundColor:"#fff"
},
title:{
    fontSize:18,
    color:'gray'
},
button:{
    padding:20,
    marginVertical:10,
    backgroundColor:'#fff',
    borderWidth:0.7,
    borderColor:'#d3d3d3',
    borderRadius:6,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between'
},
labelThree:{
  color:"black",
  fontSize:22,
  fontWeight:'400',
  paddingVertical:10
}

});
