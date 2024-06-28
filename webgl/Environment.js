import * as THREE from "three";
import App from "./App.js";

export default class Environment {
  constructor() {
    this.app = new App();
    this.time = this.app.time;
    this.scene = this.app.scene;
    this.resources = this.app.resources;

    //cache
    this.environmentMap = {};

    // this.setEnvironmentMap();
    // Debug
    if (this.app.debug.active) {
      this.debugFolder = this.app.debug.ui.addFolder("light");
      this.debugFolder.close();
    }

    this.setSunLight();

  }

  setSunLight() {
    // this.sunLight2 = new THREE.AmbientLight("#ffffff", 0.2);
    // this.sunLight2.name = "ambient light";
    // this.scene.add(this.sunLight2);

    this.sunLight = new THREE.DirectionalLight("#ffffff", 6);
    this.sunLight.name = "directional light";
    this.sunLight.position.set(0.0, 4.0, 20.0);
    this.sunLight.lookAt(0, 0, 20);
    this.scene.add(this.sunLight);

    const helper = new THREE.DirectionalLightHelper(this.sunLight, 5);
    helper.name = "directional light helper";
    //this.scene.add(helper);

        // Debug
        if (this.app.debug.active) {    
          this.debugFolder
            .add(this.sunLight, "intensity")
            .name("sunLightIntensity")
            .min(0)
            .max(30)
            .step(0.001);
    
          this.debugFolder
            .add(this.sunLight.position, "x")
            .name("sunLightX")
            .min(-20)
            .max(20)
            .step(0.001);
    
          this.debugFolder
            .add(this.sunLight.position, "y")
            .name("sunLightY")
            .min(-20)
            .max(20)
            .step(0.001);
    
          this.debugFolder
            .add(this.sunLight.position, "z")
            .name("sunLightZ")
            .min(-40)
            .max(40)
            .step(0.01);

            this.debugFolder
            .add(this.sunLight.rotation, "x")
            .name("sunLightX")
            .min(-Math.PI)
            .max(Math.PI)
            .step(0.01);
    
          this.debugFolder
            .add(this.sunLight.rotation, "y")
            .name("sunLightY")
            .min(-Math.PI)
            .max(Math.PI)
            .step(0.01);
    
          this.debugFolder
            .add(this.sunLight.rotation, "z")
            .name("sunLightZ")
            .min(-Math.PI)
            .max(Math.PI)
            .step(0.01);
        }
  }

  setEnvironmentMap() {
    // this.environmentMap.texture = this.resources.items.environmentMapTexture;
    // this.environmentMap.texture.colorSpace = THREE.SRGBColorSpace;
    // this.environmentMap.texture.encoding = THREE.SRGBColorSpace;
  }

  update() {}
}
