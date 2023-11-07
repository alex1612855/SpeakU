import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const IPhone1313Pro25 = () => {
  return (
    <View style={styles.iphone1313Pro25}>
      <Text style={styles.sendCode}>SEND CODE</Text>
      <View style={styles.authInput}>
        <View style={styles.title}>
          <Text style={[styles.chooseYourEnglish, styles.title1Clr]}>
            Choose your English level
          </Text>
        </View>
        <View style={styles.levelList}>
          <View style={styles.radioList}>
            <Image
              style={styles.radioListChild}
              resizeMode="cover"
              source={require("../assets/frame-922.png")}
            />
            <View style={styles.name}>
              <Text style={[styles.title1, styles.title1Typo]}>Beginner</Text>
            </View>
          </View>
          <View style={[styles.radioList1, styles.radioFlexBox]}>
            <Image
              style={styles.radioListChild}
              resizeMode="cover"
              source={require("../assets/frame-923.png")}
            />
            <View style={styles.name}>
              <Text style={[styles.title1, styles.title1Typo]}>Advanced</Text>
            </View>
          </View>
          <View style={[styles.radioList2, styles.radioFlexBox]}>
            <Image
              style={styles.radioListChild}
              resizeMode="cover"
              source={require("../assets/frame-922.png")}
            />
            <View style={styles.name}>
              <Text style={[styles.title1, styles.title1Typo]}>Proficient</Text>
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <Text style={[styles.nextWord, styles.title1Typo]}>
            Start learning
          </Text>
        </View>
      </View>
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title1Clr: {
    color: Color.neutral800,
    alignSelf: "stretch",
    fontWeight: "500",
  },
  title1Typo: {
    fontSize: FontSize.medium_size,
    textAlign: "left",
    fontFamily: FontFamily.medium,
  },
  radioFlexBox: {
    marginTop: 16,
    padding: Padding.p_base,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: Border.br_xs,
  },
  sendCode: {
    marginTop: 828,
    marginLeft: -28,
    fontSize: FontSize.size_5xl,
    width: 135,
    height: 26,
    textAlign: "left",
    fontWeight: "500",
    top: "50%",
    color: Color.neutral100,
    fontFamily: FontFamily.medium,
    left: "50%",
    position: "absolute",
  },
  chooseYourEnglish: {
    fontSize: FontSize.medium1_size,
    textAlign: "center",
    fontFamily: FontFamily.medium,
    color: Color.neutral800,
  },
  title: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  radioListChild: {
    width: 16,
    height: 16,
  },
  title1: {
    lineHeight: 22,
    color: Color.neutral800,
    alignSelf: "stretch",
    fontWeight: "500",
  },
  name: {
    marginLeft: 12,
    justifyContent: "center",
    flex: 1,
  },
  radioList: {
    padding: Padding.p_base,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    borderColor: Color.neutral300,
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.neutral100,
    borderRadius: Border.br_xs,
  },
  radioList1: {
    borderColor: Color.neutral600,
  },
  radioList2: {
    borderColor: Color.neutral300,
    marginTop: 16,
    backgroundColor: Color.neutral100,
  },
  levelList: {
    marginTop: 39,
    alignSelf: "stretch",
    alignItems: "center",
  },
  nextWord: {
    color: Color.neutral100,
    fontSize: FontSize.medium_size,
  },
  button: {
    backgroundColor: Color.neutral800,
    height: 52,
    padding: Padding.p_3xs,
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 39,
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: Border.br_xs,
  },
  authInput: {
    marginTop: -198,
    marginLeft: -156.4,
    width: 312,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xl,
    alignItems: "center",
    backgroundColor: Color.neutral100,
    borderRadius: Border.br_xs,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  logoIcon: {
    marginLeft: -61.5,
    top: 79,
    width: 123,
    height: 42,
    left: "50%",
    position: "absolute",
  },
  iphone1313Pro25: {
    backgroundColor: Color.neutral900,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default IPhone1313Pro25;
