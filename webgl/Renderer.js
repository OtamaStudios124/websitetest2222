import * as THREE from "three";
import App from "./App.js";

export default class Renderer {
  constructor() {
    this.app = new App();
    this.canvas = this.app.canvas;
    this.sizes = this.app.sizes;
    this.scene = this.app.scene;
    this.camera = this.app.camera;

    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.instance.setPixelRatio(window.devicePixelRatio);
    this.instance.setSize(window.innerWidth, window.innerHeight);
    this.instance.physicallyCorrectLights = true;
    this.instance.outputEncoding = THREE.sRGBEncoding;
    this.instance.toneMappingExposure = 1.75;
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
    // this.instance.setClearColor("tranparent"); // Set the background color to white
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));

    // Handle window resize
    window.addEventListener('resize', () => {
      this.resize();
    });
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
    this.camera.instance.aspect = window.innerWidth / window.innerHeight;
    this.camera.instance.updateProjectionMatrix();
  }

  update() {
    this.instance.render(this.scene, this.camera.instance);
  }
}
