import * as THREE from "three";

import Experience from "../Experience";

export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.setSunLight();
    }

    setSunLight() {
        this.sunLight = new THREE.DirectionalLight("#ffffff", 3);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(2048, 2048);
        this.sunLight.shadow.normalBias = 0.05;
        //const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
        //this.scene.add(helper);
        this.sunLight.position.set(-1.5, 7, 3);
        this.scene.add(this.sunLight);

        // ambient light to fix dark shadows
        const light = new THREE.AmbientLight("#ffffff", 0.8);
        this.scene.add(light);
    }

    resize() {
        
    }

    update() {

    }
}