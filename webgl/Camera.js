import * as THREE from 'three'
import App from './App.js'

export default class Camera
{
    constructor()
    {
        this.app = new App();
        this.sizes = this.app.sizes;
        this.scene = this.app.scene;
        this.canvas = this.app.canvas;

        this.cameraTrackingGroup = new THREE.Group();
        this.cameraTrackingGroup.name = 'cameraTrackingGroup';

        this.setInstance();
        // this.setControls()
    }

    getInstance()
    {
        return this.instance;
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.01, 100)
        this.instance.position.set(0, 0, 20)
        this.scene.add(this.instance)
    }

    setControls()
    {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
    }
}