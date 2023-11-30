import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"

const scrollTracker = document.querySelector(".scroll-tracker")

scrollTracker.animate(
  { transform: ["scaleX(0)", "scaleX(1)"] },
  {
    duration: 10000,
    fill: "both",
    timeline: new ScrollTimeline({
      scrollOffsets: [new CSSUnitValue(0, "px"), new CSSUnitValue(200, "px")],
    }),
  }
)
