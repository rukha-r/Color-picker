import React, { useState } from "react";
import styles from "./Style.js";
import copy from "./assets/copy.png";
import random from "./assets/random.png";
import red_thumb from "./assets/red.png";
import blue_thumb from "./assets/blue.png";
import green_thumb from "./assets/green.png";
import {
  SafeAreaView,
  Text,
  View,
  Slider,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

export default function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const setRedValue = (value) => setRed(Math.round(value));
  const setGreenValue = (value) => setGreen(Math.round(value));
  const setBlueValue = (value) => setBlue(Math.round(value));
  const randomColor = () => {
    setRed(Math.round(Math.random(255) * 255));
    setGreen(Math.round(Math.random(255) * 255));
    setBlue(Math.round(Math.random(255) * 255));
  };
  const hexColor = () => {
    const red_hex = red.toString(16);
    const green_hex = green.toString(16);
    const blue_hex = blue.toString(16);
    return `#${red_hex.length > 1 ? red_hex : red_hex + "0"}${
      green_hex.length > 1 ? green_hex : green_hex + "0"
    }${blue_hex.length > 1 ? blue_hex : blue_hex + "0"}`;
  };
  const colorCopy = () => {
    Alert.alert("Copy the color", `Which mode would you like to copy?`, [
      {
        text: "HEX",
        onPress: () => Alert.alert(`${hexColor()}`),
      },
      {
        text: "RGB",
        onPress: () => Alert.alert(`rgb(${red},${green},${blue})`),
      },
    ]);
  };
  return (
    <SafeAreaView
      style={[styles.body, { backgroundColor: `rgb(${red},${green},${blue})` }]}
    >
      <View style={styles.slider_part}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.random} onPress={randomColor}>
            <Image source={random} />
          </TouchableOpacity>
          <View style={styles.hex_holder}>
            <Text style={styles.hex_text}>{hexColor()}</Text>
            <Text style={styles.color_text}>HEX</Text>
          </View>
          <TouchableOpacity style={styles.copy} onPress={colorCopy}>
            <Image source={copy} />
          </TouchableOpacity>
        </View>

        <View style={styles.rgb_holder}>
          <View style={styles.color_text_holder}>
            <Text style={styles.color_text}>{red}</Text>
            <Text style={styles.color_text}>RED</Text>
          </View>

          <View style={styles.color_text_holder}>
            <Text style={styles.color_text}>{green}</Text>
            <Text style={styles.color_text}>GREEN</Text>
          </View>

          <View style={styles.color_text_holder}>
            <Text style={styles.color_text}>{blue}</Text>
            <Text style={styles.color_text}>BLUE</Text>
          </View>
        </View>

        <View style={styles.slider_holder}>
          <Slider
            onValueChange={setRedValue}
            style={styles.slider}
            minimumValue={0}
            maximumValue={255}
            value={red}
            step={0}
            thumbImage={red_thumb}
            minimumTrackTintColor="#fff"
          />
          <Slider
            onValueChange={setGreenValue}
            style={styles.slider}
            minimumValue={0}
            maximumValue={255}
            value={green}
            step={0}
            thumbImage={green_thumb}
            minimumTrackTintColor="#fff"
          />
          <Slider
            onValueChange={setBlueValue}
            style={styles.slider}
            minimumValue={0}
            maximumValue={255}
            value={blue}
            step={0}
            thumbImage={blue_thumb}
            minimumTrackTintColor="#fff"
          />
        </View>
        <Text style={styles.footer}>@rukha-r</Text>
      </View>
    </SafeAreaView>
  );
}
