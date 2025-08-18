const canvas = document.getElementById("canvas");
const drawcanvas = document.getElementById("drawcanvas");
const bgcanvas = document.getElementById("bgcanvas");
  const ctx = canvas.getContext("2d");
    const bgctx = bgcanvas.getContext("2d");
canvas.width=window.innerWidth-70
canvas.height=(window.innerHeight/2)
drawcanvas.width=window.innerWidth-70
drawcanvas.height=window.innerHeight-20
bgcanvas.width=window.innerWidth-70
bgcanvas.height=window.innerHeight-20
document.getElementById("preview").style.minHeight=(window.innerHeight/2)-50+"px"
document.getElementById("preview").style.minWidth=(window.innerWidth-70)+"px"


  let drawing = false;
  let setx = 0
  let sety = 0
  let ssetx=0
  let ssety=0
  let xarray = []
  let yarray = []
  let downtime = 0
  let form1=""
  let xoffset = 0
  let caps = false
  let form2 = ""
  let pick = 0
  let lastX = 0;
let lastY = 0;
const angle = Math.PI / 6; // 30° slant
  let yoffset = 0

  canvas.addEventListener("pointerdown", (e) => {
    downtime=downtime+1
    drawing = true;
   
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    setx=e.offsetX
    sety=e.offsetY
    ssetx=setx
    ssety=sety
    xarray=[]
    yarray=[]
    xarray[xarray.length]=setx
    yarray[yarray.length]=sety

  });

  canvas.addEventListener("pointermove", (e) => {
    if (!drawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    setx=e.offsetX
    sety=e.offsetY
    xarray[xarray.length]=setx
    yarray[yarray.length]=sety
   // console.log(setx+" X")
   // console.log(sety+" Y")
  });

  canvas.addEventListener("pointerup", () => {
    drawing = false;
    console.log(Math.round(ssetx)+" X")
    console.log(Math.round(ssety)+" Y")
    console.log(Math.round(setx)+" X")
    console.log(Math.round(sety)+" Y")
    let xless = 0
    let xmore = 0
    let yless = 0
      let ymore = 0
    for (let index = 0; index < xarray.length-1; index++) {
if(xarray[index]>xarray[index+1]){
xmore=xmore+1}     
if(xarray[index]<xarray[index+1]){
xless=xless+1}     
if(yarray[index]>yarray[index+1]){
ymore=ymore+1}     
if(yarray[index]<yarray[index+1]){
yless=yless+1}     
}

console.log(xmore+"xmore")
console.log(xless+"xless")
console.log(ymore+"ymore")
console.log(yless+"yless")
let subm = xmore-ymore
if(subm<0){subm=subm.toString(); subm=subm.slice(1, ); subm=Number(subm)}
let subl = xless-yless
if(subl<0){subl=subl.toString(); subl=subl.slice(1, ); subl=Number(subl)}
let xstart = ssetx-setx
if(xstart<0){xstart=xstart.toString(); xstart=xstart.slice(1, ); xstart=Number(xstart)}
let ystart = ssety-sety
if(ystart<0){ystart=ystart.toString(); ystart=ystart.slice(1, ); ystart=Number(ystart)}
if(caps==false){
if(subl<=30 && subm<=30 && xmore>0 && xless>0 && yless>0 && ymore>0 && xstart<=30 && ystart<=30 && downtime==1){document.getElementById("prediction").innerHTML="o"; form1="o"; pick=1}
else if(form1=="o" && xmore<=3){document.getElementById("prediction").innerHTML="a"; pick=3}
else if(form1=="o" && xless<=3){document.getElementById("prediction").innerHTML="g"; pick=4}
else if(xstart<=40 && ssetx-xarray[Math.round(xarray.length/2)]>30 && downtime==1){document.getElementById("prediction").innerHTML="c"; pick=5}
else if(ystart<=40 && ssety-yarray[Math.round(yarray.length/2)]<-30 && downtime==1 && ssetx-xarray[Math.round(xarray.length/5)]>=-5){document.getElementById("prediction").innerHTML="u"; pick=6}
else if(ystart<=40 && setx-ssetx>30 && downtime==1 && yarray[Math.round(yarray.length/2)]-ssety<=50 && yarray[Math.round(yarray.length/2)]-ssety>0 && yarray[Math.round(yarray.length/4)]-yarray[Math.round(yarray.length/2)]>0){document.getElementById("prediction").innerHTML="w"; pick=7}
else if(ystart<=40 && ssety-yarray[Math.round(yarray.length/2)]<-30 && downtime==1){document.getElementById("prediction").innerHTML="v"; pick=8}
else if(ymore<=10 && yless>10 && xstart<20 && downtime==1){document.getElementById("prediction").innerHTML="i"; form1="i"; yoffset=sety; xoffset=setx; pick=9}
else if(form1=="i" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]<0 && yoffset-sety<=40){document.getElementById("prediction").innerHTML="b"; pick=10}
else if(form1=="i" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]<0 && yoffset-sety>=40){document.getElementById("prediction").innerHTML="p"; pick=11}
else if(form1=="i" && xstart<=40 && ssetx-xarray[Math.round(xarray.length/2)]>30 && yoffset-yarray[Math.round(yarray.length/2)]>40){document.getElementById("prediction").innerHTML="k"; pick=12}
else if(form1=="i" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]>0 && yoffset-sety<=40){document.getElementById("prediction").innerHTML="d"; pick=13}
else if(form1=="i" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]>0 && yoffset-sety>40){document.getElementById("prediction").innerHTML="q"; pick=14}
else if(xmore==0 && xless>10 && xstart>=20 && form1=="l"){document.getElementById("prediction").innerHTML="t";; pick=15}
else if(xmore==0 && xless>10 && xstart>=20 && form1=="q"){document.getElementById("prediction").innerHTML="t";; pick=15}
else if(form1=="i" && xstart>30 && ssetx-xarray[Math.round(xarray.length/2)]<0){document.getElementById("prediction").innerHTML="h"; pick=16}
else if(ystart<=40 && setx-ssetx>30 && downtime==1 && (setx-ssetx)>(ssety-yarray[Math.round(yarray.length/2)]) && yarray[Math.round(yarray.length/4)]-yarray[Math.round(yarray.length/2)]<0){document.getElementById("prediction").innerHTML="m"; pick=17}
else if(ystart<=40 && ssety-yarray[Math.round(yarray.length/2)]>30 && downtime==1 && ssetx-xarray[Math.round(xarray.length/2.5)]<=-5){document.getElementById("prediction").innerHTML="n"; pick=18}
else if(downtime==1 && ssetx-setx<-30 && ssety-yarray[Math.round(yarray.length/3)]>0 && ssety-sety<0){document.getElementById("prediction").innerHTML="e"; pick=19}
else if(xstart>50 && sety-ssety>50 && downtime==1 && ssetx-xarray[(Math.round(xarray.length/3)+Math.round(xarray.length/3))]<30 && setx-xarray[Math.round(xarray.length/3)]<30){document.getElementById("prediction").innerHTML="z"; pick=2; form2="j"; xoffset=ssetx;}
else if(downtime==1 && ssetx-setx>30 && ssetx-xarray[Math.round(xarray.length/4)]>30 && ssety-sety<0){document.getElementById("prediction").innerHTML="s"; pick=20}
else if(ymore<=20 && yless>10 && xstart>=30 && downtime==1 && ssetx-setx>30){document.getElementById("prediction").innerHTML="j"; pick=21;form2="j"; xoffset=ssetx;}
else if(ymore>10 && yless<=20 && xstart>=30 && downtime==1 && ssety-sety>10){document.getElementById("prediction").innerHTML="r"; form1="r"; pick=22}
else if(ymore<=10 && yless>10 && xstart>=30 && downtime==1 && ssety-sety<-10){document.getElementById("prediction").innerHTML="l"; form1="l"; xoffset=setx; pick=23}
else if(xmore<=25 && yless>10 && ymore>=5 && downtime==1){ form1="q";; pick=77}
else if(form1=="l" && ymore<=20 && yless>10 && xstart>=30 && ssetx-setx>30 && xoffset-ssetx>-30){document.getElementById("prediction").innerHTML="x"; pick=24}
else if(form1=="l" && ymore<=20 && yless>10 && xstart>=30 && ssetx-setx>30 && xoffset-ssetx<-30){document.getElementById("prediction").innerHTML="y"; pick=25}
else if(form2=="j" && ymore<=10 && yless>10 && xstart>=30 && ssety-sety<-10 && xoffset-setx<30){document.getElementById("prediction").innerHTML="x"; pick=24}
else if(form2=="j" && ymore<=10 && yless>10 && xstart>=30 && ssety-sety<-10 && xoffset-setx>30){document.getElementById("prediction").innerHTML="y"; pick=25}
else if(form1=="q" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]>0){document.getElementById("prediction").innerHTML="q";; pick=14}
else if(xless>5 && xmore<=2 && form1=="r"){document.getElementById("prediction").innerHTML="f"; pick=26}
else if(xless<=2 && xmore>5 && form1=="r"){document.getElementById("prediction").innerHTML="f"; pick=26}
else{document.getElementById("prediction").innerHTML="unknown"}}
else{if(subl<=30 && subm<=30 && xmore>0 && xless>0 && yless>0 && ymore>0 && xstart<=30 && ystart<=30 && downtime==1){document.getElementById("prediction").innerHTML="O"; form1="o"; pick=1}
else if(form1=="o" && xmore<=3){document.getElementById("prediction").innerHTML="A"; pick=3}
else if(form1=="o" && xless<=3){document.getElementById("prediction").innerHTML="G"; pick=4}
else if(xstart<=40 && ssetx-xarray[Math.round(xarray.length/2)]>30 && downtime==1){document.getElementById("prediction").innerHTML="C"; pick=5}
else if(ystart<=40 && ssety-yarray[Math.round(yarray.length/2)]<-30 && downtime==1 && ssetx-xarray[Math.round(xarray.length/5)]>=-5){document.getElementById("prediction").innerHTML="U"; pick=6}
else if(ystart<=40 && setx-ssetx>30 && downtime==1 && yarray[Math.round(yarray.length/2)]-ssety<=50 && yarray[Math.round(yarray.length/2)]-ssety>0 && yarray[Math.round(yarray.length/4)]-yarray[Math.round(yarray.length/2)]>0){document.getElementById("prediction").innerHTML="W"; pick=7}
else if(ystart<=40 && ssety-yarray[Math.round(yarray.length/2)]<-30 && downtime==1){document.getElementById("prediction").innerHTML="V"; pick=8}
else if(ymore<=10 && yless>10 && xstart<20 && downtime==1){document.getElementById("prediction").innerHTML="I"; form1="i"; yoffset=sety; xoffset=setx; pick=9}
else if(form1=="i" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]<0 && yoffset-sety<=40){document.getElementById("prediction").innerHTML="B"; pick=10}
else if(form1=="i" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]<0 && yoffset-sety>=40){document.getElementById("prediction").innerHTML="P"; pick=11}
else if(form1=="i" && xstart<=40 && ssetx-xarray[Math.round(xarray.length/2)]>30 && yoffset-yarray[Math.round(yarray.length/2)]>40){document.getElementById("prediction").innerHTML="K"; pick=12}
else if(form1=="i" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]>0 && yoffset-sety<=40){document.getElementById("prediction").innerHTML="D"; pick=13}
else if(form1=="i" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]>0 && yoffset-sety>40){document.getElementById("prediction").innerHTML="Q"; pick=14}
else if(xmore==0 && xless>10 && xstart>=20 && form1=="l"){document.getElementById("prediction").innerHTML="T";; pick=15}
else if(xmore==0 && xless>10 && xstart>=20 && form1=="q"){document.getElementById("prediction").innerHTML="T";; pick=15}
else if(form1=="i" && xstart>30 && ssetx-xarray[Math.round(xarray.length/2)]<0){document.getElementById("prediction").innerHTML="H"; pick=16}
else if(ystart<=40 && setx-ssetx>30 && downtime==1 && (setx-ssetx)>(ssety-yarray[Math.round(yarray.length/2)]) && yarray[Math.round(yarray.length/4)]-yarray[Math.round(yarray.length/2)]<0){document.getElementById("prediction").innerHTML="M"; pick=17}
else if(ystart<=40 && ssety-yarray[Math.round(yarray.length/2)]>30 && downtime==1 && ssetx-xarray[Math.round(xarray.length/2.5)]<=-5){document.getElementById("prediction").innerHTML="N"; pick=18}
else if(downtime==1 && ssetx-setx<-30 && ssety-yarray[Math.round(yarray.length/3)]>0 && ssety-sety<0){document.getElementById("prediction").innerHTML="E"; pick=19}
else if(xstart>50 && sety-ssety>50 && downtime==1 && ssetx-xarray[(Math.round(xarray.length/3)+Math.round(xarray.length/3))]<30 && setx-xarray[Math.round(xarray.length/3)]<30){document.getElementById("prediction").innerHTML="Z"; pick=2; form2="j"; xoffset=ssetx;}
else if(downtime==1 && ssetx-setx>30 && ssetx-xarray[Math.round(xarray.length/4)]>30 && ssety-sety<0){document.getElementById("prediction").innerHTML="S"; pick=20}
else if(ymore<=20 && yless>10 && xstart>=30 && downtime==1 && ssetx-setx>30){document.getElementById("prediction").innerHTML="J"; pick=21;form2="j"; xoffset=ssetx;}
else if(ymore>10 && yless<=20 && xstart>=30 && downtime==1 && ssety-sety>10){document.getElementById("prediction").innerHTML="R"; form1="r"; pick=22}
else if(ymore<=10 && yless>10 && xstart>=30 && downtime==1 && ssety-sety<-10){document.getElementById("prediction").innerHTML="L"; form1="l"; xoffset=setx; pick=23}
else if(xmore<=25 && yless>10 && ymore>=5 && downtime==1){ form1="q";; pick=77}
else if(form1=="l" && ymore<=20 && yless>10 && xstart>=30 && ssetx-setx>30 && xoffset-ssetx>-30){document.getElementById("prediction").innerHTML="X"; pick=24}
else if(form1=="l" && ymore<=20 && yless>10 && xstart>=30 && ssetx-setx>30 && xoffset-ssetx<-30){document.getElementById("prediction").innerHTML="Y"; pick=25}
else if(form2=="j" && ymore<=10 && yless>10 && xstart>=30 && ssety-sety<-10 && xoffset-setx<30){document.getElementById("prediction").innerHTML="X"; pick=24}
else if(form2=="j" && ymore<=10 && yless>10 && xstart>=30 && ssety-sety<-10 && xoffset-setx>30){document.getElementById("prediction").innerHTML="Y"; pick=25}
else if(form1=="q" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]>0){document.getElementById("prediction").innerHTML="Q";; pick=14}
else if(xless>5 && xmore<=2 && form1=="r"){document.getElementById("prediction").innerHTML="F"; pick=26}
else if(xless<=2 && xmore>5 && form1=="r"){document.getElementById("prediction").innerHTML="F"; pick=26}
else{document.getElementById("prediction").innerHTML="unknown"}}

if((setx-ssetx)>200 && ymore<=15 && xmore<=15 && yless<=15){document.getElementById("prediction").innerHTML="space"}

if(document.getElementById("prediction").innerHTML=="v"){document.getElementById("prediction2").innerHTML="u"; }
else if(document.getElementById("prediction").innerHTML=="u"){document.getElementById("prediction2").innerHTML="v"; }
else if(document.getElementById("prediction").innerHTML=="x"){document.getElementById("prediction2").innerHTML="y"; }
else if(document.getElementById("prediction").innerHTML=="y"){document.getElementById("prediction2").innerHTML="x"; }
else{document.getElementById("prediction2").innerHTML=" "}

console.log(subl+"less more"+subm)
console.log(Math.round(xoffset)+" this that "+Math.round(setx))
console.log(form1)

setTimeout(() => {
if(drawing==false){ downtime=0; form1=""; xoffset=""; yoffset="" ; form2=""
if(document.getElementById("prediction").innerHTML!="unknown"){
  if(document.getElementById("prediction").innerHTML=="space"){insertAtCursor(document.getElementById("preview"), " ") }
else{insertAtCursor(document.getElementById("preview"), document.getElementById("prediction").innerHTML)  }

};}
}, 500);
setTimeout(() => {
if(drawing==false){ctx.clearRect(0, 0, canvas.width, canvas.height); 
}
}, 1000);
  });

  canvas.addEventListener("pointerleave", () => {
    drawing = false;

  });

document.getElementById("caps").addEventListener("click", ()=>{
if(caps==false){caps=true; document.getElementById("caps").style.backgroundColor="rgba(62, 62, 62, 1)";
  document.getElementById("caps").style.color="rgba(255, 255, 255, 1)"
}
else{caps=false; document.getElementById("caps").style.backgroundColor="rgba(244, 244, 244, 1)"
  document.getElementById("caps").style.color="rgba(0, 0, 0, 1)"
}
})
document.getElementById("cnl").addEventListener("click", ()=>{
delatcursor(document.getElementById("preview"))
})
document.getElementById("aux1").addEventListener("contextmenu", (e)=>{e.preventDefault()})
document.getElementById("aux1").addEventListener("click", ()=>{; document.getElementById("aux1in").blur(); 
  if(caps==false){insertAtCursor(document.getElementById("preview"), document.getElementById("aux1in").value) }
else{insertAtCursor(document.getElementById("preview"), document.getElementById("aux1in").value.toUpperCase())}})
document.getElementById("aux1").addEventListener("auxclick", ()=>{; document.getElementById("aux1in").focus()})
document.getElementById("aux2").addEventListener("contextmenu", (e)=>{e.preventDefault()})
document.getElementById("aux2").addEventListener("click", ()=>{; document.getElementById("aux2in").blur();  
if(caps==false){insertAtCursor(document.getElementById("preview"), document.getElementById("aux2in").value)}
else{insertAtCursor(document.getElementById("preview"), document.getElementById("aux1in").value.toUpperCase())}})
document.getElementById("aux2").addEventListener("auxclick", ()=>{; document.getElementById("aux2in").focus()})
document.getElementById("aux1").addEventListener("input", ()=>{localStorage.setItem("handwrittingaux1", document.getElementById("aux1in").value)})
document.getElementById("aux2").addEventListener("input", ()=>{localStorage.setItem("handwrittingaux2", document.getElementById("aux2in").value)})
document.getElementById("aux1in").value=localStorage.getItem("handwrittingaux1")
document.getElementById("aux2in").value=localStorage.getItem("handwrittingaux2")

document.getElementsByTagName("body").item(0).addEventListener("click", ()=>{
document.getElementById("signbx").style.display="none"
})

document.getElementById("sign").addEventListener("click", (e)=>{e.stopPropagation()
document.getElementById("signbx").style.display="flex"
document.getElementById("preview").focus()
})
document.getElementById("signbx").addEventListener("click", (e)=>{e.stopPropagation()
})
for (let index = 0; index < 27; index++) {
document.getElementsByClassName("sign").item(index).addEventListener("click", ()=>{
  insertAtCursor(document.getElementById("preview"), document.getElementsByClassName("sign").item(index).innerText)
})
}
document.getElementById("copy").addEventListener("click", ()=>{
document.getElementById("copy").innerHTML="copied text!!"
let text = document.getElementById("preview").value
  navigator.clipboard.writeText(text)
    .then(() => {
    console.log("Text copied to clipboard!");
  })
  .catch((err) => {
    console.error("Failed to copy: ", err);
  });
setTimeout(() => {
 document.getElementById("copy").innerHTML="copy text"
}, 2000);
})


function insertAtCursor(el, text) {
  const start = el.selectionStart;
  const end = el.selectionEnd;
  const before = el.value.substring(0, start);
  const after = el.value.substring(end);
  el.value = before + text + after;
  el.selectionStart = el.selectionEnd = start + text.length; // keep cursor after inserted text

}
function delatcursor(el) {
  const start = el.selectionStart;
  const end = el.selectionEnd;
  const before = el.value.substring(0, start-1);
  const after = el.value.substring(end);
  el.value = before + after;
  el.selectionStart = el.selectionEnd = start-1; // keep cursor after inserted text

}


//draw

const drawctx = drawcanvas.getContext('2d');
 let spraying = false;
let sprayInterval;
let drawing2 = false;
let colorarray = []
let brushmode = "";
drawctx.lineWidth =  Number(document.getElementById("thickness").value)
let  brushWidth =  Number(document.getElementById("thickness").value);
let density =  (Number(document.getElementById("thickness").value)*1.5);
let radius =  Number(document.getElementById("thickness").value);
 drawctx.strokeStyle = document.getElementById("color").value
drawctx.lineCap = 'round';
  drawctx.lineJoin = 'round';
document.getElementById("brushes").addEventListener("focusout", ()=>{
brushmode=document.getElementById("brushes").value
})
  // Brush settings 
document.getElementById("thickness").addEventListener("focusout", ()=>{
if(document.getElementById("thickness").value==""){document.getElementById("thickness").value=2}
drawctx.lineWidth =  Number(document.getElementById("thickness").value)
 brushWidth =  Number(document.getElementById("thickness").value);
  density =  (Number(document.getElementById("thickness").value)*1.5);
 radius =  Number(document.getElementById("thickness").value);
})
document.getElementById("color").addEventListener("focusout", ()=>{
   drawctx.strokeStyle = document.getElementById("color").value
   console.log( document.getElementById("color").value)
   colorarray[colorarray.length]=document.getElementById("color").value
   document.getElementsByClassName("colorpalet").item(colorarray.length-1).style.backgroundColor=document.getElementById("color").value
   if(colorarray.length==10){colorarray=[]}
})
for (let index = 0; index < 10; index++) {
 document.getElementsByClassName("colorpalet").item(index).addEventListener("click", ()=>{
 document.getElementById("color").value = rgbStringToHex(document.getElementsByClassName("colorpalet").item(index).style.backgroundColor)
 }) 
}

document.getElementById("opacity").addEventListener("focusout", ()=>{
if( Number(document.getElementById("opacity").value)>1){window.alert("cant be more than 1");
 document.getElementById("opacity").value=1
}
})
document.getElementById("undo").addEventListener("click", ()=>{
undo()
})
document.getElementById("redo").addEventListener("click", ()=>{
redo()
})
document.getElementById("eraser").addEventListener("click", ()=>{brushmode="clean"
setEraser()
})
document.getElementById("bucket").addEventListener("click", ()=>{brushmode="fill"

})
function setEraser() {
  drawctx.globalCompositeOperation = 'destination-out';
  drawctx.lineWidth = Number(document.getElementById("thickness").value)+1; // eraser size
  drawctx.strokeStyle = 'rgba(0,0,0,1)'; // color doesn't matter here
}

drawcanvas.addEventListener('click', (e) => {saveState()
 if(brushmode=="fill"){ const rect = drawcanvas.getBoundingClientRect();
  const x = Math.floor(e.clientX - rect.left);
  const y = Math.floor(e.clientY - rect.top);
  fastFillAt(x, y, document.getElementById("color").value); // fast fill
  drawctx.beginPath();}
});

function fastFillAt(x, y, fillHex) {
  const fillColor = hexToRgba(fillHex);
  const imgData = drawctx.getImageData(0, 0, drawcanvas.width, drawcanvas.height);
  const data = imgData.data;
  const w = drawcanvas.width;
  const h = drawcanvas.height;

  const startIdx = (y * w + x) * 4;
  const startColor = [
    data[startIdx],
    data[startIdx + 1],
    data[startIdx + 2],
    data[startIdx + 3]
  ];

  if (colorsMatch(startColor, fillColor)) return;

  const queue = [x, y];
  const visited = new Uint8Array(w * h);

  while (queue.length) {
    const cx = queue.shift();
    const cy = queue.shift();
    const idx = (cy * w + cx);
    const i = idx * 4;

    if (visited[idx]) continue;
    visited[idx] = 1;

    const currentColor = [
      data[i], data[i + 1], data[i + 2], data[i + 3]
    ];

    if (!colorsMatch(currentColor, startColor)) continue;

    data[i] = fillColor[0];
    data[i + 1] = fillColor[1];
    data[i + 2] = fillColor[2];
    data[i + 3] = 255;

    if (cx + 1 < w) queue.push(cx + 1, cy);
if (cx - 1 >= 0) queue.push(cx - 1, cy);
    if (cy + 1 < h) queue.push(cx, cy + 1);
    if (cy - 1 >= 0) queue.push(cx, cy - 1);
  }

  drawctx.putImageData(imgData, 0, 0);
}

function hexToRgba(hex) {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  return [
    parseInt(hex.slice(0, 2), 16),
    parseInt(hex.slice(2, 4), 16),
    parseInt(hex.slice(4, 6), 16),
    255
  ];
}

function colorsMatch(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
let r = 0
let g = 0
let b = 0

function hexToRGB(hex) {
  // Remove "#" if present
  hex = hex.replace(/^#/, '');

  // Handle shorthand hex (e.g., #f0f)
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }

  if (hex.length !== 6) {
    throw new Error("Invalid HEX code");
  }

   r = parseInt(hex.slice(0, 2), 16);
   g = parseInt(hex.slice(2, 4), 16);
   b = parseInt(hex.slice(4, 6), 16);

}

drawcanvas.addEventListener('pointerdown', (e) => {saveState()
    drawing2 = true;
   if(brushmode!="clean"){ setBrush()}
  if(brushmode=="watercolor"){drawWaterStroke(e.offsetX, e.offsetY);}
  else if(brushmode=="pencil"){
  drawctx.beginPath();
  drawctx.moveTo(e.offsetX, e.offsetY);}
  else if(brushmode=="brush"){drawctx.beginPath();
  drawctx.moveTo(e.offsetX, e.offsetY);}
else if(brushmode=="marker"){  drawctx.lineCap = 'round';drawctx.globalAlpha=Number(document.getElementById("opacity").value)
  drawctx.lineJoin = 'round';
 drawctx.strokeStyle = 'rgba('+r+', '+g+', '+b+', 0.1)'
drawctx.beginPath();
  drawctx.moveTo(e.offsetX, e.offsetY);}
else if(brushmode=="caligraphy"){[lastX, lastY] = [e.offsetX, e.offsetY];}
else if(brushmode=="spraycan"){ sprayAt(e.offsetX, e.offsetY); spraying=true
 sprayInterval = setInterval(() => sprayAt(e.offsetX, e.offsetY), 50);}
 else if(brushmode=="highlight"){drawctx.beginPath();
  drawctx.moveTo(e.offsetX, e.offsetY);}
else if(brushmode=="clean"){
  drawctx.beginPath();
  drawctx.moveTo(e.offsetX, e.offsetY);
}
});
function setBrush() {
  drawctx.globalCompositeOperation = 'source-over';
  drawctx.strokeStyle = document.getElementById("color").value;
  drawctx.lineWidth = Number(document.getElementById("thickness").value);
  hexToRGB(document.getElementById("color").value)
}

drawcanvas.addEventListener('pointermove', (e) => {
    if (!drawing2) return;
  if(brushmode=="watercolor"){ drawWaterStroke(e.offsetX, e.offsetY);}
else if(brushmode=="pencil"){  // Pencil effect
  drawctx.strokeStyle = 'rgba('+r+', '+g+', '+b+', 0.2)'; // semi-transparent gray
  drawctx.lineCap = 'round';

  // Slight jitter for texture
  const jitterX = (Math.random() - 0.5) * 1.5;
  const jitterY = (Math.random() - 0.5) * 1.5;
  
  drawctx.lineTo(e.offsetX + jitterX, e.offsetY + jitterY);
  drawctx.stroke();
  drawctx.beginPath();
  drawctx.moveTo(e.offsetX + jitterX, e.offsetY + jitterY);}
else if(brushmode=="brush"){    drawctx.lineTo(e.offsetX, e.offsetY);
    drawctx.stroke();}
else if(brushmode=="marker"){drawctx.lineTo(e.offsetX, e.offsetY);
    drawctx.stroke();}
else if(brushmode=="caligraphy"){  const x = e.offsetX;
  const y = e.offsetY;
  //  Calculate brush width vector (angled)
  brushWidth =  Number(document.getElementById("thickness").value);
  const dx = brushWidth * Math.cos(angle);
  const dy = brushWidth * Math.sin(angle);

  drawctx.beginPath();
  drawctx.moveTo(lastX - dx, lastY - dy);
  drawctx.lineTo(x - dx, y - dy);
  drawctx.lineTo(x + dx, y + dy);
  drawctx.lineTo(lastX + dx, lastY + dy);
  drawctx.closePath();
  drawctx.fillStyle = document.getElementById("color").value;
  drawctx.fill();
[lastX, lastY] = [x, y];
}
else if(brushmode=="spraycan"){  if (spraying) sprayAt(e.offsetX, e.offsetY);}
else if(brushmode=="highlight"){setNeon(); drawctx.lineTo(e.offsetX, e.offsetY);
    drawctx.stroke();}
else if(brushmode=="clean"){
   drawctx.lineTo(e.offsetX, e.offsetY);
    drawctx.stroke();
}
});
document.addEventListener("keydown", (e)=>{
let key = e.key;  
if(key=="AltGraph"){
document.addEventListener("keydown", (e)=>{let key2 = e.key
  if(key2=="t"){document.getElementById("thickness").focus()
  document.getElementById("thickness").value=""}
if(key2=="l"){
if(locked==false){locked=true; document.getElementById("drawbx").style.width="100px"; document.getElementById("drawbx").style.height="20px"}
else{locked=false;document.getElementById("drawbx").style.width="750px"
document.getElementById("drawbx").style.height="100px"}
}})}

})
drawcanvas.addEventListener('pointerup', () => {drawing2 = false;   clearInterval(sprayInterval); spraying=false; 
      drawctx.shadowBlur = 0;
    drawctx.globalAlpha = 1; }
);
drawcanvas.addEventListener('pointerleave', () => {drawing2 = false;   clearInterval(sprayInterval); spraying=false; 
      drawctx.shadowBlur = 0;
    drawctx.globalAlpha = 1; 
});
  function setNeon() {
    drawctx.strokeStyle = document.getElementById("color").value;
    drawctx.shadowColor = document.getElementById("color").value;
    drawctx.shadowBlur = 15;
    drawctx.globalAlpha = 0.4; // adjust for stroke stacking
  }
  function drawWaterStroke(x, y) {
    const size = 30;

    // Create radial gradient to simulate watercolor fade
    const gradient = drawctx.createRadialGradient(x, y, 0, x + size * 0.3, y + size * 0.3, size);
    gradient.addColorStop(0, 'rgba('+r+', '+g+', '+b+', 0.25)');
    gradient.addColorStop(1, 'rgba('+r+', '+g+', '+b+', 0)');

    drawctx.fillStyle = gradient;
    drawctx.beginPath();
    drawctx.arc(x, y, size, 0, Math.PI * 2);
drawctx.fill();
  }
function sprayAt(x, y) {
  for (let i = 0; i < density; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const r = Math.random() * radius;
    const offsetX = Math.cos(angle) * r;
    const offsetY = Math.sin(angle) * r;
    drawctx.fillStyle = 'rgba('+r+', '+g+', '+b+', 0.1)';
    drawctx.beginPath();
 drawctx.arc(x + offsetX, y + offsetY, 1.5, 0, 2 * Math.PI);
    drawctx.fill();
  }
}
let locked = false
document.getElementById("lock").addEventListener("click", (e)=>{e.stopPropagation()
if(locked==false){locked=true; document.getElementById("drawbx").style.width="100px"; document.getElementById("drawbx").style.height="20px"}
else{locked=false;}
document.getElementById("drawbx").addEventListener("click", ()=>{
document.getElementById("drawbx").style.width="750px"
document.getElementById("drawbx").style.height="100px"
})
})

document.getElementById("clear").addEventListener("click", ()=>{
drawctx.clearRect(0, 0, drawcanvas.width, drawcanvas.height)
})
document.getElementById("savedraw").addEventListener("click", ()=>{downloadCanvas("drawcanvas")})
function downloadCanvas(canvasId, filename = 'sketch.png') {
  const merged = document.createElement('canvas');
  merged.width = drawcanvas.width;
  merged.height = drawcanvas.height;
  const mergedCtx = merged.getContext('2d');

  mergedCtx.drawImage(bgcanvas, 0, 0);
  mergedCtx.drawImage(drawcanvas, 0, 0);

  const link = document.createElement('a');
  link.href = merged.toDataURL('image/png');
  link.download = filename;
  link.click();
}
document.getElementById("css").addEventListener("focusout", ()=>{
if(document.getElementById("css").value.includes("gradient")){
let array = document.getElementById("css").value.split(".")
let colorStart = array[0].slice(9, )
let colorEnd = array[1].slice(0, (array[1].length-1))
  const gradient = bgctx.createLinearGradient(0, 0, bgcanvas.width, bgcanvas.height);
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);

  bgctx.fillStyle = gradient;
  bgctx.fillRect(0, 0, bgcanvas.width, bgcanvas.height);

}
else if(document.getElementById("css").value=="clear"){
bgctx.clearRect(0, 0, bgcanvas.width, bgcanvas.height)
}
else {
  const bg = new Image();
  bg.crossOrigin = "anonymous"; // if loading from another domain
  bg.onload = () => {
    bgctx.drawImage(bg, 0, 0, drawcanvas.width, drawcanvas.height);
  };
  bg.src = document.getElementById("css").value;
}
})

const undoStack = [];
const redoStack = [];

function saveState() {
  undoStack.push(drawctx.getImageData(0, 0, drawcanvas.width, drawcanvas.height));
  // Clear redo stack on new action
  redoStack.length = 0;
}

function undo() {
  if (undoStack.length > 0) {
    redoStack.push(drawctx.getImageData(0, 0, drawcanvas.width, drawcanvas.height));
    const previous = undoStack.pop();
    drawctx.putImageData(previous, 0, 0);
  }
}

function redo() {
  if (redoStack.length > 0) {
    undoStack.push(drawctx.getImageData(0, 0, drawcanvas.width, drawcanvas.height));
    const next = redoStack.pop();
    drawctx.putImageData(next, 0, 0);
  }
}
function rgbStringToHex(rgbStr) {
  const [r, g, b] = rgbStr
    .replace(/[^\d,]/g, '')
    .split(',')
    .map(Number);

  return (
    "#" +
    [r, g, b]
      .map(val => val.toString(16).padStart(2, '0'))
      .join('')
  );
}
//test
let test = false
let score = 0
let btnadd = 0
let rangeadd = 0
let txtadd = 0
let timing = 0
setInterval(() => {if(test==1 || test==2){
timing=timing+1
document.getElementById("timing").innerText=timing}
}, 1000);
document.getElementById("test1").addEventListener("click", ()=>{
if(test!=1){document.getElementById("testbx1").style.display="flex"; document.getElementById("result").style.display="none"; timing=0
document.getElementById("test1").innerHTML="stop test";test=1;let no = 0; score=0; btnadd = 0; txtadd=0; rangeadd=0
document.getElementsByClassName("tips").item(0).innerHTML="tap the button only once, once it lights up"
window.alert("test has started follow each instruction (the more accurate you are the more accurate your readings)")
let inter = setInterval(() => {
document.getElementById("testbtn").style.backgroundColor="rgba(209, 5, 5, 0.829)" 
setTimeout(() => {no=no+1
document.getElementById("testbtn").innerHTML=no
document.getElementById("test1").addEventListener("click", ()=>{
clearInterval(inter)
document.getElementById("testbtn").style.backgroundColor="rgba(209, 5, 5, 0.829)"
document.getElementById("testbtn").innerText=0 
})
if(no==6){clearInterval(inter); document.getElementById("testbx1").style.display="none"; document.getElementById("testbx2").style.display="flex"; document.getElementById("testbtn").innerText=score}
document.getElementById("testbtn").style.backgroundColor="rgba(255, 6, 14, 0.829)"  
}, 2000);
}, 4000);
document.getElementById("test2").style.display="none"
}
else{test=0
document.getElementById("testbx2").style.display="none"; document.getElementById("result").style.display="flex";
document.getElementById("testbx1").style.display="none"; document.getElementById("testbx3").style.display="none";
document.getElementsByTagName("span").item(0).innerHTML="not calibrated"
document.getElementsByTagName("span").item(1).innerHTML="not calibrated"
document.getElementById("test2").style.display="block"
document.getElementById("test2").innerHTML="normal test"
document.getElementById("test1").innerHTML="quick test"
}
})
document.getElementById("test2").addEventListener("click", ()=>{
if(test!=2){document.getElementById("testbx1").style.display="flex"; document.getElementById("result").style.display="none";
document.getElementById("test2").innerHTML="stop test";test=2;let no = 0; score=0; btnadd = 0; txtadd=0; rangeadd=0; timing=0
document.getElementsByClassName("tips").item(0).innerHTML="tap the button only once, once it lights up"
window.alert("test has started follow each instruction (the more accurate you are the more accurate your readings)")
let inter = setInterval(() => {
document.getElementById("testbtn").style.backgroundColor="rgba(209, 5, 5, 0.829)" 
setTimeout(() => {no=no+1
document.getElementById("testbtn").innerHTML=no
document.getElementById("test1").addEventListener("click", ()=>{
clearInterval(inter)
document.getElementById("testbtn").style.backgroundColor="rgba(209, 5, 5, 0.829)"
document.getElementById("testbtn").innerText=0 
})
if(no==11){clearInterval(inter); document.getElementById("testbx1").style.display="none"; document.getElementById("testbx2").style.display="flex"; document.getElementById("testbtn").innerText=score}
document.getElementById("testbtn").style.backgroundColor="rgba(255, 6, 14, 0.829)"  
}, 2000);
}, 4000);
document.getElementById("test1").style.display="none"
}
else{test=0
document.getElementById("testbx2").style.display="none"; document.getElementById("result").style.display="flex";
document.getElementById("testbx1").style.display="none"; document.getElementById("testbx3").style.display="none";
document.getElementsByTagName("span").item(0).innerHTML="not calibrated"
document.getElementsByTagName("span").item(1).innerHTML="not calibrated"
document.getElementById("test1").style.display="block"
document.getElementById("test1").innerHTML="quick test"
document.getElementById("test2").innerHTML="normal test"
}
})
document.getElementById("testbtn").addEventListener("click", ()=>{
btnadd=btnadd+1
if(btnadd>5 && test==1){window.alert("calibration failed: err: clicks()"); document.getElementById("test1").click()}
else if(btnadd>10 && test==2){window.alert("calibration failed"); document.getElementById("test2").click()}
})
let addplus = 0

setInterval(() => {
addplus=addplus+1
if(addplus==100){addplus=0}
document.getElementById("testslider").value=addplus
}, 25);
document.getElementById("testrange").addEventListener("pointerup", ()=>{
if(document.getElementById("testrange").value==100){setTimeout(() => {document.getElementById("testrange").value=0}, 1000);score=score+1; document.getElementById("rangescore").innerHTML=score}
else{document.getElementById("testrange").value=0; rangeadd=rangeadd+1}
if(score==3 && test==1){setTimeout(() => { if(test==2){document.getElementById("testbx2").style.display="none"; document.getElementById("testbx3").style.display="flex"}
else{document.getElementById("testbx2").style.display="none"; document.getElementById("result").style.display="flex"; result()}; document.getElementById("rangescore").innerHTML=0}, 1000);}
else if(score==5 && test==2){setTimeout(() => { if(test==2){document.getElementById("testbx2").style.display="none"; document.getElementById("testbx3").style.display="flex"}
else{document.getElementById("testbx2").style.display="none"; document.getElementById("result").style.display="flex"; result()}; document.getElementById("rangescore").innerHTML=0}, 1000);}
})


for (let index = 0; index < 26; index++) {
document.getElementsByClassName("key").item(index).addEventListener("click", ()=>{
txtadd=txtadd+1
document.getElementById("displaytxt").innerHTML=document.getElementById("displaytxt").innerHTML+document.getElementsByClassName("key").item(index).innerText

let array = document.getElementById("displaytxt").innerHTML.split("")
let check = 0
if(array.includes("t")){check=check+1}
if(array.includes("i")){check=check+1}
if(array.includes("m")){check=check+1}
if(array.includes("e")){check=check+1}
if(array.includes("l")){check=check+1}
if(array.includes("a")){check=check+1}
if(array.includes("n")){check=check+1}
if(array.includes("e")){check=check+1}
 if(check==8){document.getElementById("testbx3").style.display="none";
  document.getElementById("result").style.display="flex";result();document.getElementById("displaytxt").innerHTML=""
 }
console.log(check + array)
})
}

function result() {
let date = new Date
date=date.toString().slice(0, 15)

if(test==1){let acc1 = (btnadd/5)*100
let acc2 = 100-((rangeadd/5)*100)
let acc3 = (acc2+acc1)/2
console.log(rangeadd+":"+acc2)
console.log(btnadd+":"+acc1)
document.getElementsByTagName("span").item(0).innerHTML=Math.round(acc3)+"%"
document.getElementsByTagName("span").item(1).innerHTML="not calibrated"
document.getElementById("test2").style.display="block"
document.getElementById("test2").innerHTML="normal test"
localStorage.setItem("styleaccuracy", acc3)
localStorage.setItem("lastdate", date)
document.getElementById("lastdate").innerHTML="last updated: "+localStorage.getItem("lastdate")
document.getElementsByTagName("span").item(2).innerHTML=Math.round(Number(localStorage.getItem("styleaccuracy")))
}
else if(test==2){let acc1 = (btnadd/10)*100
let acc2 = 100-((rangeadd/9)*100)
let acc4 = 1-((txtadd-8)/8)
if(acc4<0){acc4=0}
let acc3 = (acc2+acc1)/2
document.getElementsByTagName("span").item(0).innerHTML=Math.round(acc3)+"%"
document.getElementsByTagName("span").item(1).innerHTML=acc4
document.getElementById("test1").style.display="block"
document.getElementById("test1").innerHTML="quick test"
localStorage.setItem("styleaccuracy", acc3)
localStorage.setItem("styleprecision", acc4)
localStorage.setItem("lastdate", date)
document.getElementById("lastdate").innerHTML="last updated: "+localStorage.getItem("lastdate")
document.getElementsByTagName("span").item(2).innerHTML=Math.round(Number(localStorage.getItem("styleaccuracy")))
document.getElementsByTagName("span").item(3).innerHTML=localStorage.getItem("styleprecision")
}
test=0}

if(localStorage.getItem("lastdate")!=null){document.getElementById("lastdate").innerHTML="last updated: "+localStorage.getItem("lastdate")}
if(localStorage.getItem("styleaccuracy")!=null){document.getElementsByTagName("span").item(2).innerHTML=Math.round(Number(localStorage.getItem("styleaccuracy")))}
if(localStorage.getItem("styleprecision")!=null){document.getElementsByTagName("span").item(3).innerHTML=localStorage.getItem("styleprecision")}

//note
document.getElementById("noteimg").addEventListener("click", ()=>{
  document.getElementById("write").style.display="none"
    document.getElementById("draw").style.display="none"
      document.getElementById("notes").style.display="flex"
        document.getElementById("test").style.display="none"
editing=false
})

if(sessionStorage.getItem("reloadedpage")=="true"){document.getElementById("noteimg").click()
  sessionStorage.setItem("reloadedpage", "false")
}


document.getElementById("add").addEventListener("click", ()=>{
if(document.getElementById("new").style.display=="none"){ document.getElementById("new").style.display="flex"
  document.getElementById("notetext").style.display="flex"
  document.getElementById("add").style.rotate="45deg"}
else{
  document.getElementById("new").style.display="none"
  document.getElementById("notetext").style.display="none"
    document.getElementById("add").style.rotate="0deg"
}

})
let editing = false
let notearray = localStorage.getItem("stylenotename")
let contentarray = localStorage.getItem("stylenotecontent")
if(notearray==null){notearray=[]; contentarray=[]}
else{notearray=notearray.split(","); contentarray=contentarray.split(",")}

document.getElementById("notesave").addEventListener("click", ()=>{
if(document.getElementById("notename").value!=""){
notearray[notearray.length]=document.getElementById("notename").value.replaceAll(",", "/?/")
contentarray[contentarray.length]=document.getElementById("notetext").value.replaceAll(",", "/?/")
localStorage.setItem("stylenotename", notearray)
localStorage.setItem("stylenotecontent", contentarray)
sessionStorage.setItem("reloadedpage", "true")
location.reload()}
})
console.log(notearray)
console.log(contentarray)
let current = 0
for (let index = 0; index < notearray.length; index++) {
if(notearray[index]!=""){
let create = document.createElement("div")
create.className="notebx"
let create2 = document.createElement("h3")
create2.innerHTML=notearray[index].replaceAll("/?/", ",")
let create3 = document.createElement("p")
create3.className="detail"
if(contentarray[index]!=""){create3.innerHTML=contentarray[index].replaceAll("/?/", ",")}
else{create3.innerHTML="no content empty note"}
create.append(create2)
create.append(create3)
create.addEventListener("click", (e)=>{e.stopPropagation()})
document.getElementById("scroll").append(create)
create.addEventListener("click", ()=>{current=index
  document.getElementById("notetext").style.display="block"
   document.getElementById("noteh").style.display="block"
    document.getElementById("notetext").value=create3.innerHTML
  document.getElementById("notetext").addEventListener("input", ()=>{
if(document.getElementById("new").style.display!="flex"){  contentarray[current]=document.getElementById("notetext").value.replaceAll(",", "/?/")
  create3.innerHTML="no preview available"
  localStorage.setItem("stylenotecontent", contentarray)
  }  })  
})
create.addEventListener("auxclick", ()=>{
create.style.display="none"
notearray.splice(index, 1)
contentarray.splice(index, 1)
localStorage.setItem("stylenotename", notearray)
localStorage.setItem("stylenotecontent", contentarray)
sessionStorage.setItem("reloadedpage", "true")
location.reload()
})
create.addEventListener("contextmenu", (e)=>{e.preventDefault()})
}}
document.getElementById("noteh").addEventListener("click", ()=>{
document.getElementById("writeimg").click()
editing=true
document.getElementById("preview").value=contentarray[current].replaceAll("/?/", ",")
})
document.getElementById("save").addEventListener("click", ()=>{
if(editing==false){
document.getElementById("noteimg").click()
document.getElementById("new").style.display="flex"
  document.getElementById("add").style.rotate="45deg"
document.getElementById("notetext").value=document.getElementById("preview").value
document.getElementById("notetext").style.display="flex"
}
else{
contentarray[current]=document.getElementById("preview").value.replaceAll(",", "/?/")
localStorage.setItem("stylenotecontent", contentarray)
location.reload()
}
})
document.getElementById("notes").addEventListener("click", ()=>{
  document.getElementById("notetext").style.display="none"
   document.getElementById("noteh").style.display="none"
})
document.getElementById("new").addEventListener("click", (e)=>{e.stopPropagation()})
document.getElementById("add").addEventListener("click", (e)=>{e.stopPropagation()})
document.getElementById("notetext").addEventListener("click", (e)=>{e.stopPropagation()})

document.getElementById("writeimg").addEventListener("click", ()=>{
  document.getElementById("write").style.display="block"
    document.getElementById("draw").style.display="none"
      document.getElementById("notes").style.display="none"
        document.getElementById("test").style.display="none"
editing=false
})
document.getElementById("drawimg").addEventListener("click", ()=>{
  document.getElementById("write").style.display="none"
    document.getElementById("draw").style.display="block"
      document.getElementById("notes").style.display="none"
        document.getElementById("test").style.display="none"
editing=false
})
document.getElementById("testimg").addEventListener("click", ()=>{
  document.getElementById("write").style.display="none"
    document.getElementById("draw").style.display="none"
      document.getElementById("notes").style.display="none"
        document.getElementById("test").style.display="block"
editing=false
})

setInterval(() => {
if(editing==true){document.getElementById("save").innerText="save changes"}
else{{document.getElementById("save").innerText="save as note"}}
}, 1000);

document.getElementById("calib").addEventListener("click", ()=>{
location.href="/test.html"
localStorage.setItem("displayedtips", "true")
})
if(localStorage.getItem("displayedtips")!="true"){document.getElementById("blank").style.display="flex"}
