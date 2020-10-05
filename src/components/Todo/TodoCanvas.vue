<template>
  <div id="canvas-wrapper">
    <vue-p5
      @setup="setup"
      @draw="draw"
      @mousemoved="mouseMoved"
      @windowresized="windowResized"
    >
    </vue-p5>
  </div>
</template>

<script>
import VueP5 from "vue-p5";
export default {
  name: "p5-example",
  components: {
    "vue-p5": VueP5,
  },
  data: () => ({
    lines: [],
    canvas: 0,
    wrapper: document.getElementById("canvas-wrapper"),
  }),
  computed: {},
  methods: {
    setup(sketch) {
      this.canvas = sketch.createCanvas(window.innerWidth, window.innerHeight);
      //   sketch.background(255, 100);
    },
    draw(sketch) {
      for (let line of this.lines) {
        sketch.stroke(line.color);
        sketch.line(line.pmouseX, line.pmouseY, line.mouseX, line.mouseY);
      }
    },
    mouseMoved({ mouseX, mouseY, pmouseX, pmouseY }) {
      this.pushLine({ mouseX, mouseY, pmouseX, pmouseY, color: 255 });
    },
    windowResized() {},
    pushLine(line) {
      let lines = this.lines;
      lines.push(line);
      this.lines = lines.slice(-100);
    },
  },
};
</script>

<style scoped>
#canvas-wrapper {
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  pointer-events: none;
  /* border: 1px solid black; */
}
</style>
