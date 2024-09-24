import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useUser } from "../Provider/UserContext";
import { useNavigation } from "@react-navigation/native";

const VideoCard = ({ imageSource, title, title2, date, somoy, onPress }) => {
  const { user } = useUser();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.overlay}>
        <TouchableOpacity
          onPress={() => {
            if (user) {
              // navigation.navigate("")
              onPress && onPress();
            } else {
              navigation.navigate("Login");
            }
          }}
          style={{ marginTop: 50 }}
        >
          <AntDesign name="play" size={40} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{title2}</Text>
        <View style={styles.timing}>
          <Text style={styles.time}>{date}</Text>
          <Text style={styles.time}>{somoy}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2E4053",
    borderRadius: 5,
    overflow: "hidden",
    //margin: 10,
    marginLeft: 10,
    //elevation: 5, // For Android shadow
  },
  image: {
    width: "100%",
    height: 180,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    //justifyContent: 'center',

    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent black overlay
  },
  content: {
    padding: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  time: {
    fontSize: 12,
    color: "white",
  },
  timing: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
  },
});

export default VideoCard;
