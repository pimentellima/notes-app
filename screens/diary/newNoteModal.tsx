import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";

export default function NewNoteModal({
  handleAddNote,
  setNoteChecked,
}: {
  handleAddNote: (content: string) => void;
  setNoteChecked: (id: number) => void;
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [noteContent, setNoteContent] = useState("");

  return (
    <View>
      <Modal
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        isVisible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <TextInput
              autoFocus
              value={noteContent}
              onChangeText={(text) => setNoteContent(text)}
              placeholder="Nova nota ..."
            />
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.button, styles.grayBackground]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text>Fechar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.button, styles.blackBackground]}
                onPress={() => {
                  handleAddNote(noteContent);
                  setNoteContent("");
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.whiteText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.openModalButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.modalButtonText}>Adicionar item +</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  modalButtonText: {
    color: "white",
  },
  openModalButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
    marginTop: 40,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  blackBackground: {
    backgroundColor: "black",
  },
  grayBackground: {
    backgroundColor: "#DCDCDC",
  },
  whiteText: {
    color: "white",
  },
});
