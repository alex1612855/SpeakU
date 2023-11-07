import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const IPhone1313ProCodeInpu1 = () => {
  return (
    <View style={styles.iphone1313ProCodeInpu}>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.backButtonWrapper}>
          <View style={styles.backButton}>
            <Image
              style={styles.bichevronLeftIcon}
              resizeMode="cover"
              source={require("../assets/bichevronleft2.png")}
            />
            <Text style={styles.goBack}>Go back</Text>
          </View>
        </View>
        <View style={styles.flipCardParent}>
          <View style={[styles.flipCard, styles.flipCardFlexBox]}>
            <View style={[styles.name, styles.flipCardFlexBox]}>
              <Text style={[styles.title, styles.titleTypo]}>
                Рассматривать
              </Text>
              <View style={[styles.wrapper, styles.flipCardFlexBox]}>
                <Text style={[styles.text, styles.textClr]}>
                  Обдумывать, считать
                </Text>
              </View>
            </View>
            <View style={styles.nextWordButton}>
              <Text style={[styles.nextWord, styles.textTypo]}>Next word</Text>
              <Image
                style={styles.bichevronLeftIcon1}
                resizeMode="cover"
                source={require("../assets/bichevronleft1.png")}
              />
            </View>
          </View>
          <View style={styles.flipCardActionsWrapper}>
            <View style={[styles.flipCardActions, styles.flipCardFlexBox]}>
              <Text style={[styles.text1, styles.text1Typo]}>Русский</Text>
              <Text style={[styles.english, styles.titleTypo]}>English</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.tabbarWrapper}>
        <View style={styles.tabbar}>
          <View style={styles.tabs}>
            <View style={[styles.view, styles.viewPosition]}>
              <Image
                style={[styles.outlinecalendarIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/24outlinecalendar.png")}
              />
              <Text style={[styles.sfSymbol, styles.sfSymbolFlexBox]}>􀎞</Text>
              <Text style={[styles.label, styles.labelTypo]}>Daily Words</Text>
              <View style={[styles.tabbarBadge, styles.sfSymbolFlexBox]}>
                <View style={styles.contentLayout}>
                  <View
                    style={[styles.containerMinWidth, styles.contentLayout]}
                  />
                  <Text style={[styles.count, styles.countTypo]}>1</Text>
                </View>
              </View>
            </View>
            <View style={[styles.view1, styles.viewPosition]}>
              <Image
                style={[styles.outlinecalendarIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/24filledcalendar.png")}
              />
              <Text style={[styles.sfSymbol, styles.sfSymbolFlexBox]}>􀎞</Text>
              <Text style={[styles.label1, styles.countTypo]}>Practice</Text>
              <View style={[styles.tabbarBadge, styles.sfSymbolFlexBox]}>
                <View style={styles.contentLayout}>
                  <View
                    style={[styles.containerMinWidth, styles.contentLayout]}
                  />
                  <Text style={[styles.count, styles.countTypo]}>1</Text>
                </View>
              </View>
            </View>
            <View style={[styles.view2, styles.viewPosition]}>
              <Image
                style={[styles.outlinelistIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/24outlinelist.png")}
              />
              <Text style={[styles.sfSymbol, styles.sfSymbolFlexBox]}>􀎞</Text>
              <Text style={[styles.label2, styles.labelTypo]}>My lists</Text>
              <View style={[styles.tabbarBadge, styles.sfSymbolFlexBox]}>
                <View style={styles.contentLayout}>
                  <View
                    style={[styles.containerMinWidth, styles.contentLayout]}
                  />
                  <Text style={[styles.count, styles.countTypo]}>1</Text>
                </View>
              </View>
            </View>
            <View style={[styles.view3, styles.viewPosition]}>
              <Image
                style={[styles.outlinecalendarIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/24outlineprofile1.png")}
              />
              <Text style={[styles.sfSymbol, styles.sfSymbolFlexBox]}>􀎞</Text>
              <Text style={[styles.label3, styles.labelTypo]}>Profile</Text>
              <View style={[styles.tabbarBadge, styles.sfSymbolFlexBox]}>
                <View style={styles.contentLayout}>
                  <View
                    style={[styles.containerMinWidth, styles.contentLayout]}
                  />
                  <Text style={[styles.count, styles.countTypo]}>1</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.homeindicator}>
            <View style={[styles.homeIndicator, styles.frameParentPosition]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    left: "50%",
    position: "absolute",
  },
  flipCardFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleTypo: {
    textAlign: "center",
    color: Color.neutral900,
    fontFamily: FontFamily.medium,
  },
  textClr: {
    color: Color.neutral900,
    fontSize: FontSize.medium_size,
  },
  textTypo: {
    textAlign: "justify",
    fontFamily: FontFamily.medium,
  },
  text1Typo: {
    fontWeight: "500",
    textAlign: "center",
    fontFamily: FontFamily.medium,
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
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    marginTop: 10,
    top: "50%",
    fontWeight: "500",
    textAlign: "center",
    color: Color.neutral400,
    left: "50%",
    position: "absolute",
  },
  contentLayout: {
    width: 14,
    height: 16,
  },
  countTypo: {
    color: Color.neutral100,
    fontFamily: FontFamily.bodyBold,
    textAlign: "center",
    position: "absolute",
  },
  bichevronLeftIcon: {
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  goBack: {
    marginLeft: 4,
    textAlign: "justify",
    color: Color.neutral400,
    fontFamily: FontFamily.medium,
    fontSize: FontSize.medium_size,
  },
  backButton: {
    alignItems: "center",
    flexDirection: "row",
  },
  backButtonWrapper: {
    padding: Padding.p_3xs,
  },
  title: {
    fontSize: FontSize.semiBold_size,
    lineHeight: 43,
    fontWeight: "600",
    textAlign: "center",
    alignSelf: "stretch",
  },
  text: {
    textAlign: "justify",
    fontFamily: FontFamily.medium,
    color: Color.neutral900,
  },
  wrapper: {
    marginTop: 4,
    flexDirection: "row",
  },
  name: {
    zIndex: 0,
    alignSelf: "stretch",
  },
  nextWord: {
    color: Color.neutral400,
    textAlign: "justify",
    fontFamily: FontFamily.medium,
    fontSize: FontSize.medium_size,
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
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  flipCard: {
    width: 336,
    height: 477,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    backgroundColor: Color.neutral100,
    borderRadius: Border.br_xs,
  },
  text1: {
    lineHeight: 22,
    color: Color.neutral900,
    fontSize: FontSize.medium_size,
  },
  english: {
    marginLeft: 35,
    textAlign: "center",
    fontSize: FontSize.medium_size,
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
    marginTop: 137,
    padding: Padding.p_3xs,
  },
  flipCardParent: {
    alignItems: "center",
  },
  frameParent: {
    marginLeft: -168,
    top: 57,
    height: 760,
    justifyContent: "space-between",
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
    top: "50%",
    left: "50%",
    fontWeight: "500",
    textAlign: "center",
    fontFamily: FontFamily.medium,
  },
  label: {
    marginLeft: -27.5,
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
    color: Color.neutral100,
    top: "50%",
    fontWeight: "600",
    left: "50%",
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
  },
  view2: {
    marginLeft: 12,
  },
  label3: {
    marginLeft: -14.5,
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
    borderStyle: "solid",
    borderColor: Color.neutral500,
    borderTopWidth: 0.5,
    width: 390,
    alignItems: "center",
    backgroundColor: Color.neutral900,
  },
  tabbarWrapper: {
    top: 831,
    left: -10,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  iphone1313ProCodeInpu: {
    flex: 1,
    width: "100%",
    height: 925,
    backgroundColor: Color.neutral900,
    borderRadius: Border.br_xs,
  },
});

export default IPhone1313ProCodeInpu1;
