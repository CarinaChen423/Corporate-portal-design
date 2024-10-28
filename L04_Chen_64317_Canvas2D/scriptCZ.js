
const canvas = document.getElementById('myCanvasCZ');
    const ctx = canvas.getContext('2d');

    function getRandomColorCZ() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    const rectWidth = 100;
    const rectHeight = 100;
    const positions = [
      { x: 0, y: 0 },
      { x: canvas.width - rectWidth, y: 0 },
      { x: 0, y: canvas.height - rectHeight },
      { x: canvas.width - rectWidth, y: canvas.height - rectHeight },
    ];

    positions.forEach(position => {
      ctx.fillStyle = getRandomColorCZ();
      ctx.fillRect(position.x, position.y, rectWidth, rectHeight);
    });

    function drawRedPathCZ() {

        ctx.beginPath();
        ctx.moveTo(100, 150); 
        ctx.lineTo(200, 50);
        ctx.lineTo(300, 150);
        ctx.lineTo(400, 100);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.font = "italic 30px 'Arial'"; 
        ctx.strokeText("Zhe Chen", 120, 36); 
      }
  
      function drawReflectedPathCZ() {
        ctx.save(); 
        ctx.scale(1, -1); 
        ctx.translate(0, -canvas.height); 
        drawRedPathCZ();
        ctx.restore(); 
      }
  
      drawRedPathCZ();    
      drawReflectedPathCZ()
       
