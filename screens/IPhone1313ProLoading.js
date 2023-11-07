import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const IPhone1313ProLoading = () => {
  return (
    <View style={styles.iphone1313ProLoading}>
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoIcon: {
    position: "absolute",
    marginTop: -33,
    marginLeft: -93,
    top: "50%",
    left: "50%",
    width: 186,
    height: 66,
  },
  iphone1313ProLoading: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.neutral100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1313ProLoading;
