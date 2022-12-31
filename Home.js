import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import DropDownPicker from "react-native-dropdown-picker";
import leftPanelImage from "./assets/left-panel.png";
import qr from "./assets/qr.png";

import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
export default function HomeScreen({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.main}>
        <Image
          resizeMode="cover"
          style={styles.leftPanel}
          source={leftPanelImage}
        />

        <View style={styles.rightPanel}>
          <Text style={styles.textOne}>Bienvenue sur </Text>
          <Text style={styles.textTwo}>HospiCheck!</Text>
          <Text style={styles.textThree}>
          Veuillez identifier votre service de soin:
          </Text>
          <Text style={styles.textFour}>
          Séléctionner dans la liste ci dessous
          </Text>
          <DropDownPicker
            translation={{
              PLACEHOLDER: "Urgences",
            }}
            placeholderStyle={{
              color: "grey",
            }}
            dropDownContainerStyle={{
              backgroundColor: "#ffffff",
              borderColor: "#f5f5f5",
            }}
            style={styles.dropDown}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />

          <View style={styles.containInfo}>
            <View style={styles.divider}></View>
            <Text style={styles.info}>Ou scanner le QRcode du service</Text>
          </View>

          <View style={styles.bottomPanel}>
            <Image style={styles.qrImage} height="100" source={qr} />
            <LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={styles.button}>
            <TouchableOpacity
            //@TODO
            onPress={()=>        navigation.navigate('Login',{
              serviceId:"63a98aa0d12e62594b5fa97d"
          })}
              // onPress={() => navigation.navigate("Scanner")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Se Connector</Text>
            </TouchableOpacity>
            </LinearGradient>
          </View>
          <Text style={styles.accountText}>
            Don't have an account? <Text style={styles.signup}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  main: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signup: {
    color: "#77E17A",
    fontWeight: "900",
  },
  accountText: {
    textAlign: "center",
    fontSize: 18,
    marginTop:'7%'
  },
  info: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    paddingHorizontal: 5,
    position: "absolute",
    top: "80%",
    left: "14%",
    backgroundColor: "#fff",
  },
  qrImage:{
marginVertical:'20%'
  },
  containInfo: {
    position: "relative",
    marginVertical: "10%",
  },
  divider: {
    marginTop: "20%",
    height: 1,
    width: "100%",
    backgroundColor: "#d3d3d3",
  },

  buttonTop: {
    position: "absolute",
    bottom: "10%",
    flex: 1,
    textAlign: "center",
  },
  button: {
    paddingVertical:5,
    marginVertical:10,
    paddingLeft: 35,
    paddingRight: 35,
    color: "white",
    borderRadius: 6,
    width:'100%'
  },
  textOne: {
    fontSize: 32,
    fontWeight: "800",
    paddingTop: 5,
  },
  textTwo: {
    fontSize: 38,
    fontWeight: "800",
    color: "#77E17A",
  },
  textThree: {
    paddingVertical: 30,
    fontSize: 18,
    fontWeight: "900",
  },
  textFour: {
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  dropDown: {
    borderColor: "#f5f5f5",
    borderRadius: 0,
    elevation: 0,
    padding: 20,
    fontSize: 28,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
  bottomPanel: {
    justifyContent: "center",
    alignItems: "center",
  },
  leftPanel: {
    width: "50%",
    height: "100%",
  },
  rightPanel: {
    width: "50%",
    height: "100%",
    paddingVertical: 55,
    marginTop: "10%",
    padding: "5%",
  },
});
