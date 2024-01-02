import React from "react"
import { Screen, TextField, Button } from "app/components"

export const MarqueeInputScreen = () => {
  function showMarquee() {
    console.log("showMarquee")
  }
  return (
    <Screen safeAreaEdges={["top"]}>
      <TextField
        label="Enter text:"
        // helper="This will be the marquee text"
        multiline
        //   style={styles.marqueeInput}
        placeholder="Type here"
        placeholderTextColor="#aaa"
        selectionColor="#fff"
        caretHidden={false}
        //   caretColor="#fff"
        // autoCapitalize="none"
        // autoCorrect={false}
        // scrollEnabled={true}
        // returnKeyType="done"
        // returnKeyLabel="done"
        // keyboardAppearance="dark"
        // blurOnSubmit={true}
        onChangeText={(text) => console.log(text)}
      />
      <Button text="Show Marquee!" onPress={showMarquee} />
    </Screen>
  )
}
