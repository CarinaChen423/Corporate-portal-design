const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.8; 

    function drawFace(points, color) {
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      points.forEach(point => ctx.lineTo(point.x, point.y));
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
      ctx.stroke();
    }

    const points = {
      A: { x: 150, y: 150 },
      B: { x: 250, y: 150 },
      C: { x: 250, y: 250 },
      D: { x: 150, y: 250 },

      E: { x: 200, y: 100 },
      F: { x: 300, y: 100 },
      G: { x: 300, y: 200 },
      H: { x: 200, y: 200 }
    };

    drawFace([points.A, points.B, points.C, points.D], '#F09EE8'); 
    drawFace([points.E, points.F, points.G, points.H], '#EFF09E'); 
    drawFace([points.A, points.B, points.F, points.E], '#F0B39E'); 
    drawFace([points.D, points.C, points.G, points.H], '#C7F09E'); 
    drawFace([points.B, points.C, points.G, points.F], '#54E6B5'); 
    drawFace([points.A, points.D, points.H, points.E], '#54C5E6'); 

    ctx.globalAlpha = 1.0; 
    ctx.strokeStyle = "black"; 
    ctx.lineWidth = 2;

    function drawEdge(point1, point2) {
      ctx.beginPath();
      ctx.moveTo(point1.x, point1.y);
      ctx.lineTo(point2.x, point2.y);
      ctx.stroke();
    }

    drawEdge(points.A, points.B);
    drawEdge(points.B, points.C);
    drawEdge(points.C, points.D);
    drawEdge(points.D, points.A);

    drawEdge(points.E, points.F);
    drawEdge(points.F, points.G);
    drawEdge(points.G, points.H);
    drawEdge(points.H, points.E);

    drawEdge(points.A, points.E);
    drawEdge(points.B, points.F);
    drawEdge(points.C, points.G);
    drawEdge(points.D, points.H);