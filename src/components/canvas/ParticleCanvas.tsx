"use client";

import { craftingStyles } from "galadrielcss";
import { useEffect, useRef } from "react";

interface ParticleOptions {
    particleColor: string;
    velocity: number;
}

interface Particle {
    update: () => void;
    h: () => void;
}

const ParticleCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        class Particle implements Particle {
            canvas: HTMLCanvasElement;
            g: CanvasRenderingContext2D;
            particleColor: string;
            x: number;
            y: number;
            velocity: {
                x: number;
                y: number;
            };

            constructor(
                canvas: HTMLCanvasElement,
                g: CanvasRenderingContext2D,
                options: ParticleOptions
            ) {
                this.canvas = canvas;
                this.g = g;
                this.particleColor = options.particleColor;
                this.x = Math.random() * this.canvas.width;
                this.y = Math.random() * this.canvas.height;
                this.velocity = {
                    x: (Math.random() - 0.5) * options.velocity,
                    y: (Math.random() - 0.5) * options.velocity,
                };
            }

            update(): void {
                if (this.x > this.canvas.width + 20 || this.x < -20) {
                    this.velocity.x = -this.velocity.x;
                }

                if (this.y > this.canvas.height + 20 || this.y < -20) {
                    this.velocity.y = -this.velocity.y;
                }

                this.x += this.velocity.x;
                this.y += this.velocity.y;
            }

            h(): void {
                this.g.beginPath();
                this.g.fillStyle = this.particleColor;
                this.g.globalAlpha = 0.7;
                this.g.arc(this.x, this.y, 1.5, 0, 2 * Math.PI);
                this.g.fill();
            }
        }

        class ParticleNetwork {
            private canvas: HTMLCanvasElement;
            // @ts-ignore
            private g: CanvasRenderingContext2D;
            // @ts-ignore
            private p: Particle | null;
            // @ts-ignore
            private o: Particle[];
            private m: NodeJS.Timeout | undefined;

            private options: {
                particleColor: string;
                background: string;
                interactive: boolean;
                velocity: number;
                density: number;
            };

            private size: { width: number; height: number };

            constructor(a: HTMLCanvasElement, b: any) {
                this.canvas = a;
                this.size = {
                    width: this.canvas.offsetWidth,
                    height: this.canvas.offsetHeight,
                };

                b = b !== undefined ? b : {};

                this.options = {
                    particleColor:
                        b.particleColor !== undefined
                            ? b.particleColor
                            : "#fff",
                    background:
                        b.background !== undefined ? b.background : "#1a252f",
                    interactive:
                        b.interactive !== undefined ? b.interactive : true,
                    velocity: this.setVelocity(b.speed),
                    density: this.j(b.density),
                };

                this.init();
            }

            private setVelocity(a: string): number {
                return a === "fast"
                    ? 5
                    : a === "slow"
                    ? 0.33
                    : a === "none"
                    ? 0
                    : 0.66;
            }

            private j(a: string): number {
                return a === "high"
                    ? 5000
                    : a === "low"
                    ? 20000
                    : isNaN(parseInt(a, 10))
                    ? 10000
                    : parseInt(a, 10);
            }

            private l(a: HTMLElement, b: { [key: string]: string }): void {
                for (const c in b) {
                    if (b.hasOwnProperty(c)) {
                        const cKey = c as string | any;

                        a.style[cKey] = b[cKey];
                    }
                }
            }

            private init(): void {
                if (!/^#[0-9A-F]{6}$/i.test(this.options.particleColor)) {
                    console.error(
                        "Please specify a valid particleColor hexadecimal color"
                    );

                    return;
                }

                this.g = this.canvas.getContext("2d")!;
                this.canvas.width = this.size.width;
                this.canvas.height = this.size.height;
                this.l(this.canvas, { position: "absolute" });
                this.l(this.canvas, { "z-index": "-1", position: "absolute" });

                window.addEventListener(
                    "resize",
                    () => {
                        if (
                            this.canvas.offsetWidth === this.size.width &&
                            this.canvas.offsetHeight === this.size.height
                        )
                            return false;

                        this.canvas.width = this.size.width =
                            this.canvas.offsetWidth;
                        this.canvas.height = this.size.height =
                            this.canvas.offsetHeight;

                        clearTimeout(this.m);

                        this.m = setTimeout(() => {
                            this.o = [];

                            for (
                                let a = 0;
                                a <
                                (this.canvas.width * this.canvas.height) /
                                    this.options.density;
                                a++
                            ) {
                                this.o.push(
                                    new Particle(
                                        this.canvas,
                                        this.g!,
                                        this.options
                                    )
                                );
                            }

                            if (this.options.interactive) {
                                this.o.push(this.p!);
                            }

                            requestAnimationFrame(this.update.bind(this));
                        }, 500);
                    },
                    false
                );

                this.o = [];

                for (
                    let a = 0;
                    a <
                    (this.canvas.width * this.canvas.height) /
                        this.options.density;
                    a++
                ) {
                    this.o.push(
                        new Particle(this.canvas, this.g!, this.options)
                    );
                }

                if (this.options.interactive) {
                    this.p = new Particle(this.canvas, this.g!, this.options);
                    this.p.velocity = { x: 0, y: 0 };
                    this.o.push(this.p);
                    this.canvas.addEventListener(
                        "mousemove",
                        (a) => {
                            this.p!.x = a.clientX - this.canvas.offsetLeft;
                            this.p!.y = a.clientY - this.canvas.offsetTop;
                        },
                        false
                    );

                    this.canvas.addEventListener(
                        "mouseup",
                        () => {
                            this.p!.velocity = {
                                x:
                                    (Math.random() - 0.5) *
                                    this.options.velocity,
                                y:
                                    (Math.random() - 0.5) *
                                    this.options.velocity,
                            };
                            this.p = new Particle(
                                this.canvas,
                                this.g!,
                                this.options
                            );
                            this.p!.velocity = { x: 0, y: 0 };
                            this.o.push(this.p!);
                        },
                        false
                    );
                }

                requestAnimationFrame(this.update.bind(this));
            }

            private update(): void {
                this.g.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.g.globalAlpha = 1;

                for (let a = 0; a < this.o.length; a++) {
                    this.o[a].update();
                    this.o[a].h();

                    for (let b = this.o.length - 1; b > a; b--) {
                        const c = Math.sqrt(
                            Math.pow(this.o[a].x - this.o[b].x, 2) +
                                Math.pow(this.o[a].y - this.o[b].y, 2)
                        );

                        if (c > 120) continue;

                        this.g.beginPath();
                        this.g.strokeStyle = this.options.particleColor;
                        this.g.globalAlpha = (120 - c) / 120;
                        this.g.lineWidth = 0.7;
                        this.g.moveTo(this.o[a].x, this.o[a].y);
                        this.g.lineTo(this.o[b].x, this.o[b].y);
                        this.g.stroke();
                    }
                }

                if (this.options.velocity !== 0) {
                    requestAnimationFrame(this.update.bind(this));
                }
            }
        }

        // Initialization
        if (canvasRef.current) {
            const canvas = canvasRef.current as HTMLCanvasElement;
            const options = {
                particleColor: "#ffffff",
                interactive: true,
                speed: "fast",
                density: "high",
            };

            const particleCanvas = new ParticleNetwork(canvas, options);
        }
    });

    const styles = craftingStyles(() => ({
        position: "$set-absolute",
        height: "100%",
        width: "100vw",
        minHeight: "1000px",
    }));

    return <canvas className={styles} ref={canvasRef}></canvas>;
};

export default ParticleCanvas;