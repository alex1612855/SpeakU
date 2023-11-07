import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const IPhone1313ProCodeInpu11 = () => {
  return (
    <View style={styles.iphone1313ProCodeInpu}>
      <View style={styles.backButton}>
        <Image
          style={styles.bichevronLeftIcon}
          resizeMode="cover"
          source={require("../assets/bichevronleft2.png")}
        />
        <Text style={styles.goBack}>Go back</Text>
      </View>
      <View style={styles.title}>
        <Text style={[styles.title1, styles.textTypo]}>Translate</Text>
      </View>
      <View style={[styles.translate, styles.translatePosition]}>
        <View style={[styles.titleParent, styles.buttonPosition]}>
          <Text style={[styles.title2, styles.title2Typo]}>Рассматривать</Text>
          <View style={[styles.input, styles.inputLayout]}>
            <Text style={[styles.text, styles.textTypo]}>{` `}</Text>
          </View>
        </View>
        <View style={[styles.button, styles.inputLayout]}>
          <Text style={[styles.nextWord, styles.textTypo]}>Next word</Text>
        </View>
      </View>
      <View style={styles.tabbar}>
        <View style={styles.tabs}>
          <View style={[styles.view, styles.viewPosition]}>
            <Image
              style={[styles.outlinecalendarIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/24outlinecalendar2.png")}
            />
            <Text style={[styles.sfSymbol, styles.sfSymbolFlexBox]}>􀎞</Text>
            <Text style={[styles.label, styles.labelTypo]}>Daily Words</Text>
            <View style={[styles.tabbarBadge, styles.sfSymbolFlexBox]}>
              <View style={styles.contentLayout}>
                <View
                  style={[styles.containerMinWidth, styles.contentLayout]}
                />
                <Text style={[styles.count, styles.labelTypo]}>1</Text>
              </View>
            </View>
          </View>
          <View style={[styles.view1, styles.viewPosition]}>
            <Image
              style={[styles.outlinecalendarIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/24filledcalendar2.png")}
            />
            <Text style={[styles.sfSymbol, styles.sfSymbolFlexBox]}>􀎞</Text>
            <Text style={[styles.label1, styles.labelTypo]}>Practice</Text>
            <View style={[styles.tabbarBadge, styles.sfSymbolFlexBox]}>
              <View style={styles.contentLayout}>
                <View
                  style={[styles.containerMinWidth, styles.contentLayout]}
                />
                <Text style={[styles.count, styles.labelTypo]}>1</Text>
              </View>
            </View>
          </View>
          <View style={[styles.view2, styles.viewPosition]}>
            <Image
              style={[styles.outlinelistIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/24outlinelist1.png")}
            />
            <Text style={[styles.sfSymbol, styles.sfSymbolFlexBox]}>􀎞</Text>
            <Text style={[styles.label2, styles.labelTypo]}>My lists</Text>
            <View style={[styles.tabbarBadge, styles.sfSymbolFlexBox]}>
              <View style={styles.contentLayout}>
                <View
                  style={[styles.containerMinWidth, styles.contentLayout]}
                />
                <Text style={[styles.count, styles.labelTypo]}>1</Text>
              </View>
            </View>
          </View>
          <View style={[styles.view3, styles.viewPosition]}>
            <Image
              style={[styles.outlinecalendarIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/24outlineprofile3.png")}
            />
            <Text style={[styles.sfSymbol, styles.sfSymbolFlexBox]}>􀎞</Text>
            <Text style={[styles.label3, styles.labelTypo]}>Profile</Text>
            <View style={[styles.tabbarBadge, styles.sfSymbolFlexBox]}>
              <View style={styles.contentLayout}>
                <View
                  style={[styles.containerMinWidth, styles.contentLayout]}
                />
                <Text style={[styles.count, styles.labelTypo]}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.homeindicator}>
          <View style={[styles.homeIndicator, styles.translatePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.medium,
  },
  translatePosition: {
    backgroundColor: Color.neutral100,
    left: "50%",
    position: "absolute",
  },
  buttonPosition: {
    width: 296,
    marginLeft: -148,
    left: "50%",
    position: "absolute",
  },
  title2Typo: {
    textAlign: "center",
    fontFamily: FontFamily.medium,
  },
  inputLayout: {
    height: 52,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xs,
  },
  viewPosition: {
    width: 75,
    top: 0,
    height: 50,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    top: "50%",
    left: "50%",
  },
  sfSymbolFlexBox: {
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  labelTypo: {
    fontFamily: FontFamily.bodyBold,
    textAlign: "center",
    position: "absolute",
  },
  contentLayout: {
    height: 16,
    width: 14,
  },
  bichevronLeftIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  goBack: {
    textAlign: "justify",
    marginLeft: 4,
    color: Color.neutral400,
    fontFamily: FontFamily.medium,
    fontSize: FontSize.medium_size,
  },
  backButton: {
    top: 66,
    left: 16,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  title1: {
    color: Color.neutral100,
    fontWeight: "600",
    fontSize: FontSize.semiBold_size,
    alignSelf: "stretch",
  },
  title: {
    top: 126,
    left: 17,
    width: 326,
    justifyContent: "center",
    position: "absolute",
  },
  title2: {
    lineHeight: 43,
    color: Color.neutral900,
    fontWeight: "600",
    fontSize: FontSize.semiBold_size,
    alignSelf: "stretch",
  },
  text: {
    color: Color.neutral300,
    fontSize: FontSize.medium_size,
    textAlign: "left",
  },
  input: {
    borderColor: Color.colorForestgreen,
    borderWidth: 2,
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_3xs,
    marginTop: 32,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  titleParent: {
    top: 86,
    alignItems: "center",
  },
  nextWord: {
    color: Color.neutral100,
    fontSize: FontSize.medium_size,
    textAlign: "left",
  },
  button: {
    top: 229,
    backgroundColor: Color.neutral800,
    padding: Padding.p_3xs,
    width: 296,
    marginLeft: -148,
    left: "50%",
    position: "absolute",
    justifyContent: "center",
  },
  translate: {
    marginLeft: -175,
    top: 205,
    width: 350,
    height: 477,
    borderRadius: Border.br_xs,
    backgroundColor: Color.neutral100,
  },
  outlinecalendarIcon: {
    marginLeft: -11.5,
    marginTop: -17.8,
    top: "50%",
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  sfSymbol: {
    marginTop: -26,
    marginLeft: -19.5,
    fontSize: FontSize.size_5xl,
    color: Color.defaultSystemBlueLight,
    width: 40,
    height: 40,
    fontWeight: "500",
    top: "50%",
    left: "50%",
    textAlign: "center",
    fontFamily: FontFamily.medium,
  },
  label: {
    marginLeft: -27.5,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    marginTop: 10,
    fontFamily: FontFamily.bodyBold,
    top: "50%",
    left: "50%",
    fontWeight: "500",
    color: Color.neutral400,
  },
  containerMinWidth: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  count: {
    left: 4,
    fontSize: FontSize.caption1Regular_size,
    lineHeight: 16,
    top: 0,
    color: Color.neutral100,
  },
  tabbarBadge: {
    top: 4,
    right: 10,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.defaultSystemRedDark,
    paddingHorizontal: Padding.p_10xs,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
  },
  view: {
    marginLeft: -185,
  },
  label1: {
    marginLeft: -18.5,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    marginTop: 10,
    fontFamily: FontFamily.bodyBold,
    top: "50%",
    left: "50%",
    color: Color.neutral100,
    fontWeight: "600",
  },
  view1: {
    marginLeft: -87,
  },
  outlinelistIcon: {
    marginLeft: -11.5,
    marginTop: -17.8,
    top: "50%",
    height: 24,
    width: 24,
    position: "absolute",
  },
  label2: {
    marginLeft: -17.5,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    marginTop: 10,
    fontFamily: FontFamily.bodyBold,
    top: "50%",
    left: "50%",
    fontWeight: "500",
    color: Color.neutral400,
  },
  view2: {
    marginLeft: 12,
  },
  label3: {
    marginLeft: -14.5,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    marginTop: 10,
    fontFamily: FontFamily.bodyBold,
    top: "50%",
    left: "50%",
    fontWeight: "500",
    color: Color.neutral400,
  },
  view3: {
    marginLeft: 110,
  },
  tabs: {
    height: 50,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
  },
  homeindicator: {
    height: 34,
    alignSelf: "stretch",
  },
  tabbar: {
    marginLeft: -195.5,
    bottom: 0,
    borderColor: Color.neutral500,
    borderTopWidth: 0.5,
    width: 390,
    borderStyle: "solid",
    left: "50%",
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.neutral900,
  },
  iphone1313ProCodeInpu: {
    flex: 1,
    width: "100%",
    height: 808,
    overflow: "hidden",
    backgroundColor: Color.neutral900,
    borderRadius: Border.br_xs,
  },
});

export default IPhone1313ProCodeInpu11;
