import { createNativeStackNavigator } from "@react-navigation/native-stack";
import moment from "moment";
import "moment/locale/pt-br";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CheckBox } from "react-native-btr";
import { useStore } from "../../store";
import EditNoteModal from "./editNoteModal";
import NewNoteModal from "./newNoteModal";

const Stack = createNativeStackNavigator();

export default function DayScreen() {
  const { addNote, notes, toggleNote, currentDate } = useStore();
  const dayText = moment(new Date(currentDate))
    .calendar(null, {
      lastDay: "[Ontem]",
      sameDay: "[Hoje]",
      nextDay: "[Amanhã]",
      lastWeek: "dddd",
      nextWeek: "dddd",
      sameElse: "L",
    })
    .toString();

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 30,
            marginTop: 10,
            marginBottom: 25,
          }}
        >
          {dayText}
        </Text>
      </View>
      <NewNoteModal handleAddNote={addNote} />
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <View
            key={item.id}
            style={{
              marginTop: 5,
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              paddingVertical: 15,
              borderRadius: 5,
              backgroundColor: "#f4f4f4",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 7,
              }}
            >
              <TouchableOpacity activeOpacity={0.7}>
                <CheckBox
                  borderWidth={1}
                  checked={item.checked}
                  onPress={() => toggleNote(item.id)}
                />
              </TouchableOpacity>
              <Text>{item.content}</Text>
            </View>
            <EditNoteModal note={item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  addNoteButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
  },
  addNoteText: {
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
