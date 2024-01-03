import { MarqueeText } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"

interface ViewScreenProps extends AppStackScreenProps<"View"> {}

export const ViewScreen: FC<ViewScreenProps> = observer(function HomeScreen(_props) {
  const {
    navigation: { navigate, canGoBack, goBack },
    route: {
      params: { text },
    },
  } = _props
  const goHome = () => (canGoBack() ? goBack() : navigate("Home", { text }))
  return <MarqueeText text={text} fullscreen onPress={goHome} />
})
