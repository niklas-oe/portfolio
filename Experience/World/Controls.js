import * as THREE from "three";

import Experience from "../Experience";

import GSAP from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger.js";

export default class Controls {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.room = this.experience.world.room.actualRoom;
        
        GSAP.registerPlugin(ScrollTrigger);

        this.setScrollTrigger();
    }

    setPath() {
        this.timeline = new GSAP.timeline();
        this.timeline.to(this.room.position, {
            x: () => {
                return this.sizes.width * 0.00125;
            },
            scrollTrigger:{
                trigger:".first-move",
                start: "top top", 
                end: "bottom bottom",
                scrub: 0.6,
                invalidateOnRefresh: true,
            }
        });
    }

    setScrollTrigger() {
        ScrollTrigger.matchMedia({
	        // Desktop
            "(min-width: 969px)": () => {
                this.room.scale.set(0.34, 0.34, 0.34);

                // First Section
                this.firstMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".first-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                });
                this.firstMoveTimeline.to(this.room.position, {
                    x: () => {
                        return this.sizes.width * 0.0014;
                    }
                })

                // Second Section
                this.secondMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                    .to(this.room.position, {
                        x: -1.2,
                        z: () => {
                            return this,this.sizes.height * 0.0032;
                        },
                    }, "same")
                    .to(this.room.scale, {
                        x: 1.1,
                        y: 1.1,
                        z: 1.1,
                    }, "same");
                // Third Section
                this.thirdMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                    .to(this.room.position, {
                        x: 3.4,
                        z: () => {
                            return this,this.sizes.height * 0.0032;
                        },
                    }, "same")
                    .to(this.room.scale, {
                        x: 1.1,
                        y: 1.1,
                        z: 1.1,
                    }, "same")
                    .to(this.room.scale, {
                        x: 1.1,
                        y: 1.1,
                        z: 1.1,
                    }, "same");
            },

            // Mobile
            "(max-width: 968px)": () => {

                //Resets
                this.room.scale.set(0.18, 0.18, 0.18);
                this.room.position.set(0, 0, 0);

                // First Section
                this.firstMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".first-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                }).to(this.room.scale, {
                    x: 0.21,
                    y: 0.21,
                    z: 0.21,
                });

                // Second Section
                this.secondMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                .to(this.room.scale, {
                    x: 0.45,
                    y: 0.45,
                    z: 0.45,
                }, "same")
                .to(this.room.position, {
                    x: 0.4,
                }, "same");
            },
              
            // all - both versions
            "all": () => {
                this.sections = document.querySelectorAll(".section");
                this.sections.forEach((section) => {
                    this.progressWrapper = section.querySelector(".progress-wrapper");

                    if (section.classList.contains("right")) {
                        GSAP.to(section, {
                            borderTopLeftRadius: 10,
                            scrollTrigger: {
                                trigger: section,
                                start: "top bottom",
                                end: "top top",
                                scrub: 0.6,
                            }
                        });
                        GSAP.to(section, {
                            borderBottomLeftRadius: 600,
                            scrollTrigger: {
                                trigger: section,
                                start: "bottom bottom",
                                end: "bottom top",
                                scrub: 0.6,
                            }
                        });
                    } else {
                        GSAP.to(section, {
                            borderTopRightRadius: 10,
                            scrollTrigger: {
                                trigger: section,
                                start: "top bottom",
                                end: "top top",
                                scrub: 0.6,
                            }
                        });
                        GSAP.to(section, {
                            borderBottomRightRadius: 600,
                            scrollTrigger: {
                                trigger: section,
                                start: "bottom bottom",
                                end: "bottom top",
                                scrub: 0.6,
                            }
                        });
                    }
                });
            },
        }); 
    }

    resize() {
        
    }

    update() {
        
    }
}