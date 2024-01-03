import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import {
  Image,
  ImageStyle,
  Linking,
  TextStyle,
  View,
  ViewStyle,
  useWindowDimensions,
} from "react-native"
import { TextField, Button, Text } from "app/components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { Marquee } from "@animatereactnative/marquee"
import { isRTL } from "../i18n"

const issuesUrl = "https://github.com/softwarebyze/MarqueeApp/issues"

// <TouchableOpacity >
//   <Image style={$githubLogo} source={githubLogo} resizeMode="contain" />
// </TouchableOpacity>
// const $githubLogo: ImageStyle = {
//   height: 40,
//   // alignSelf: 'center',
//   marginTop: spacing.xl,
// }

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

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

interface MarqueeTextProps {
  onPress?: () => void
  text: string
  speed?: number
  spacing?: number
  fullscreen: boolean
  size?: number
}

const MarqueeText = ({ onPress, text, speed, spacing, fullscreen, size }: MarqueeTextProps) => {
  const { height: screenHeight } = useWindowDimensions()

  const marqueeTextSize = size || screenHeight / 2

  const $marqueeText: TextStyle = {
    fontSize: marqueeTextSize,
    height: marqueeTextSize - 0,
    lineHeight: marqueeTextSize,
    letterSpacing: -marqueeTextSize * 0.05,
  }
  const $fullScreen: ViewStyle = {
    position: "absolute",
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  }

  const formattedText = text.toUpperCase()

  return (
    <Marquee style={fullscreen ? $fullScreen : {}} spacing={spacing} speed={speed}>
      <Text style={$marqueeText} text={formattedText} onPress={onPress} />
    </Marquee>
  )
}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(_props) {
  // const { navigation } = _props
  // function goNext() {
  //   navigation.navigate("Demo", { screen: "MarqueeInputScreen" })
  // }

  const [text, setText] = React.useState(() => "to the mooooooooonnn 🚀🚀🚀🚀")
  const [show, toggleShow] = React.useReducer((show) => !show, false)

  const CustomMarquee = (props: Partial<MarqueeTextProps>) => (
    <MarqueeText fullscreen={false} spacing={70} text={text} speed={1} {...props} />
  )

  const PreviewMarquee = () => <CustomMarquee size={40} />
  const FullScreenMarquee = () => <CustomMarquee onPress={toggleShow} fullscreen />

  return (
    <View style={$container}>
      {!show ? (
        <View style={$topContainer}>
          <Image style={$welcomeLogo} source={welcomeLogo} resizeMode="contain" />
          <Text style={$welcomeHeading} tx="welcomeScreen.createMarquee" preset="heading" />
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
            <PreviewMarquee />
          </View>
          <Button
            style={$button}
            preset="reversed"
            text={`${show ? "Hide" : "Show"} Full Screen!`}
            onPress={toggleShow}
          />
          <ReportBugs />
        </View>
      ) : (
        <FullScreenMarquee />
      )}
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
