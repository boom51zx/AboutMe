import { useEffect, useRef } from "react";

const STAR_COUNT = 190;
const METEOR_TARGET_COUNT = 8;
const SHOOTING_STAR_INTERVAL = 1300;
const STATION_COUNT = 3;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function createStars(width, height) {
  return Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: randomBetween(0.5, 2.4),
    alpha: randomBetween(0.15, 0.95),
    twinkleSpeed: randomBetween(0.004, 0.018),
    twinkleOffset: Math.random() * Math.PI * 2,
  }));
}

function createStation(width, height, index) {
  return {
    x: width * (0.2 + index * 0.28) + randomBetween(-40, 40),
    y: height * (0.16 + (index % 2) * 0.18),
    scale: randomBetween(0.65, 1.15),
    drift: randomBetween(0.08, 0.2),
    phase: Math.random() * Math.PI * 2,
    rotation: randomBetween(-0.08, 0.08),
    opacity: randomBetween(0.15, 0.28),
  };
}

function createMeteor(width, height) {
  const side = Math.random() > 0.5 ? "left" : "right";
  const y = randomBetween(height * 0.08, height * 0.82);
  const radius = randomBetween(18, 36);
  const direction = side === "left" ? 1 : -1;

  return {
    x: side === "left" ? -220 : width + 220,
    y,
    vx: randomBetween(0.7, 1.65) * direction,
    vy: randomBetween(-0.14, 0.14),
    radius,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: randomBetween(-0.009, 0.009),
    hue: randomBetween(16, 34),
    tailLength: randomBetween(55, 120),
    craters: Array.from({ length: 4 }, () => ({
      angle: Math.random() * Math.PI * 2,
      distance: randomBetween(radius * 0.18, radius * 0.58),
      size: randomBetween(radius * 0.09, radius * 0.18),
      shade: randomBetween(0.18, 0.34),
    })),
    silhouette: Array.from({ length: 10 }, (_, index) => {
      const angle = (Math.PI * 2 * index) / 10;
      const variance = randomBetween(0.82, 1.18);
      return { angle, variance };
    }),
  };
}

function createShootingStar(width, height) {
  const originSide = Math.random() > 0.5 ? "left" : "right";
  const x =
    originSide === "left"
      ? randomBetween(width * 0.2, width * 0.95)
      : randomBetween(width * 0.05, width * 0.8);

  const horizontalSpeed =
    originSide === "left" ? randomBetween(-11, -7) : randomBetween(7, 11);

  return {
    x,
    y: randomBetween(-120, height * 0.28),
    vx: horizontalSpeed,
    vy: randomBetween(3.2, 5.5),
    length: randomBetween(180, 320),
    width: randomBetween(1.6, 3.4),
    life: 1,
    fade: randomBetween(0.007, 0.013),
    hue: randomBetween(190, 220),
  };
}

function createExplosion(x, y, hue) {
  return Array.from({ length: 28 }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = randomBetween(1.4, 6.4);

    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: randomBetween(1.1, 4.2),
      alpha: 1,
      decay: randomBetween(0.012, 0.026),
      hue: hue + randomBetween(-10, 22),
    };
  });
}

function drawSpaceStation(ctx, station, time) {
  const bob = Math.sin(time * 0.00035 + station.phase) * 10;

  ctx.save();
  ctx.translate(station.x, station.y + bob);
  ctx.rotate(station.rotation);
  ctx.scale(station.scale, station.scale);
  ctx.globalAlpha = station.opacity;

  ctx.strokeStyle = "rgba(153, 215, 255, 0.85)";
  ctx.fillStyle = "rgba(30, 44, 78, 0.35)";
  ctx.lineWidth = 1.4;

  ctx.fillRect(-68, -9, 136, 18);
  ctx.strokeRect(-68, -9, 136, 18);

  ctx.fillStyle = "rgba(67, 131, 255, 0.2)";
  ctx.fillRect(-128, -32, 44, 64);
  ctx.fillRect(84, -32, 44, 64);
  ctx.strokeRect(-128, -32, 44, 64);
  ctx.strokeRect(84, -32, 44, 64);

  ctx.beginPath();
  ctx.arc(0, 0, 18, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(211, 237, 255, 0.28)";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(-84, 0);
  ctx.lineTo(-18, 0);
  ctx.moveTo(18, 0);
  ctx.lineTo(84, 0);
  ctx.moveTo(0, -26);
  ctx.lineTo(0, 26);
  ctx.stroke();

  ctx.fillStyle = "rgba(128, 231, 255, 0.75)";
  ctx.fillRect(-8, -3, 16, 6);
  ctx.restore();
}

function drawMeteor(ctx, meteor) {
  ctx.save();
  ctx.translate(meteor.x, meteor.y);
  ctx.rotate(meteor.rotation);

  const tailDirection = meteor.vx > 0 ? -1 : 1;
  const tail = ctx.createLinearGradient(
    tailDirection * meteor.tailLength,
    0,
    meteor.radius * 0.5,
    0,
  );
  tail.addColorStop(0, "rgba(89, 152, 255, 0)");
  tail.addColorStop(0.4, "rgba(108, 180, 255, 0.07)");
  tail.addColorStop(1, "rgba(255, 208, 149, 0.16)");

  ctx.strokeStyle = tail;
  ctx.lineWidth = meteor.radius * 0.46;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(tailDirection * meteor.tailLength, 0);
  ctx.lineTo(meteor.radius * 0.35, 0);
  ctx.stroke();

  const rock = ctx.createRadialGradient(
    -meteor.radius * 0.25,
    -meteor.radius * 0.3,
    meteor.radius * 0.18,
    0,
    0,
    meteor.radius * 1.18,
  );
  rock.addColorStop(0, "rgba(214, 194, 181, 0.98)");
  rock.addColorStop(0.18, "rgba(122, 107, 101, 0.98)");
  rock.addColorStop(0.48, "rgba(70, 58, 56, 0.99)");
  rock.addColorStop(0.78, "rgba(38, 31, 33, 0.99)");
  rock.addColorStop(1, "rgba(15, 13, 16, 0.99)");

  ctx.beginPath();
  meteor.silhouette.forEach((point, index) => {
    const px = Math.cos(point.angle) * meteor.radius * point.variance;
    const py = Math.sin(point.angle) * meteor.radius * point.variance;

    if (index === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  });
  ctx.closePath();
  ctx.fillStyle = rock;
  ctx.fill();
  ctx.lineWidth = 1.2;
  ctx.strokeStyle = "rgba(255, 231, 214, 0.08)";
  ctx.stroke();

  meteor.craters.forEach((crater) => {
    const cx = Math.cos(crater.angle) * crater.distance;
    const cy = Math.sin(crater.angle) * crater.distance;

    ctx.beginPath();
    ctx.fillStyle = `rgba(11, 10, 13, ${crater.shade + 0.08})`;
    ctx.arc(cx, cy, crater.size, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "rgba(255, 237, 224, 0.04)";
    ctx.arc(cx - crater.size * 0.1, cy - crater.size * 0.1, crater.size * 0.8, 0, Math.PI * 2);
    ctx.stroke();
  });

  const hotEdge = ctx.createLinearGradient(-meteor.radius, -meteor.radius, meteor.radius, meteor.radius);
  hotEdge.addColorStop(0, "rgba(255, 246, 228, 0.16)");
  hotEdge.addColorStop(0.5, "rgba(255, 200, 142, 0.04)");
  hotEdge.addColorStop(1, "rgba(255, 200, 142, 0)");
  ctx.strokeStyle = hotEdge;
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.restore();
}

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return undefined;
    }

    let animationFrameId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let stars = createStars(width, height);
    let stations = Array.from({ length: STATION_COUNT }, (_, index) =>
      createStation(width, height, index),
    );
    let meteors = Array.from({ length: METEOR_TARGET_COUNT }, () => createMeteor(width, height));
    let shootingStars = [];
    let explosions = [];
    let lastShootingStarSpawn = 0;
    const mouse = { x: width / 2, y: height / 2, active: false };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      stars = createStars(width, height);
      stations = Array.from({ length: STATION_COUNT }, (_, index) =>
        createStation(width, height, index),
      );
    };

    const onPointerMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const onPointerLeave = () => {
      mouse.active = false;
    };

    const animate = (time) => {
      context.clearRect(0, 0, width, height);

      const skyGradient = context.createLinearGradient(0, 0, width, height);
      skyGradient.addColorStop(0, "#020412");
      skyGradient.addColorStop(0.4, "#071127");
      skyGradient.addColorStop(1, "#010208");
      context.fillStyle = skyGradient;
      context.fillRect(0, 0, width, height);

      const nebulaA = context.createRadialGradient(
        width * 0.14,
        height * 0.14,
        0,
        width * 0.14,
        height * 0.14,
        width * 0.48,
      );
      nebulaA.addColorStop(0, "rgba(67, 110, 255, 0.22)");
      nebulaA.addColorStop(1, "rgba(67, 110, 255, 0)");
      context.fillStyle = nebulaA;
      context.fillRect(0, 0, width, height);

      const nebulaB = context.createRadialGradient(
        width * 0.84,
        height * 0.26,
        0,
        width * 0.84,
        height * 0.26,
        width * 0.38,
      );
      nebulaB.addColorStop(0, "rgba(122, 217, 255, 0.18)");
      nebulaB.addColorStop(1, "rgba(122, 217, 255, 0)");
      context.fillStyle = nebulaB;
      context.fillRect(0, 0, width, height);

      const nebulaC = context.createRadialGradient(
        width * 0.5,
        height * 0.82,
        0,
        width * 0.5,
        height * 0.82,
        width * 0.34,
      );
      nebulaC.addColorStop(0, "rgba(255, 119, 157, 0.08)");
      nebulaC.addColorStop(1, "rgba(255, 119, 157, 0)");
      context.fillStyle = nebulaC;
      context.fillRect(0, 0, width, height);

      stations.forEach((station) => drawSpaceStation(context, station, time));

      stars.forEach((star, index) => {
        const twinkle =
          star.alpha +
          Math.sin(time * star.twinkleSpeed + star.twinkleOffset + index) * 0.22;

        context.beginPath();
        context.fillStyle = `rgba(255, 255, 255, ${Math.max(0.12, twinkle)})`;
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fill();

        if (star.radius > 1.6) {
          context.strokeStyle = `rgba(150, 210, 255, ${Math.max(0.08, twinkle * 0.45)})`;
          context.lineWidth = 0.6;
          context.beginPath();
          context.moveTo(star.x - star.radius * 3, star.y);
          context.lineTo(star.x + star.radius * 3, star.y);
          context.moveTo(star.x, star.y - star.radius * 3);
          context.lineTo(star.x, star.y + star.radius * 3);
          context.stroke();
        }
      });

      if (time - lastShootingStarSpawn > SHOOTING_STAR_INTERVAL + Math.random() * 1100) {
        shootingStars.push(createShootingStar(width, height));
        lastShootingStarSpawn = time;
      }

      shootingStars = shootingStars.filter((star) => {
        const trailX = star.x - star.vx * 16;
        const trailY = star.y - star.vy * 16;
        const trail = context.createLinearGradient(star.x, star.y, trailX, trailY);
        trail.addColorStop(0, `hsla(${star.hue}, 100%, 88%, ${star.life})`);
        trail.addColorStop(0.25, `hsla(${star.hue + 18}, 100%, 76%, ${star.life * 0.75})`);
        trail.addColorStop(1, `hsla(${star.hue + 28}, 100%, 68%, 0)`);

        context.save();
        context.strokeStyle = trail;
        context.lineWidth = star.width;
        context.lineCap = "round";
        context.shadowBlur = 16;
        context.shadowColor = "rgba(173, 229, 255, 0.55)";
        context.beginPath();
        context.moveTo(star.x, star.y);
        context.lineTo(star.x - star.vx * (star.length / 12), star.y - star.vy * (star.length / 12));
        context.stroke();
        context.restore();

        star.x += star.vx;
        star.y += star.vy;
        star.life -= star.fade;
        return star.life > 0;
      });

      meteors = meteors.filter((meteor) => {
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;
        meteor.rotation += meteor.rotationSpeed;

        if (mouse.active) {
          const dx = mouse.x - meteor.x;
          const dy = mouse.y - meteor.y;
          const collisionDistance = meteor.radius + 16;

          if (dx * dx + dy * dy < collisionDistance * collisionDistance) {
            explosions.push(...createExplosion(meteor.x, meteor.y, meteor.hue));
            return false;
          }
        }

        drawMeteor(context, meteor);

        return (
          meteor.x > -320 &&
          meteor.x < width + 320 &&
          meteor.y > -180 &&
          meteor.y < height + 180
        );
      });

      while (meteors.length < METEOR_TARGET_COUNT) {
        meteors.push(createMeteor(width, height));
      }

      explosions = explosions.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.985;
        particle.vy *= 0.985;
        particle.alpha -= particle.decay;

        context.fillStyle = `hsla(${particle.hue}, 100%, 72%, ${Math.max(
          particle.alpha,
          0,
        )})`;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();

        context.strokeStyle = `hsla(${particle.hue}, 100%, 82%, ${Math.max(
          particle.alpha * 0.55,
          0,
        )})`;
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(particle.x, particle.y);
        context.lineTo(
          particle.x - particle.vx * 2.4,
          particle.y - particle.vy * 2.4,
        );
        context.stroke();

        return particle.alpha > 0;
      });

      if (mouse.active) {
        const cursorGlow = context.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          86,
        );
        cursorGlow.addColorStop(0, "rgba(159, 226, 255, 0.18)");
        cursorGlow.addColorStop(1, "rgba(159, 226, 255, 0)");
        context.fillStyle = cursorGlow;
        context.beginPath();
        context.arc(mouse.x, mouse.y, 86, 0, Math.PI * 2);
        context.fill();
      }

      animationFrameId = window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    animationFrameId = window.requestAnimationFrame(animate);

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-background" aria-hidden="true" />;
}
