import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const IPhone1313ProCodeInpu7 = () => {
  return (
    <View style={styles.iphone1313ProCodeInpu}>
      <View style={[styles.backButton, styles.backButtonFlexBox]}>
        <Image
          style={styles.bichevronLeftIcon}
          resizeMode="cover"
          source={require("../assets/bichevronleft5.png")}
        />
        <Text style={styles.goBack}>Go back</Text>
      </View>
      <View style={[styles.title, styles.titleFlexBox]}>
        <Text style={styles.title1}>Select the pairs</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.selectLayout}>
          <View style={[styles.select, styles.selectFlexBox1]}>
            <Text style={[styles.accidentally, styles.accidentallyTypo]}>
              accidentally
            </Text>
            <Image
              style={styles.basilcrossSolidIcon}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid2.png")}
            />
          </View>
          <View style={[styles.select1, styles.selectFlexBox]}>
            <Text style={[styles.accidentally1, styles.accidentallyTypo]}>
              вдохновение
            </Text>
            <Image
              style={styles.basilcrossSolidIcon}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid2.png")}
            />
          </View>
        </View>
        <View style={[styles.selectGroup, styles.selectLayout]}>
          <View style={[styles.select2, styles.selectBorder]}>
            <Text style={[styles.accidentally1, styles.accidentallyTypo]}>
              independence
            </Text>
            <Image
              style={styles.basilcrossSolidIcon}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid3.png")}
            />
          </View>
          <View style={[styles.select1, styles.selectFlexBox]}>
            <Text style={[styles.accidentally1, styles.accidentallyTypo]}>
              честно
            </Text>
            <Image
              style={styles.basilcrossSolidIcon}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid2.png")}
            />
          </View>
        </View>
        <View style={[styles.selectGroup, styles.selectLayout]}>
          <View style={[styles.select2, styles.selectBorder]}>
            <Text style={[styles.accidentally1, styles.accidentallyTypo]}>
              honest
            </Text>
            <Image
              style={styles.basilcrossSolidIcon}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid3.png")}
            />
          </View>
          <View style={[styles.select1, styles.selectFlexBox]}>
            <Text style={[styles.accidentally1, styles.accidentallyTypo]}>
              независимость
            </Text>
            <Image
              style={styles.basilcrossSolidIcon}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid2.png")}
            />
          </View>
        </View>
        <View style={[styles.selectGroup, styles.selectLayout]}>
          <View style={[styles.select2, styles.selectBorder]}>
            <Text style={[styles.accidentally1, styles.accidentallyTypo]}>
              incredible
            </Text>
            <Image
              style={styles.basilcrossSolidIcon}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid2.png")}
            />
          </View>
          <View style={[styles.select7, styles.selectFlexBox]}>
            <Text style={[styles.accidentally, styles.accidentallyTypo]}>
              случайно
            </Text>
            <Image
              style={styles.basilcrossSolidIcon}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid3.png")}
            />
          </View>
        </View>
        <View style={[styles.selectGroup, styles.selectLayout]}>
          <View style={[styles.select2, styles.selectBorder]}>
            <Text style={[styles.accidentally1, styles.accidentallyTypo]}>
              inspiration
            </Text>
            <Image
              style={styles.basilcrossSolidIcon}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid2.png")}
            />
          </View>
          <View style={[styles.select1, styles.selectFlexBox]}>
            <Text style={[styles.accidentally1, styles.accidentallyTypo]}>
              ответственность
            </Text>
            <Image
              style={styles.basilcrossSolidIcon}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid3.png")}
            />
          </View>
        </View>
        <View style={[styles.selectGroup, styles.selectLayout]}>
          <View style={[styles.select2, styles.selectBorder]}>
            <Text style={[styles.accidentally1, styles.accidentallyTypo]}>
              responsibility
            </Text>
            <Image
              style={styles.basilcrossSolidIcon}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid2.png")}
            />
          </View>
          <View style={[styles.select1, styles.selectFlexBox]}>
            <Text style={[styles.accidentally1, styles.accidentallyTypo]}>
              улучшать
            </Text>
            <Image
              style={styles.basilcrossSolidIcon}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid3.png")}
            />
          </View>
        </View>
        <View style={[styles.selectGroup, styles.selectLayout]}>
          <View style={[styles.select2, styles.selectBorder]}>
            <Text style={[styles.accidentally1, styles.accidentallyTypo]}>
              improve
            </Text>
            <Image
              style={styles.basilcrossSolidIcon}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid2.png")}
            />
          </View>
          <View style={[styles.select1, styles.selectFlexBox]}>
            <Text style={[styles.accidentally1, styles.accidentallyTypo]}>
              улучшать
            </Text>
            <Image
              style={styles.basilcrossSolidIcon}
              resizeMode="cover"
              source={require("../assets/basilcrosssolid3.png")}
            />
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
              source={require("../assets/24outlineprofile5.png")}
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
  backButtonFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  titleFlexBox: {
    justifyContent: "center",
    position: "absolute",
  },
  selectFlexBox1: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_2xl,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    borderRadius: Border.br_xs,
  },
  accidentallyTypo: {
    fontSize: FontSize.medium2_size,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.medium,
  },
  selectFlexBox: {
    marginLeft: 16,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_2xl,
    height: 47,
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
  selectBorder: {
    borderWidth: 1,
    borderColor: Color.neutral100,
    borderStyle: "solid",
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
    fontSize: FontSize.medium_size,
    textAlign: "justify",
    marginLeft: 4,
    fontFamily: FontFamily.medium,
    color: Color.neutral400,
  },
  backButton: {
    top: 66,
    left: 16,
    position: "absolute",
  },
  title1: {
    fontSize: FontSize.semiBold_size,
    textAlign: "left",
    color: Color.neutral100,
    fontWeight: "600",
    alignSelf: "stretch",
    fontFamily: FontFamily.medium,
  },
  title: {
    top: 126,
    left: 17,
    width: 326,
  },
  accidentally: {
    color: Color.neutral900,
    fontWeight: "500",
  },
  basilcrossSolidIcon: {
    width: 16,
    display: "none",
    height: 16,
    marginLeft: 4,
    overflow: "hidden",
  },
  select: {
    backgroundColor: Color.successDark,
  },
  accidentally1: {
    fontWeight: "500",
    color: Color.neutral100,
  },
  select1: {
    borderWidth: 1,
    borderColor: Color.neutral100,
    borderStyle: "solid",
  },
  select2: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_2xl,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    borderRadius: Border.br_xs,
  },
  selectGroup: {
    marginTop: 16,
  },
  select7: {
    backgroundColor: Color.successDark,
  },
  frameParent: {
    top: 205,
    left: 19,
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
    borderColor: Color.neutral500,
    borderTopWidth: 0.5,
    width: 390,
    borderStyle: "solid",
    left: "50%",
    alignItems: "center",
    backgroundColor: Color.neutral900,
  },
  iphone1313ProCodeInpu: {
    width: "100%",
    height: 808,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutral900,
    borderRadius: Border.br_xs,
  },
});

export default IPhone1313ProCodeInpu7;
