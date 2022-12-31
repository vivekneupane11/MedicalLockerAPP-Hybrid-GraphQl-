import { Text,View,StyleSheet,TouchableOpacity,Dimensions, Image, TextInput, ScrollView } from 'react-native'
import Header from './components/header';
import { LinearGradient } from 'expo-linear-gradient';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Entypo ,AntDesign} from "@expo/vector-icons";
import { useState } from 'react';


export default function PatientInventoryFour({ navigation,route }) {
  const [values,setValues] = useState({})

  const { data } = route.params;
console.log(data)
  return (
    <ScrollView contentContainerStyle={{flexGrow:1}}>
    <View style={styles.container}>
      <Header/>
      <View style={styles.main}>
        <View style={styles.head}>
          <Image source={require("./assets/verifyicons.png")} />
          <Text style={styles.labelHead}> INVENTAIRE  D'ENTREE </Text>
        </View>
<View style={styles.content}>
<View style={styles.timeline}>
  <View style={styles.line}>

  </View>
<View style={styles.group}>
<BouncyCheckbox
      size={25}
      fillColor="#77E17A"
      unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7 }}
      onPress={(isChecked) => {
        console.log(isChecked);
      }}
    />
    <Text style={styles.grouperText}>Vetements Portes</Text>
</View>
<View style={styles.group}>
<BouncyCheckbox
      size={25}
      fillColor="red"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#f7f7f7" }}
      innerIconStyle={{ borderWidth: 0.7 }}
      onPress={(isChecked) => {
        console.log(isChecked);
      }}
    />
    <Text style={styles.grouperText}>Protheses(s)</Text>
</View>
<View style={styles.group}>
<BouncyCheckbox
      size={25}
      fillColor="red"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#f7f7f7" }}
      innerIconStyle={{ borderWidth: 0.7 }}
      onPress={(isChecked) => {
        console.log(isChecked);
      }}
    />
    <Text style={styles.grouperText}>Papiers </Text>
</View>
<View style={styles.group}>
<BouncyCheckbox
      size={25}
      isChecked={true}

      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#f7f7f7" }}
      innerIconStyle={{ borderWidth: 0.7 }}
      onPress={(isChecked) => {
        console.log(isChecked);
      }}
    />
    <Text style={styles.grouperText}>Objects</Text>
</View>
<View style={styles.group}>
<BouncyCheckbox
      size={25}
      fillColor="red"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#f7f7f7" }}
      innerIconStyle={{ borderWidth: 0.7 }}
      onPress={(isChecked) => {
        console.log(isChecked);
      }}
    />
    <Text style={styles.grouperText}>Bijourex</Text>
</View>
<View style={styles.group}>
<BouncyCheckbox
      size={25}
      fillColor="red"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#f7f7f7" }}
      innerIconStyle={{ borderWidth: 0.7 }}
      onPress={(isChecked) => {
        console.log(isChecked);
      }}
    />
    <Text style={styles.grouperText}>Mayens De Relements</Text>
</View>
</View>

<View style={styles.contentContainer}>
  <View style={styles.leftPanel}>
<View style={styles.form}>
<View style={styles.leftForm}>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Telephone portable
</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionOne:true})
      }}
    />
</View>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Garde par le patient</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionTwo:true})
      }}
    />
</View>
</View>
<View style={styles.rightForm}>
<TextInput onChangeText={e=>{setValues({...values,valueOne:e})}} style={{marginVertical:12,paddingVertical:6 ,width:180,fontSize:18,borderBottomWidth:0.5,borderBottomColor:'#d3d3d3'}}></TextInput>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
  Rendu a la famille
</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionThree:true})
      }}
    />
</View>
</View>
</View>
<View style={styles.form}>
<View style={styles.leftForm}>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Tablette tactile ou tab..
</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionFour:true})
      }}
    />
</View>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Garde par le patient</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionFive:true})
      }}
    />
</View>
</View>
<View style={styles.rightForm}>
<TextInput onChangeText={e=>{setValues({...values,valueTwo:e})}} style={{marginVertical:12,paddingVertical:6 ,width:180,fontSize:18,borderBottomWidth:0.5,borderBottomColor:'#d3d3d3'}}></TextInput>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
  Rendu a la famille
</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionSix:true})
      }}
    />
</View>
</View>
</View><View style={styles.form}>
<View style={styles.leftForm}>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Rasoir électrique
</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionSeven:true})
      }}
    />
</View>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Garde par le patient</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionEight:true})
      }}
    />
</View>
</View>
<View style={styles.rightForm}>
<TextInput onChangeText={e=>{setValues({...values,valueThree:e})}} style={{marginVertical:12,paddingVertical:6 ,width:180,fontSize:18,borderBottomWidth:0.5,borderBottomColor:'#d3d3d3'}}></TextInput>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
  Rendu a la famille
</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionNine:true})
      }}
    />
</View>
</View>
</View><View style={styles.form}>
<View style={styles.leftForm}>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Cannes
</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionTen:true})
      }}
    />
</View>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Garde par le patient</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionEleven:true})
      }}
    />
</View>
</View>
<View style={styles.rightForm}>
<TextInput  onChangeText={e=>{setValues({...values,valueFour:e})}} style={{marginVertical:12,paddingVertical:6 ,width:180,fontSize:18,borderBottomWidth:0.5,borderBottomColor:'#d3d3d3'}}></TextInput>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
  Rendu a la famille
</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionTwelve:true})
      }}
    />
</View>
</View>
</View><View style={styles.form}>
<View style={styles.leftForm}>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Cannes</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionThirteen:true})
      }}
    />
</View>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Garde par le patient</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionFourteen:true})
      }}
    />
</View>
</View>
<View style={styles.rightForm}>
<TextInput  onChangeText={e=>{setValues({...values,valueFive:e})}} style={{marginVertical:12,paddingVertical:6 ,width:180,fontSize:18,borderBottomWidth:0.5,borderBottomColor:'#d3d3d3'}}></TextInput>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
  Rendu a la famille
</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionFifteen:true})
      }}
    />
</View>
</View>
</View>
  </View>
  <View style={styles.rightPanel}>
  <View style={styles.form}>
<View style={styles.leftForm}>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Deambulateur
</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionSixteen:true})
      }}
    />
</View>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Garde par le patient</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionSeventeen:true})
      }}
    />
</View>
</View>
<View style={styles.rightForm}>
<TextInput onChangeText={e=>{setValues({...values,valueSix:e})}} style={{marginVertical:12,paddingVertical:6 ,width:180,fontSize:18,borderBottomWidth:0.5,borderBottomColor:'#d3d3d3'}}></TextInput>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
  Rendu a la famille
</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionEighteen:true})
      }}
    />
</View>
</View>
</View>
<View style={styles.form}>
<View style={styles.leftForm}>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Sac a main</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionNineteen:true})
      }}
    />
</View>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Garde par le patient</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionTwenty:true})
      }}
    />
</View>
</View>
<View style={styles.rightForm}>
<TextInput onChangeText={e=>{setValues({...values,valueSeven:e})}} style={{marginVertical:12,paddingVertical:6 ,width:180,fontSize:18,borderBottomWidth:0.5,borderBottomColor:'#d3d3d3'}}></TextInput>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
  Rendu a la famille
</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionTwentyOne:true})
      }}
    />
</View>
</View>
</View>
<View style={styles.form}>
<View style={styles.leftForm}>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Trousse de tailette</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionTwentyTwo:true})
      }}
    />
</View>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Garde par le patient</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionTwentyThree:true})
      }}
    />
</View>
</View>
<View style={styles.rightForm}>
<TextInput onChangeText={e=>{setValues({...values,valueEight:e})}} style={{marginVertical:12,paddingVertical:6 ,width:180,fontSize:18,borderBottomWidth:0.5,borderBottomColor:'#d3d3d3'}}></TextInput>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
  Rendu a la famille
</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionTwentyFour:true})
      }}
    />
</View>
</View>
</View>
<View style={styles.form}>
<View style={styles.leftForm}>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Valise</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionTwentyFive:true})
      }}
    />
</View>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Garde par le patient</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionTwentySix:true})
      }}
    />
</View>
</View>
<View style={styles.rightForm}>
<TextInput onChangeText={e=>{setValues({...values,valueNine:e})}} style={{marginVertical:12,paddingVertical:6 ,width:180,fontSize:18,borderBottomWidth:0.5,borderBottomColor:'#d3d3d3'}}></TextInput>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
  Rendu a la famille
</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionTwentySeven:true})
      }}
    />
</View>
</View>
</View>






<View style={styles.form}>
<View style={styles.leftForm}>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
  Rendu a la famille
</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionTwentyEight:true})
      }}
    />
</View>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Garde par le patient</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionTwentyNine:true})
      }}
    />
</View>
</View>
<View style={styles.rightForm}>
<TextInput onChangeText={e=>{setValues({...values,valueTen:e})}} style={{marginVertical:12,paddingVertical:6 ,width:180,fontSize:18,borderBottomWidth:0.5,borderBottomColor:'#d3d3d3'}}></TextInput>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
  Rendu a la famille
</Text>
<BouncyCheckbox
      size={25}
      style={{borderRadius:4}}
      fillColor="gray"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#77E17A" }}
      innerIconStyle={{ borderWidth: 0.7,borderRadius:2 }}
      onPress={(isChecked) => {
        setValues({...values,optionThirty:true})
      }}
    />
</View>
</View>
</View>
</View>
</View>
<View style={{flexDirection:"row" ,justifyContent:'flex-end',alignItems:'flex-end'}}>
<LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['gray', 'gray', 'gray']}
        style={[
          styles.button,
          { justifyContent: "center", marginLeft:40,marginTop:20, alignItems:'center',alignSelf:'center'},
        ]}
>
<TouchableOpacity
style={styles.finalButton}
onPress={()=>navigation.navigate('patientinventorythree')}

>
      
        <Text style={[ {fontSize:24, color: "#fff", }]}>Previous</Text>
      </TouchableOpacity>
      </LinearGradient>
      <LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={[
          styles.button,
          { justifyContent: "center", marginHorizontal:40,marginTop:20, alignItems:'center',alignSelf:'center'},
        ]}
>
<TouchableOpacity
style={styles.finalButton}
onPress={()=>navigation.navigate('patientinventoryfive',{
  data:{
    dataStepOne:data.dataStepOne,
    dataStepTwo:data.dataStepTwo,
    dataStepThree:data.dataStepThree,
    dataStepFour:values
  }
})}
>
      
        <Text style={[ {fontSize:24, color: "#fff", }]}>Next</Text>
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
content:{
  elevation:2,
  borderRadius:6,
  backgroundColor:'#fff',
  width:'92%',
  alignSelf:'center',
  marginVertical:20,
  padding:15
},
timeline:{
  flexDirection:'row',
  justifyContent:'space-around'
},
grouper:{
  justifyContent:'center',
  alignItems:'center'
},
grouperText:{
  fontSize:12,
  paddingVertical:6,
  color:'gray',
  fontWeight:'600'
},
line:{
borderTopWidth:0.7,
width:'85%',
position:'absolute',
zIndex:-1,
top:13,
borderColor:'#d3d3d3'
},
form:{
flexDirection:'row'
},
leftForm:{
  padding:20,
},
checkBox:{
  flexDirection:'row',
  justifyContent:'space-between'
},
checkBoxLabel:{
  paddingRight:8,
  paddingVertical:12,
  fontSize:12
},
contentContainer:{
  flexDirection:'row'
},
button:{
  padding:10,
  paddingHorizontal:28,
  backgroundColor:'#d3d3d3',
  marginHorizontal:10,
  borderRadius:6
},
});
