import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";

const IPhone1313ProCodeInpu22 = () => {
  return (
    <View style={styles.iphone1313ProCodeInpu}>
      <View style={[styles.authInput, styles.logoIconPosition]}>
        <View style={styles.header}>
          <Text style={styles.title}>Enter code from SMS</Text>
          <Text style={[styles.description, styles.textTypo]}>
            We sent code to +381 61 1350 88
          </Text>
        </View>
        <View style={[styles.content, styles.contentFlexBox]}>
          <View style={[styles.codeInput, styles.contentFlexBox]}>
            <View style={[styles.input, styles.inputFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>1234</Text>
            </View>
            <Text style={[styles.enterAnotherNumber, styles.nextWordTypo]}>
              Enter another number
            </Text>
          </View>
          <View style={[styles.button, styles.inputFlexBox]}>
            <Text style={[styles.nextWord, styles.nextWordTypo]}>Log in</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.logoIcon, styles.logoIconPosition]}
        resizeMode="cover"
        source={require("../assets/logo2.png")}
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
    fontSize: FontSize.medium_size,
    textAlign: "center",
    fontFamily: FontFamily.medium,
  },
  contentFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  inputFlexBox: {
    flexDirection: "row",
    height: 52,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: Border.br_xs,
  },
  nextWordTypo: {
    textAlign: "left",
    fontSize: FontSize.medium_size,
    fontFamily: FontFamily.medium,
  },
  title: {
    fontSize: FontSize.medium1_size,
    textAlign: "center",
    fontFamily: FontFamily.medium,
    color: Color.neutral800,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  description: {
    marginTop: 12,
    color: Color.neutral800,
    alignSelf: "stretch",
  },
  header: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  text: {
    color: Color.neutral300,
  },
  input: {
    borderStyle: "solid",
    borderColor: Color.neutral800,
    borderWidth: 1,
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_3xs,
  },
  enterAnotherNumber: {
    lineHeight: 22,
    marginTop: 16,
    color: Color.neutral800,
    fontWeight: "500",
    textAlign: "left",
  },
  codeInput: {
    paddingBottom: Padding.p_xs,
    borderRadius: Border.br_xs,
  },
  nextWord: {
    color: Color.neutral100,
  },
  button: {
    backgroundColor: Color.neutral800,
    padding: Padding.p_3xs,
    marginTop: 16,
  },
  content: {
    marginTop: 32,
  },
  authInput: {
    marginTop: -152.5,
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
    bottom: 723,
    width: 123,
    height: 42,
  },
  iphone1313ProCodeInpu: {
    backgroundColor: Color.neutral900,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_xs,
  },
});

export default IPhone1313ProCodeInpu22;
