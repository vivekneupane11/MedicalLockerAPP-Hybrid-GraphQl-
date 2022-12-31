import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ToastAndroid,
  Image,
} from "react-native";

import { GET_SERVICE } from "./query";
import { useQuery } from "@apollo/client";
import moment from "moment";
import Header from "./components/header";
import { LinearGradient } from "expo-linear-gradient";
const width = Dimensions.get("window").width;

export default function CheckListEquipmentScreen({ navigation, route }) {
  const [equipments, setEquipments] = useState([]);
  const [qty, setQty] = useState([]);
  const [invalidEquipments, setInvalidEquipments] = useState([]);
  const { serviceId, trolleyName } = route.params;

  const { data, loading } = useQuery(GET_SERVICE, {
    variables: {
      getServiceId: serviceId,
    },
    onCompleted: (data) => {
      if (trolleyName === "trolleyOne") {
        setEquipments(data?.getService?.service?.trolleyOne);
      } else if (trolleyName === "trolleyTwo") {
        setEquipments(data?.getService?.service?.trolleyTwo);
      } else if (trolleyName === "trolleyThree") {
        setEquipments(data?.getService?.service?.trolleyThree);
      } else if (trolleyName === "trolleyFour") {
        setEquipments(data?.getService?.service?.trolleyFour);
      }
    },
  }); //execute query
  const addQty = (e, i) => {
    let oldQty = [...qty];
    oldQty[i] = e;
    setQty([...oldQty]);
  };
  const validateTrolley = () => {
    const result = equipments.map((e, i) => {
      if (qty[i] !== e.qty) {
        if (
          todayDate.toString() < moment(e.expiryDate) &&
          moment(todayDate).add(2, "month") > moment(e.expiryDate)
        ) {
          qty[i] = e.qty;
          return;
        }
        alert(`Invalid quantity of ${e.name}. It Should be ${e.qty}`);
        setInvalidEquipments((init) => [i, ...init]);
        return;
      }
      return qty[i] === e.qty;
    });
    const check = result.filter((e) => e === true);
    if (check.length == result.length) {
      alert("Validation is sucessfull. You can go back");
      setInvalidEquipments([]);
    }
  };
  let todayDate = Date.now();
  return (
    <View style={styles.container}>
            <Header />

     <View style={styles.main}>
        <View style={styles.head}>
          <Image source={require("./assets/verifyicons.png")} />
          <Text style={styles.labelHead}> Checklist mensuelle du chariot d'urgence  </Text>
        </View>
<View style={styles.content}>
<Text style={styles.trolleyName}>{trolleyName}</Text>
<LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={styles.buttonGradient}>
<View style={styles.header}>
  <Text style={styles.headerLabel} >Molecules</Text>
  <Text style={styles.headerLabel} >Quantities</Text>
  <Text style={styles.headerLabel} >Quantities present</Text>
  <Text style={styles.headerLabel} >Etat</Text>


</View>
</LinearGradient>

{equipments.map((e, i) => {
        return (
          <View key={i} style={styles.checklistcontainer}>
            <Text style={styles.checkboxLabel}>{e.name}</Text>
            <TextInput
              style={styles.additionalTextInput}
              multiline={false}
              value={
              e.qty
              }
              autoCapitalize="sentences"
              autoCorrect={true}
              keyboardType="numeric"
              returnKeyType="done"
              // onKeyPress={this.handleKeyDown}
              placeholder="Enter Quantity"
            />
                       <TextInput
              style={styles.additionalTextInput}
              multiline={false}
              value={
                todayDate.toString() < moment(e.expiryDate) &&
                moment(todayDate).add(2, "month") > moment(e.expiryDate)
                  ? e.qty
                  : 0
              }
              autoCapitalize="sentences"
              autoCorrect={true}
              onChangeText={(e) => addQty(e, i)}
              keyboardType="numeric"
              returnKeyType="done"
              // onKeyPress={this.handleKeyDown}
              placeholder="Enter Quantity"
            />
            <View style={styles.checkPanel}>
              {
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      elevation: 2,
                      backgroundColor:
                        todayDate.toString() > moment(e.expiryDate) ||
                        invalidEquipments.includes(i)
                          ? "red"
                          : "white",
                      height: 25,
                      borderRadius: 100,
                      width: 25,
                      marginLeft: 8,
                    }}
                  ></View>
                  <View
                    style={{
                      elevation: 2,
                      backgroundColor:
                        todayDate.toString() < moment(e.expiryDate) &&
                        moment(todayDate).add(2, "month") >
                          moment(e.expiryDate) &&
                        !invalidEquipments.includes(i)
                          ? "green"
                          : "white",
                      height: 25,
                      borderRadius: 100,
                      width: 25,
                      marginLeft: 8,
                    }}
                  ></View>
                  <View
                    style={{
                      elevation: 2,
                      backgroundColor:
                        todayDate.toString() < e.expiryDate &&
                        moment(todayDate).add(2, "month") <
                          moment(e.expiryDate) &&
                        !invalidEquipments.includes(i)
                          ? "rgb(50,205,50)"
                          : "white",
                      height: 25,
                      borderRadius: 100,
                      width: 25,
                      marginLeft: 8,
                    }}
                  ></View>
                </View>
              }
            </View>
          </View>
        );
      })}
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
        onPress={validateTrolley}

      >
        <Text style={[styles.title, { color: "#fff" }]}>Validate</Text>
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
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
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
  additionalTextInput: {
    padding: 3,
    borderBottomWidth: 1,
    borderColor: "#d3d3d3",
    fontSize: 12,
    borderRadius: 4,
    paddingHorizontal: 10,
    width:150,
    marginHorizontal:14,
    
  },
  title: {
    fontSize: 18,
    color: "#000",
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:15
  },
  headerLabel:{
fontSize:18,
paddingRight:120,
fontWeight:'600',
color:'#fff'
  },
  trolleyName:{
fontSize:22,
fontWeight:'600',
textTransform:'capitalize',
paddingVertical:10
  },
  content:{
    padding:25,
    marginVertical:20,
    borderRadius:9,
    justifyContent:'center',
    elevation:2,
    backgroundColor:'#fff',
  },
  button: {
    padding: 20,
    marginVertical: 10,
    width: "40%",
    elevation: 2,
    borderRadius: 6,
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf:'flex-end'
  },
  checklistcontainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 12,
    width: "90%",
  },
  // header: {
  //   marginTop: 70,
  //   fontSize: 28,
  //   fontWeight: "bold",
  //   color: "#007EBE",
  // },
  checkPanel: {
    flexDirection: "row",
    marginLeft: 10,
  },
  checkboxLabel: {
    marginRight: 10,
    fontSize: 14,
    textTransform:'capitalize'
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
  buttonGradient:{
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:9
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
