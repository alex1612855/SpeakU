import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.tabbarParent}>
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
              style={styles.iconPosition}
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
          <View style={styles.homeIndicator} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPosition: {
    width: 75,
    left: "50%",
    top: 0,
    position: "absolute",
    height: 50,
  },
  iconPosition: {
    height: 24,
    width: 24,
    top: "50%",
    marginLeft: -11.5,
    marginTop: -17.8,
    left: "50%",
    position: "absolute",
  },
  sfSymbolFlexBox: {
    justifyContent: "center",
    display: "none",
    position: "absolute",
    alignItems: "center",
  },
  labelTypo: {
    color: Color.neutral400,
    fontFamily: FontFamily.bodyBold,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "500",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  contentLayout: {
    height: 16,
    width: 14,
  },
  countTypo: {
    color: Color.neutral100,
    fontFamily: FontFamily.bodyBold,
    textAlign: "center",
    position: "absolute",
  },
  outlinecalendarIcon: {
    overflow: "hidden",
  },
  sfSymbol: {
    marginTop: -26,
    marginLeft: -19.5,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.medium,
    color: Color.defaultSystemBlueLight,
    width: 40,
    height: 40,
    textAlign: "center",
    fontWeight: "500",
    justifyContent: "center",
    display: "none",
    top: "50%",
    left: "50%",
  },
  label: {
    marginLeft: -27.5,
  },
  containerMinWidth: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 16,
    width: 14,
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
    flexDirection: "row",
    paddingHorizontal: Padding.p_10xs,
    paddingVertical: Padding.p_11xs,
  },
  view: {
    marginLeft: -185,
  },
  label1: {
    marginLeft: -18.5,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    marginTop: 10,
    color: Color.neutral100,
    top: "50%",
    left: "50%",
  },
  view1: {
    marginLeft: -87,
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
    overflow: "hidden",
    height: 50,
    alignSelf: "stretch",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.neutral100,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeindicator: {
    height: 34,
    alignSelf: "stretch",
  },
  tabbar: {
    backgroundColor: Color.neutral900,
    borderStyle: "solid",
    borderColor: Color.neutral500,
    borderTopWidth: 0.5,
    width: 390,
    alignItems: "center",
  },
  tabbarParent: {
    flex: 1,
    width: "100%",
    padding: Padding.p_3xs,
  },
});

export default Frame;
