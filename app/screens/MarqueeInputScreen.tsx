import React from "react"
import { Screen, TextField, Button, Text } from "app/components"
import { spacing } from "app/theme"
import { Dimensions, TextStyle, ViewStyle } from "react-native"
import { Marquee } from "@animatereactnative/marquee"

const MarqueeText = ({
  onPress,
  text,
  size,
}: {
  onPress: () => void
  text: string
  size: number
}) => {
  const screenHeight = Dimensions.get("screen").height
  // const $marqueeContainer: ViewStyle = { flex: 1, backgroundColor: "blue" }
  const $marqueeText: TextStyle = {
    fontSize: size,
    height: size,
    lineHeight: size,
    color: "red",
  }
  // const top = screenHeight / 2 - size / 2
  const $marqueeStyle = {
    position: "absolute" as const,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: screenHeight,
    borderWidth: 2,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    backgroundColor: "black" as const,
  }
  const formattedText = text.toUpperCase()
  return (
    <Marquee style={$marqueeStyle} spacing={800}>
      {/* <View style={$marqueeContainer}> */}
      <Text style={$marqueeText} text={formattedText} onPress={onPress} />
      {/* </View> */}
    </Marquee>
  )
}

export const MarqueeInputScreen = () => {
  const [show, toggleShow] = React.useReducer((show) => !show, true)
  const [text, setText] = React.useState("CINDY")

  return (
    <Screen contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <Text preset="heading" tx="marqueeScreen.title" style={$title} />
      <TextField
        multiline
        labelTx="marqueeScreen.label"
        placeholder="Type here"
        placeholderTextColor="#aaa"
        selectionColor="#fff"
        onChangeText={setText}
        value={text}
      />
      <Button text={`${show ? "Hide" : "Show"} Marquee!`} onPress={toggleShow} />
      {show && <MarqueeText onPress={toggleShow} text={text} size={300} />}
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingHorizontal: spacing.lg,
}

const $title: TextStyle = {
  marginBottom: spacing.sm,
}
