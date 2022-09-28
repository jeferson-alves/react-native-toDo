import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 8,
    minHeight: 64,
    padding: 12,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 12,
  },
  text: {
    flex: 1,
    color: "#f2f2f2",
    marginLeft: 12,
    lineHeight: 24,
  },
  textDone: {
    flex: 1,
    color: "#808080",
    marginLeft: 12,
    lineHeight: 24,
    textDecorationLine: "line-through",
  },
});
