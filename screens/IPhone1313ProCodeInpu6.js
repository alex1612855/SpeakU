import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Padding, Color, Border, FontSize } from "../GlobalStyles";

const IPhone1313ProCodeInpu6 = () => {
  return (
    <View style={styles.iphone1313ProCodeInpu}>
      <View style={[styles.backButton, styles.buttonFlexBox]}>
        <Image
          style={styles.bichevronLeftIcon}
          resizeMode="cover"
          source={require("../assets/bichevronleft5.png")}
        />
        <Text style={styles.goBack}>Go back</Text>
      </View>
      <View style={[styles.title, styles.titleFlexBox]}>
        <Text style={[styles.title1, styles.title1Typo]}>Select the pairs</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.selectLayout}>
          <View style={styles.selectFlexBox}>
            <Text style={[styles.accidentally, styles.title1Typo]}>
              accidentally
            </Text>
            <Image
              style={[styles.basilcrossSolidIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid2.png")}
            />
          </View>
          <View style={[styles.select1, styles.selectFlexBox]}>
            <Text style={[styles.accidentally, styles.title1Typo]}>
              вдохновение
            </Text>
            <Image
              style={[styles.basilcrossSolidIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid2.png")}
            />
          </View>
        </View>
        <View style={[styles.selectGroup, styles.selectLayout]}>
          <View style={styles.selectFlexBox}>
            <Text style={[styles.accidentally, styles.title1Typo]}>
              independence
            </Text>
            <Image
              style={[styles.basilcrossSolidIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid3.png")}
            />
          </View>
          <View style={[styles.select1, styles.selectFlexBox]}>
            <Text style={[styles.accidentally, styles.title1Typo]}>честно</Text>
            <Image
              style={[styles.basilcrossSolidIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid2.png")}
            />
          </View>
        </View>
        <View style={[styles.selectGroup, styles.selectLayout]}>
          <View style={styles.selectFlexBox}>
            <Text style={[styles.accidentally, styles.title1Typo]}>honest</Text>
            <Image
              style={[styles.basilcrossSolidIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid3.png")}
            />
          </View>
          <View style={[styles.select1, styles.selectFlexBox]}>
            <Text style={[styles.accidentally, styles.title1Typo]}>
              независимость
            </Text>
            <Image
              style={[styles.basilcrossSolidIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid2.png")}
            />
          </View>
        </View>
        <View style={[styles.selectGroup, styles.selectLayout]}>
          <View style={styles.selectFlexBox}>
            <Text style={[styles.accidentally, styles.title1Typo]}>
              incredible
            </Text>
            <Image
              style={[styles.basilcrossSolidIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid2.png")}
            />
          </View>
          <View style={[styles.select1, styles.selectFlexBox]}>
            <Text style={[styles.accidentally, styles.title1Typo]}>
              случайно
            </Text>
            <Image
              style={[styles.basilcrossSolidIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid3.png")}
            />
          </View>
        </View>
        <View style={[styles.selectGroup, styles.selectLayout]}>
          <View style={styles.selectFlexBox}>
            <Text style={[styles.accidentally, styles.title1Typo]}>
              inspiration
            </Text>
            <Image
              style={[styles.basilcrossSolidIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid2.png")}
            />
          </View>
          <View style={[styles.select1, styles.selectFlexBox]}>
            <Text style={[styles.accidentally, styles.title1Typo]}>
              ответственность
            </Text>
            <Image
              style={[styles.basilcrossSolidIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid3.png")}
            />
          </View>
        </View>
        <View style={[styles.selectGroup, styles.selectLayout]}>
          <View style={styles.selectFlexBox}>
            <Text style={[styles.accidentally, styles.title1Typo]}>
              responsibility
            </Text>
            <Image
              style={[styles.basilcrossSolidIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid2.png")}
            />
          </View>
          <View style={[styles.select1, styles.selectFlexBox]}>
            <Text style={[styles.accidentally, styles.title1Typo]}>
              улучшать
            </Text>
            <Image
              style={[styles.basilcrossSolidIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid3.png")}
            />
          </View>
        </View>
        <View style={[styles.selectGroup, styles.selectLayout]}>
          <View style={styles.selectFlexBox}>
            <Text style={[styles.accidentally, styles.title1Typo]}>
              improve
            </Text>
            <Image
              style={[styles.basilcrossSolidIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid2.png")}
            />
          </View>
          <View style={[styles.select1, styles.selectFlexBox]}>
            <Text style={[styles.accidentally, styles.title1Typo]}>
              улучшать
            </Text>
            <Image
              style={[styles.basilcrossSolidIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid3.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.nextWordButton, styles.buttonFlexBox]}>
        <Text style={styles.nextWord}>Next pairs</Text>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/bichevronleft6.png")}
        />
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
              source={require("../assets/24filledcalendar2.png")}
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
              source={require("../assets/24outlineprofile6.png")}
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
  buttonFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleFlexBox: {
    justifyContent: "center",
    position: "absolute",
  },
  title1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.medium,
  },
  iconLayout: {
    height: 16,
    width: 16,
    marginLeft: 4,
    overflow: "hidden",
  },
  selectFlexBox: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_2xl,
    height: 47,
    backgroundColor: Color.successDark,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    borderRadius: Border.br_xs,
  },
  selectLayout: {
    width: 342,
    flexDirection: "row",
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
  bichevronLeftIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  goBack: {
    marginLeft: 4,
    textAlign: "justify",
    color: Color.neutral400,
    fontFamily: FontFamily.medium,
    fontSize: FontSize.medium_size,
  },
  backButton: {
    top: 66,
    left: 16,
    alignItems: "center",
    position: "absolute",
  },
  title1: {
    fontSize: FontSize.semiBold_size,
    color: Color.neutral100,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  title: {
    top: 126,
    left: 17,
    width: 326,
  },
  accidentally: {
    fontSize: FontSize.medium2_size,
    color: Color.neutral900,
    fontWeight: "500",
  },
  basilcrossSolidIcon: {
    display: "none",
  },
  select1: {
    marginLeft: 16,
  },
  selectGroup: {
    marginTop: 16,
  },
  frameParent: {
    top: 205,
    left: 19,
    position: "absolute",
  },
  nextWord: {
    textAlign: "justify",
    fontFamily: FontFamily.medium,
    fontSize: FontSize.medium_size,
    color: Color.neutral400,
  },
  nextWordButton: {
    top: 660,
    left: 273,
    alignItems: "center",
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
    fontWeight: "500",
    justifyContent: "center",
    fontFamily: FontFamily.medium,
    alignItems: "center",
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
    display: "none",
    alignItems: "center",
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
    backgroundColor: Color.neutral100,
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
    borderStyle: "solid",
    borderColor: Color.neutral500,
    borderTopWidth: 0.5,
    width: 390,
    alignItems: "center",
    backgroundColor: Color.neutral900,
    left: "50%",
  },
  iphone1313ProCodeInpu: {
    width: "100%",
    height: 808,
    overflow: "hidden",
    flex: 1,
    borderRadius: Border.br_xs,
    backgroundColor: Color.neutral900,
  },
});

export default IPhone1313ProCodeInpu6;
