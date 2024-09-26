import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle, Linking, TextStyle, View, ViewStyle } from "react-native"
import { TextField, Button, Text, MarqueeText, Screen } from "app/components"
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
  alignSelf: isRTL ? "flex-start" : "flex-end",
}

const welcomeLogo = require("../../assets/images/logo.png")

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

const texts = ["to the mooooooooonnn 🚀🚀🚀🚀", "wassup 👋", "☮️ Peace to the world 🌎"]

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen(_props) {
  const { navigation, route } = _props
  const textFromRoute = decodeURI(route.params?.text ?? "")

  const [text, setText] = React.useState(
    () => textFromRoute || texts[Math.floor(Math.random() * texts.length)],
  )
  const marqueeProps = {
    text,
    speed: 2,
    spacing: 70,
  }

  function showMarquee() {
    navigation.navigate("View", { text })
  }

  return (
    <Screen
      preset="scroll"
      contentContainerStyle={$container}
      safeAreaEdges={["top", "left", "right"]}
    >
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
      <Button
        style={$button}
        preset="reversed"
        tx="homeScreen.showFullScreen"
        onPress={showMarquee}
      />
      <View style={$previewContainer}>
        <Text preset="formLabel" style={$previewText} tx="homeScreen.preview" />
        <MarqueeText onPress={showMarquee} fullscreen={false} size={40} {...marqueeProps} />
      </View>
      <ReportBugs />
    </Screen>
  )
})

const $container: ViewStyle = {
  paddingVertical: spacing.lg,
  paddingHorizontal: spacing.lg,
}

const $previewContainer: ViewStyle = {
  marginVertical: spacing.lg,
}

const $previewText: TextStyle = {
  marginBottom: spacing.md,
}

const $welcomeLogo: ImageStyle = {
  height: 60,
  width: "100%",
  marginBottom: spacing.lg,
}

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.md,
}

const $button: ViewStyle = {
  marginTop: spacing.md,
  marginBottom: spacing.md,
}
