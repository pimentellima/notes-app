import moment from "moment";
import { Button, Menu, Divider, PaperProvider } from "react-native-paper";
import "moment/locale/pt-br";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CheckBox } from "react-native-btr";
import NewNoteModal from "./newNoteModal";
import EditNoteModal from "./editNoteModal";

type Note = {
  id: number;
  content: string;
  createdAt: Date;
  checked: boolean;
};

export default function HomeScreen() {
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, content: "Hello", createdAt: new Date(), checked: false },
  ]);

  const handleAddNote = (content: string) => {
    const note = {
      id: Date.now(),
      content,
      createdAt: new Date(),
      checked: false,
    };

    setNotes(notes ? [...notes, note] : [note]);
  };

  const toggleNoteChecked = (id: number) => {
    const newNotes = notes?.map((note) => {
      if (note.id === id) {
        note.checked = !note.checked;
      }
      return note;
    });

    setNotes(newNotes);
  };

  return (
    <View style={styles.container}>
      <NewNoteModal
        setNoteChecked={toggleNoteChecked}
        handleAddNote={handleAddNote}
      />
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
                height: 20,
                gap: 7,
              }}
            >
              <TouchableOpacity activeOpacity={0.7}>
                <CheckBox
                  checked={item.checked}
                  onPress={() => toggleNoteChecked(item.id)}
                />
              </TouchableOpacity>
              <Text>{item.content}</Text>
            </View>
            <EditNoteModal />
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
