import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame1 = () => {
  return (
    <View style={[styles.frameParent, styles.frameParentFlexBox]}>
      <View
        style={[styles.iphone1313ProCodeImpuWrapper, styles.frameParentFlexBox]}
      >
        <View style={[styles.iphone1313ProCodeImpu, styles.authInputFlexBox]}>
          <Image
            style={styles.logoIcon}
            resizeMode="cover"
            source={require("../assets/logo2.png")}
          />
          <View style={[styles.authInput, styles.authInputFlexBox]}>
            <Text style={styles.title}>Log in by phone number</Text>
            <View style={styles.content}>
              <View style={[styles.codeInput, styles.buttonFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>+1</Text>
              </View>
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Text style={[styles.nextWord, styles.textTypo]}>
                  Send code
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentFlexBox: {
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
  authInputFlexBox: {
    alignItems: "center",
    overflow: "hidden",
    borderRadius: Border.br_xs,
  },
  buttonFlexBox: {
    height: 52,
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: Border.br_xs,
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.medium_size,
    fontFamily: FontFamily.medium,
  },
  logoIcon: {
    width: 123,
    height: 42,
  },
  title: {
    fontSize: FontSize.medium1_size,
    fontWeight: "500",
    color: Color.neutral800,
    textAlign: "center",
    fontFamily: FontFamily.medium,
    alignSelf: "stretch",
  },
  text: {
    color: Color.neutral300,
  },
  codeInput: {
    borderStyle: "solid",
    borderColor: Color.neutral800,
    borderWidth: 1,
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_3xs,
  },
  nextWord: {
    color: Color.neutral100,
  },
  button: {
    backgroundColor: Color.neutral800,
    marginTop: 16,
    justifyContent: "center",
    padding: Padding.p_3xs,
  },
  content: {
    marginTop: 32,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  authInput: {
    backgroundColor: Color.neutral100,
    width: 312,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xl,
    marginTop: 189,
  },
  iphone1313ProCodeImpu: {
    backgroundColor: Color.neutral900,
    width: 390,
    height: 844,
    paddingHorizontal: 39,
    paddingVertical: 79,
  },
  iphone1313ProCodeImpuWrapper: {
    padding: Padding.p_3xs,
  },
  frameParent: {
    flex: 1,
    width: "100%",
    padding: Padding.p_3xs,
  },
});

export default Frame1;
