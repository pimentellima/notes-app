import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";
import {
  CalendarDaysIcon as CalendarDaysIconOutline,
  CogIcon as CogIconOutline,
  PencilSquareIcon as PencilSquareIconOuline,
} from "react-native-heroicons/outline";
import {
  CalendarDaysIcon as CalendarDaysIconSolid,
  CogIcon as CogIconSolid,
  PencilSquareIcon as PencilSquareIconSolid,
} from "react-native-heroicons/solid";
import DiaryScreen from "./screens/diary/diaryScreen";
import SettingsScreen from "./screens/settings/settingsScreen";
import NotesScreen from "./screens/notes/notesScreen";

const Tab = createBottomTabNavigator();

export default function App() {
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
            tabBarIcon: ({ focused }) =>
              focused ? (
                <PencilSquareIconSolid color={"black"} size={24} />
              ) : (
                <PencilSquareIconOuline color={"black"} size={24} />
              ),
          }}
          name="Hoje"
          component={DiaryScreen}
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
