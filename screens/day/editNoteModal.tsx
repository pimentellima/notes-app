import { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { EllipsisHorizontalCircleIcon as EllipsisHorizontalCircleIconSolid } from "react-native-heroicons/solid";
import { EllipsisHorizontalCircleIcon as EllipsisHorizontalCircleIconOutline } from "react-native-heroicons/outline";
import { Note } from "../../types/note";
import Modal from "react-native-modal";

export default function EditNoteModal({ note }: { note: Note }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        backdropOpacity={0.1}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        isVisible={modalVisible}
        style={styles.modalContainer}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.optionContainer} onPress={() => {}}>
            <Text style={styles.centerText}>Remarcar para outro dia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer} onPress={() => {}}>
            <Text style={[styles.centerText, { color: "red" }]}>
             Excluir
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View>
        {modalVisible ? (
          <EllipsisHorizontalCircleIconSolid
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            onPress={() => setModalVisible(false)}
            color={"black"}
            size={24}
          />
        ) : (
          <EllipsisHorizontalCircleIconOutline
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            onPress={() => setModalVisible(true)}
            color={"black"}
            size={24}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  optionContainer: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#f4f4f4",
    borderRadius: 10,
  },
  centerText: {
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    display: "flex",
    gap: 5,
    backgroundColor: "white",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginBottom: -20,
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
});
