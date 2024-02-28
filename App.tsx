import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import "moment/locale/pt-br";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import {
  CalendarDaysIcon as CalendarDaysIconOutline,
  ChevronLeftIcon,
  ChevronRightIcon,
  CogIcon as CogIconOutline,
  PencilSquareIcon as PencilSquareIconOuline,
} from "react-native-heroicons/outline";
import {
  CalendarDaysIcon as CalendarDaysIconSolid,
  CogIcon as CogIconSolid,
  PencilSquareIcon as PencilSquareIconSolid,
} from "react-native-heroicons/solid";
import DayScreen from "./screens/day/dayScreen";
import SettingsScreen from "./screens/settings/settingsScreen";
import NotesScreen from "./screens/notes/notesScreen";
import { useStore } from "./store";
import moment, { Moment } from "moment";
import { Fragment } from "react";

const Tab = createBottomTabNavigator();

export default function App() {
  const { currentDate, setCurrentDate } = useStore();
  const isToday = moment(currentDate).isSame(moment(), "day");

  const generateDayText = (momentDate: Moment) => {
    return momentDate
      .calendar(null, {
        lastDay: "[Ontem]",
        sameDay: "[Hoje]",
        nextDay: "[Amanhã]",
        lastWeek: "dddd",
        nextWeek: "dddd",
        sameElse: "L",
      })
      .toString();
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          options={{
            headerTitle: () => (
              <View style={{ display: "flex", flexDirection: "row", gap: 3 }}>
                <TouchableOpacity
                  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                  activeOpacity={0.9}
                  onPress={() =>
                    setCurrentDate(
                      moment(new Date(currentDate))
                        .subtract({ days: 1 })
                        .toISOString()
                    )
                  }
                  style={{
                    width: 100,
                    marginRight: 10,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <ChevronLeftIcon color={"black"} size={30} />
                  <Text>
                    {generateDayText(
                      moment(new Date(currentDate)).subtract({ days: 1 })
                    )}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                  activeOpacity={0.9}
                  onPress={() => setCurrentDate(new Date().toISOString())}
                  style={{
                    width: 100,
                    marginRight: 10,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 13, opacity: isToday ? 0.3 : 1 }}>
                    Hoje
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                  activeOpacity={0.9}
                  onPress={() =>
                    setCurrentDate(
                      moment(new Date(currentDate))
                        .add({ days: 1 })
                        .toISOString()
                    )
                  }
                  style={{
                    width: 100,
                    marginRight: 10,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Text>
                    {generateDayText(
                      moment(new Date(currentDate)).add({ days: 1 })
                    )}
                  </Text>
                  <ChevronRightIcon color={"black"} size={30} />
                </TouchableOpacity>
              </View>
            ),
            tabBarIcon: ({ focused }) =>
              focused ? (
                <PencilSquareIconSolid color={"black"} size={24} />
              ) : (
                <PencilSquareIconOuline color={"black"} size={24} />
              ),
          }}
          name="Hoje"
          component={DayScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <CalendarDaysIconSolid color={"black"} size={24} />
              ) : (
                <CalendarDaysIconOutline color={"black"} size={24} />
              ),
          }}
          name="Calendário"
          component={NotesScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <CogIconSolid color={"black"} size={24} />
              ) : (
                <CogIconOutline color={"black"} size={24} />
              ),
          }}
          name="Ajustes"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
