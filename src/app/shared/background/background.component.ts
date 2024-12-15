import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule],
  template: `<canvas #canvas></canvas>`,
  styles: [`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
    }
    canvas {
      width: 100%;
      height: 100%;
      opacity: 0.3;
    }
  `]
})
export class BackgroundComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationFrameId: number = 0;
  private readonly particleCount = 80;
  private readonly particleRadius = 1.5;
  private readonly connectionDistance = 150;
  private readonly speed = 0.2;
  private readonly baseColor = '30, 41, 59';

  ngOnInit() {
    this.initCanvas();
    this.createParticles();
    this.animate();
    this.handleResize();
  }

  private initCanvas() {
    const canvas = this.canvas.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
    window.addEventListener('resize', () => this.handleResize());
  }

  private handleResize() {
    this.resizeCanvas();
    this.createParticles();
  }

  private resizeCanvas() {
    const canvas = this.canvas.nativeElement;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    this.ctx.scale(dpr, dpr);
  }

  private createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * this.speed,
        vy: (Math.random() - 0.5) * this.speed
      });
    }
  }

  private animate() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    // Update and draw particles
    this.particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0) {
        particle.x = window.innerWidth;
      } else if (particle.x > window.innerWidth) {
        particle.x = 0;
      }
      if (particle.y < 0) {
        particle.y = window.innerHeight;
      } else if (particle.y > window.innerHeight) {
        particle.y = 0;
      }

      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, this.particleRadius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${this.baseColor}, 0.6)`;
      this.ctx.fill();
    });

    // Draw connections
    this.particles.forEach((particle, i) => {
      this.particles.slice(i + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.connectionDistance) {
          const opacity = (1 - distance / this.connectionDistance) * 0.5;
          this.ctx.beginPath();
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(otherParticle.x, otherParticle.y);
          this.ctx.strokeStyle = `rgba(${this.baseColor}, ${opacity})`;
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      });
    });

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', () => this.handleResize());
  }
}
