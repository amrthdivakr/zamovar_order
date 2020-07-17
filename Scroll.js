import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import HorizontalScrollPlugin from "./HorizontalScrollPlugin";
// import LockSroll from "./LockScroll";

Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin);

export default class Scroll {
  constructor() {
    this.init();
  }

  init() {
    this.Scroll = Scrollbar.init(document.querySelector(".bt-container"), {
      // delegateTo: document,
      continuousScrolling: false,
      overscrollEffect: "bounce",
      damping: 0.05,
      thumbMinSize: 0,
      // alwaysShowTracks: true,
      // plugins: {
      //   horizontalScroll: {
      //     events: [/wheel/],
      //   },
      // },
    });

    this.document.querySelector(".scrollbar-track").style.width = "0 !important";

    this.Scroll.track.xAxis.element.remove();
    this.Scroll.track.yAxis.element.remove();

    Scrollbar.detachStyle();
  }
}
