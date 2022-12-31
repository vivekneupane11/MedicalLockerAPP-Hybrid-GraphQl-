import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
  ScrollView,
  Image,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Entypo ,AntDesign} from "@expo/vector-icons";
import Header from "./components/header";

const width = Dimensions.get("window").width;

export default function ChecklistScreen({ navigation, route }) {
  const { serviceId, tapsType } = route.params;



  return (
 <ScrollView contentContainerStyle={{flexGrow:1}}>
 <View style={styles.container}>
            <Header />

     <View style={styles.main}>
        <View style={styles.head}>
          <Image source={require("./assets/verifyicons.png")} />
          <Text style={styles.labelHead}> Checklist mensuelle du chariot d'urgence  </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.headContent}>
            <Text style={styles.textOne}>Verifier la conformite des elements suivants</Text>
            <Text style={styles.textTwo}> Val    Inv</Text>
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
    <TouchableOpacity onPress={()=>navigation.navigate('TakePicture',{
     
          serviceId: serviceId,
  
    })} >
    <AntDesign  name="camera" size={24} color="#4D4A95" />

    </TouchableOpacity>
  </View>
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
    alignItems:'center',
    backgroundColor: "#fff",
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal:10
  },
  main:{
width:'90%'
  },
  content:{
    justifyContent:'center',
    alignItems:'center',
    padding:20,
      elevation:2,
      backgroundColor:'#fff',
      marginTop:30,
      borderRadius:12
  },
  headContent:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'stretch',
    width:'90%',
    paddingVertical:10
  },
  labelHead: {
    fontSize: 36,
    fontWeight: "600",
    color: "#77E17A",
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
    width:'90%'
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007EBE",
    marginTop:80
  },
  checkPanel: {
    flexDirection: "row",
    marginLeft: 10,
  },
  textOne:{
fontSize:22,
fontWeight:'600'
  },
  textTwo:{
    fontSize:22,
    fontWeight:'500',
    marginRight:20
      },
  checkboxLabel: {
    marginRight: 10,
    fontSize: 14,
  },
  buttonExport: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 35,
    paddingRight: 35,
    elevation: 2,
    color: "white",
    margin: 10,
    backgroundColor: "#2D4CB2",
    borderRadius: 12,
    width: width - 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
