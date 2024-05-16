import React from "react"

import { Platform, TextStyle, ViewStyle } from "react-native"

import { Marquee } from "@animatereactnative/marquee"
import { colors } from "app/theme"
import { Text } from "./Text"

export interface MarqueeTextProps {
  onPress?: () => void
  text?: string
  speed?: number
  spacing?: number
  fullscreen: boolean
  size?: number
}

export const MarqueeText = ({
  onPress,
  text,
  speed,
  spacing,
  fullscreen,
  size,
}: MarqueeTextProps) => {
  const marqueeTextSize = size || 80

  const $marqueeText: TextStyle = {
    fontSize: marqueeTextSize,
    lineHeight: Platform.OS !== "web" ? undefined : marqueeTextSize * 1.2,
    letterSpacing: -marqueeTextSize * 0.05,
  }

  const formattedText = text?.toUpperCase() ?? ""

  return (
    <Marquee style={fullscreen ? $fullScreen : {}} spacing={spacing} speed={speed}>
      <Text numberOfLines={1} style={$marqueeText} text={formattedText} onPress={onPress} />
    </Marquee>
  )
}

const $fullScreen: ViewStyle = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  alignItems: "flex-start",
  justifyContent: "center",
  backgroundColor: colors.background,
}
