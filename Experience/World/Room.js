import * as THREE from "three";

import Experience from "../Experience";

import GSAP from "gsap";

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.room = this.resources.items.room_final;
        this.actualRoom = this.room.scene;

        this.roomScale = 0.34;

        this.lerp = {
            current: 0,
            target: 0,
            // the higher the value, the lower the easing
            ease: 0.1,
        };

        this.setModel();
        this.setAnimation();
        this.onMouseMove();
    }

    setModel() {
        this.actualRoom.children.forEach(child => {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child instanceof THREE.Group) {
                child.children.forEach((groupChild) => {
                    console.log(child.children[0].name);
                    groupChild.castShadow = true;
                    groupChild.receiveShadow = true;
                })
            }

            // Include MeshPhysicalMaterial for transmissive objects
            if (child.name === "Cube001") {
                child.material = new THREE.MeshPhysicalMaterial();
                child.material.roughness = 0;
                child.material.color.set(0xffffff);
                child.material.ior = 3;
                child.material.transmission = 1;
                child.material.opacity = 1;
            }
            if (child.name === "Monitor_Left_Screen") {
                child.material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.screen_vr,
                });
            }
        });

        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(this.roomScale, this.roomScale, this.roomScale);
    }

    setAnimation() {
        this.mixer = new THREE.AnimationMixer(this.actualRoom);
        // play if animations exist
        if (this.room.animations.length > 0) {
            
        }
    }

    onMouseMove() {
        window.addEventListener("mousemove", (e)=>{
            this.rotation =
            ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
            this.lerp.target = this.rotation * 0.1;
        });
    }

    resize() {
        
    }
    
    update() {
        this.lerp.current = GSAP.utils.interpolate(
            this.lerp.current,
            this.lerp.target,
            this.lerp.ease
        );

        this.actualRoom.rotation.y = this.lerp.current;

        this.mixer.update(this.time.delta);
    }
}