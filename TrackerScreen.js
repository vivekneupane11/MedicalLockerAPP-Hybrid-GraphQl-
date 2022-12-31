import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { GET_SERVICE } from "./query";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import moment, { months } from "moment";

import { useQuery } from "@apollo/client";
import { Calendar, CalendarUtils, LocaleConfig } from "react-native-calendars";

import Header from "./components/header";
import { LinearGradient } from "expo-linear-gradient";
LocaleConfig.locales["fr"] = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ],
  monthNamesShort: [
    "Janv.",
    "Févr.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc.",
  ],
  dayNames: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ],
  dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = "fr";
export default function TrackerScreen({ navigation, route }) {
  const [taps, setTaps] = useState([]);
  const [tapsDoneAt, setTapsDoneAt] = useState([]);
  const { serviceId, tapsType } = route.params;
  const [count, setCount] = useState(0);
  const { data, loading } = useQuery(GET_SERVICE, {
    variables: {
      getServiceId: serviceId,
    },
    onCompleted: () => {
      setCount((init) => init + 1);
    },
    fetchPolicy: "no-cache",
  }); //execute query

  const initialDate = new Date().toISOString().split("T")[0];
  console.log(data, "hereeee");

  useEffect(() => {
    if (data?.getService?.service) {
      const { dailyTap, dailyTapDoneAt, monthlyTap, monthlyTapDoneAt } =
        data.getService.service;
      if (tapsType == "daily") {
        setTaps(dailyTap);
        setTapsDoneAt(dailyTapDoneAt);
      } else if (tapsType == "monthly" || tapsType == "emergency") {
        setTaps(monthlyTap);
        setTapsDoneAt(monthlyTapDoneAt);
      }
    }
  }, [loading]);

  return (
    <View style={{ flex: 1, flexGrow: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "#fff",
        }}
      >
        <Header />
        <View style={styles.main}>
          <View style={styles.head}>
            <Image source={require("./assets/verifyicons.png")} />
            <Text style={styles.labelHead}>
              {" "}
              Verification apres ouverture du chariot{" "}
            </Text>
          </View>
          <View style={styles.container}>
            <View style={styles.calenderInfo}>
              <View style={styles.calenderContainer}>
                <Calendar
                  // Initially visible month. Default = now
                  markingType={"custom"}
                  markedDates={{
                    "2022-12-29": {
                      container: {
                        backgroundColor: "green",
                      },
                      text: {
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 22,
                      },
                    },
                  }}
                  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                  // minDate={'2012-05-10'}
                  // maxDate={'2012-05-30'}
                  // Handler which gets executed on day press. Default = undefined
                  onDayPress={(day) => {
                    console.log("selected day", day);
                  }}
                  showWeekNumbers
                  // Handler which gets executed on day long press. Default = undefined
                  onDayLongPress={(day) => {
                    console.log("selected day", day);
                  }}
                  calendarHeaderComponent={() => (
                    <MaterialIcons name="keyboard-arrow-left" />
                  )}
                  headerData={{
                    calendarDate: initialDate,
                  }}
                  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                  monthFormat={"yyyy MM"}
                  // Handler which gets executed when visible month changes in calendar. Default = undefined
                  onMonthChange={(month) => {
                    console.log("month changed", month);
                  }}
                  // Hide month navigation arrows. Default = false
                  // hideArrows={true}
                  // Replace default arrows with custom ones (direction can be 'left' or 'right')
                  renderArrow={(direction) =>
                    direction == "left" ? (
                      <MaterialIcons
                        name="keyboard-arrow-left"
                        color="blue"
                        size={28}
                      />
                    ) : (
                      <MaterialIcons
                        name="keyboard-arrow-right"
                        color="blue"
                        size={28}
                      />
                    )
                  }
                  // Do not show days of other months in month page. Default = false
                  hideExtraDays={false}
                  // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
                  // day from another month that is visible in calendar page. Default = false
                  disableMonthChange={false}
                  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                  firstDay={1}
                  // Hide day names. Default = false
                  hideDayNames={false}
                  // Show week numbers to the left. Default = false
                  showWeekNumbers={true}
                  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                  onPressArrowLeft={(subtractMonth) => subtractMonth()}
                  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                  onPressArrowRight={(addMonth) => addMonth()}
                  // Disable left arrow. Default = false
                  disableArrowLeft={true}
                  // Disable right arrow. Default = false
                  disableArrowRight={true}
                  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                  disableAllTouchEventsForDisabledDays={true}
                  // Replace default month and year title with custom one. the function receive a date as parameter
                  renderHeader={(date) => {
                    /*Return JSX*/
                  }}
                  dayComponent={({ date, state }) => {
                    return (
                      <View>
                        <Text
                          style={{
                            textAlign: "center",
                            padding: 12,
                            fontSize: 24,
                            color: state === "disabled" ? "gray" : "black",
                          }}
                        >
                          {date.day}
                        </Text>
                      </View>
                    );
                  }}
                  // Enable the option to swipe between months. Default = false
                  enableSwipeMonths={true}
                  theme={{
                    backgroundColor: "blue",
                    calendarBackground: "#fff",
                    textSectionTitleColor: "red",
                    textSectionTitleDisabledColor: "#d9e1e8",
                    selectedDayBackgroundColor: "red",
                    selectedDayTextColor: "red",
                    todayTextColor: "blue",
                    dayTextColor: "black",
                    textDisabledColor: "gray",
                    dotColor: "blue",
                    selectedDotColor: "purple",
                    arrowColor: "orange",
                    disabledArrowColor: "#d9e1e8",
                    monthTextColor: "blue",
                    indicatorColor: "blue",
                    textDayFontFamily: "monospace",
                    textMonthFontFamily: "monospace",
                    textDayHeaderFontFamily: "monospace",
                    textDayFontWeight: "600",
                    textMonthFontWeight: "bold",
                    textDayHeaderFontWeight: "300",
                    textDayFontSize: 18,
                    textMonthFontSize: 18,
                    textDayHeaderFontSize: 18,
                  }}
                  style={{ borderRadius: 18, paddingBottom: 20 }}
                />
              </View>

              <View style={styles.trackerList}>
                <Text style={styles.textOne}>Details de Verification</Text>
                <View style={styles.grouper}>
                  <Text style={styles.textTwo}>Current Date :</Text>
                  <Text style={styles.textThree}>
                    {new Date().toLocaleDateString()}
                  </Text>
                </View>
                {taps.length ? (
                  <View style={styles.calenderTaps}>
                    {tapsDoneAt[tapsDoneAt.length - 2] && (
                      <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        // Button Linear Gradient
                        colors={["#7DE373", "#49D0AF", "#12BEEC"]}
                        style={[styles.button, { justifyContent: "center" }]}
                      >
                        <View style={styles.datePanel}>
                          <Text style={styles.label}>
                            Here's your previous check
                          </Text>
                          <Text
                            style={[
                              styles.date,
                              {
                                fontSize:36,
                                color: taps[taps.length - 2]
                                  ? "white"
                                  : "red",
                              },
                            ]}
                          >
                     
                            {tapsType == "daily"
                              ? moment().month("JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(
                                moment(
                                  Date(tapsDoneAt[tapsDoneAt.length - 2])
                                )
                                  .add(1, "days")
                                  .toString()
                                  .split(" ")[1]
                              ) /
                                3 ).format('MMMM') +
                                " " +
                                moment(Date(taps[tapsDoneAt.length - 2]))
                                  .toString()
                                  .split(" ")[2]
                              : moment().month(Number(
                                moment(
                                  tapsDoneAt[tapsDoneAt.length - 2]
                                ).month() + 1
                              ) ).format('MMMM') +
                                " " +
                                Date(tapsDoneAt[tapsDoneAt.length - 2]).split(
                                  " "
                                )[2]}
                          </Text>
                        </View>
                      </LinearGradient>
                    )}
                  </View>
                ) : (
                  <Text> ' '</Text>
                )}
                {taps[taps.length - 1] && (
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    // Button Linear Gradient
                    colors={["#7DE373", "#49D0AF", "#12BEEC"]}
                    style={[styles.button, { justifyContent: "center" }]}
                  >
                    <View style={styles.datePanel}>
                      <Text style={styles.label}>Here's your latest check</Text>

                      <Text
                        style={[
                          styles.date,
                          {
                            fontSize:36,
                            color: taps[taps.length - 1]
                              ? "white"
                              : "red",
                          },
                        ]}
                      >
                        {tapsType == "daily"
                          ? moment().month("JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(
                            moment(Date(tapsDoneAt[tapsDoneAt.length - 1]))
                              .add(1, "days")
                              .toString()
                              .split(" ")[1]
                          ) /
                            3).format('MMMM') +
                            " " +
                            moment(Date(taps[tapsDoneAt.length - 1]))
                              .toString()
                              .split(" ")[2]
                          : moment().month(Number(
                            moment(
                              tapsDoneAt[tapsDoneAt.length - 1]
                            ).month() + 1
                          )).format('MMMM') +
                            " " +
                            Date(tapsDoneAt[tapsDoneAt.length - 1]).split(
                              " "
                            )[2]}
                      </Text>
                    </View>
                  </LinearGradient>
                )}
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  // Button Linear Gradient
                  colors={["#7DE373", "#49D0AF", "#12BEEC"]}
                  style={[styles.button, { justifyContent: "center", }]}
                >
                  <View style={styles.datePanel}>
                    <Text style={styles.label}>Here's your upcoming check</Text>

                    <Text style={[styles.date]}>
                      {tapsType == "daily"
                        ? moment().month("JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(
                          moment(Date(tapsDoneAt[tapsDoneAt.length - 1]))
                            .add(1, "days")
                            .toString()
                            .split(" ")[1]
                        ) /
                          3 ).format('MMMM') +
                          " " +
                          moment(Date(taps[tapsDoneAt.length - 1]))
                            .add(1, "days")
                            .toString()
                            .split(" ")[2]
                        : moment().month(Number(
                          moment(tapsDoneAt[tapsDoneAt.length - 1]).month() +
                            2
                        ) ).format('MMMM')+
                          " " +
                          moment(Date(tapsDoneAt[tapsDoneAt.length - 1]))
                            .add(1, "month")
                            .toString()
                            .split(" ")[2]}
                    </Text>
                  </View>
                </LinearGradient>
              </View>
            </View>
            <LinearGradient
             start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        // Button Linear Gradient
        colors={['#7DE373', '#49D0AF', '#12BEEC']}
        style={[styles.buttons,{fontSize:22,marginVertical:20, marginHorizontal:50,alignSelf:'flex-end'}]}>
<TouchableOpacity >
        <Text style={[styles.buttonText,{fontSize:20}]}>Lancer la Verification </Text>
      </TouchableOpacity>
      </LinearGradient>
          </View>
  
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 2,
    marginTop: 40,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007EBE",
    textAlign: "center",
  },
  calenderContainer: {
    backgroundColor: "#4D4A95",
    borderRadius: 18,
    width: 800,
    elevation: 2,
  },
  calenderTaps: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  calenderInfo: {
    // flexDirection:'row',
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 40,
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  main: {
    width: "100%",
  },
  labelHead: {
    fontSize: 36,
    fontWeight: "600",
    color: "#77E17A",
  },
  datePanel: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    fontSize: 22,
    fontWeight: "600",
    color:'#fff'
  },
  calenderTaps: {
    justifyContent: "center",
    alignItems: "center",
  },
  trackerList: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
    width: "100%",
  },
  datePanel: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 10,
    padding:20,
    borderRadius:12,
  },
  button:{
borderRadius:12,
width:"100%",
marginVertical:10
  },
  buttons:{
width:'30%',
padding:20,
borderRadius:9,
  },
  date: {
    color: "white",
    fontSize:42,
    paddingTop: 24,
    paddingLeft: 10,
    fontWeight: "900",
    fontSize: 38,
    marginTop: 4,
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
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  textOne: {
    fontSize: 32,
    fontWeight: "600",
  },
  grouper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  textTwo: {
    fontWeight: "600",
    fontSize: 20,
  },
  textThree: {
    fontSize: 20,
  },

});
