import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * This represents the Marquee and has the text it should show.
 */
export const MarqueeModel = types
  .model("Marquee")
  .props({
    text: "",
  })
  .actions(withSetPropAction)
  .views((marquee) => ({
    get doubledText() {
      return `${marquee.text} ${marquee.text}`
    },
  }))
  .actions((marquee) => ({
    setText(value: string) {
      marquee.text = value
    },
  }))

export interface Episode extends Instance<typeof MarqueeModel> {}
export interface EpisodeSnapshotOut extends SnapshotOut<typeof MarqueeModel> {}
export interface EpisodeSnapshotIn extends SnapshotIn<typeof MarqueeModel> {}
