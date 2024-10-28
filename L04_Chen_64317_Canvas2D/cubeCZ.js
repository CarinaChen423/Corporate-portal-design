const canvas = document.getElementById('myCanvasCZ');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.4; 

    function drawLine(point1, point2) {
      ctx.beginPath();
      ctx.moveTo(point1.x, point1.y);
      ctx.lineTo(point2.x, point2.y);
      ctx.strokeStyle = "black"; 
      ctx.lineWidth = 3;
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

    drawLine(points.A, points.B);
    drawLine(points.B, points.C);
    drawLine(points.C, points.D);
    drawLine(points.D, points.A);


    drawLine(points.E, points.F);
    drawLine(points.F, points.G);
    drawLine(points.G, points.H);
    drawLine(points.H, points.E);


    drawLine(points.A, points.E);
    drawLine(points.B, points.F);
    drawLine(points.C, points.G);
    drawLine(points.D, points.H);