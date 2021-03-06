"use strict";

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function css(el, styles) {
  for (var property in styles) {
    el.style[property] = styles[property];
  }
}

var ChartSurface = (function() {
  function ChartSurface() {
    _classCallCheck(this, ChartSurface);
  }

  _createClass(
    ChartSurface,
    [
      {
        key: "preparePlot",
        value: function preparePlot(nr, sizex, sizey, container) {
          try {
            console.log("Start : preparePlot");
            ChartSurface.prepSurface(nr, sizex, sizey, container);
            var canvasContext = ChartSurface.prepUI(nr);
            console.log("End : preparePlot");
            return canvasContext;
          } catch (e) {
            console.log("error occured in preparePlot : ", e);
          }
        }
      },
      {
        key: "preparePlotUpper",
        value: function preparePlotUpper(nr, sizex, sizey, container) {
          try {
            console.log("Start : preparePlotUpper");
            ChartSurface.prepSurfaceupper(nr, sizex, sizey, container);
            var canvasContext = ChartSurface.prepUIUpper(nr);
            console.log("End : preparePlotUpper");
            return canvasContext;
          } catch (e) {
            console.log("error occured in preparePlotUpper : ", e);
          }
        }
      }
    ],
    [
      {
        key: "ratio",
        value: function ratio(canvasContainer) {
          var ctx = canvasContainer.getContext("2d");
          var dpr = window.devicePixelRatio || 1;
          var bsr =
            ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio ||
            1;
          // return dpr / bsr;
          return 2;
        }
      },
      {
        key: "prepSurface",
        value: function prepSurface(nr, width, height, container) {
          try {
            console.log("Start : prepSurface");
            var canvas = document.createElement("CANVAS");
            canvas.id = "canvas" + nr;
            canvas.setAttribute("class", "canvas");
            canvas.setAttribute("style", "position:absolute");
            var container = document.getElementById(container);
            container.appendChild(canvas);

            var canvasDom = document.getElementById("canvas" + nr);
            canvasDom.width = width * ChartSurface.ratio(canvasDom);
            canvasDom.height = height * ChartSurface.ratio(canvasDom);
            canvasDom.style.width = width + "px";
            canvasDom.style.height = height + "px";

            // document.getElementById('container').append('<canvas id="canvas' + nr + '" class="canvas"' +
            //     ' style="position:absolute;" width="' + width + '" height="' + height + '"></canvas> ');
            console.log("End : prepSurface");
          } catch (e) {
            console.log("error occured in prepareSurface : ", e);
          }
        }
      },
      {
        key: "prepUI",
        value: function prepUI(nr) {
          try {
            console.log("Start : prepUI");
            //console.log(nr);
            var canvas = document.getElementById("canvas" + nr);
            var ctx = canvas.getContext("2d");
            ctx.font = "23px arial";
            ctx.lineWidth = 1;
            console.log("End : prepUI");
            return ctx;
          } catch (e) {
            console.log("error occured in prepUI : ", e);
          }
        }
      },
      {
        key: "prepSurfaceupper",
        value: function prepSurfaceupper(nr, width, height, container) {
          try {
            console.log("Start : prepSurfaceupper");
            var container = document.getElementById(container);
            var innerCotent =
              '<canvas id="canvasupper' +
              nr +
              '" class="canvas" style="position:absolute;" width="' +
              width +
              '" height="' +
              height +
              '"></canvas>         ';
            innerCotent +=
              '<div class="canvasjs-chart-tooltip" style="position: absolute; height: auto; box-shadow: rgba(0, 0, 0, 0.0980392) 1px 1px 2px 2px; z-index: 1000; display: none; border-radius: 5px; transition: left 0.2s ease-out, bottom 0.2s ease-out;"> ';
            innerCotent +=
              '<div style="width: auto; height: auto; min-width: 50px; margin: 0px; padding: 5px; font-family: Calibri, Arial, Georgia, serif; font-weight: normal; font-style: italic; color: rgb(0, 0, 0); text-shadow: rgba(0, 0, 0, 0.0980392) 1px 1px 1px; text-align: left; border: 2px solid rgb(127, 96, 132); text-indent: 0px; white-space: nowrap; border-radius: 5px; -webkit-user-select: none; background: rgba(255, 255, 255, 0.901961);">';
            innerCotent += '<span style="color:#7F6084;"></span>';
            innerCotent += "</div></div>";
            container.insertAdjacentHTML("beforeend", innerCotent);

            var canvasDom = document.getElementById("canvasupper" + nr);
            canvasDom.width = width * ChartSurface.ratio(canvasDom);
            canvasDom.height = height * ChartSurface.ratio(canvasDom);
            canvasDom.style.width = width + "px";
            canvasDom.style.height = height + "px";

            //container.innerHTML = '<canvas id="canvasupper'+nr+'" width="'+width+'" height="'+height+'"></canvas>'
            //document.write();
            console.log("End : prepSurfaceupper");
          } catch (e) {
            console.log("error occured in prepSurfaceupper : ", e);
          }
        }
      },
      {
        key: "prepUIUpper",
        value: function prepUIUpper(nr) {
          try {
            console.log("Start : prepUIUpper");
            var canvas = document.getElementById("canvasupper" + nr);
            var ctx = canvas.getContext("2d");
            //ctx.font = '18px Arial';
            ctx.lineWidth = 1;
            console.log("End : prepUIUpper");
            return ctx;
          } catch (e) {
            console.log("error occured in prepUIUpper : ", e);
          }
        }
      }
    ]
  );

  return ChartSurface;
})();

function drawGrid(nr, verticanNr, ctx, data) {
  try {
    console.log("Start : drawGrid");
    var canvas = document.getElementById("canvas" + nr);
    var hei = canvas.height - 60;
    //console.log("canvas height to draw grid lines:" + hei);
    var wid = canvas.width - 100;
    //console.log("canvas width to draw grid lines:" + wid);
    ctx.beginPath();
    ctx.fillStyle = "#000";

    var spacingVertical = hei / verticanNr;
    //console.log("canvas vertical spacings to draw grid lines:" + spacingVertical);
    var spacingHorizontal = wid / data[0].datapoints.length;
    //console.log("canvas horizontal spacings to draw grid lines:" + spacingHorizontal);
    /*console.log(spacingVertical + 20);
         console.log(wid);*/
    var barwidth = 0;
    if (data.length > 1) {
      barwidth = (spacingHorizontal - 30) / data.length;
    } else {
      barwidth = 30;
    }
    if (barwidth > 30) {
      barwidth = 30;
    }
    /*Vertical grid*/
    // Vartical first grid row
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(0,0,0,1)";
    ctx.moveTo(100, 0);
    ctx.lineTo(100, hei + 10);
    ctx.stroke();

    // vartical other grid rows
    for (var i = 0; i < data[0].datapoints.length; i++) {
      ctx.beginPath();
      ctx.moveTo(i * spacingHorizontal + spacingHorizontal / 2 + 100, hei);
      ctx.lineTo(i * spacingHorizontal + spacingHorizontal / 2 + 100, hei + 10);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(wid + 99, hei);
    ctx.lineTo(wid + 99, hei + 10);
    ctx.stroke();

    /*Horizontal grid*/
    for (var i = 0; i < verticanNr + 1; i++) {
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0,0,0,.2)";
      ctx.lineWidth = 0.4;
      if (i == verticanNr) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgba(0,0,0,1)";
      }
      ctx.moveTo(90, i * spacingVertical);
      ctx.lineTo(wid + 100, i * spacingVertical);
      ctx.stroke();
      ctx.strokeStyle = "rgba(0,0,0,.2)";
    }
    console.log("End : drawGrid");
    return barwidth;
  } catch (e) {
    console.log("error occurred in drawGrid : ", e);
  }
}

function drawGraphicLinearYcord(canvas, ctx, verticalNr, cdata) {
  try {
    console.log("Start : drawGraphicLinearYcord");
    //console.log(cdata);
    var canvas = document.getElementById(canvas);
    var hei = canvas.height - 60;
    var wid = canvas.width - 100;
    var spacingVertical = hei / verticalNr;
    var spacingHorizontal = wid / cdata.data[0].datapoints.length;
    //console.log(spacingHorizontal);
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.save();
    ctx.translate(0, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    if (cdata.yaxis.title === undefined) {
      cdata.yaxis.title = "Y-Axis";
    }
    ctx.fillText(cdata.yaxis.title, 0, 20);

    ctx.restore();
    /* xaxis Horizontal Documents*/
    ctx.save();
    //ctx.font = "18px";
    var xangle;
    for (var i = 0; i < cdata.data[0].datapoints.length; i++) {
      if (
        ctx.measureText(cdata.data[0].datapoints[i].label).width >
        spacingHorizontal / 1.1
      ) {
        xangle = "angular";
        /*angular*/
        break;
      } else if (
        ctx.measureText(cdata.data[0].datapoints[i].label).width <
        spacingHorizontal / 2
      ) {
        xangle = "straight";
        /*straight*/
      }
    }
    if (xangle === "angular") {
      for (var i = 0; i < cdata.data[0].datapoints.length; i++) {
        ctx.translate(i * spacingHorizontal + 104, hei + 8);
        ctx.rotate(Math.PI / 4);
        ctx.fillText(cdata.data[0].datapoints[i].label, 0, 0);
        //console.log(cdata.xaxis.categories[i], i*spacingHorizontal, hei-spacingVertical);
        ctx.rotate(-Math.PI / 4);
        ctx.translate(-(i * spacingHorizontal + 104), -(hei + 8));
      }
    } else {
      for (var i = 0; i < cdata.data[0].datapoints.length; i++) {
        var textWidth = ctx.measureText(cdata.data[0].datapoints[i].label)
          .width;
        var fromLeft =
          i * spacingHorizontal + spacingHorizontal / 2 + 100 - textWidth / 2;
        ctx.fillText(cdata.data[0].datapoints[i].label, fromLeft, hei + 35);
      }
    }
    //ctx.restore();

    /* yaxis Vertical Documents*/
    ctx.save();
    for (var i = 0; i < verticalNr + 1; i++) {
      var max = cdata.yaxis.max;
      var min = cdata.yaxis.min;
      var difference = cdata.yaxis.difference;
      ctx.fillText(
        i * difference + min,
        35,
        canvas.height - (i * spacingVertical + 40)
      );
    }
    //ctx.restore();
    ctx.closePath();
    console.log("End : drawGraphicLinearYcord");
  } catch (e) {
    console.log("error occurred in drawGraphicLinearYcord : ", e);
  }
}

var DrawChart = (function() {
  function DrawChart() {
    _classCallCheck(this, DrawChart);
  }

  _createClass(
    DrawChart,
    [
      {
        key: "drawGraphicLinear",
        value: function drawGraphicLinear(
          canvas,
          ctx,
          verticalNr,
          data,
          range,
          chartColor,
          linecord
        ) {
          try {
            console.log("Start : drawGraphicLinear");
            var canvas = document.getElementById(canvas);
            var hei = canvas.height - 60;
            var wid = canvas.width - +100;
            var spacingVertical = hei / verticalNr;
            //console.log("spacingVertical:" + spacingVertical);
            var spacingHorizontal = wid / data.datapoints.length;
            //console.log("spacingHorizontal:" + spacingHorizontal);

            var totalRange = range[1] - range[0];
            var verticalCoefficient = hei / totalRange;
            ctx.beginPath();
            var localLineCords = [];
            for (var i = 0; i < data.datapoints.length; i++) {
              var newobj = {
                x: i * spacingHorizontal + spacingHorizontal / 2 + 100,
                y:
                  hei - (data.datapoints[i].y - range[0]) * verticalCoefficient,
                label: data.datapoints[i].label,
                dataLabel: data.dataLabel,
                dataval: data.datapoints[i].y
              };
              //console.log(newobj);
              linecord.push(newobj);
              localLineCords.push(newobj);
            }

            ctx.beginPath();
            ctx.globalAlpha = 1;
            ctx.strokeStyle = chartColor;
            for (var i = 0; i < localLineCords.length; i++) {
              ctx.lineWidth = 3;
              if (i == 0) {
                ctx.moveTo(localLineCords[i].x, localLineCords[i].y);
              } else {
                ctx.lineTo(localLineCords[i].x, localLineCords[i].y);
              }
              ctx.stroke();
              (function() {
                ctx.beginPath();
                ctx.lineWidth = 5;
                ctx.arc(
                  localLineCords[i].x,
                  localLineCords[i].y,
                  6,
                  0,
                  2 * Math.PI
                );
                ctx.fillStyle = chartColor;
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
              })();
              ctx.moveTo(localLineCords[i].x, localLineCords[i].y);
            }

            if (data.fill) {
              ctx.beginPath();
              ctx.moveTo(localLineCords[0].x, hei);
              for (var i = 0; i < localLineCords.length; i++) {
                ctx.lineTo(localLineCords[i].x, localLineCords[i].y);
              }
              ctx.lineTo(localLineCords[localLineCords.length - 1].x, hei);
              ctx.globalAlpha = 0.2;
              ctx.fillStyle = chartColor;
              ctx.closePath();
              ctx.fill();
            }
            ctx.globalAlpha = 1;
            console.log("End : drawGraphicLinear");
            return linecord;
          } catch (e) {
            console.log("error occured in drawGraphicLinear : ", e);
          }
        }
      },
      {
        key: "drawStepchart",
        value: function drawStepchart(
          canvas,
          ctx,
          verticalNr,
          data,
          range,
          chartColor,
          linecord
        ) {
          try {
            console.log("Start : drawStepchart");
            var canvas = document.getElementById(canvas);
            var hei = canvas.height - 60;
            var wid = canvas.width - +100;
            var spacingVertical = hei / verticalNr;
            var spacingHorizontal = wid / data.datapoints.length;

            var totalRange = range[1] - range[0];
            var verticalCoefficient = hei / totalRange;

            ctx.beginPath();
            var localLineCords = [];
            for (var i = 0; i < data.datapoints.length; i++) {
              var newobj = {
                x: i * spacingHorizontal + spacingHorizontal / 2 + 100,
                y:
                  hei - (data.datapoints[i].y - range[0]) * verticalCoefficient,
                label: data.datapoints[i].label,
                dataLabel: data.dataLabel,
                dataval: data.datapoints[i].y
              };
              //console.log(newobj);
              linecord.push(newobj);
              localLineCords.push(newobj);
            }

            ctx.beginPath();
            ctx.globalAlpha = 1;
            ctx.strokeStyle = chartColor;
            for (var i = 0; i < localLineCords.length; i++) {
              ctx.lineWidth = 3;
              if (i == 0) {
                ctx.moveTo(localLineCords[i].x, localLineCords[i].y);
              } else {
                ctx.lineTo(localLineCords[i].x, localLineCords[i - 1].y);
                ctx.lineTo(localLineCords[i].x, localLineCords[i].y);
              }
              ctx.stroke();

              (function() {
                ctx.beginPath();
                ctx.lineWidth = 5;
                ctx.arc(
                  localLineCords[i].x,
                  localLineCords[i].y,
                  8,
                  0,
                  2 * Math.PI
                );
                ctx.fillStyle = "#fff";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                ctx.lineWidth = 5;
              })();
            }

            if (data.fill) {
              ctx.beginPath();
              ctx.moveTo(localLineCords[0].x, hei);
              for (var i = 0; i < localLineCords.length; i++) {
                if (i == 0) {
                  ctx.lineTo(localLineCords[i].x, localLineCords[i].y);
                } else {
                  ctx.lineTo(localLineCords[i].x, localLineCords[i - 1].y);
                  ctx.lineTo(localLineCords[i].x, localLineCords[i].y);
                }
              }
              ctx.lineTo(localLineCords[localLineCords.length - 1].x, hei);
              ctx.globalAlpha = 0.2;
              ctx.fillStyle = chartColor;
              ctx.closePath();
              ctx.fill();
            }
            ctx.globalAlpha = 1;

            console.log("End : drawStepchart");
            return linecord;
          } catch (e) {
            console.log("error occured in drawGraphicLinear : ", e);
          }
        }
      },
      {
        key: "drawBar",
        value: function drawBar(
          canvas,
          ctx,
          verticalNr,
          data,
          range,
          curx,
          chartColor,
          linecord,
          barwidth,
          barChartCount
        ) {
          try {
            console.log("Start : drawBar");
            var canvas = document.getElementById(canvas);
            var hei = canvas.height - 60;
            var wid = canvas.width - 100;
            var spacingVertical = hei / verticalNr;
            var spacingHorizontal = wid / data.datapoints.length;
            //console.log("barChart spacingHorizontal :" + spacingHorizontal);
            //console.log("barchart div width :" + wid);
            var totalcompare = data.datapoints.length;
            var totalRange = range[1] - range[0];
            var verticalCoefficient = hei / totalRange;
            //var barwidth = 15;
            ctx.beginPath();
            ctx.strokeStyle = chartColor;
            //ctx.moveTo(0, hei-(data[0]-range[0])*verticalCoefficient+spacingVertical);
            for (var i = 0; i < data.datapoints.length; i++) {
              ctx.fillStyle = chartColor;
              var rectHeight =
                hei - (data.datapoints[i].y - range[0]) * verticalCoefficient;
              var barChartWidth =
                barChartCount * barwidth + (barChartCount - 1) * 5;
              var fromLeft =
                i * spacingHorizontal +
                spacingHorizontal / 2 +
                curx -
                barChartWidth / 2;
              var newobj = {
                x: fromLeft,
                y: rectHeight,
                wid: barwidth,
                hei: hei - rectHeight,
                label: data.datapoints[i].label,
                dataLabel: data.dataLabel,
                dataval: data.datapoints[i].y
              };
              ctx.fillRect(newobj.x, newobj.y, newobj.wid, newobj.hei);
              //console.log(newobj);
              linecord.push(newobj);
              ctx.fillStyle = "#000";
            }
            ctx.stroke();
            ctx.closePath();
            //console.log(linecord);
            console.log("End : drawBar");
            return linecord;
          } catch (e) {
            console.log("error occured in drawBar : ", e);
          }
        }
      },
      {
        key: "drawPie",
        value: function drawPie(
          canvas,
          ctx,
          verticalNr,
          data,
          range,
          chartColor,
          linecord
        ) {
          try {
            console.log("Start : drawPie");
            var canvas = document.getElementById(canvas);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var lastend = 0;
            var myTotal = 0; // Automatically calculated so don't touch
            var radius = canvas.height / 2;
            for (var e = 0; e < data.datapoints.length; e++) {
              myTotal += data.datapoints[e].y;
            }
            for (var i = 0; i < data.datapoints.length; i++) {
              ctx.fillStyle = data.datapoints[i].color;
              ctx.beginPath();
              ctx.moveTo(canvas.width / 2, canvas.height / 2);
              if (data.datapoints[i].y == 0) {
                ctx.arc(
                  canvas.width / 2,
                  canvas.height / 2,
                  canvas.height / 2,
                  lastend,
                  lastend + Math.PI * 2 * (data.datapoints[i].y / myTotal),
                  false
                );
                //console.log(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)));
                ctx.lineTo(canvas.width / 2, canvas.height / 2);
                ctx.strokeStyle = "1";
                ctx.strokeStyle = "#fff";
                ctx.stroke();
              }
              ctx.arc(
                canvas.width / 2,
                canvas.height / 2,
                canvas.height / 2,
                lastend,
                lastend + Math.PI * 2 * (data.datapoints[i].y / myTotal),
                false
              );
              //console.log(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)));
              ctx.lineTo(canvas.width / 2, canvas.height / 2);
              var newobj = {
                wid: canvas.width,
                hei: canvas.height,
                startangle: lastend,
                lastangle:
                  lastend + Math.PI * 2 * (data.datapoints[i].y / myTotal),
                label: data.datapoints[i].label,
                y: data.datapoints[i].y
              };
              //console.log(newobj);
              linecord.push(newobj);
              lastend += Math.PI * 2 * (data.datapoints[i].y / myTotal);
              //console.log(lastend);
              ctx.fill();
            }
            /* Draw piechart number values and numbers*/
            var angle = 0;
            var x = Math.floor(canvas.width / 2);
            var y = Math.floor(canvas.height / 2);
            ctx.fillStyle = "#fff";
            ctx.font = radius * 0.1 + "px arial";
            var anglenew;
            for (i = 0; i < data.datapoints.length; i++) {
              if (data.datapoints[i].y != 0) {
                anglenew = Math.PI * 2 * (data.datapoints[i].y / myTotal);
                var anglemiddle = anglenew / 3;
                var fx =
                  canvas.width / 2 +
                  radius * 0.7 * Math.cos(angle + anglemiddle);
                var fy = radius + radius * 0.7 * Math.sin(angle + anglemiddle);
                //ctx.moveTo(x, y);
                ctx.translate(fx, fy);
                //ctx.rotate(angle + anglemiddle);
                ctx.fillText(
                  data.datapoints[i].y.toString(),
                  0,
                  0 /*x + radius / 1.3, y*/
                );
                ctx.translate(-fx, -fy);
                angle += Math.PI * 2 * (data.datapoints[i].y / myTotal);
              }
            }
            console.log("End : drawPie");
            return linecord;
          } catch (e) {
            console.log("error occured in drawPie : ", e);
          }
        }
      },
      {
        key: "drawDonut",
        value: function drawDonut(
          canvas,
          ctx,
          verticalNr,
          data,
          range,
          chartColor,
          linecord,
          chartHeight
        ) {
          try {
            console.log("Start : drawDonut");
            var canvas = document.getElementById(canvas);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var linewidth = chartHeight / 4;
            var radius = canvas.height / 2 - linewidth;
            ctx.lineWidth = linewidth * 2;
            var lastend = 0;
            var myTotal = 0; // Automatically calculated so don't touch
            for (var e = 0; e < data.datapoints.length; e++) {
              myTotal += data.datapoints[e].y;
            }
            for (var i = 0; i < data.datapoints.length; i++) {
              if (data.datapoints[i].y == 0) {
                ctx.beginPath();
                ctx.arc(
                  canvas.width / 2,
                  canvas.height / 2,
                  radius,
                  lastend,
                  lastend + Math.PI * 2 * (data.datapoints[i].y / myTotal),
                  false
                );
                ctx.strokeStyle = "#fff";
                ctx.stroke();
              }
              ctx.strokeStyle = data.datapoints[i].color;
              ctx.beginPath();
              //ctx.moveTo(canvas.width / 2, canvas.height / 2);
              ctx.arc(
                canvas.width / 2,
                canvas.height / 2,
                radius,
                lastend,
                lastend + Math.PI * 2 * (data.datapoints[i].y / myTotal),
                false
              );
              //console.log(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)));
              //ctx.lineTo(canvas.width / 2, canvas.height / 2);
              var newobj = {
                hei: canvas.height,
                wid: canvas.width,
                startangle: lastend,
                lastangle:
                  lastend + Math.PI * 2 * (data.datapoints[i].y / myTotal),
                label: data.datapoints[i].label,
                y: data.datapoints[i].y
              };
              //console.log(newobj);
              linecord.push(newobj);
              lastend += Math.PI * 2 * (data.datapoints[i].y / myTotal);
              //console.log(lastend);
              //ctx.fill();
              ctx.stroke();
            }
            /* Draw piechart number values */
            var angle = 0;
            var x = Math.floor(canvas.width / 2);
            var y = Math.floor(canvas.height / 2);
            ctx.fillStyle = "#fff";
            ctx.font = radius * 0.12 + "px arial";
            var anglenew;
            for (i = 0; i < data.datapoints.length; i++) {
              if (data.datapoints[i].y != 0) {
                anglenew = Math.PI * 2 * (data.datapoints[i].y / myTotal);
                var anglemiddle = anglenew / 3;
                var fx =
                  canvas.width / 2 + radius * Math.cos(angle + anglemiddle);
                var fy = radius * 1.5 + radius * Math.sin(angle + anglemiddle);
                //ctx.moveTo(x, y);
                ctx.translate(fx, fy);
                //ctx.rotate(angle + anglemiddle);
                ctx.fillText(
                  data.datapoints[i].y.toString(),
                  0,
                  0 /*x + radius / 1.3, y*/
                );
                ctx.translate(-fx, -fy);
                angle += Math.PI * 2 * (data.datapoints[i].y / myTotal);
              }
            }
            console.log("End : drawDonut");
            return linecord;
          } catch (e) {
            console.log("error occured in drawDonut : ", e);
          }
        }
      },
      {
        key: "drawMeter",
        value: function drawMeter(
          canvas,
          ctx,
          verticalNr,
          data,
          range,
          chartColor,
          ChartDataToShow
        ) {
          try {
            console.log("Start : drawMeter");
            var linecord = [];
            var canvas = document.getElementById(canvas);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var linewidth = 50;
            ctx.lineWidth = 4;
            var lastend = 3.141592653589793;
            var myTotal = 0; // Automatically calculated so don't touch
            var radius = canvas.height / 2 - linewidth;
            for (var e = 0; e < data.datapoints.length; e++) {
              myTotal += data.datapoints[e].y;
            }
            for (var i = 0; i < data.datapoints.length; i++) {
              ctx.strokeStyle = "#fff";
              ctx.fillStyle = data.datapoints[i].color;
              ctx.beginPath();
              ctx.moveTo(canvas.width / 2, canvas.height / 2);
              ctx.arc(
                canvas.width / 2,
                canvas.height / 2,
                radius,
                lastend,
                lastend + Math.PI * (data.datapoints[i].y / myTotal)
              );
              //console.log(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)));
              ctx.lineTo(canvas.width / 2, canvas.height / 2);
              ctx.fill();
              ctx.stroke();
              var newobj = {
                x: canvas.width / 2,
                startangle: lastend,
                lastangle: lastend + Math.PI * (data.datapoints[i].y / myTotal),
                label: data.datapoints[i].label
              };
              linecord.push(newobj);
              lastend += Math.PI * (data.datapoints[i].y / myTotal);
            }
            //console.log(linecord);
            ctx.beginPath();
            ctx.fillStyle = "#fff";
            ctx.arc(
              canvas.width / 2,
              canvas.height / 2,
              radius * 0.7,
              0,
              2 * Math.PI
            );
            ctx.fill();
            ctx.closePath();
            ctx.beginPath();
            ctx.fillStyle = "#000";
            ctx.arc(
              canvas.width / 2,
              canvas.height / 2,
              radius * 0.1,
              0,
              2 * Math.PI
            );
            ctx.fill();
            ctx.closePath();
            ctx.beginPath();
            var rotateangel =
              Math.PI * (ChartDataToShow / 100) + 3.141592653589793;
            //console.log(rotateangel);
            var headlen = 10;
            ctx.lineWidth = 6;
            ctx.lineCap = "round";
            var tox = canvas.width / 2 + radius * 0.8 * Math.cos(rotateangel);
            var toy = canvas.height / 2 + radius * 0.8 * Math.sin(rotateangel);
            var fromx = canvas.width / 2;
            var fromy = canvas.height / 2;
            ctx.moveTo(canvas.width / 2, canvas.height / 2);
            ctx.lineTo(tox, toy);
            ctx.strokeStyle = "#000";
            ctx.stroke();
            ctx.beginPath();
            ctx.fillStyle = "#fff";
            ctx.arc(
              canvas.width / 2,
              canvas.height / 2,
              radius * 0.07,
              0,
              2 * Math.PI
            );
            ctx.fill();
            ctx.closePath();

            /* Draw piechart number values */
            var angle = 3.141592653589793;
            var x = Math.floor(canvas.width / 2);
            var y = Math.floor(canvas.height / 2);
            ctx.fillStyle = "#000";
            ctx.font = "18px Arial";
            ctx.save();

            /*Text in data format loop*/
            var anglenew;
            for (i = 0; i < data.datapoints.length; i++) {
              anglenew = (Math.PI * 2 * (data.datapoints[i].y / myTotal)) / 2;
              var anglemiddle = anglenew / 6;
              /*ctx.translate(x, y);
                     ctx.rotate(angle + anglemiddle);
                     ctx.translate(-x, -y);
                     ctx.fillText(data.datapoints[i].label.toString(), x + radius, y);
                     angle = (Math.PI * (data.datapoints[i].y / myTotal)) - anglemiddle;*/
              //console.log(angle);

              var fx =
                canvas.width / 2 +
                radius * 1.01 * Math.cos(angle + anglemiddle);
              var fy =
                canvas.height / 2 +
                radius * 1.01 * Math.sin(angle + anglemiddle);
              ctx.translate(fx, fy);
              ctx.rotate(angle + 1.8);
              ctx.fillText(data.datapoints[i].label.toString(), 0, 0);
              ctx.rotate(-(angle + 1.8));
              ctx.translate(-fx, -fy);
              angle += Math.PI * (data.datapoints[i].y / myTotal);
            }
            ctx.restore();
            console.log("End : drawMeter");
            return linecord;
          } catch (e) {
            console.log("error occured in drawMeter : ", e);
          }
        }
      },
      {
        key: "drawsplinechart",
        value: function drawsplinechart(
          canvas,
          ctx,
          verticalNr,
          data,
          range,
          chartColor,
          linecord
        ) {
          try {
            console.log("Start : drawGraphicLinear");
            var canvas = document.getElementById(canvas);
            var hei = canvas.height - 60;
            var wid = canvas.width - +100;
            var spacingVertical = hei / verticalNr;
            //console.log("spacingVertical:" + spacingVertical);
            var spacingHorizontal = wid / data.datapoints.length;
            //console.log("spacingHorizontal:" + spacingHorizontal);

            var totalRange = range[1] - range[0];
            var verticalCoefficient = hei / totalRange;
            var mov;
            ctx.strokeStyle = chartColor;
            ctx.globalAlpha = 1;
            var localLineCords = [];

            for (var i = 0; i < data.datapoints.length; i++) {
              var newobj = {
                x: i * spacingHorizontal + spacingHorizontal / 2 + 100,
                y:
                  hei - (data.datapoints[i].y - range[0]) * verticalCoefficient,
                label: data.datapoints[i].label,
                dataLabel: data.dataLabel,
                dataval: data.datapoints[i].y
              };
              //console.log(newobj);
              linecord.push(newobj);
              localLineCords.push(newobj);
            }

            ctx.closePath();
            var f = 2;
            var a = DrawChart.bezierPointsCalc(localLineCords, f);
            console.log(a);
            ctx.strokeStyle = chartColor;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(a[0].x, a[0].y);
            for (var i = 1; i < a.length; i += 3) {
              if (i <= a.length - 3) {
                ctx.bezierCurveTo(
                  a[i].x,
                  a[i].y,
                  a[i + 1].x,
                  a[i + 1].y,
                  a[i + 2].x,
                  a[i + 2].y
                );
              }
            }
            ctx.stroke();
            ctx.closePath();

            for (var i = 0; i < localLineCords.length; i++) {
              (function() {
                /*Draw arc for line chart connecting and end points*/
                //ctx.save();
                ctx.beginPath();
                ctx.lineWidth = 5;
                //ctx.strokeStyle = "red";
                ctx.arc(
                  localLineCords[i].x,
                  localLineCords[i].y,
                  8,
                  0,
                  2 * Math.PI
                );
                ctx.fillStyle = "#fff";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                ctx.lineWidth = 5;
                //ctx.restore();
              })();
            }
            ctx.closePath();

            if (data.fill) {
              ctx.beginPath();
              ctx.moveTo(a[0].x, hei);
              ctx.lineTo(a[0].x, a[0].y);
              for (var i = 1; i < a.length; i += 3) {
                ctx.bezierCurveTo(
                  a[i].x,
                  a[i].y,
                  a[i + 1].x,
                  a[i + 1].y,
                  a[i + 2].x,
                  a[i + 2].y
                );
              }
              ctx.lineTo(a[a.length - 1].x, hei);
              ctx.globalAlpha = 0.2;
              ctx.fillStyle = chartColor;
              ctx.closePath();
              ctx.fill();
            }
            ctx.globalAlpha = 1;
            console.log("End : drawsplinechart");
            return linecord;
          } catch (e) {
            console.log("error occured in drawsplinechart : ", e);
          }
        }
      }
    ],
    [
      {
        key: "bezierPointsCalc",
        value: function bezierPointsCalc(a, f) {
          for (var b = [], c, e = 0; e < a.length; e++) {
            if (0 == e) b.push(a[0]);
            else {
              var g, h, l;
              l = e - 1;
              g = 0 === l ? 0 : l - 1;
              h = l === a.length - 1 ? l : l + 1;
              c =
                (Math.abs(
                  (a[h].x - a[g].x) /
                    (0 === a[h].x - a[l].x ? 0.01 : a[h].x - a[l].x)
                ) *
                  (f - 1)) /
                  2 +
                1;
              var t = (a[h].x - a[g].x) / c;
              c = (a[h].y - a[g].y) / c;
              b[b.length] =
                (a[l].x > a[g].x && 0 < t) || (a[l].x < a[g].x && 0 > t)
                  ? {
                      x: a[l].x + t / 3,
                      y: a[l].y + c / 3
                    }
                  : {
                      x: a[l].x,
                      y: a[l].y + c / 9
                    };
              l = e;
              g = 0 === l ? 0 : l - 1;
              h = l === a.length - 1 ? l : l + 1;
              c =
                (Math.abs(
                  (a[h].x - a[g].x) /
                    (0 === a[l].x - a[g].x ? 0.01 : a[l].x - a[g].x)
                ) *
                  (f - 1)) /
                  2 +
                1;
              t = (a[h].x - a[g].x) / c;
              c = (a[h].y - a[g].y) / c;
              b[b.length] =
                (a[l].x > a[g].x && 0 < t) || (a[l].x < a[g].x && 0 > t)
                  ? {
                      x: a[l].x - t / 3,
                      y: a[l].y - c / 3
                    }
                  : {
                      x: a[l].x,
                      y: a[l].y - c / 9
                    };
              b[b.length] = a[e];
            }
          }
          return b;
        }
      }
    ]
  );

  return DrawChart;
})();

var DrawChartUpperCanvas = (function() {
  function DrawChartUpperCanvas() {
    _classCallCheck(this, DrawChartUpperCanvas);
  }

  _createClass(
    DrawChartUpperCanvas,
    [
      {
        key: "lineChartUpperCanvas",
        value: function lineChartUpperCanvas(
          nr,
          ctx,
          width,
          height,
          linecord,
          container,
          charttype
        ) {
          try {
            console.log("Start : lineChartUpperCanvas");
            document.getElementById("canvasupper" + nr).addEventListener(
              "mousemove",
              function(evt) {
                ctx.clearRect(
                  0,
                  0,
                  document.getElementById("canvasupper" + nr).width,
                  document.getElementById("canvasupper" + nr).height
                );
                var mousePos = getMousePos(
                  document.getElementById("canvasupper" + nr),
                  evt
                );
                /*var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
                    console.log(message);*/
                for (var i = 0; i < linecord.length; i++) {
                  ctx.beginPath();
                  ctx.arc(linecord[i].x, linecord[i].y, 7, 0, 2 * Math.PI);
                  if (
                    ctx.isPointInStroke(mousePos.x, mousePos.y) ||
                    ctx.isPointInPath(mousePos.x, mousePos.y)
                  ) {
                    //console.log("lineChart compar mouse over on upper canvas");
                    ctx.lineWidth = 5;
                    ctx.strokeStyle = "rgba(0,0,0,.7)";
                    ctx.stroke();
                    //ctx.fill();
                    css(
                      document.querySelector(
                        "#" + container + " .canvasjs-chart-tooltip"
                      ),
                      {
                        left:
                          linecord[i].x / DrawChartUpperCanvas.ratio(ctx) +
                          "px",
                        top:
                          linecord[i].y / DrawChartUpperCanvas.ratio(ctx) +
                          "px",
                        display: "block"
                      }
                    );
                    document.querySelector(
                      "#" + container + " .canvasjs-chart-tooltip div"
                    ).innerHTML =
                      linecord[i].dataLabel +
                      " <br /> " +
                      linecord[i].label +
                      " : " +
                      linecord[i].dataval;
                    break;
                  } else {
                    ctx.clearRect(
                      0,
                      0,
                      document.getElementById("canvasupper" + nr).width,
                      document.getElementById("canvasupper" + nr).height
                    );
                    css(
                      document.querySelector(
                        "#" + container + " .canvasjs-chart-tooltip"
                      ),
                      {
                        display: "none"
                      }
                    );
                  }
                  ctx.closePath();
                }
              },
              false
            );
            console.log("End : lineChartUpperCanvas");
          } catch (e) {
            console.log("error occurred in lineChartUpperCanvas : ", e);
          }
        }
      },
      {
        key: "barChartUpperCanvas",
        value: function barChartUpperCanvas(
          nr,
          ctx,
          width,
          height,
          linecord,
          container,
          charttype
        ) {
          try {
            console.log("Start : barChartUpperCanvas");
            document.getElementById("canvasupper" + nr).addEventListener(
              "mousemove",
              function(evt) {
                ctx.clearRect(
                  0,
                  0,
                  document.getElementById("canvasupper" + nr).width,
                  document.getElementById("canvasupper" + nr).height
                );
                var mousePos = getMousePos(
                  document.getElementById("canvasupper" + nr),
                  evt
                );
                //console.log(mousePos);
                /*var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
                    console.log(message);*/
                for (var i = 0; i < linecord.length; i++) {
                  ctx.beginPath();
                  ctx.rect(
                    linecord[i].x,
                    linecord[i].y,
                    linecord[i].wid,
                    linecord[i].hei
                  );
                  if (
                    ctx.isPointInStroke(mousePos.x, mousePos.y) ||
                    ctx.isPointInPath(mousePos.x, mousePos.y)
                  ) {
                    ctx.lineWidth = 0.5;
                    ctx.fillStyle = "rgba(0,0,0,.3)";
                    ctx.fill();
                    ctx.stroke();
                    css(
                      document.querySelector(
                        "#" + container + " .canvasjs-chart-tooltip"
                      ),
                      {
                        left:
                          linecord[i].x / DrawChartUpperCanvas.ratio(ctx) +
                          "px",
                        top:
                          linecord[i].y / DrawChartUpperCanvas.ratio(ctx) +
                          "px",
                        display: "block"
                      }
                    );
                    document.querySelector(
                      "#" + container + " .canvasjs-chart-tooltip div"
                    ).innerHTML =
                      linecord[i].dataLabel +
                      " <br /> " +
                      linecord[i].label +
                      " : " +
                      linecord[i].dataval;
                    break;
                  } else {
                    ctx.clearRect(
                      0,
                      0,
                      document.getElementById("canvasupper" + nr).width,
                      document.getElementById("canvasupper" + nr).height
                    );
                  }
                }
              },
              false
            );
            document
              .getElementById("canvasupper" + nr)
              .addEventListener("mouseout", function(evt) {
                setTimeout(function() {
                  css(
                    document.querySelector(
                      "#" + container + " .canvasjs-chart-tooltip"
                    ),
                    {
                      display: "none"
                    }
                  );
                }, 2000);
              });
            console.log("End : barChartUpperCanvas");
          } catch (e) {
            console.log("error occurred in barChartUpperCanvas : ", e);
          }
        }
      },
      {
        key: "pieChartUpperCanvas",
        value: function pieChartUpperCanvas(
          nr,
          ctx,
          width,
          height,
          linecord,
          container,
          charttype
        ) {
          try {
            console.log("Start : pieChartUpperCanvas");
            document.getElementById("canvasupper" + nr).addEventListener(
              "mousemove",
              function(evt) {
                ctx.clearRect(
                  0,
                  0,
                  document.getElementById("canvasupper" + nr).width,
                  document.getElementById("canvasupper" + nr).height
                );
                var mousePos = getMousePos(
                  document.getElementById("canvasupper" + nr),
                  evt
                );
                /*var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
                    console.log(message);*/
                for (var i = 0; i < linecord.length; i++) {
                  ctx.beginPath();
                  ctx.lineTo(linecord[i].wid / 2, linecord[i].hei / 2);
                  ctx.arc(
                    linecord[i].wid / 2,
                    linecord[i].hei / 2,
                    linecord[i].hei / 2,
                    linecord[i].startangle,
                    linecord[i].lastangle,
                    false
                  );
                  ctx.lineTo(linecord[i].x, linecord[i].x);
                  if (
                    ctx.isPointInStroke(mousePos.x, mousePos.y) ||
                    ctx.isPointInPath(mousePos.x, mousePos.y)
                  ) {
                    /*ctx.lineWidth=1;
                             ctx.stroke();*/
                    ctx.fillStyle = "rgba(0,0,0,.3)";
                    ctx.fill();
                    css(
                      document.querySelector(
                        "#" + container + " .canvasjs-chart-tooltip"
                      ),
                      {
                        display: "block",
                        left:
                          mousePos.x / DrawChartUpperCanvas.ratio(ctx) + "px",
                        top: mousePos.y / DrawChartUpperCanvas.ratio(ctx) + "px"
                      }
                    );
                    document.querySelector(
                      "#" + container + " .canvasjs-chart-tooltip div"
                    ).innerHTML =
                      linecord[i].label + " : " + linecord[i].y;

                    break;
                  } else {
                    ctx.clearRect(
                      0,
                      0,
                      document.getElementById("canvasupper" + nr).width,
                      document.getElementById("canvasupper" + nr).height
                    );
                  }
                }
              },
              false
            );
            document
              .getElementById("canvasupper" + nr)
              .addEventListener("mouseout", function(evt) {
                setTimeout(function() {
                  ctx.clearRect(
                    0,
                    0,
                    document.getElementById("canvasupper" + nr).width,
                    document.getElementById("canvasupper" + nr).height
                  );
                  css(
                    document.querySelector(
                      "#" + container + " .canvasjs-chart-tooltip"
                    ),
                    {
                      display: "none"
                    }
                  );
                }, 2000);
              });
            console.log("End : pieChartUpperCanvas");
          } catch (e) {
            console.log("error occurred in pieChartUpperCanvas : ", e);
          }
        }
      },
      {
        key: "donutChartUpperCanvas",
        value: function donutChartUpperCanvas(
          nr,
          ctx,
          width,
          height,
          linecord,
          container,
          charttype
        ) {
          try {
            console.log("Start : donutChartUpperCanvas");
            document.getElementById("canvasupper" + nr).addEventListener(
              "mousemove",
              function(evt) {
                ctx.clearRect(
                  0,
                  0,
                  document.getElementById("canvasupper" + nr).width,
                  document.getElementById("canvasupper" + nr).height
                );
                var linewidth = 80;
                var mousePos = getMousePos(
                  document.getElementById("canvasupper" + nr),
                  evt
                );
                /*var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
                    console.log(message);*/
                for (var i = 0; i < linecord.length; i++) {
                  var radius = linecord[i].hei / 2 - linewidth;
                  ctx.lineWidth = linewidth * 2;
                  ctx.beginPath();
                  //ctx.lineTo(linecord[i].x, linecord[i].x);
                  ctx.arc(
                    linecord[i].wid / 2,
                    linecord[i].hei / 2,
                    radius,
                    linecord[i].startangle,
                    linecord[i].lastangle,
                    false
                  );
                  //ctx.lineTo(linecord[i].x, linecord[i].x);
                  if (ctx.isPointInStroke(mousePos.x, mousePos.y)) {
                    /*ctx.lineWidth=1;*/
                    ctx.strokeStyle = "rgba(0,0,0,0.2)";
                    ctx.stroke();
                    css(
                      document.querySelector(
                        "#" + container + " .canvasjs-chart-tooltip"
                      ),
                      {
                        display: "block",
                        left:
                          mousePos.x / DrawChartUpperCanvas.ratio(ctx) + "px",
                        top: mousePos.y / DrawChartUpperCanvas.ratio(ctx) + "px"
                      }
                    );
                    document.querySelector(
                      "#" + container + " .canvasjs-chart-tooltip div"
                    ).innerHTML =
                      linecord[i].label + " : " + linecord[i].y;
                    break;
                  }
                  if (!ctx.isPointInStroke(mousePos.x, mousePos.y)) {
                    ctx.clearRect(
                      0,
                      0,
                      document.getElementById("canvasupper" + nr).width,
                      document.getElementById("canvasupper" + nr).height
                    );
                  }
                }
              },
              false
            );
            document
              .getElementById("canvasupper" + nr)
              .addEventListener("mouseout", function(evt) {
                setTimeout(function() {
                  ctx.clearRect(
                    0,
                    0,
                    document.getElementById("canvasupper" + nr).width,
                    document.getElementById("canvasupper" + nr).height
                  );
                  css(
                    document.querySelector(
                      "#" + container + " .canvasjs-chart-tooltip"
                    ),
                    {
                      display: "none"
                    }
                  );
                }, 2000);
              });
            console.log("End : donutChartUpperCanvas");
          } catch (e) {
            console.log("error occurred in donutChartUpperCanvas : ", e);
          }
        }
      }
    ],
    [
      {
        key: "ratio",
        value: function ratio(ctx) {
          var dpr = window.devicePixelRatio || 1;
          var bsr =
            ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio ||
            1;
          return 2;
          //return dpr / bsr;
        }
      }
    ]
  );

  return DrawChartUpperCanvas;
})();

function enumerateIt(nr, hei, spacv, spach) {
  try {
    console.log("Start : enumerateIt");
    var data = data2;
    ctx.fillStyle = text;
    for (var i = 0; i < data.length; i++) {
      ctx.fillText(i + 1, spach * i + 4, hei + 2 * spacv + 20);
    }
    console.log("End : enumerateIt");
  } catch (e) {
    console.log("error occurred in enumerateIt : ", e);
  }
}

function writeMessage(canvas, message) {
  try {
    console.log("Start : writeMessage");
    //ctx.font = '18px Arial';
    ctx.fillStyle = "black";
    ctx.fillText(message, 10, 25);
    console.log("End : writeMessage");
  } catch (e) {
    console.log("error occurred in writeMessage : ", e);
  }
}

function getMousePos(canvas, evt) {
  try {
    //console.log("Start : getMousePos");
    var rect = canvas.getBoundingClientRect();
    return {
      x: ((evt.clientX - rect.left) / (rect.right - rect.left)) * canvas.width,
      y: ((evt.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height
    };
    //console.log("End : getMousePos");
  } catch (e) {
    console.log("error occurred in getMousePos : ", e);
  }
}

function PrintContent(event, canvasWidth, canvasHeight) {
  //console.log(event);
  var elem = event.target.parentNode;
  var dataUrl = document.querySelector("#" + elem.id + " canvas").toDataURL();

  var windowContent = "<!DOCTYPE html>";
  windowContent += "<html>";
  windowContent += "<head><title>Print canvas</title></head>";
  windowContent += "<body>";
  windowContent += elem.innerHTML;
  windowContent +=
    '<img width="' +
    canvasWidth +
    '" height="' +
    canvasHeight +
    '" src="' +
    dataUrl +
    '">';
  windowContent += "</body>";
  windowContent += "</html>";

  var printWin = window.open(
    "",
    "",
    "width=" + screen.availWidth + ",height=" + screen.availHeight
  );
  printWin.document.open();
  printWin.document.write(windowContent);

  printWin.document.addEventListener(
    "load",
    function() {
      printWin.focus();
      printWin.print();
      printWin.document.close();
      printWin.close();
    },
    true
  );
}

var chartCalling = (function() {
  function chartCalling() {
    _classCallCheck(this, chartCalling);

    this.chartSurface = new ChartSurface();
    this.drawChart = new DrawChart();
    this.drawUpperChart = new DrawChartUpperCanvas();
  }

  _createClass(chartCalling, [
    {
      key: "lineChart",
      value: function lineChart(chart, chartID) {
        try {
          console.log("Start : lineChart");
          //console.log(chart);
          chart.container = chartID;
          chart.chartnumber = chartID;
          var ChartContainer = document.querySelector("#" + chart.container);
          chart.wid = ChartContainer.clientWidth - 10;
          chart.hei = ChartContainer.clientHeight - 33;
          //console.log("chart.wid :" + chart.wid + ", chart.hei : " + chart.hei);

          var titleAndPrintButton = "";
          if (chart.config.title != undefined) {
            titleAndPrintButton +=
              '<h2 class="chartTitle">' + chart.config.title + "</h2>";
          }
          if (
            chart.config.printEnable != undefined &&
            chart.config.printEnable == true
          ) {
            titleAndPrintButton +=
              '<button style="position: absolute;right: 25px;margin-top:-40px" id="print_' +
              chartID +
              '">Print</button>';
          }
          ChartContainer.innerHTML = titleAndPrintButton;

          var ctx_base = this.chartSurface.preparePlot(
            chart.chartnumber,
            chart.wid,
            chart.hei,
            chart.container
          );
          chart.yaxis === undefined ? (chart.yaxis = {}) : null;
          if (chart.yaxis.max === undefined && chart.yaxis.min === undefined) {
            chart.yaxis.max = parseInt(chart.data[0].datapoints[0].y);
            chart.yaxis.min = parseInt(chart.data[0].datapoints[0].y);
            for (var i = 0; i < chart.data.length; i++) {
              for (var j = 0; j < chart.data[i].datapoints.length; j++) {
                if (parseInt(chart.data[i].datapoints[j].y) < chart.yaxis.min) {
                  chart.yaxis.min = parseInt(chart.data[i].datapoints[j].y);
                }
                if (parseInt(chart.data[i].datapoints[j].y) > chart.yaxis.max) {
                  chart.yaxis.max = parseInt(chart.data[i].datapoints[j].y);
                }
              }
            }
            chart.yaxis.max += 10;
            chart.yaxis.min >= 10 ? (chart.yaxis.min += -10) : null;
          }
          if (chart.yaxis.difference === undefined) {
            chart.yaxis.difference = Math.floor(
              (chart.yaxis.max - chart.yaxis.min) / 8
            );
          }
          var verticaldevisions = Math.floor(
            (chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference
          );
          //console.log("verticaldevisions" + verticaldevisions);
          drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data);
          var canvas = "canvas" + chart.chartnumber;
          var maxdata = [chart.yaxis.min, chart.yaxis.max];
          var linecord = [];
          for (var i = 0; i < chart.data.length; i++) {
            this.drawChart.drawGraphicLinear(
              canvas,
              ctx_base,
              verticaldevisions,
              chart.data[i],
              maxdata,
              chart.data[i].chartColor,
              linecord
            );
          }

          drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart);
          console.log(linecord);
          var ctx_upper = this.chartSurface.preparePlotUpper(
            chart.chartnumber,
            chart.wid,
            chart.hei,
            chart.container
          );
          this.drawUpperChart.lineChartUpperCanvas(
            chart.chartnumber,
            ctx_upper,
            chart.wid,
            chart.hei,
            linecord,
            chart.container,
            chart.type
          );
          console.log("End : lineChart");
          if (
            chart.config.printEnable != undefined &&
            chart.config.printEnable == true
          ) {
            document
              .querySelector("#" + chartID + " #print_" + chartID)
              .addEventListener("click", function(event) {
                PrintContent(event, chart.wid, chart.hei);
              });
          }
        } catch (err) {
          console.error(
            "Exception occurred in line chart module:  " + err.message
          );
        }
      }
    },
    {
      key: "barChart",
      value: function barChart(chart, chartID) {
        try {
          console.log("Start : barChart");
          chart.container = chartID;
          chart.chartnumber = chartID;
          var ChartContainer = document.querySelector("#" + chart.container);
          chart.wid = ChartContainer.clientWidth - 10;
          chart.hei = ChartContainer.clientHeight - 33;

          var titleAndPrintButton = "";
          if (chart.config.title != undefined) {
            titleAndPrintButton +=
              '<h2 class="chartTitle">' + chart.config.title + "</h2>";
          }
          if (
            chart.config.printEnable != undefined &&
            chart.config.printEnable == true
          ) {
            titleAndPrintButton +=
              '<button style="position: absolute;right: 25px;margin-top:-40px" id="print_' +
              chartID +
              '">Print</button>';
          }
          ChartContainer.innerHTML = titleAndPrintButton;

          var ctx_base = this.chartSurface.preparePlot(
            chart.chartnumber,
            chart.wid,
            chart.hei,
            chart.container
          );
          chart.yaxis === undefined ? (chart.yaxis = {}) : null;

          if (chart.yaxis.max === undefined && chart.yaxis.min === undefined) {
            chart.yaxis.max = parseInt(chart.data[0].datapoints[0].y);
            chart.yaxis.min = parseInt(chart.data[0].datapoints[0].y);
            for (var i = 0; i < chart.data.length; i++) {
              for (var j = 0; j < chart.data[i].datapoints.length; j++) {
                if (parseInt(chart.data[i].datapoints[j].y) < chart.yaxis.min) {
                  chart.yaxis.min = parseInt(chart.data[i].datapoints[j].y);
                }
                if (parseInt(chart.data[i].datapoints[j].y) > chart.yaxis.max) {
                  chart.yaxis.max = parseInt(chart.data[i].datapoints[j].y);
                }
              }
            }
            chart.yaxis.max += 10;
            chart.yaxis.min >= 10 ? (chart.yaxis.min += -10) : null;
          }
          if (chart.yaxis.difference === undefined) {
            chart.yaxis.difference = Math.floor(
              (chart.yaxis.max - chart.yaxis.min) / 8
            );
          }
          var verticaldevisions = Math.floor(
            (chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference
          );
          //console.log("verticaldevisions" + verticaldevisions);
          var barwidth = drawGrid(
            chart.chartnumber,
            verticaldevisions,
            ctx_base,
            chart.data
          );
          //console.log("barwidth:" + barwidth);
          var canvas = "canvas" + chart.chartnumber;
          var rangedata = [chart.yaxis.min, chart.yaxis.max];
          //console.log("maxdata:" + maxdata);
          var linecord = [];
          var nextcurve = 100;
          var barChartCount = chart.data.length;
          for (var i = 0; i < chart.data.length; i++) {
            this.drawChart.drawBar(
              canvas,
              ctx_base,
              verticaldevisions,
              chart.data[i],
              rangedata,
              nextcurve,
              chart.data[i].chartColor,
              linecord,
              barwidth,
              barChartCount
            );
            nextcurve += barwidth + 5;
            //this.drawChart.drawGraphicLinear(canvas, ctx_base, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, linecord);
          }
          drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart);
          //console.log(linecord);
          var ctx_upper = this.chartSurface.preparePlotUpper(
            chart.chartnumber,
            chart.wid,
            chart.hei,
            chart.container
          );
          this.drawUpperChart.barChartUpperCanvas(
            chart.chartnumber,
            ctx_upper,
            chart.wid,
            chart.hei,
            linecord,
            chart.container,
            chart.type
          );
          console.log("End : barChart");
          if (
            chart.config.printEnable != undefined &&
            chart.config.printEnable == true
          ) {
            document
              .querySelector("#" + chartID + " #print_" + chartID)
              .addEventListener("click", function(event) {
                PrintContent(event, chart.wid, chart.hei);
              });
          }
        } catch (err) {
          console.error(
            "Exception occurred in bar chart module:  " + err.message
          );
        }
      }
    },
    {
      key: "pieChart",
      value: function pieChart(chart, chartID) {
        try {
          console.log("Start : pieChart");
          chart.container = chartID;
          var chartContainerSelector = document.querySelector(
            "#" + chart.container
          );
          var ChartContainer = document.querySelector("#" + chart.container);
          chart.chartnumber = chartID;
          chart.wid = chartContainerSelector.clientWidth;
          chart.hei = chartContainerSelector.clientHeight - 33;

          var chartHeight = chart.hei;

          if (chart.hei > chart.wid) {
            chartHeight = chart.wid;
          }

          var titleAndPrintButton = "";
          if (chart.config.title != undefined) {
            titleAndPrintButton +=
              '<h2 class="chartTitle">' + chart.config.title + "</h2>";
          }
          if (
            chart.config.printEnable != undefined &&
            chart.config.printEnable == true
          ) {
            titleAndPrintButton +=
              '<button style="position: absolute;right: 25px;margin-top:-40px" id="print_' +
              chartID +
              '">Print</button>';
          }
          ChartContainer.innerHTML = titleAndPrintButton;

          var ctx_base = this.chartSurface.preparePlot(
            chart.chartnumber,
            chart.wid,
            chartHeight,
            chart.container
          );
          //drawGrid(chart.chartnumber, 10, ctx_base, chart.data);
          var canvas = "canvas" + chart.chartnumber;
          var maxdata = [];
          maxdata[0] = maxdata[1] = chart.data[0].datapoints[0].y;
          for (var i = 0; i < chart.data.length; i++) {
            for (var j = 0; j < chart.data[i].datapoints.length; j++) {
              if (chart.data[i].datapoints[j].y < maxdata[0]) {
                maxdata[0] = chart.data[i].datapoints[j].y;
              }
              if (chart.data[i].datapoints[j].y > maxdata[1]) {
                maxdata[1] = chart.data[i].datapoints[j].y;
              }
            }
          }
          console.log(maxdata);
          var linecord = [];
          for (var i = 0; i < chart.data.length; i++) {
            this.drawChart.drawPie(
              canvas,
              ctx_base,
              10,
              chart.data[i],
              maxdata,
              chart.data[i].chartColor,
              linecord
            );
          }
          //console.log(linecord);
          var ctx_upper = this.chartSurface.preparePlotUpper(
            chart.chartnumber,
            chart.wid,
            chartHeight,
            chart.container
          );
          this.drawUpperChart.pieChartUpperCanvas(
            chart.chartnumber,
            ctx_upper,
            chart.wid,
            chartHeight,
            linecord,
            chart.container,
            chart.type
          );

          var pieChartDataDisplay =
            '<ul style="list-style: none; width: ' +
            chart.wid +
            "px; padding: 0px; display: inline-block; position: relative; top: " +
            chart.hei +
            'px">';
          for (var i = 0; i < chart.data[0].datapoints.length; i++) {
            pieChartDataDisplay +=
              '<li style="width: 50%; float: left">' +
              '<span style="width:20px; height: 10px; display: inline-block; margin-right: 10px; background-color:' +
              chart.data[0].datapoints[i].color +
              '; border: 1px solid black; border-radius: 2px;"></span>' +
              "<span>" +
              chart.data[0].datapoints[i].label +
              " : " +
              chart.data[0].datapoints[i].y +
              "</span>" +
              "</li>";
          }
          pieChartDataDisplay += "</ul>";
          chartContainerSelector.insertAdjacentHTML(
            "beforeend",
            pieChartDataDisplay
          );
          if (
            chart.config.printEnable != undefined &&
            chart.config.printEnable == true
          ) {
            document
              .querySelector("#" + chartID + " #print_" + chartID)
              .addEventListener("click", function(event) {
                PrintContent(event, chart.wid, chart.hei);
              });
          }
          console.log("End : pieChart");
        } catch (err) {
          console.error(
            "Exception occurred in pie chart module:  " + err.message
          );
        }
      }
    },
    {
      key: "donutChart",
      value: function donutChart(chart, chartID) {
        try {
          console.log("Start : donutChart");
          chart.container = chartID;
          var chartContainerSelector = document.querySelector(
            "#" + chart.container
          );
          var ChartContainer = document.querySelector("#" + chart.container);
          chart.chartnumber = chartID;
          chart.wid = chartContainerSelector.clientWidth;
          chart.hei = chartContainerSelector.clientHeight - 33;

          var chartHeight = chart.hei;

          if (chart.hei > chart.wid) {
            chartHeight = chart.wid;
          }

          var titleAndPrintButton = "";
          if (chart.config.title != undefined) {
            titleAndPrintButton +=
              '<h2 class="chartTitle">' + chart.config.title + "</h2>";
          }
          if (
            chart.config.printEnable != undefined &&
            chart.config.printEnable == true
          ) {
            titleAndPrintButton +=
              '<button style="position: absolute;right: 25px;margin-top:-40px" id="print_' +
              chartID +
              '">Print</button>';
          }
          ChartContainer.innerHTML = titleAndPrintButton;
          var ctx_base = this.chartSurface.preparePlot(
            chart.chartnumber,
            chart.wid,
            chartHeight,
            chart.container
          );
          drawGrid(chart.chartnumber, 10, ctx_base, chart.data);
          var canvas = "canvas" + chart.chartnumber;
          var maxdata = [];
          maxdata[0] = maxdata[1] = chart.data[0].datapoints[0].y;
          for (var i = 0; i < chart.data.length; i++) {
            for (var j = 0; j < chart.data[i].datapoints.length; j++) {
              if (chart.data[i].datapoints[j].y < maxdata[0]) {
                maxdata[0] = chart.data[i].datapoints[j].y;
              }
              if (chart.data[i].datapoints[j].y > maxdata[1]) {
                maxdata[1] = chart.data[i].datapoints[j].y;
              }
            }
          }
          //console.log(maxdata);
          var linecord = [];
          var linewidth = 60;
          for (var _i = 0; _i < chart.data.length; _i++) {
            this.drawChart.drawDonut(
              canvas,
              ctx_base,
              10,
              chart.data[_i],
              maxdata,
              chart.data[_i].chartColor,
              linecord,
              chartHeight
            );
          }
          //console.log(linecord);
          var ctx_upper = this.chartSurface.preparePlotUpper(
            chart.chartnumber,
            chart.wid,
            chartHeight,
            chart.container
          );
          this.drawUpperChart.donutChartUpperCanvas(
            chart.chartnumber,
            ctx_upper,
            chart.wid,
            chartHeight,
            linecord,
            chart.container,
            chart.type
          );

          var pieChartDataDisplay =
            '<ul style="list-style: none; width: ' +
            chart.wid +
            "px; padding: 0px; display: inline-block; position: relative; top: " +
            chart.hei +
            'px">';
          for (var _i2 = 0; _i2 < chart.data[0].datapoints.length; _i2++) {
            pieChartDataDisplay +=
              '<li style="width: 50%; float: left">' +
              '<span style="width:20px; height: 10px; display: inline-block; margin-right: 10px; background-color:' +
              chart.data[0].datapoints[_i2].color +
              '; border: 1px solid black; border-radius: 2px;"></span>' +
              "<span>" +
              chart.data[0].datapoints[_i2].label +
              " : " +
              chart.data[0].datapoints[_i2].y +
              "</span>" +
              "</li>";
          }
          pieChartDataDisplay += "</ul>";
          chartContainerSelector.insertAdjacentHTML(
            "beforeend",
            pieChartDataDisplay
          );
          if (
            chart.config.printEnable != undefined &&
            chart.config.printEnable == true
          ) {
            document
              .querySelector("#" + chartID + " #print_" + chartID)
              .addEventListener("click", function(event) {
                PrintContent(event, chart.wid, chart.hei);
              });
          }
          console.log("End : donutChart");
        } catch (err) {
          console.error(
            "Exception occurred in donut chart module:  " + err.message
          );
        }
      }
    },
    {
      key: "meterChart",
      value: function meterChart(chart, chartID) {
        try {
          console.log("Start : meterChart");
          chart.container = chartID;
          chart.chartnumber = chartID;
          var ChartContainer = document.querySelector("#" + chart.container);
          chart.wid = ChartContainer.clientWidth - 10;
          chart.hei = ChartContainer.clientHeight - 33;

          var titleAndPrintButton = "";
          if (chart.config.title != undefined) {
            titleAndPrintButton +=
              '<h2 class="chartTitle">' + chart.config.title + "</h2>";
          }
          if (
            chart.config.printEnable != undefined &&
            chart.config.printEnable == true
          ) {
            titleAndPrintButton +=
              '<button style="position: absolute;right: 25px;margin-top:-40px" id="print_' +
              chartID +
              '">Print</button>';
          }
          ChartContainer.innerHTML = titleAndPrintButton;
          var ctx_base = this.chartSurface.preparePlot(
            chart.chartnumber,
            chart.wid,
            chart.hei,
            chart.container
          );
          drawGrid(chart.chartnumber, 10, ctx_base, chart.data);
          var canvas = "canvas" + chart.chartnumber;
          var maxdata = [];
          maxdata[0] = maxdata[1] = chart.data[0].datapoints[0].y;
          var meterTotal = 0;
          for (var j = 0; j < chart.data[0].datapoints.length; j++) {
            if (chart.data[0].datapoints[j].y < maxdata[0]) {
              maxdata[0] = chart.data[0].datapoints[j].y;
            }
            if (chart.data[0].datapoints[j].y > maxdata[1]) {
              maxdata[1] = chart.data[0].datapoints[j].y;
            }
            meterTotal += chart.data[0].datapoints[j].y;
          }
          console.log("meterTotal " + meterTotal);
          var ChartDataToShow = chart.data[0].dataval;
          var linewidth = 50;
          ChartDataToShow = Math.round((ChartDataToShow / meterTotal) * 100);
          //console.log(ChartDataToShow);
          this.drawChart.drawMeter(
            canvas,
            ctx_base,
            10,
            chart.data[0],
            maxdata,
            chart.data[0].chartColor,
            ChartDataToShow
          );
          if (
            chart.config.printEnable != undefined &&
            chart.config.printEnable == true
          ) {
            document
              .querySelector("#" + chartID + " #print_" + chartID)
              .addEventListener("click", function(event) {
                PrintContent(event, chart.wid, chart.hei);
              });
          }
          console.log("End : meterChart");
        } catch (err) {
          console.error(
            "Exception occurred in  meter chart module:  " + err.message
          );
        }
      }
    },
    {
      key: "column",
      value: function column(chart, chartID) {
        try {
          console.log("Start : barChart");
          chart.container = chartID;
          chart.chartnumber = chartID;
          var ChartContainer = document.querySelector("#" + chart.container);
          chart.wid = ChartContainer.clientWidth - 10;
          chart.hei = ChartContainer.clientHeight - 33;

          var titleAndPrintButton = "";
          if (chart.config.title != undefined) {
            titleAndPrintButton +=
              '<h2 class="chartTitle">' + chart.config.title + "</h2>";
          }
          if (
            chart.config.printEnable != undefined &&
            chart.config.printEnable == true
          ) {
            titleAndPrintButton +=
              '<button style="position: absolute;right: 25px;margin-top:-40px" id="print_' +
              chartID +
              '">Print</button>';
          }
          ChartContainer.innerHTML = titleAndPrintButton;
          var ctx_base = this.chartSurface.preparePlot(
            chart.chartnumber,
            chart.wid,
            chart.hei,
            chart.container
          );
          chart.yaxis === undefined ? (chart.yaxis = {}) : null;
          if (chart.yaxis.max === undefined && chart.yaxis.min === undefined) {
            chart.yaxis.max = parseInt(chart.data[0].datapoints[0].y);
            chart.yaxis.min = parseInt(chart.data[0].datapoints[0].y);
            for (var i = 0; i < chart.data.length; i++) {
              for (var j = 0; j < chart.data[i].datapoints.length; j++) {
                if (parseInt(chart.data[i].datapoints[j].y) < chart.yaxis.min) {
                  chart.yaxis.min = parseInt(chart.data[i].datapoints[j].y);
                }
                if (parseInt(chart.data[i].datapoints[j].y) > chart.yaxis.max) {
                  chart.yaxis.max = parseInt(chart.data[i].datapoints[j].y);
                }
              }
            }
            chart.yaxis.max += 10;
            chart.yaxis.min >= 10 ? (chart.yaxis.min += -10) : null;
          }
          if (chart.yaxis.difference === undefined) {
            chart.yaxis.difference = Math.floor(
              (chart.yaxis.max - chart.yaxis.min) / 8
            );
          }
          var verticaldevisions = Math.floor(
            (chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference
          );
          //console.log("verticaldevisions" + verticaldevisions);
          var barwidth = drawGrid(
            chart.chartnumber,
            verticaldevisions,
            ctx_base,
            chart.data
          );
          //console.log("barwidth:" + barwidth);
          var canvas = "canvas" + chart.chartnumber;
          var maxdata = [chart.yaxis.min, chart.yaxis.max];
          //console.log("maxdata:" + maxdata);
          var linecord = [];
          var barCords = [];
          var lineLineCords = [];
          var nextcurve = 100;
          var barChartCount = 0;
          for (var _i3 in chart.data) {
            chart.data[_i3].type == "bar" ? barChartCount++ : null;
          }
          for (var _i4 = 0; _i4 < chart.data.length; _i4++) {
            if (chart.data[_i4].type == "bar") {
              this.drawChart.drawBar(
                canvas,
                ctx_base,
                verticaldevisions,
                chart.data[_i4],
                maxdata,
                nextcurve,
                chart.data[_i4].chartColor,
                barCords,
                barwidth,
                barChartCount
              );
              nextcurve += barwidth + 5;
            }
            if (chart.data[_i4].type == "line") {
              this.drawChart.drawGraphicLinear(
                canvas,
                ctx_base,
                verticaldevisions,
                chart.data[_i4],
                maxdata,
                chart.data[_i4].chartColor,
                lineLineCords
              );
            }
            if (chart.data[_i4].type == "spline") {
              var splineCord = this.drawChart.drawsplinechart(
                canvas,
                ctx_base,
                verticaldevisions,
                chart.data[_i4],
                maxdata,
                chart.data[_i4].chartColor,
                lineLineCords
              );
            }
          }
          drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart);
          console.log("barCords ", barCords);
          console.log("lineLineCords ", lineLineCords);
          var ctx_upper = this.chartSurface.preparePlotUpper(
            chart.chartnumber,
            chart.wid,
            chart.hei,
            chart.container
          );

          this.drawUpperChart.lineChartUpperCanvas(
            chart.chartnumber,
            ctx_upper,
            chart.wid,
            chart.hei,
            lineLineCords,
            chart.container,
            chart.type
          );
          this.drawUpperChart.barChartUpperCanvas(
            chart.chartnumber,
            ctx_upper,
            chart.wid,
            chart.hei,
            barCords,
            chart.container,
            chart.type
          );
          if (
            chart.config.printEnable != undefined &&
            chart.config.printEnable == true
          ) {
            document
              .querySelector("#" + chartID + " #print_" + chartID)
              .addEventListener("click", function(event) {
                PrintContent(event, chart.wid, chart.hei);
              });
          }
          console.log("End : barChart");
        } catch (err) {
          console.error(
            "Exception occurred in bar chart module:  " + err.message
          );
        }
      }
    },
    {
      key: "splineChart",
      value: function splineChart(chart, chartID) {
        try {
          console.log("Start : splineChart");
          //console.log(chart);
          chart.container = chartID;
          chart.chartnumber = chartID;
          var ChartContainer = document.querySelector("#" + chart.container);
          chart.wid = ChartContainer.clientWidth - 10;
          //chart.wid = chart.width;
          //chart.hei = chart.height;
          chart.hei = ChartContainer.clientHeight - 33;

          var titleAndPrintButton = "";
          if (chart.config.title != undefined) {
            titleAndPrintButton +=
              '<h2 class="chartTitle">' + chart.config.title + "</h2>";
          }
          if (
            chart.config.printEnable != undefined &&
            chart.config.printEnable == true
          ) {
            titleAndPrintButton +=
              '<button style="position: absolute;right: 25px;margin-top:-40px" id="print_' +
              chartID +
              '">Print</button>';
          }
          ChartContainer.innerHTML = titleAndPrintButton;

          var ctx_base = this.chartSurface.preparePlot(
            chart.chartnumber,
            chart.wid,
            chart.hei,
            chart.container
          );

          chart.yaxis === undefined ? (chart.yaxis = {}) : null;
          if (chart.yaxis.max === undefined && chart.yaxis.min === undefined) {
            chart.yaxis.max = parseInt(chart.data[0].datapoints[0].y);
            chart.yaxis.min = parseInt(chart.data[0].datapoints[0].y);
            for (var i = 0; i < chart.data.length; i++) {
              for (var j = 0; j < chart.data[i].datapoints.length; j++) {
                if (parseInt(chart.data[i].datapoints[j].y) < chart.yaxis.min) {
                  chart.yaxis.min = parseInt(chart.data[i].datapoints[j].y);
                }
                if (parseInt(chart.data[i].datapoints[j].y) > chart.yaxis.max) {
                  chart.yaxis.max = parseInt(chart.data[i].datapoints[j].y);
                }
              }
            }
            chart.yaxis.max += 10;
            chart.yaxis.min >= 10 ? (chart.yaxis.min += -10) : null;
          }
          if (chart.yaxis.difference === undefined) {
            chart.yaxis.difference = Math.floor(
              (chart.yaxis.max - chart.yaxis.min) / 8
            );
          }
          var verticaldevisions = Math.floor(
            (chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference
          );
          //console.log("verticaldevisions" + verticaldevisions);
          drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data);
          var canvas = "canvas" + chart.chartnumber;
          drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart);
          var maxdata = [chart.yaxis.min, chart.yaxis.max];
          var linecord = [];
          for (var _i5 = 0; _i5 < chart.data.length; _i5++) {
            this.drawChart.drawsplinechart(
              canvas,
              ctx_base,
              verticaldevisions,
              chart.data[_i5],
              maxdata,
              chart.data[_i5].chartColor,
              linecord
            );
          }

          //console.log(linecord);
          var ctx_upper = this.chartSurface.preparePlotUpper(
            chart.chartnumber,
            chart.wid,
            chart.hei,
            chart.container
          );
          this.drawUpperChart.lineChartUpperCanvas(
            chart.chartnumber,
            ctx_upper,
            chart.wid,
            chart.hei,
            linecord,
            chart.container,
            chart.type
          );
          if (
            chart.config.printEnable != undefined &&
            chart.config.printEnable == true
          ) {
            document
              .querySelector("#" + chartID + " #print_" + chartID)
              .addEventListener("click", function(event) {
                PrintContent(event, chart.wid, chart.hei);
              });
          }
          console.log("End : splineChart");
        } catch (err) {
          console.error(
            "Exception occurred in line chart module:  " + err.message
          );
        }
      }
    },
    {
      key: "stepChart",
      value: function stepChart(chart, chartID) {
        try {
          console.log("Start : stepChart");
          //console.log(chart);
          chart.container = chartID;
          chart.chartnumber = chartID;
          var ChartContainer = document.querySelector("#" + chart.container);
          chart.wid = ChartContainer.clientWidth - 10;
          chart.hei = ChartContainer.clientHeight - 33;

          var titleAndPrintButton = "";
          if (chart.config.title != undefined) {
            titleAndPrintButton +=
              '<h2 class="chartTitle">' + chart.config.title + "</h2>";
          }
          if (
            chart.config.printEnable != undefined &&
            chart.config.printEnable == true
          ) {
            titleAndPrintButton +=
              '<button style="position: absolute;right: 25px;margin-top:-40px" id="print_' +
              chartID +
              '">Print</button>';
          }
          ChartContainer.innerHTML = titleAndPrintButton;

          var ctx_base = this.chartSurface.preparePlot(
            chart.chartnumber,
            chart.wid,
            chart.hei,
            chart.container
          );
          chart.yaxis === undefined ? (chart.yaxis = {}) : null;
          if (chart.yaxis.max === undefined && chart.yaxis.min === undefined) {
            chart.yaxis.max = chart.data[0].datapoints[0].y;
            chart.yaxis.min = chart.data[0].datapoints[0].y;
            for (var i = 0; i < chart.data.length; i++) {
              for (var j = 0; j < chart.data[i].datapoints.length; j++) {
                if (chart.data[i].datapoints[j].y < chart.yaxis.min) {
                  chart.yaxis.min = chart.data[i].datapoints[j].y;
                }
                if (chart.data[i].datapoints[j].y > chart.yaxis.max) {
                  chart.yaxis.max = chart.data[i].datapoints[j].y;
                }
              }
            }
            chart.yaxis.max += 10;
            chart.yaxis.min >= 10 ? (chart.yaxis.min += -10) : null;
          }
          if (chart.yaxis.difference === undefined) {
            chart.yaxis.difference = Math.floor(
              (chart.yaxis.max - chart.yaxis.min) / 8
            );
          }
          var verticaldevisions = Math.floor(
            (chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference
          );
          //console.log("verticaldevisions" + verticaldevisions);
          drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data);

          var canvas = "canvas" + chart.chartnumber;
          drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart);
          var maxdata = [chart.yaxis.min, chart.yaxis.max];
          var linecord = [];
          for (var _i6 = 0; _i6 < chart.data.length; _i6++) {
            this.drawChart.drawStepchart(
              canvas,
              ctx_base,
              verticaldevisions,
              chart.data[_i6],
              maxdata,
              chart.data[_i6].chartColor,
              linecord
            );
          }

          console.log(linecord);
          var ctx_upper = this.chartSurface.preparePlotUpper(
            chart.chartnumber,
            chart.wid,
            chart.hei,
            chart.container
          );
          this.drawUpperChart.lineChartUpperCanvas(
            chart.chartnumber,
            ctx_upper,
            chart.wid,
            chart.hei,
            linecord,
            chart.container,
            chart.type
          );
          if (
            chart.config.printEnable != undefined &&
            chart.config.printEnable == true
          ) {
            document
              .querySelector("#" + chartID + " #print_" + chartID)
              .addEventListener("click", function(event) {
                PrintContent(event, chart.wid, chart.hei);
              });
          }
          console.log("End : stepChart");
        } catch (error) {
          console.log(
            "Error Occured while chart calling of step chart" + error.message
          );
        }
      }
    }
  ]);

  return chartCalling;
})();

var GKChart = (function() {
  function GKChart(data) {
    _classCallCheck(this, GKChart);

    try {
      console.info("Enter: Chart Designing initialize function");
      this.chartID = data.id;
      this.chartData = data.data;
      this.chartCall = new chartCalling();
      this.load = this.initialize();
      console.info("Exit: Chart Designing initialize function");
    } catch (err) {
      console.log("Error Found in GKChart Constructoru", err);
    }
  }

  _createClass(GKChart, [
    {
      key: "initialize",
      value: function initialize() {
        try {
          /*Define chart css properties*/
          var loadIt = function loadIt() {
            console.warn("Resize Load : " + chartID);
            css(document.querySelector("#" + chartID), {
              display: "block"
            });

            switch (chartType) {
              case "line": {
                chartCall.lineChart(chartData, chartID);
                break;
              }
              case "bar": {
                chartCall.barChart(chartData, chartID);
                break;
              }
              case "pie": {
                chartCall.pieChart(chartData, chartID);
                break;
              }
              case "donut": {
                chartCall.donutChart(chartData, chartID);
                break;
              }
              case "meter": {
                chartCall.meterChart(chartData, chartID);
                break;
              }
              case "column": {
                chartCall.column(chartData, chartID);
                break;
              }
              case "spline": {
                chartCall.splineChart(chartData, chartID);
                break;
              }
              case "step": {
                chartCall.stepChart(eval(chartData), chartID);
                break;
              }
              default: {
                console.log("Invalid choice of chart");
                break;
              }
            }
          };

          console.log("Start : initialize", this);
          var chartType = this.chartData.config.chartType;
          var chartData = this.chartData;
          var chartID = this.chartID;
          var chartCall = this.chartCall;

          return loadIt;
          console.log("End : initialize");
        } catch (err) {
          console.error("Exception occurred in Home module:  " + err.message);
        }
      }
    },
    {
      key: "renderGKChart",
      value: function renderGKChart(renderAgain) {
        try {
          // console.log("Start : Render GKChart Library");
          if (renderAgain != undefined) {
            if (renderAgain.id != undefined) this.chartID = renderAgain.id;
            if (renderAgain.data != undefined)
              this.chartData = renderAgain.data;
          }
          var loadItAgain = this.load;
          loadItAgain();
          window.addEventListener("resize", function() {
            loadItAgain();
          });
          // console.log("End : Render GKChart Library");
        } catch (error) {
          // console.log("Error Found while calling Render GKChart", error);
        }
      }
    }
  ]);

  return GKChart;
})();
