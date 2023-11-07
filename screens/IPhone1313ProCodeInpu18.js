import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const IPhone1313ProCodeInpu18 = () => {
  return (
    <View style={styles.iphone1313ProCodeInpu}>
      <View style={styles.titleParent}>
        <View style={styles.title}>
          <Text style={[styles.title1, styles.titleFlexBox]}>Practice</Text>
          <Text style={[styles.youCanInclude, styles.youCanIncludeTypo]}>
            You can include personal words for study
          </Text>
        </View>
        <View style={styles.practiceTypeParent}>
          <View style={styles.practiceBorder}>
            <Image
              style={styles.specialflipIcon}
              resizeMode="cover"
              source={require("../assets/specialflip1.png")}
            />
            <View style={styles.nameParent}>
              <View style={styles.name}>
                <Text style={[styles.title2, styles.titleFlexBox]}>
                  Flip words
                </Text>
              </View>
              <View style={styles.name1}>
                <Text
                  style={[styles.seeTheWordContainer, styles.youCanIncludeTypo]}
                >
                  {`See the word displayed on the screen. `}Try to remember its
                  translation. Flip or tap to check if your answer is correct.
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.practiceType1, styles.practiceBorder]}>
            <Image
              style={styles.specialflipIcon}
              resizeMode="cover"
              source={require("../assets/specialpair1.png")}
            />
            <View style={styles.nameParent}>
              <View style={styles.name}>
                <Text style={[styles.title2, styles.titleFlexBox]}>
                  Select word pairs
                </Text>
              </View>
              <View style={styles.name1}>
                <Text
                  style={[styles.seeTheWordContainer, styles.youCanIncludeTypo]}
                >
                  Match words from the left list to the right list. Choose a
                  word and find its pair. When done, check your answers
                  carefully.
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.practiceType1, styles.practiceBorder]}>
            <Image
              style={styles.specialflipIcon}
              resizeMode="cover"
              source={require("../assets/specialtranslate.png")}
            />
            <View style={styles.nameParent}>
              <View style={styles.name}>
                <Text style={[styles.title2, styles.titleFlexBox]}>
                  Translate
                </Text>
              </View>
              <View style={styles.name1}>
                <Text
                  style={[styles.seeTheWordContainer, styles.youCanIncludeTypo]}
                >
                  {`Look at the sentence or word given. 
Write the translation and remember: `}
                  words have feelings too, so be accurate!
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.practiceType1, styles.practiceBorder]}>
            <Image
              style={styles.specialflipIcon}
              resizeMode="cover"
              source={require("../assets/specialfill-text.png")}
            />
            <View style={styles.nameParent}>
              <View style={styles.name}>
                <Text style={[styles.title2, styles.titleFlexBox]}>
                  Complete centences
                </Text>
              </View>
              <View style={styles.name1}>
                <Text
                  style={[styles.seeTheWordContainer, styles.youCanIncludeTypo]}
                >{`Read the given sentences carefully. 
Fill in the blanks with the right words. 
Submit your answers and remember: 
every sentence deserves a proper ending.`}</Text>
              </View>
            </View>
          </View>
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
          <View style={styles.homeIndicator} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    textAlign: "left",
    fontFamily: FontFamily.medium,
    alignSelf: "stretch",
  },
  youCanIncludeTypo: {
    fontSize: FontSize.medium_size,
    textAlign: "left",
    fontFamily: FontFamily.medium,
    alignSelf: "stretch",
  },
  practiceBorder: {
    padding: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.neutral300,
    borderStyle: "solid",
    backgroundColor: Color.neutral100,
    flexDirection: "row",
    alignSelf: "stretch",
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
    marginLeft: -11.5,
    marginTop: -17.8,
    left: "50%",
    height: 24,
    width: 24,
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
  },
  youCanInclude: {
    marginTop: 4,
    color: Color.neutral400,
  },
  title: {
    width: 326,
    justifyContent: "center",
  },
  specialflipIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  title2: {
    fontSize: FontSize.medium1_size,
    color: Color.neutral800,
    fontWeight: "500",
  },
  name: {
    height: 24,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  seeTheWordContainer: {
    lineHeight: 22,
    fontWeight: "300",
    color: Color.neutral900,
  },
  name1: {
    marginTop: 8,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  nameParent: {
    marginLeft: 12,
    justifyContent: "center",
    flex: 1,
  },
  practiceType1: {
    marginTop: 16,
  },
  practiceTypeParent: {
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
    display: "none",
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
    left: "50%",
    backgroundColor: Color.neutral100,
    position: "absolute",
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
    left: "50%",
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.neutral900,
  },
  iphone1313ProCodeInpu: {
    width: "100%",
    height: 925,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.neutral900,
    borderRadius: Border.br_xs,
  },
});

export default IPhone1313ProCodeInpu18;
