<template>
  <canvas id="canvas-wrapper"></canvas>
</template>

<script>
import Matter from "matter-js";
export default {
  name: "todoCanvas",
  props: ["todos"],
  data() {
    return {
      oldVal: false,
      // canvas: document.getElementById("canvas-wrapper"),
      // portrait: window.matchMedia("(orientation: portrait)"),
      // small_devices: window.matchMedia("(max-width: 767px)"),
      scaleWall: 4,
      wallWidth: 5000,
      myHeight: document.documentElement.clientHeight,
      myWidth: document.documentElement.clientWidth,
    };
  },
  computed: {
    // radius() {},
  },
  mounted() {
    // ---------------------------------------------------------- Variables
    const canvas = document.getElementById("canvas-wrapper");
    // let myHeight = document.documentElement.clientHeight;
    // let myWidth = document.documentElement.clientWidth;
    // let scaleWall = 4;
    // let wallWidth = 5000;
    let wallOffset = this.wallWidth / 2;
    // declare vars
    let Engine = Matter.Engine,
      World = Matter.World,
      Render = Matter.Render,
      Bodies = Matter.Bodies;
    // init engine
    let engine = Engine.create(),
      world = engine.world;
    // init render
    let render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: this.myWidth,
        height: this.myHeight,
        wireframes: false,
      },
    });
    // init environment
    World.add(world, []);
    Engine.run(engine);
    Render.run(render);

    // ---------------------------------------------------------- Classes
    class Rect {
      constructor(x, y, width, height) {
        let options = {
          isStatic: true,
        };
        this.w = width;
        this.h = height;
        this.body = Bodies.rectangle(x, y, this.w, this.h, options);
        World.add(world, this.body);
      }
      rePosition(x, y) {
        Matter.Body.setPosition(this.body, {
          x: x,
          y: y,
        });
      }
    }
    // create walls
    let above = new Rect(
      this.myWidth / 2,
      -wallOffset,
      this.myWidth * this.scaleWall,
      this.wallWidth
    );
    let left = new Rect(
      -wallOffset,
      this.myHeight / 2,
      this.wallWidth,
      this.myHeight * this.scaleWall
    );
    let right = new Rect(
      this.myWidth + wallOffset,
      this.myHeight / 2,
      this.wallWidth,
      this.myHeight * this.scaleWall
    );
    let bottom = new Rect(
      this.myWidth / 2,
      this.myHeight + wallOffset,
      this.myWidth * this.scaleWall,
      this.wallWidth
    );
    // create circles
    let addCircle = () => {
      return Bodies.circle(this.myWidth / 2, this.myHeight / 2, 50, {
        render: {
          fillStyle: "grey",
        },
      });
    };

    // ---------------------------------------------------------- Methods
    setTimeout(() => {
      // add circles on load
      if (this.todos.length > 0) {
        for (let i = 0; i < this.todos.length - 1; i++) {
          World.add(engine.world, addCircle());
          this.oldVal = this.todos.length;
        }
      }
    }, 500);

    // resize event
    window.onresize = () => {
      this.myWidth = document.documentElement.clientWidth;
      this.myHeight = document.documentElement.clientHeight;
      above.rePosition(this.myWidth / 2, -wallOffset);
      left.rePosition(-wallOffset, this.myHeight / 2);
      right.rePosition(this.myWidth + wallOffset, this.myHeight / 2);
      bottom.rePosition(this.myWidth / 2, this.myHeight + wallOffset);
      render.canvas.width = document.documentElement.clientWidth;
      render.canvas.height = document.documentElement.clientHeight;
    };
    // todo event listener
    setInterval(() => {
      if (this.oldVal < this.todos.length) {
        this.oldVal = this.todos.length;
        World.add(engine.world, addCircle());
      } else if (this.oldVal > this.todos.length) {
        this.oldVal = this.todos.length;
        if (world.bodies.length > 3) {
          Matter.Composite.remove(world, world.bodies[4]);
        }
      }
    }, 100);
    // // dynamic ball size
    // function setRadius() {
    //   let radius;
    //   let factor = small_devices.matches
    //     ? Math.floor(Math.random() * 0.05) + 0.1
    //     : Math.floor(Math.random() * 0.1) + 0.15;
    //   portrait.matches
    //     ? (radius = this.myWidth * factor)
    //     : (radius = this.myHeight * factor);
    //   return radius;
    // }
  },
};
</script>

<style scoped>
#canvas-wrapper {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  pointer-events: none;
}
</style>
