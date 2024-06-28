import * as THREE from "three";
import App from "./App";
import Helper from "./Helper";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Eye from "./Eye";

export default class OtamaModel {
  constructor() {
    this.app = new App();
    this.helper = new Helper();
    this.markerElement = document.getElementById("marker");
    this.startTrackingPosition = false;
    this.group = new THREE.Group();
    this.group.name = "otamaModelGroup";
    this.app.scene.add(this.group);

    new GLTFLoader().load("otamatone.glb", (gltf) => {
      this.model = gltf.scene.children[0].children[0];
      this.start();
      this.addEyes();
      this.startTrackingPosition = true;
    });
  }

  start() {
    this.geometry = this.model.geometry;
    this.geometry.computeVertexNormals();

    this.material = new THREE.MeshPhongMaterial(
        { 
            color: new THREE.Color("#0099FF"),
            side: THREE.DoubleSide,
        }
    );
    this.instance = new THREE.Mesh(this.geometry, this.material);
    this.instance.name = "otamaModelInstance";

    this.instance.scale.set(0.00015, 0.00015, 0.00015);
    this.instance.rotation.set(-Math.PI * 0.35, Math.PI * 0.0, -Math.PI * 0.5);
    this.instance.position.set(0.0015, -0.0015, 0);
    this.group.add(this.instance);
  }

  addEyes()
  {
    this.leftEye = new Eye(this.group, new THREE.Vector3(-0.0005, -0.0004, 0.0023)); 
    this.rightEye = new Eye(this.group, new THREE.Vector3(0.0005, -0.0004, 0.0023)); 
  }

  followTarget() {
    this.targetPosition = this.helper.update3DObjectPositionWithOffsetX(
      this.markerElement,
      this.group,
      this.app.camera.instance,
      0,
      0
    );

    this.group.position.x = this.helper.lerp(
      this.group.position.x,
      this.targetPosition.x,
      0.7
    );
    this.group.position.y = this.helper.lerp(
      this.group.position.y,
      this.targetPosition.y,
      0.7
    );
    this.group.position.z = this.helper.lerp(
      this.group.position.z,
      this.targetPosition.z,
      0.7
    );
  }
  update() {
    if (this.startTrackingPosition) {
      this.followTarget();
    }
  }
}
