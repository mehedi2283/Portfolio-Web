import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
    const particlesInit = useCallback(async (engine) => {
        // console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // await console.log(container);
    }, []);

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    particles: {
                      number: {
                        value: 150,
                        density: {
                          enable: true,
                          value_area: 2084.43567912518
                        }
                      },
                      color: {
                        value: "#ffffff"
                      },
                      shape: {
                        type: "circle",
                        stroke: {
                          width: 0,
                          color: "#000000"
                        },
                        polygon: {
                          nb_sides: 5
                        },
                        image: {
                          src: "img/github.svg",
                          width: 100,
                          height: 100
                        }
                      },
                      opacity: {
                        value: 0.5,
                        random: false,
                        anim: {
                          enable: false,
                          speed: 1,
                          opacity_min: 0.1,
                          sync: false
                        }
                      },
                      size: {
                        value: 0.5,
                        random: true,
                        anim: {
                          enable: false,
                          speed: 1,
                          size_min: 0.1,
                          sync: false
                        }
                      },
                      line_linked: {
                        enable: true,
                        distance: 72.2388442605866,
                        color: "#ffffff",
                        opacity: 0.1891476416322726,
                        width: 0.30782952832645453
                      },
                      move: {
                        enable: true,
                        speed: 0.3,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "bounce",
                        bounce: true,
                        attract: {
                          enable: false,
                          rotateX: 600,
                          rotateY: 1200
                        }
                      }
                    },
                    interactivity: {
                      detect_on: "window",
                      events: {
                        onhover: {
                          enable: true,
                          mode: "grab"
                        },
                        onclick: {
                          enable: false,
                          mode: "push"
                        },
                        resize: false
                      },
                      modes: {
                        grab: {
                          distance: 90.53621458328246,
                          line_linked: {
                            opacity: 0.5
                          }
                        },
                        bubble: {
                          distance: 400,
                          size: 40,
                          duration: 2,
                          opacity: 8,
                          speed: 3
                        },
                        repulse: {
                          distance: 200,
                          duration: 0.4
                        },
                        push: {
                          particles_nb: 4
                        },
                        remove: {
                          particles_nb: 2
                        }
                      }
                    },
                    retina_detect: false
                  }}
            />
        </div>
    );
};

export default Particle;