import { Button, Icon, MarqueeText } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View, ViewStyle } from "react-native"
import { spacing } from "../theme"
import { shareMarquee } from "../utils/shareMarquee"

interface ViewScreenProps extends AppStackScreenProps<"View"> {}

export const ViewScreen: FC<ViewScreenProps> = observer(function ViewScreen(_props) {
  const {
    navigation: { navigate, canGoBack, goBack },
    route: {
      params: { text },
    },
  } = _props

  const goHome = () => (canGoBack() ? goBack() : navigate("Home", { text }))

  return (
    <>
      <MarqueeText text={text} fullscreen speed={4.5} spacing={20} onPress={goHome} />
      <View style={$buttonContainer}>
        <Button
          style={$button}
          preset="default"
          text="Share"
          onPress={() => shareMarquee(text)}
          RightAccessory={() => <Icon icon="share" style={{ marginHorizontal: spacing.xxxs }} />}
        />
      </View>
    </>
  )
})

const $buttonContainer: ViewStyle = {
  position: "absolute",
  bottom: spacing.xxl,
  left: spacing.lg,
  right: spacing.lg,
  justifyContent: "center",
  alignItems: "center",
}

const $button: ViewStyle = {
  minWidth: 200,
}
