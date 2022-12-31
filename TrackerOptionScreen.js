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
export default function TrackerOptionScreen({ navigation, route }) {
  const { serviceId } = route.params;
  const [departmentName, setDepartmentName] = useState("");

  const { data, loading } = useQuery(GET_SERVICE, {
    variables: {
      getServiceId: serviceId,
    },
  }); //execute query

  const { departmentData, departmentLoading } = useQuery(
    GET_DEPARTMENT_BY_ADMIN,
    {
      variables: {
        getDepartmentByAdmin: data?.getService?.service?.admin,
      },
      fetchPolicy: "no-cache",
      onCompleted: (data) => {
        console.log("here", data);
        setDepartmentName(
          data?.getDepartmentByAdmin?.department?.departmentName
        );
      },
    }
  );

  const handleChecks = (tapsType) => {
    navigation.navigate("Checklist", {
      tapsType: tapsType,
      serviceId: serviceId,
    });
  };
  const handleMonthlyCheck = (tapsType) => {
    navigation.navigate("ServiceList", {
      tapsType: tapsType,
      serviceId: serviceId,
      admin: data?.getService?.service?.admin,
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <View style={styles.head}>
          <Image source={require("./assets/verifyicons.png")} />
          <Text style={styles.labelHead}> Verification Du Chariot </Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.textHead}>Service de reanimation</Text>
          <View style={styles.grouper}>
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
</View>
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
    color: "#77E17A",
  },
  content: {
    elevation: 2,
    backgroundColor: "#fff",
    width: "92%",
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
    width:'98%',
    marginVertical:10,
    justifyContent:'center',
    alignItems:'center',
    elevation:2,
    backgroundColor:"#f2f2f2",
    borderRadius:12
  },
  buttonText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:22
  },
  formGroup:{
    marginBottom:3
  }

});
