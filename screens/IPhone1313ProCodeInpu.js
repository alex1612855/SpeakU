import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const IPhone1313ProCodeInpu = () => {
  return (
    <View style={styles.iphone1313ProCodeInpu}>
      <View style={[styles.backButton, styles.buttonFlexBox]}>
        <Image
          style={styles.bichevronLeftIcon}
          resizeMode="cover"
          source={require("../assets/bichevronleft2.png")}
        />
        <Text style={[styles.goBack, styles.goBackTypo]}>Go back</Text>
      </View>
      <View style={[styles.flipCardParent, styles.buttonFlexBox]}>
        <View style={[styles.flipCard, styles.flipCardFlexBox]}>
          <View style={[styles.name, styles.flipCardFlexBox]}>
            <Text style={[styles.title, styles.textTypo]}>Consider</Text>
            <View style={[styles.knsdrWrapper, styles.flipCardFlexBox]}>
              <Text style={styles.knsdr}>(kənˈsɪd.ər)</Text>
            </View>
          </View>
          <View style={[styles.nextWordButton, styles.buttonFlexBox]}>
            <Text style={styles.goBackTypo}>Next word</Text>
            <Image
              style={styles.bichevronLeftIcon1}
              resizeMode="cover"
              source={require("../assets/bichevronleft3.png")}
            />
          </View>
        </View>
        <View style={styles.flipCardActionsWrapper}>
          <View style={[styles.flipCardActions, styles.flipCardFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>Русский</Text>
            <Text style={[styles.english, styles.textTypo]}>English</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  goBackTypo: {
    textAlign: "justify",
    color: Color.neutral400,
    fontFamily: FontFamily.medium,
    fontSize: FontSize.medium_size,
  },
  flipCardFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "center",
    color: Color.neutral900,
    fontFamily: FontFamily.medium,
  },
  bichevronLeftIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  goBack: {
    marginLeft: 4,
  },
  backButton: {
    top: 67,
    left: 17,
    flexDirection: "row",
  },
  title: {
    fontSize: FontSize.semiBold_size,
    lineHeight: 43,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  knsdr: {
    display: "flex",
    width: 77,
    color: Color.neutral900,
    textAlign: "justify",
    fontFamily: FontFamily.medium,
    fontSize: FontSize.medium_size,
    alignItems: "center",
  },
  knsdrWrapper: {
    marginTop: 4,
    flexDirection: "row",
  },
  name: {
    zIndex: 0,
    alignSelf: "stretch",
  },
  bichevronLeftIcon1: {
    width: 16,
    height: 16,
    marginLeft: 4,
    overflow: "hidden",
  },
  nextWordButton: {
    top: 440,
    left: 229,
    zIndex: 1,
    flexDirection: "row",
  },
  flipCard: {
    backgroundColor: Color.neutral100,
    width: 336,
    height: 477,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_xs,
  },
  text: {
    fontSize: FontSize.medium_size,
    textAlign: "center",
  },
  english: {
    lineHeight: 22,
    fontWeight: "500",
    marginLeft: 35,
    fontSize: FontSize.medium_size,
    textAlign: "center",
  },
  flipCardActions: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.primaryMain,
    width: 207,
    height: 43,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
  },
  flipCardActionsWrapper: {
    padding: Padding.p_3xs,
    marginTop: 137,
  },
  flipCardParent: {
    top: 140,
    left: 27,
  },
  iphone1313ProCodeInpu: {
    backgroundColor: Color.neutral900,
    flex: 1,
    width: "100%",
    height: 925,
    borderRadius: Border.br_xs,
  },
});

export default IPhone1313ProCodeInpu;
