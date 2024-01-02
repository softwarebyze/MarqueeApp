import React from "react"
import { Screen, TextField, Button, Text } from "app/components"
import { spacing } from "app/theme"
import { TextStyle, ViewStyle } from "react-native"
import { Marquee } from "@animatereactnative/marquee"

export const MarqueeInputScreen = () => {
  const [show, toggleShow] = React.useReducer((show) => !show, false)
  const [text, setText] = React.useState("")

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
      />
      <Button text="Show Marquee!" onPress={toggleShow} />
      {show && (
        <Marquee spacing={20}>
          <Text onPress={toggleShow} text={text} />
        </Marquee>
      )}
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
