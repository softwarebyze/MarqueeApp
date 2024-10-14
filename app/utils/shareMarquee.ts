import { Share } from "react-native"
import { encode } from "./deepLinkHelpers"

export async function shareMarquee(text: string) {
  try {
    const encodedText = encode(text)
    const shareUrl = `https://marqueeapp.netlify.app/view/${encodedText}`
    const result = await Share.share({
      title: "Share Marquee",
      message: `Check out my marquee:`,
      url: shareUrl, // This is used by iOS
    })
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    console.error(error)
  }
}
