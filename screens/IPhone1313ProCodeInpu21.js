import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, Padding, Color, Border, FontSize } from "../GlobalStyles";

const IPhone1313ProCodeInpu21 = () => {
  return (
    <View style={styles.iphone1313ProCodeInpu}>
      <View style={styles.titleParent}>
        <View style={styles.title}>
          <Text style={[styles.title1, styles.titleTypo]}>My lists</Text>
          <Text style={[styles.youCanInclude, styles.level3FlexBox]}>
            You can include personal words for study
          </Text>
        </View>
        <View style={styles.frameParent}>
          <View>
            <View style={styles.listBorder}>
              <View style={styles.name}>
                <Text style={[styles.title2, styles.titleTypo]}>
                  My first list
                </Text>
                <Text style={[styles.level3, styles.level3FlexBox]}>
                  Level 3
                </Text>
              </View>
              <Image
                style={styles.tablerdotsIcon}
                resizeMode="cover"
                source={require("../assets/tablerdots2.png")}
              />
            </View>
            <View style={[styles.listElements1, styles.listBorder]}>
              <View style={styles.name}>
                <Text
                  style={[styles.title2, styles.titleTypo]}
                >{`The New General Service List: `}</Text>
                <Text style={[styles.level3, styles.level3FlexBox]}>
                  Level 3
                </Text>
              </View>
              <Image
                style={styles.tablerdotsIcon}
                resizeMode="cover"
                source={require("../assets/tablerdots2.png")}
              />
            </View>
          </View>
          <View style={styles.addButton}>
            <View style={styles.button}>
              <Image
                style={styles.buttonChild}
                resizeMode="cover"
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={styles.pixelarticonsplus}
                resizeMode="cover"
                source={require("../assets/pixelarticonsplus3.png")}
              />
            </View>
            <Text style={[styles.title4, styles.titleTypo]}>Add new list</Text>
          </View>
        </View>
      </View>
      <View style={[styles.tabbar, styles.tabbarPosition]}>
        <View style={styles.tabs}>
          <View style={[styles.view, styles.viewPosition]}>
            <Image
              style={styles.outlinecalendarIcon}
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
              style={styles.outlinecalendarIcon}
              resizeMode="cover"
              source={require("../assets/24outlineclock2.png")}
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
              style={styles.outlinecalendarIcon}
              resizeMode="cover"
              source={require("../assets/24filledcalendar2.png")}
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
              style={styles.outlinecalendarIcon}
              resizeMode="cover"
              source={require("../assets/24outlineprofile5.png")}
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
  titleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.medium,
  },
  level3FlexBox: {
    marginTop: 4,
    textAlign: "left",
    fontFamily: FontFamily.medium,
    alignSelf: "stretch",
  },
  listBorder: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.neutral800,
    flexDirection: "row",
    borderStyle: "solid",
    backgroundColor: Color.neutral100,
    width: 358,
    borderRadius: Border.br_xs,
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
  sfSymbolFlexBox: {
    display: "none",
    alignItems: "center",
    justifyContent: "center",
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
  title1: {
    fontSize: FontSize.semiBold_size,
    color: Color.neutral100,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  youCanInclude: {
    color: Color.neutral400,
    fontSize: FontSize.medium_size,
  },
  title: {
    width: 326,
    justifyContent: "center",
  },
  title2: {
    lineHeight: 22,
    color: Color.neutral800,
    fontSize: FontSize.medium_size,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  level3: {
    fontSize: FontSize.regular_size,
    lineHeight: 19,
    color: Color.neutral500,
    fontWeight: "500",
  },
  name: {
    height: 45,
    justifyContent: "center",
    flex: 1,
  },
  tablerdotsIcon: {
    marginLeft: 4,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  listElements1: {
    marginTop: 12,
  },
  buttonChild: {
    width: 44,
    height: 44,
    zIndex: 0,
  },
  pixelarticonsplus: {
    height: "45.45%",
    width: "45.45%",
    top: "27.27%",
    right: "27.27%",
    bottom: "27.27%",
    left: "27.27%",
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  button: {
    flexDirection: "row",
  },
  title4: {
    marginLeft: 12,
    fontSize: FontSize.medium_size,
    color: Color.neutral100,
  },
  addButton: {
    marginTop: 16,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent: {
    marginTop: 24,
    width: 358,
  },
  titleParent: {
    top: 71,
    left: 16,
    width: 358,
    position: "absolute",
  },
  outlinecalendarIcon: {
    marginTop: -17.8,
    marginLeft: -11.5,
    top: "50%",
    left: "50%",
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
    textAlign: "center",
    display: "none",
    top: "50%",
    left: "50%",
    fontWeight: "500",
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
    fontWeight: "500",
    color: Color.neutral400,
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
    color: Color.neutral100,
    fontWeight: "600",
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
    left: "50%",
    backgroundColor: Color.neutral100,
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
    alignItems: "center",
    borderStyle: "solid",
    left: "50%",
    backgroundColor: Color.neutral900,
  },
  iphone1313ProCodeInpu: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutral900,
    borderRadius: Border.br_xs,
  },
});

export default IPhone1313ProCodeInpu21;
