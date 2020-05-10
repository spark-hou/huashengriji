/**
 * @author  sparkHou
 * @date 2020-04-28 15:35
 * @Description:
 */
import React, {Component} from 'react';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.canvas = React.createRef();
  }

  componentDidMount() {

    window.requestAnimFrame = (function () {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        };
    })();
    const canvas = this.canvas.current;
    let ctx = canvas.getContext('2d');

    let w = canvas.offsetWidth;
    let h = canvas.offsetHeight;

    canvas.width = w;
    canvas.height = h;

    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 1 + Math.random() * 2;
        this.sx = Math.random() * 2 - 1;
        this.sy = Math.random() * 2 - 1;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = '#aaa';
        ctx.fill();
      }

      move() {
        this.x += this.sx;
        this.y += this.sy;
        if (this.x > w) this.sx = -Math.abs(this.sx);
        else if (this.x < 0) this.sx = Math.abs(this.sx);
        if (this.y > h) this.sy = -Math.abs(this.sy);
        else if (this.y < 0) this.sy = Math.abs(this.sy);
      }

      drawLine(ctx, p) {
        let dx = this.x - p.x;
        let dy = this.y - p.y;
        let d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
          let alpha = (100 - d) / 100 * 1;
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(p.x, p.y);
          ctx.closePath();
          ctx.strokeStyle = 'rgba(170, 170, 170, ' + alpha + ')';
          ctx.strokeWidth = 1;
          ctx.stroke();
        }
      }
    }

    let points = [];

    for (let i = 0; i < 150; i++) {
      points.push(new Point(Math.random() * w, Math.random() * h));
    }

    function paint() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < points.length; i++) {
        points[i].move();
        points[i].draw(ctx);
        for (let j = i + 1; j < points.length; j++) {
          points[i].drawLine(ctx, points[j]);
        }
      }
    }

    function loop() {
      window.requestAnimFrame(loop);
      paint();
    }

    loop();
    window.addEventListener('resize', function () {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    });
  }

  render() {
    return (
      <div className="canvas"
        style={{'width': '100%', 'height': '100vh'}}>
        <canvas ref={this.canvas}
          style={{'width': '100%', 'height': '100%', 'backgroundColor': '#786DE4'}}/>
      </div>
    );
  }

}

export default Canvas;
