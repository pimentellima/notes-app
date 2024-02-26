import { StyleSheet, Text, View } from "react-native";

export default function NotesScreen() {
  return (
    <View style={styles.container}>
        <Text>Notes screen</Text>
    </View>
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
