import { Text,View,StyleSheet,TouchableOpacity,Dimensions, Image, TextInput, ScrollView, ToastAndroid } from 'react-native'
import Header from './components/header';
import { LinearGradient } from 'expo-linear-gradient';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Entypo } from "@expo/vector-icons";
import { useState } from 'react';
import Modal from "react-native-modal";
import { MaterialIcons,AntDesign } from '@expo/vector-icons'; 
import { CREATE_INVENTORY_QUERY } from './query';
import { useMutation } from '@apollo/client';


export default function PatientInventorySix({ navigation,route }) {
  const [values,setValues] = useState({})
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const  [createInventory]  = useMutation(
    CREATE_INVENTORY_QUERY
  ); //execute query
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
      fillColor="red"
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
    <Text style={styles.grouperText}>Mayens De Relements</Text>
</View>
<View style={styles.group}>
<BouncyCheckbox
      isChecked={true}

      size={25}
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#f7f7f7" }}
      innerIconStyle={{ borderWidth: 0.7 }}
      onPress={(isChecked) => {
        console.log(isChecked);
      }}
    />
    <Text style={styles.grouperText}>Bijourex</Text>
</View>
</View>
<Text style={styles.textOne}>ARGENT</Text>

<View style={styles.contentContainer}>
    <View style={styles.con}>
        <Text>Billet(s)  ou piece's</Text>
        <Text>Nambre</Text>
        <Text>Euros</Text>
        <Text>Centimes</Text>

    </View>
    <View style={styles.con}>
        <Text style={{marginRight:100}}>100</Text>
        <TextInput
        onChangeText={e=>{setValues({...values,valueOne:e})}}
        style={styles.input}

      />       
    <TextInput
        style={styles.input}
        onChangeText={e=>{setValues({...values,valueOne:e})}}

      />               
          <TextInput
        style={styles.input}
        onChangeText={e=>{setValues({...values,valueOne:e})}}

      />       

    </View>
    <View style={styles.con}>
        <Text style={{marginRight:110}}>50</Text>
        <TextInput
        style={styles.input}
        onChangeText={e=>{setValues({...values,valueTwo:e})}}
      />       
    <TextInput
        style={styles.input}
        onChangeText={e=>{setValues({...values,valueTwo:e})}}

      />               
          <TextInput
        style={styles.input}
        onChangeText={e=>{setValues({...values,valueTwo:e})}}

      />       

    </View>
    <View style={styles.con}>
        <Text style={{marginRight:110}}>20</Text>
        <TextInput
        style={styles.input}
        onChangeText={e=>{setValues({...values,valueThree:e})}}
      />       
    <TextInput
        style={styles.input}
        onChangeText={e=>{setValues({...values,valueThree:e})}}
      />               
          <TextInput
        style={styles.input}
        onChangeText={e=>{setValues({...values,valueThree:e})}}
      />       

    </View>
    <View style={styles.con}>
        <Text style={{marginRight:110}}>10</Text>
        <TextInput
        style={styles.input}
        onChangeText={e=>{setValues({...values,valueFour:e})}}

      />       
    <TextInput
        style={styles.input}
        onChangeText={e=>{setValues({...values,valueFour:e})}}

      />               
          <TextInput
        style={styles.input}
        onChangeText={e=>{setValues({...values,valueFour:e})}}

      />       

    </View>
    <View style={styles.con}>
        <Text style={{marginRight:120}}>5</Text>
        <TextInput
        style={styles.input}
onChangeText={e=>{setValues({...values,valueFive:e})}}
      />       
    <TextInput
        style={styles.input}
onChangeText={e=>{setValues({...values,valueFive:e})}}
      />               
          <TextInput
        style={styles.input}
onChangeText={e=>{setValues({...values,valueFive:e})}}
      />       

    </View>
    <View style={styles.con}>
        <Text style={{marginRight:120}}>2</Text>
        <TextInput
        style={styles.input}
onChangeText={e=>{setValues({...values,valueSix:e})}}
      />       
    <TextInput
        style={styles.input}
onChangeText={e=>{setValues({...values,valueSix:e})}}
      />               
          <TextInput
        style={styles.input}
onChangeText={e=>{setValues({...values,valueSix:e})}}
      />       

    </View>
    <View style={styles.con}>
        <Text style={{marginRight:120}}>1</Text>
        <TextInput
        style={styles.input}
onChangeText={e=>{setValues({...values,valueSeven:e})}}
      />       
    <TextInput
        style={styles.input}
onChangeText={e=>{setValues({...values,valueSeven:e})}}
      />               
          <TextInput
        style={styles.input}
onChangeText={e=>{setValues({...values,valueSeven:e})}}
      />       

    </View>
    <View style={styles.con}>
        <Text style={{marginRight:100}}>0.50</Text>
        <TextInput
        style={styles.input}
onChangeText={e=>{setValues({...values,valueEight:e})}}
      />       
    <TextInput
        style={styles.input}
onChangeText={e=>{setValues({...values,valueEight:e})}}
      />               
          <TextInput
        style={styles.input}
onChangeText={e=>{setValues({...values,valueEight:e})}}
      />       

    </View>
    <View style={[styles.con,{flexDirection:'column',alignSelf:'flex-end',justifyContent:'flex-start',alignItems:'flex-start'}]}>
        <Text style={{marginLeft:60,marginVertical:10,textAlign:'left',fontWeight:'600',fontSize:20}}>Total</Text>
        <TextInput
        style={[styles.input,{width:'90%'}]}
        onChangeText={e=>{setValues({...values,valueNine:e})}}
      />       
       

    </View>
    <Text style={styles.textOne}>MOYENS DE PAIEMENT</Text>
    <View style={[styles.contentContainer,{flexDirection:'row'}]}>
  <View style={styles.leftPanel}>
<View style={styles.form}>
<View style={styles.leftForm}>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Cartes de credits</Text>
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
Carte Bleue</Text>
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
<TextInput onChangeText={e=>{setValues({...values,valueNine:e})}}
  style={{marginVertical:12,paddingVertical:6 ,width:180,fontSize:18,borderBottomWidth:0.5,borderBottomColor:'#d3d3d3'}}></TextInput>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Master Card Euro</Text>
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
Chequers</Text>
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

</View>
<View style={styles.rightForm}>
<TextInput onChangeText={e=>{setValues({...values,valueTen:e})}}
 style={{marginVertical:12,paddingVertical:6 ,width:180,fontSize:18,borderBottomWidth:0.5,borderBottomColor:'#d3d3d3'}}></TextInput>

</View>
</View>
</View>
<View>

<View style={[styles.rightForm,{marginLeft:20}]}>
<View style={styles.form}>
<View style={[styles.leftForm,{flexDirection:'row',width:'40%',justifyContent:'space-between'}]}>
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
American Exp</Text>
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
<View style={styles.checkBox}>
<Text style={styles.checkBoxLabel}>
Autres</Text>
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

</View>
<View style={[styles.form,{paddingTop:10}]}>
<View style={[styles.leftForm,{flexDirection:'row',width:'100%'}]}>
<View style={styles.checkBox}>
<Text style={[styles.checkBoxLabel,{marginRight:170,fontWeight:'600'}]}>
Pass Navigo/Titre de transport
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

</View>

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
onPress={()=>navigation.navigate('patientinventoryfive')}

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
<Modal isVisible={isModalVisible}>
        <View style={{ flex: 1,justifyContent:'center',alignItems:'center' }}>
<View style={{height:500,width:'75%',backgroundColor:'#fff',borderRadius:9,justifyContent:'center',alignItems:'center'}}>
<AntDesign onPress={toggleModal}  name="closecircleo" size={24} color="black" style={{position:'absolute',top:15,right:15}} />
<MaterialIcons name="celebration" size={118} color="#81E9AA" />
<Text style={{fontSize:28,fontWeight:'400'}}>Thank You. Successfully submitted.</Text>
</View>
          {/* <Button title="Hide modal" onPress={toggleModal} /> */}
        </View>
      </Modal>

<TouchableOpacity
style={styles.finalButton}
onPress={()=>{
try{
  let value = JSON.stringify({...data,dataStepSix:values})
  createInventory({
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
}
}
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
},
button:{
  padding:10,
  paddingHorizontal:28,
  backgroundColor:'#d3d3d3',
  marginHorizontal:10,
  borderRadius:6
},
input: {
    height: 55,
    width:160,
    marginLeft:60,
backgroundColor:'#f7f7f7',
borderRadius:6,
    padding: 10,
    fontSize:22,
  },
con:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'90%',
    paddingTop:15
},
textOne:{
    fontWeight:'600',
    paddingTop:40,
    fontSize:20
}
});
