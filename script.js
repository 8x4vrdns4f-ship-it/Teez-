document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const canvas = document.getElementById("trail");
  const ctx = canvas.getContext("2d");

  let w, h;
  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  const points = [];

  window.addEventListener("mousemove", e => {
    points.push({ x: e.clientX, y: e.clientY, life: 1 });
  });

  function draw(){
    ctx.clearRect(0,0,w,h);

    for(let i = 0; i < points.length; i++){
      const p = points[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, 12, 0, Math.PI*2);
      ctx.fillStyle = `rgba(76,201,255,${p.life})`;
      ctx.fill();
      p.life -= 0.04;
    }

    while(points.length && points[0].life <= 0){
      points.shift();
    }

    requestAnimationFrame(draw);
  }

  draw();
});
