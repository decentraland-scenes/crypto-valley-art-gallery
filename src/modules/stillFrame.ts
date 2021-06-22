export class StillFrame extends Entity {
  constructor(model: GLTFShape, link?: string) {
    super()
    engine.addEntity(this)
    this.addComponent(model)
    if (link) {
      this.addComponent(
        new OnPointerDown(
          () => {
            openExternalURL(link)
          },
          {
            button: ActionButton.ANY,
            showFeedback: true,
            hoverText: "View on MakersPlace",
          }
        )
      )
    }
  }
}
