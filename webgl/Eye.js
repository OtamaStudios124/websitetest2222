import * as THREE from "three";
import App from "./App";
import fragmentShader from "../shaders/eye/fragment.glsl";
import vertexShader from "../shaders/eye/vertex.glsl";

export default class Eye
{
    constructor(group, position)
    {
        this.group = group;
        this.position = position;
        this.app = new App();

        this.start();
    }

    start()
    {
        this.geometry = new THREE.SphereGeometry(0.00019, 32, 32);
        this.material = new THREE.ShaderMaterial({
          //  color: new THREE.Color("#ffffff"),
            side: THREE.DoubleSide,
            fragmentShader,
            vertexShader,
            uniforms: {
                time: {
                    value: this.app.time.elapsed,
                },
                aspectRatio: 
                {
                    value: new THREE.Vector2(this.app.sizes.width, this.app.sizes.height)
                }
            }
        });

        this.instance = new THREE.Mesh(this.geometry, this.material);

        this.instance.position.set(this.position.x, this.position.y, this.position.z);

        this.instance.renderOrder = 500;
        this.instance.material.depthTest = false; // Disable depth testing
        this.instance.material.depthWrite = false; // Disable writing to the depth buffer

        // this.instance.rotation.y -= Math.PI * 0.05;

        this.group.add(this.instance);
    }
}