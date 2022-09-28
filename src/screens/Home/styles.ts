import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0D0D0D",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },

  searchContainer: {
    position: "absolute",
    top: 143,
    elevation: 999,
    flexDirection: "row",
    marginTop: 30,
    marginHorizontal: 24,
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    color: "#F2F2F2",
    padding: 10,
    marginRight: 8,
    borderRadius: 6,
  },
  button: {
    backgroundColor: "#1E6F9F",
    height: 52,
    width: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  container: {
    backgroundColor: "#191919",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
  },
  containerInfo: {
    alignSelf: "stretch",
    marginTop: 48,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerTasks: {
    alignSelf: "stretch",
    // alignItems: "center",
    marginTop: 20,
  },
});
