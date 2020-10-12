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
    };
  },
  computed: {},
  mounted() {
    // ---------------------------------------------------------- Variables
    const canvas = document.getElementById("canvas-wrapper");
    const smallDevices = window.matchMedia("(max-width: 767px)");
    // const portrait = window.matchMedia("(orientation: portrait)");
    let myHeight = document.documentElement.clientHeight;
    let myWidth = document.documentElement.clientWidth;
    let scaleWall = 4;
    let wallWidth = 5000;
    let wallOffset = wallWidth / 2;
    // declare vars
    let Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Render = Matter.Render;

    // init engine
    let engine = Engine.create(),
      world = engine.world;
    // init render
    let render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: myWidth,
        height: myHeight,
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
    // let above = new Rect(
    //   myWidth / 2,
    //   -wallOffset,
    //   myWidth * scaleWall,
    //   wallWidth
    // );
    let left = new Rect(
      -wallOffset,
      myHeight / 2,
      wallWidth,
      myHeight * scaleWall
    );
    let right = new Rect(
      myWidth + wallOffset,
      myHeight / 2,
      wallWidth,
      myHeight * scaleWall
    );
    let bottom = new Rect(
      myWidth / 2,
      myHeight + wallOffset,
      myWidth * scaleWall,
      wallWidth
    );
    // create circles
    let addCircle = () => {
      return Bodies.circle(myWidth / 2, myHeight / 2, setRadius(), {
        restitution: 0.6,
        friction: 0.3,
        render: {
          fillStyle: "#222222",
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
      myWidth = document.documentElement.clientWidth;
      myHeight = document.documentElement.clientHeight;
      // above.rePosition(myWidth / 2, -wallOffset);
      left.rePosition(-wallOffset, myHeight / 2);
      right.rePosition(myWidth + wallOffset, myHeight / 2);
      bottom.rePosition(myWidth / 2, myHeight + wallOffset);
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

    // dynamic ball size
    function setRadius() {
      let radius;
      smallDevices.matches
        ? (radius = Math.floor(Math.random() * 60) + 40)
        : (radius = Math.floor(Math.random() * 120) + 80);
      return radius;
    }
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
