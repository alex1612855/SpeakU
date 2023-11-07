import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const IPhone1313ProCodeInpu14 = () => {
  return (
    <View style={styles.iphone1313ProCodeInpu}>
      <View style={styles.bichevronLeftParent}>
        <Image
          style={styles.bichevronLeftIcon}
          resizeMode="cover"
          source={require("../assets/bichevronleft2.png")}
        />
        <Text style={[styles.goBack, styles.goBackTypo]}>Go back</Text>
      </View>
      <View style={styles.title}>
        <Text style={[styles.title1, styles.title1Typo]}>
          Fill in the Blanks
        </Text>
      </View>
      <View style={styles.authInputWrapper}>
        <View style={styles.authInput}>
          <Text
            style={[styles.everyMorningI, styles.goBackTypo]}
          >{`Every morning, I _______________ my backpack and get ready for school. Before leaving, I _______________ my breakfast, usually cereal or toast. While eating, I _______________ a chapter of my favorite book. Once done, I _______________ a short summary about it in my journal, trying to _______________ the main ideas. `}</Text>
          <View style={styles.button}>
            <Text style={[styles.nextWord, styles.title1Typo]}>Check</Text>
          </View>
        </View>
      </View>
      <View style={[styles.tabbar, styles.tabbarPosition]}>
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
              style={styles.iconPosition}
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
              source={require("../assets/24outlineprofile7.png")}
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
          <View style={[styles.homeIndicator, styles.tabbarPosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goBackTypo: {
    textAlign: "justify",
    fontFamily: FontFamily.medium,
    fontSize: FontSize.medium_size,
  },
  title1Typo: {
    textAlign: "left",
    color: Color.neutral100,
    fontFamily: FontFamily.medium,
  },
  tabbarPosition: {
    left: "50%",
    position: "absolute",
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
    marginLeft: -11.5,
    marginTop: -17.8,
    left: "50%",
    height: 24,
    width: 24,
    position: "absolute",
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
    marginLeft: 4,
    color: Color.neutral400,
    textAlign: "justify",
    fontFamily: FontFamily.medium,
  },
  bichevronLeftParent: {
    top: 66,
    left: 16,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  title1: {
    fontSize: FontSize.semiBold_size,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  title: {
    top: 126,
    left: 17,
    width: 326,
    justifyContent: "center",
    position: "absolute",
  },
  everyMorningI: {
    lineHeight: 22,
    fontWeight: "300",
    color: Color.neutral900,
    alignSelf: "stretch",
    textAlign: "justify",
    fontFamily: FontFamily.medium,
  },
  nextWord: {
    fontSize: FontSize.medium_size,
    textAlign: "left",
  },
  button: {
    backgroundColor: Color.neutral800,
    height: 52,
    padding: Padding.p_3xs,
    marginTop: 48,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xs,
  },
  authInput: {
    width: 350,
    padding: Padding.p_xl,
    backgroundColor: Color.neutral100,
    borderRadius: Border.br_xs,
  },
  authInputWrapper: {
    top: 193,
    left: 20,
    position: "absolute",
  },
  outlinecalendarIcon: {
    overflow: "hidden",
  },
  sfSymbol: {
    marginTop: -26,
    marginLeft: -19.5,
    fontSize: FontSize.size_5xl,
    color: Color.defaultSystemBlueLight,
    width: 40,
    height: 40,
    textAlign: "center",
    display: "none",
    fontWeight: "500",
    top: "50%",
    left: "50%",
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
    backgroundColor: Color.neutral100,
  },
  homeindicator: {
    height: 34,
    alignSelf: "stretch",
  },
  tabbar: {
    marginLeft: -195.5,
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.neutral500,
    borderTopWidth: 0.5,
    width: 390,
    alignItems: "center",
    backgroundColor: Color.neutral900,
  },
  iphone1313ProCodeInpu: {
    flex: 1,
    width: "100%",
    height: 850,
    overflow: "hidden",
    backgroundColor: Color.neutral900,
    borderRadius: Border.br_xs,
  },
});

export default IPhone1313ProCodeInpu14;
