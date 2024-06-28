import * as THREE from "three";
import App from "./App";
import fragmentShader from "../shaders/eye/fragment.glsl";
import vertexShader from "../shaders/eye/vertex.glsl";
import gsap from "gsap";

export default class Eye {
  constructor(group, position) {
    this.group = group;
    this.position = position;
    this.app = new App();

    this.start();
    this.animation();
  }

  start() {
    this.geometry = new THREE.SphereGeometry(0.00027, 32, 32);
    this.material = new THREE.ShaderMaterial({
      //  color: new THREE.Color("#ffffff"),
      side: THREE.DoubleSide,
      transparent: true,
      fragmentShader,
      vertexShader,
      uniforms: {
        time: {
          value: this.app.time.elapsed,
        },
        aspectRatio: {
          value: new THREE.Vector2(this.app.sizes.width, this.app.sizes.height),
        },
      },
    });

    this.instance = new THREE.Mesh(this.geometry, this.material);

    this.instance.position.set(
      this.position.x,
      this.position.y,
      this.position.z
    );

    // this.instance.renderOrder = 500;
    // this.instance.material.depthTest = false; // Disable depth testing
    // this.instance.material.depthWrite = false; // Disable writing to the depth buffer

    this.group.add(this.instance);
  }

  animation() {
    document.addEventListener("mousemove", (e) => {
      let x = e.clientX / this.app.sizes.width;
      let y = e.clientY / this.app.sizes.height;

      x = (x * 2.0 - 1.0);
      y = (y * 2.0 - 0.7);

        this.instance.rotation.set(
        y * Math.PI * 0.25,
        x * Math.PI * 0.25,
        0
      );
    });
  }
}
