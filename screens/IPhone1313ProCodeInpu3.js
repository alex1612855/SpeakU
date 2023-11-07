import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const IPhone1313ProCodeInpu3 = () => {
  return (
    <View style={styles.iphone1313ProCodeInpu}>
      <View style={styles.backButton}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/bichevronleft2.png")}
        />
        <Text style={[styles.goBack, styles.verbTypo]}>Go back</Text>
      </View>
      <View style={[styles.wordDeskParent, styles.wordPosition]}>
        <View style={[styles.wordDesk, styles.wordSpaceBlock]}>
          <View style={styles.parent}>
            <Text style={styles.text}>{`Значение слова: `}</Text>
            <Text style={[styles.text1, styles.text1Typo]}>
              Рассматривать, обдумывать, считать.
            </Text>
          </View>
        </View>
        <View style={[styles.wordDesk1, styles.wordDesk1SpaceBlock]}>
          <View style={styles.parent}>
            <View style={styles.parent}>
              <Text style={styles.text}>Примеры употребления:</Text>
              <Text
                style={[styles.iWillConsider, styles.text1Typo]}
              >{`I will consider your proposal before making a decision. (Я рассмотрю ваше предложение перед принятием решения.)
She is considered one of the best writers of her generation. (Её считают одним из лучших писателей своего поколения.)`}</Text>
            </View>
            <View style={styles.wordDesk1SpaceBlock}>
              <Text style={styles.text}>Словосочетания:</Text>
              <Text
                style={[styles.iWillConsider, styles.text1Typo]}
              >{`consider the facts (рассмотреть факты)
consider an option (рассмотреть вариант)
consider it done (считай, что это сделано)`}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.wordDesk1, styles.wordDesk1SpaceBlock]}>
          <View style={styles.parent}>
            <Text style={styles.text}>Спряжение (если это глагол):</Text>
            <Text style={[styles.text1, styles.text1Typo]}>{`Present: consider
Past: considered
Present Participle: considering
Past Participle: considered`}</Text>
          </View>
        </View>
        <View style={[styles.wordDesk1, styles.wordDesk1SpaceBlock]}>
          <View style={styles.parent}>
            <View style={styles.parent}>
              <Text style={styles.text}>{`Синонимы: `}</Text>
              <Text
                style={[styles.iWillConsider, styles.text1Typo]}
              >{`think about (думать о)
ponder (обдумывать)
deem (считать)`}</Text>
            </View>
            <View style={styles.wordDesk1SpaceBlock}>
              <Text style={styles.text}>{`Антонимы: `}</Text>
              <Text
                style={[styles.iWillConsider, styles.text1Typo]}
              >{`disregard (не учитывать)
ignore (игнорировать)`}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.wordDesk1, styles.wordDesk1SpaceBlock]}>
          <View style={styles.parent}>
            <Text style={styles.text}>{`Соответствующие предлоги: `}</Text>
            <Text style={[styles.text1, styles.text1Typo]}>{`consider as
consider for
consider to be`}</Text>
          </View>
        </View>
        <View style={[styles.wordDesk1, styles.wordDesk1SpaceBlock]}>
          <View style={styles.parent}>
            <Text style={styles.text}>Стилистический контекст:</Text>
            <Text style={[styles.text1, styles.text1Typo]}>
              Слово "consider" используется в формальном и неформальном
              контексте и является обычным словом в английском языке.
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.title, styles.titleFlexBox]}>
        <Text style={[styles.title1, styles.learnTypo]}>Consider</Text>
        <View style={[styles.knsdrParent, styles.titleFlexBox]}>
          <Text style={[styles.knsdr, styles.verbTypo]}>(kənˈsɪd.ər)</Text>
          <Text style={[styles.verb, styles.verbTypo]}>verb</Text>
        </View>
      </View>
      <View style={[styles.wordActions, styles.titleFlexBox]}>
        <Text style={[styles.learn, styles.learnTypo]}>{`learn `}</Text>
        <Text style={[styles.repeat, styles.learnTypo]}>{`repeat `}</Text>
        <Text style={[styles.repeat, styles.learnTypo]}>{`I know `}</Text>
      </View>
      <View style={[styles.tabbar, styles.wordPosition]}>
        <View style={styles.tabs}>
          <View style={[styles.view, styles.viewPosition]}>
            <Image
              style={[styles.outlinecalendarIcon, styles.sfSymbolPosition]}
              resizeMode="cover"
              source={require("../assets/24outlinecalendar1.png")}
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
              style={[styles.outlinecalendarIcon, styles.sfSymbolPosition]}
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
              style={[styles.outlinecalendarIcon, styles.sfSymbolPosition]}
              resizeMode="cover"
              source={require("../assets/24filledcalendar1.png")}
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
              style={[styles.outlinecalendarIcon, styles.sfSymbolPosition]}
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
  verbTypo: {
    textAlign: "justify",
    fontFamily: FontFamily.medium,
    fontSize: FontSize.medium_size,
  },
  wordPosition: {
    left: "50%",
    position: "absolute",
  },
  wordSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.neutral100,
    alignItems: "center",
    borderRadius: Border.br_xs,
  },
  text1Typo: {
    fontWeight: "300",
    textAlign: "left",
    color: Color.neutral900,
    lineHeight: 22,
    alignSelf: "stretch",
    fontFamily: FontFamily.medium,
    fontSize: FontSize.medium_size,
  },
  wordDesk1SpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  learnTypo: {
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
  sfSymbolPosition: {
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
  iconLayout: {
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  goBack: {
    marginLeft: 4,
    color: Color.neutral400,
  },
  backButton: {
    top: 67,
    left: 16,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text: {
    textAlign: "left",
    lineHeight: 22,
    color: Color.neutral900,
    fontWeight: "600",
    alignSelf: "stretch",
    fontFamily: FontFamily.medium,
    fontSize: FontSize.medium_size,
  },
  text1: {
    marginTop: 8,
  },
  parent: {
    alignSelf: "stretch",
  },
  wordDesk: {
    alignSelf: "stretch",
  },
  iWillConsider: {
    marginTop: 12,
  },
  wordDesk1: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.neutral100,
    alignItems: "center",
    borderRadius: Border.br_xs,
  },
  wordDeskParent: {
    marginLeft: -168,
    top: 231,
    width: 336,
  },
  title1: {
    fontSize: FontSize.semiBold_size,
    color: Color.neutral100,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  knsdr: {
    display: "flex",
    width: 77,
    color: Color.neutral100,
    alignItems: "center",
  },
  verb: {
    fontStyle: "italic",
    marginLeft: 8,
    color: Color.neutral400,
  },
  knsdrParent: {
    marginTop: 4,
    flexDirection: "row",
  },
  title: {
    top: 129,
    left: 32,
    width: 326,
    position: "absolute",
  },
  learn: {
    color: Color.neutral900,
    textAlign: "center",
    fontSize: FontSize.medium_size,
  },
  repeat: {
    marginLeft: 32,
    color: Color.neutral900,
    textAlign: "center",
    fontSize: FontSize.medium_size,
  },
  wordActions: {
    marginLeft: -124,
    bottom: 100,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.primaryMain,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_xs,
    left: "50%",
    position: "absolute",
    flexDirection: "row",
  },
  outlinecalendarIcon: {
    marginTop: -17.8,
    marginLeft: -11.5,
    overflow: "hidden",
    height: 24,
    width: 24,
    position: "absolute",
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
    color: Color.neutral100,
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
    fontWeight: "600",
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
    left: "50%",
    position: "absolute",
  },
  homeindicator: {
    height: 34,
    alignSelf: "stretch",
  },
  tabbar: {
    marginLeft: -194.5,
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
    height: 1647,
    backgroundColor: Color.neutral900,
    borderRadius: Border.br_xs,
  },
});

export default IPhone1313ProCodeInpu3;
