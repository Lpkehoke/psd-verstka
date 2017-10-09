function create( num , color) {
  if(drawingCanvas && drawingCanvas.getContext) {
  var context = drawingCanvas.getContext('2d');
  // рисуем окружность
  context.fillStyle = "#ddd";
  context.strokeStyle = "#ddd";
  context.beginPath();
  context.arc(80,80,80,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  // рисуем сектор окружности num%

  context.fillStyle = color;
  context.beginPath();
  context.moveTo(80, 80);
  //координаты старта определяем так чтоб закрашенная область всегда была снизу
  var start=(Math.PI/180)*270;
  context.arc(80,80,80,start,start+(Math.PI/180)*num*360/100,false);
  context.closePath();
  context.fill();

  // закрашиваем внутреннюю окружность меньшего радиуса
  context.fillStyle = "#F8F8F8";
  context.beginPath();
  context.arc(80,80,67,0,Math.PI*2,true);
  context.closePath();
  context.fill();

  // пишем текст
  context.fillStyle = "#3c4761";
  context.font = "50px Titillium Web";
  context.textAlign = "center";
  context.textBaseline = 'middle';
  var x=drawingCanvas.width/2;
  var y=drawingCanvas.height/2;
  context.fillText(num+"%", x,y);
  }
}

var drawingCanvas = document.getElementById('dg1');
create(90 , "#30BAE7");
var drawingCanvas = document.getElementById('dg2');
create(75 , "#D74680");
var drawingCanvas = document.getElementById('dg3');
create(70 , "#15C7A8");
var drawingCanvas = document.getElementById('dg4');
create(85 , "#EB7D4B");


