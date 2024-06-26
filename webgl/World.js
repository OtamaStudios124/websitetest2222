import * as THREE from "three";
import App from "./App";

export default class World {
  constructor() {
    this.app = new App();

    this.start();
  }

  start() {
    const fov = this.app.camera.instance.fov * (Math.PI / 180);
    const height = 2 * Math.tan(fov / 2) * this.app.camera.instance.position.z;
    const width = height * this.app.camera.instance.aspect;

    this.geometry = new THREE.PlaneGeometry(width, height);

    this.material = new THREE.MeshBasicMaterial({ color: "#000dff" });
    this.instance = new THREE.Mesh(this.geometry, this.material);

    this.app.scene.add(this.instance);
  }

  resize() {
    const fov = this.app.camera.instance.fov * (Math.PI / 180);
    const height = 2 * Math.tan(fov / 2) * Math.abs(this.app.camera.instance.position.z);
    const width = height * this.app.camera.instance.aspect;

    this.geometry.dispose();
    this.geometry = new THREE.PlaneGeometry(width, height);
    this.instance.geometry = this.geometry;
  }

  update() {}
}
