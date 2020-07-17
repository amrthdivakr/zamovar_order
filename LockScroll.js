import { TweenMax as TM } from "gsap";

export default class LockScroll {
  constructor() {
    this.bindEvents();
  }

  bindEvents() {
    document.addEventListener("lockScroll", ({ detail }) => {
      this.lockScroll(detail);
    });
  }

  lockScroll({ lock }) {
    const duration = lock ? 0 : 1.8;

    TM.delayedCall(duration, () => {
      this.Scroll.updatePluginOptions("horizontalScroll", {
        events: lock ? [] : [/wheel/],
      });
      // TM.to(this.$els.progressCtn, 0.5, {
      //     alpha: lock ? 0 : 1,
      //     force3D: true,
      // })
    });
  }
}
