import { useState } from "react";
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { EllipsisHorizontalCircleIcon } from "react-native-heroicons/outline";

export default function EditNoteModal({}: {}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [noteContent, setNoteContent] = useState("");

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable
          onPress={() => setModalVisible(false)}
          style={styles.modalContainer}
        >
          <View style={styles.modalView}>
            <Text>Modal aberto</Text>
          </View>
        </Pressable>
      </Modal>
      <View>
        <EllipsisHorizontalCircleIcon
          onPress={() => setModalVisible(true)}
          color={"black"}
          size={24}
        />
      </View>
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
    justifyContent: "flex-end",
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
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
