import * as THREE from "three";

import Experience from "../Experience";

import GSAP from "gsap";
import { MathUtils } from "three/src/math/MathUtils";

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
        var clockPointerHours;
        var clockPointerMinutes;
        var clockPointerSeconds;

        this.actualRoom.children.forEach(child => {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child instanceof THREE.Group) {
                child.children.forEach((groupChild) => {
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
            if (child.name == "Clock_Pointer_Hour") {
                clockPointerHours = child;
            }
            if (child.name == "Clock_Pointer_Minute") {
                clockPointerMinutes = child;
            }
            if (child.name == "Clock_Pointer_Second") {
                clockPointerSeconds = child;
            }
            if (child.name === "Monitor_Left_Screen") {
                child.material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.screen_vr,
                });
            }
        })

        this.setClock(clockPointerHours, clockPointerMinutes, clockPointerSeconds);

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

    setClock(clockPointerHours, clockPointerMinutes, clockPointerSeconds) {
        var clockRotationAxis = new THREE.Vector3(0,-1,0);
        var date = new Date();
        const hours = date.getHours();
        const mins = date.getMinutes();
        const seconds = date.getSeconds();

        clockPointerHours.rotateOnAxis(clockRotationAxis, MathUtils.degToRad(hours * (360 / 12) + (mins / 60 * 360/12)));
        clockPointerMinutes.rotateOnAxis(clockRotationAxis, MathUtils.degToRad(mins * (360 / 60)));
        clockPointerSeconds.rotateOnAxis(clockRotationAxis, MathUtils.degToRad(seconds * (360 / 60)));
        
        setInterval(function() {
            clockPointerSeconds.rotateOnAxis(clockRotationAxis, MathUtils.degToRad(360 / 60));
        }, 1 * 1000); // 1 * 1000 milsec

        setInterval(function() {
            clockPointerMinutes.rotateOnAxis(clockRotationAxis, MathUtils.degToRad(360 / 60));
            clockPointerHours.rotateOnAxis(clockRotationAxis, MathUtils.degToRad(360 / 60 / 60));
        }, 60 * 1000); // 60 * 1000 milsec
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