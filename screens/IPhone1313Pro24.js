import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const IPhone1313Pro24 = () => {
  return (
    <View style={styles.iphone1313Pro24}>
      <View style={[styles.authInput, styles.logoIconPosition]}>
        <View style={styles.title}>
          <Text style={[styles.howManyNew, styles.textTypo]}>
            How many new words per day you want to learn
          </Text>
        </View>
        <View style={styles.buttonFlexBox}>
          <Image
            style={styles.pixelarticonsplusLayout}
            resizeMode="cover"
            source={require("../assets/icbaselineminus1.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>5</Text>
          <Image
            style={[styles.pixelarticonsplus, styles.pixelarticonsplusLayout]}
            resizeMode="cover"
            source={require("../assets/pixelarticonsplus2.png")}
          />
        </View>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={styles.nextWord}>Next</Text>
        </View>
      </View>
      <Image
        style={[styles.logoIcon, styles.logoIconPosition]}
        resizeMode="cover"
        source={require("../assets/logo1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoIconPosition: {
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.medium,
  },
  pixelarticonsplusLayout: {
    height: 56,
    width: 56,
    overflow: "hidden",
  },
  buttonFlexBox: {
    marginTop: 39,
    flexDirection: "row",
    alignItems: "center",
  },
  howManyNew: {
    fontSize: FontSize.medium1_size,
    fontWeight: "500",
    color: Color.neutral800,
    alignSelf: "stretch",
  },
  title: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.count_size,
    color: Color.primaryMain,
    marginLeft: 28,
  },
  pixelarticonsplus: {
    marginLeft: 28,
  },
  nextWord: {
    fontSize: FontSize.medium_size,
    color: Color.neutral100,
    textAlign: "left",
    fontFamily: FontFamily.medium,
  },
  button: {
    backgroundColor: Color.neutral800,
    height: 52,
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignSelf: "stretch",
    borderRadius: Border.br_xs,
  },
  authInput: {
    marginTop: -156.5,
    marginLeft: -156,
    top: "50%",
    backgroundColor: Color.neutral100,
    width: 312,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xl,
    alignItems: "center",
    borderRadius: Border.br_xs,
  },
  logoIcon: {
    marginLeft: -61.5,
    top: 79,
    width: 123,
    height: 42,
  },
  iphone1313Pro24: {
    backgroundColor: Color.neutral900,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_xs,
  },
});

export default IPhone1313Pro24;
