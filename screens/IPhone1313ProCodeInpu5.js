import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, Padding, Color, FontSize, Border } from "../GlobalStyles";

const IPhone1313ProCodeInpu5 = () => {
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
            <View style={[styles.listElements, styles.listSpaceBlock]}>
              <View style={styles.name}>
                <Text style={[styles.title2, styles.titleTypo]}>
                  My first list
                </Text>
                <Text style={[styles.level3, styles.level3FlexBox]}>
                  Level 3
                </Text>
              </View>
              <Image
                style={[styles.tablerdotsIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/tablerdots2.png")}
              />
            </View>
            <View style={[styles.listElements1, styles.listSpaceBlock]}>
              <View style={styles.name}>
                <Text
                  style={[styles.title2, styles.titleTypo]}
                >{`The New General Service List: `}</Text>
                <Text style={[styles.level3, styles.level3FlexBox]}>
                  Level 3
                </Text>
              </View>
              <Image
                style={[styles.tablerdotsIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/tablerdots2.png")}
              />
            </View>
            <View style={[styles.tools, styles.listSpaceBlock]}>
              <View
                style={[
                  styles.iconamooneditLightParent,
                  styles.parentSpaceBlock,
                ]}
              >
                <Image
                  style={styles.iconamooneditLight}
                  resizeMode="cover"
                  source={require("../assets/iconamooneditlight1.png")}
                />
                <Text style={[styles.rename, styles.titleTypo]}>Rename</Text>
              </View>
              <View style={[styles.toolsChild, styles.toolsChildSpaceBlock]} />
              <View
                style={[
                  styles.deleteMiniButtonParent,
                  styles.toolsChildSpaceBlock,
                ]}
              >
                <Image
                  style={styles.iconamooneditLight}
                  resizeMode="cover"
                  source={require("../assets/delete-minibutton1.png")}
                />
                <Text style={[styles.rename, styles.titleTypo]}>Delete</Text>
              </View>
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
      <View style={[styles.statusbar, styles.tabbarLayout]}>
        <Image
          style={[styles.notchIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/notch1.png")}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
          </View>
        </View>
        <Image
          style={[styles.rightSideIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/right-side1.png")}
        />
      </View>
      <View style={[styles.tabbar, styles.iconPosition]}>
        <View style={styles.tabs}>
          <View style={[styles.view, styles.viewPosition]}>
            <Image
              style={[styles.outlinecalendarIcon, styles.sfSymbolPosition]}
              resizeMode="cover"
              source={require("../assets/24outlinecalendar2.png")}
            />
            <Text style={[styles.sfSymbol, styles.sfSymbolFlexBox]}>􀎞</Text>
            <Text style={[styles.label, styles.labelPosition]}>
              Daily Words
            </Text>
            <View style={[styles.tabbarBadge, styles.sfSymbolFlexBox]}>
              <View style={styles.contentLayout}>
                <View
                  style={[styles.containerMinWidth, styles.contentLayout]}
                />
                <Text style={[styles.count, styles.timeTypo]}>1</Text>
              </View>
            </View>
          </View>
          <View style={[styles.view1, styles.viewPosition]}>
            <Image
              style={[styles.outlinecalendarIcon, styles.sfSymbolPosition]}
              resizeMode="cover"
              source={require("../assets/24outlineclock2.png")}
            />
            <Text style={[styles.sfSymbol, styles.sfSymbolFlexBox]}>􀎞</Text>
            <Text style={[styles.label1, styles.labelPosition]}>Practice</Text>
            <View style={[styles.tabbarBadge, styles.sfSymbolFlexBox]}>
              <View style={styles.contentLayout}>
                <View
                  style={[styles.containerMinWidth, styles.contentLayout]}
                />
                <Text style={[styles.count, styles.timeTypo]}>1</Text>
              </View>
            </View>
          </View>
          <View style={[styles.view2, styles.viewPosition]}>
            <Image
              style={[styles.outlinecalendarIcon, styles.sfSymbolPosition]}
              resizeMode="cover"
              source={require("../assets/24filledcalendar2.png")}
            />
            <Text style={[styles.sfSymbol, styles.sfSymbolFlexBox]}>􀎞</Text>
            <Text style={[styles.label2, styles.labelPosition]}>My lists</Text>
            <View style={[styles.tabbarBadge, styles.sfSymbolFlexBox]}>
              <View style={styles.contentLayout}>
                <View
                  style={[styles.containerMinWidth, styles.contentLayout]}
                />
                <Text style={[styles.count, styles.timeTypo]}>1</Text>
              </View>
            </View>
          </View>
          <View style={[styles.view3, styles.viewPosition]}>
            <Image
              style={[styles.outlinecalendarIcon, styles.sfSymbolPosition]}
              resizeMode="cover"
              source={require("../assets/24outlineprofile5.png")}
            />
            <Text style={[styles.sfSymbol, styles.sfSymbolFlexBox]}>􀎞</Text>
            <Text style={[styles.label3, styles.labelPosition]}>Profile</Text>
            <View style={[styles.tabbarBadge, styles.sfSymbolFlexBox]}>
              <View style={styles.contentLayout}>
                <View
                  style={[styles.containerMinWidth, styles.contentLayout]}
                />
                <Text style={[styles.count, styles.timeTypo]}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.homeindicator}>
          <View style={[styles.homeIndicator, styles.iconPosition]} />
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
  listSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.neutral100,
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  parentSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    flexDirection: "row",
  },
  toolsChildSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  tabbarLayout: {
    width: 390,
    backgroundColor: Color.neutral900,
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  timeTypo: {
    fontFamily: FontFamily.bodyBold,
    textAlign: "center",
    color: Color.neutral100,
    position: "absolute",
  },
  viewPosition: {
    width: 75,
    height: 50,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  sfSymbolPosition: {
    top: "50%",
    left: "50%",
  },
  sfSymbolFlexBox: {
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  labelPosition: {
    fontSize: FontSize.size_3xs,
    marginTop: 10,
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.bodyBold,
    letterSpacing: 0,
    left: "50%",
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
  },
  listElements: {
    zIndex: 0,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.neutral800,
    paddingHorizontal: Padding.p_base,
    borderStyle: "solid",
    width: 358,
    borderRadius: Border.br_xs,
  },
  listElements1: {
    marginTop: 12,
    zIndex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.neutral800,
    paddingHorizontal: Padding.p_base,
    borderStyle: "solid",
    width: 358,
    borderRadius: Border.br_xs,
  },
  iconamooneditLight: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  rename: {
    color: Color.neutral900,
    marginLeft: 10,
    fontSize: FontSize.medium_size,
  },
  iconamooneditLightParent: {
    alignSelf: "stretch",
  },
  toolsChild: {
    borderColor: Color.colorWhitesmoke,
    borderTopWidth: 1,
    height: 1,
    borderStyle: "solid",
  },
  deleteMiniButtonParent: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    flexDirection: "row",
  },
  tools: {
    top: 36,
    left: 146,
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(14, 31, 41, 0.17)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
    width: 196,
    zIndex: 2,
    position: "absolute",
    overflow: "hidden",
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
  notchIcon: {
    marginLeft: -86,
    width: 172,
    height: 32,
    top: 0,
  },
  time: {
    top: 1,
    fontSize: FontSize.bodyBold_size,
    lineHeight: 22,
    height: 20,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.bodyBold,
    width: 54,
    left: 0,
    fontWeight: "600",
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  leftSide: {
    marginLeft: -168,
    top: 14,
  },
  rightSideIcon: {
    marginLeft: 91,
    top: 19,
    width: 77,
    height: 13,
  },
  statusbar: {
    height: 47,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  outlinecalendarIcon: {
    marginTop: -17.8,
    marginLeft: -11.5,
    height: 24,
    width: 24,
    overflow: "hidden",
    position: "absolute",
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
    textAlign: "center",
    fontWeight: "500",
    fontFamily: FontFamily.medium,
    display: "none",
  },
  label: {
    marginLeft: -27.5,
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
    textAlign: "center",
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
    fontWeight: "500",
    color: Color.neutral400,
  },
  view1: {
    marginLeft: -87,
  },
  label2: {
    marginLeft: -17.5,
    color: Color.neutral100,
    fontWeight: "600",
  },
  view2: {
    marginLeft: 12,
  },
  label3: {
    marginLeft: -14.5,
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
    left: "50%",
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
    backgroundColor: Color.neutral900,
    alignItems: "center",
    borderStyle: "solid",
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

export default IPhone1313ProCodeInpu5;
