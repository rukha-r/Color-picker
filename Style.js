import { StyleSheet } from "react-native";
const main_color = "#fff";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  slider_part: {
    bottom: 0,
    height: "47%",
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  random: {
    left: 25,
    position: "absolute",
  },
  hex_holder: {
    width: "50%",
    borderRadius: 20 / 2,
  },
  hex_text: {
    fontSize: 23,
    color: main_color,
    fontWeight: "bold",
    textAlign: "center",
  },
  copy: {
    right: 25,
    position: "absolute",
  },
  rgb_holder: {
    marginBottom: -90,
    flexDirection: "row",
    justifyContent: "center",
  },
  color_text_holder: {
    margin: 20,
    padding: 10,
  },
  color_text: {
    fontSize: 18,
    color: main_color,
    fontWeight: "bold",
    textAlign: "center",
  },
  slider_holder: {
    marginTop: 80,
    alignItems: "center",
  },
  slider: {
    width: "80%",
  },
  footer: {
    opacity: 0.4,
    fontSize: 18,
    marginTop: 12,
    color: main_color,
    textAlign: "center",
  },
});

export default styles;
