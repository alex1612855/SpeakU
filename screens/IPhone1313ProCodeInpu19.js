import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, Padding, Color, Border, FontSize } from "../GlobalStyles";

const IPhone1313ProCodeInpu19 = () => {
  return (
    <View style={styles.iphone1313ProCodeInpu}>
      <View style={styles.title}>
        <Text style={[styles.title1, styles.titleFlexBox1]}>My profile</Text>
      </View>
      <View style={styles.main}>
        <View style={[styles.profileMain, styles.levelSpaceBlock]}>
          <Image
            style={styles.outlineprofileIcon}
            resizeMode="cover"
            source={require("../assets/24outlineprofile8.png")}
          />
          <View style={styles.name}>
            <Text style={[styles.title2, styles.titleFlexBox1]}>
              Natalia Ivanova
            </Text>
            <Text style={[styles.text, styles.titleFlexBox1]}>
              +1 984 479 3837
            </Text>
            <Text style={[styles.text, styles.titleFlexBox1]}>
              mymail@gmail.com
            </Text>
          </View>
          <Image
            style={[styles.iconamoonedit, styles.iconamooneditLayout]}
            resizeMode="cover"
            source={require("../assets/iconamoonedit1.png")}
          />
        </View>
        <View style={[styles.level, styles.levelBorder]}>
          <View style={styles.name1}>
            <View style={styles.titleWrapper}>
              <Text style={[styles.title3, styles.titleTypo]}>My level:</Text>
            </View>
            <View style={[styles.dropDown, styles.levelBorder]}>
              <View style={[styles.title4, styles.titleFlexBox]}>
                <View style={styles.name1}>
                  <Text style={[styles.title5, styles.titleTypo]}>
                    Intermediate
                  </Text>
                </View>
                <Image
                  style={[styles.chevronIcon, styles.chevronIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/16chevron4.png")}
                />
              </View>
              <View style={[styles.list, styles.listSpaceBlock]}>
                <View style={[styles.title4, styles.titleFlexBox]}>
                  <View style={styles.name1}>
                    <Text style={styles.title7}>Beginner</Text>
                  </View>
                  <Image
                    style={[styles.chevronIcon1, styles.chevronIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/16chevron5.png")}
                  />
                </View>
                <View style={[styles.title8, styles.listSpaceBlock]}>
                  <View style={styles.name1}>
                    <Text style={styles.title7}>Intermediate</Text>
                  </View>
                  <Image
                    style={[styles.titleChild, styles.chevronIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame-924.png")}
                  />
                </View>
                <View style={[styles.title8, styles.listSpaceBlock]}>
                  <View style={styles.name1}>
                    <Text style={styles.title7}>Advanced</Text>
                  </View>
                  <Image
                    style={[styles.chevronIcon1, styles.chevronIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/16chevron5.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.tablerdotsIcon, styles.iconamooneditLayout]}
            resizeMode="cover"
            source={require("../assets/tablerdots3.png")}
          />
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
            <Text style={styles.sfSymbol}>􀎞</Text>
            <Text style={[styles.label, styles.labelTypo]}>Daily Words</Text>
            <View style={[styles.tabbarBadge, styles.titleFlexBox]}>
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
              source={require("../assets/24outlineclock2.png")}
            />
            <Text style={styles.sfSymbol}>􀎞</Text>
            <Text style={[styles.label1, styles.labelTypo]}>Practice</Text>
            <View style={[styles.tabbarBadge, styles.titleFlexBox]}>
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
            <Text style={styles.sfSymbol}>􀎞</Text>
            <Text style={[styles.label2, styles.labelTypo]}>My lists</Text>
            <View style={[styles.tabbarBadge, styles.titleFlexBox]}>
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
              source={require("../assets/24filledprofile.png")}
            />
            <Text style={styles.sfSymbol}>􀎞</Text>
            <Text style={[styles.label3, styles.labelTypo]}>Profile</Text>
            <View style={[styles.tabbarBadge, styles.titleFlexBox]}>
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
  titleFlexBox1: {
    textAlign: "left",
    fontFamily: FontFamily.medium,
    alignSelf: "stretch",
  },
  levelSpaceBlock: {
    paddingBottom: Padding.p_xl,
    paddingHorizontal: Padding.p_lg,
    flexDirection: "row",
    backgroundColor: Color.neutral100,
    width: 358,
  },
  iconamooneditLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  levelBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
  },
  titleTypo: {
    lineHeight: 22,
    fontSize: FontSize.medium_size,
    textAlign: "left",
    fontFamily: FontFamily.medium,
    alignSelf: "stretch",
  },
  titleFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  chevronIconLayout: {
    height: 16,
    width: 16,
    marginLeft: 12,
  },
  listSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
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
  labelTypo: {
    fontFamily: FontFamily.bodyBold,
    textAlign: "center",
    position: "absolute",
  },
  contentLayout: {
    width: 14,
    height: 16,
  },
  title1: {
    fontSize: FontSize.semiBold_size,
    color: Color.neutral100,
    fontWeight: "600",
  },
  title: {
    top: 71,
    width: 326,
    justifyContent: "center",
    left: 16,
    position: "absolute",
  },
  outlineprofileIcon: {
    width: 48,
    height: 48,
    overflow: "hidden",
  },
  title2: {
    fontSize: FontSize.medium1_size,
    color: Color.neutral800,
    fontWeight: "500",
  },
  text: {
    fontSize: FontSize.regular_size,
    lineHeight: 19,
    color: Color.neutral500,
    marginTop: 4,
    fontWeight: "500",
  },
  name: {
    marginLeft: 17,
    justifyContent: "center",
    flex: 1,
  },
  iconamoonedit: {
    marginLeft: 17,
  },
  profileMain: {
    paddingTop: Padding.p_base,
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_lg,
  },
  title3: {
    color: Color.neutral800,
    fontWeight: "600",
  },
  titleWrapper: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  title5: {
    fontWeight: "500",
    color: Color.neutral100,
  },
  name1: {
    justifyContent: "center",
    flex: 1,
  },
  chevronIcon: {
    marginLeft: 12,
    overflow: "hidden",
  },
  title4: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  title7: {
    color: Color.neutral400,
    fontSize: FontSize.medium_size,
    textAlign: "left",
    fontFamily: FontFamily.medium,
    alignSelf: "stretch",
  },
  chevronIcon1: {
    display: "none",
    marginLeft: 12,
    overflow: "hidden",
  },
  titleChild: {
    marginLeft: 12,
  },
  title8: {
    alignItems: "center",
    flexDirection: "row",
  },
  list: {
    justifyContent: "center",
  },
  dropDown: {
    backgroundColor: Color.neutral800,
    borderColor: Color.neutral300,
    padding: Padding.p_base,
    marginTop: 16,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  tablerdotsIcon: {
    marginLeft: 4,
    display: "none",
  },
  level: {
    borderColor: Color.neutral800,
    paddingTop: Padding.p_xs,
    marginTop: 12,
    paddingBottom: Padding.p_xl,
    paddingHorizontal: Padding.p_lg,
    flexDirection: "row",
    backgroundColor: Color.neutral100,
    width: 358,
  },
  main: {
    top: 133,
    width: 358,
    left: 16,
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
    top: "50%",
    left: "50%",
    display: "none",
    alignItems: "center",
    fontWeight: "500",
    fontFamily: FontFamily.medium,
    justifyContent: "center",
    position: "absolute",
  },
  label: {
    marginLeft: -27.5,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    marginTop: 10,
    fontFamily: FontFamily.bodyBold,
    top: "50%",
    left: "50%",
    color: Color.neutral400,
    fontWeight: "500",
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
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
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
    color: Color.neutral400,
    fontWeight: "500",
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
    color: Color.neutral400,
    fontWeight: "500",
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
    color: Color.neutral100,
    fontWeight: "600",
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

export default IPhone1313ProCodeInpu19;
