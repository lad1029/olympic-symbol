canvas = document.getElementById("EpicCanvas");
color = "blue";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{


    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    circle(mouse_x , mouse_y)
}
ctx.beginPath();
ctx.strokeStyle = "black"
ctx.lineWidth = 2;
ctx.arc(300, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.arc(400, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 2;
ctx.arc(250, 250, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 2;
ctx.arc(350, 250, 40, 0, 2 * Math.PI);
ctx.stroke();