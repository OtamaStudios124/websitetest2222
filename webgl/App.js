import * as THREE from "three";
import Sizes from "./Sizes";
import Time from "./Time";
import Camera from "./Camera";
import Renderer from "./Renderer";
import World from "./World";

let instance = null;

export default class App {
  constructor() {
    // Singleton
    if (instance) {
      return instance;
    }
    instance = this;

    console.log(instance);

    this.start();
  }

  start() {
    // Options
    this.canvas = document.querySelector("#webgl");

    // Setup
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    // this.scene.background = new THREE.Color("#000dff");
    // this.scene.fog = new THREE.Fog(new THREE.Color("#090909"), 80, 90);
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.world = new World();

    // Resize event
    this.sizes.on("resize", () => {
      this.resize();
    });

    // Time tick event
    this.time.on("tick", () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
    this.world.resize();
  }

  update() {
    this.camera.update();
    this.world.update();
    this.renderer.update();
  }
}
