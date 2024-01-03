import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle, Linking, TextStyle, View, ViewStyle } from "react-native"
import { TextField, Button, Text, MarqueeText } from "app/components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { isRTL } from "../i18n"

const issuesUrl = "https://github.com/softwarebyze/MarqueeApp/issues"

function openLinkInBrowser(url: string) {
  Linking.canOpenURL(url).then((canOpen) => canOpen && Linking.openURL(url))
}

const ReportBugs = () => (
  <Text
    style={$reportBugsLink}
    tx="demoDebugScreen.reportBugs"
    onPress={() => openLinkInBrowser(issuesUrl)}
  />
)

const $reportBugsLink: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.lg,
  alignSelf: isRTL ? "flex-start" : "flex-end",
}

const welcomeLogo = require("../../assets/images/logo.png")

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

const texts = ["to the mooooooooonnn 🚀🚀🚀🚀", "wassup 👀"]

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen(_props) {
  const { navigation, route } = _props
  const textFromRoute = decodeURI(route.params?.text ?? "")

  const [text, setText] = React.useState(
    () => textFromRoute || texts[Math.floor(Math.random() * texts.length)],
  )
  const [show, toggleShow] = React.useReducer((show) => !show, false)
  const previewSize = 40
  const marqueeProps = {
    text,
    onPress: toggleShow,
    fullscreen: show,
    speed: 1,
    spacing: 70,
  }

  function showMarquee() {
    navigation.navigate("View", { text })
  }

  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Image style={$welcomeLogo} source={welcomeLogo} resizeMode="contain" />
        <Text style={$welcomeHeading} tx="homeScreen.createMarquee" preset="heading" />
        <TextField
          multiline
          labelTx="marqueeScreen.label"
          placeholder="Type here"
          placeholderTextColor="#aaa"
          selectionColor="#fff"
          onChangeText={setText}
          value={text}
        />
        <View style={$previewContainer}>
          <Text style={$previewText} text="Preview" />
          <MarqueeText size={previewSize} {...marqueeProps} />
        </View>
        <Button
          style={$button}
          preset="reversed"
          text={`${show ? "Hide" : "Show"} Full Screen!`}
          onPress={showMarquee}
        />
        <ReportBugs />
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $previewContainer: ViewStyle = {
  paddingHorizontal: spacing.lg,
  marginVertical: spacing.xl,
}

const $previewText: TextStyle = {
  fontSize: 20,
  fontWeight: "bold",
  marginBottom: spacing.md,
}

const $welcomeLogo: ImageStyle = {
  height: 88,
  width: "100%",
  marginBottom: spacing.xxl,
}

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.md,
}

const $button: ViewStyle = {
  marginTop: spacing.md,
  marginBottom: spacing.md,
}
