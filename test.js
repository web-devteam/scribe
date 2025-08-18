const canvas = document.getElementById("testcanvas");
  const ctx = canvas.getContext("2d");

  let drawing = false;
  let setx = 0
  let sety = 0
  let ssetx=0
  let ssety=0
  let xarray = []
  let video = document.getElementById("src")
  let add = 0
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
if(subl<=30 && subm<=30 && xmore>0 && xless>0 && yless>0 && ymore>0 && xstart<=30 && ystart<=30 && downtime==1){document.getElementById("prediction3").innerHTML="o"; form1="o"; check();pick=1}
else if(form1=="o" && xmore<=3){document.getElementById("prediction3").innerHTML="a"; check();pick=3}
else if(form1=="o" && xless<=3){document.getElementById("prediction3").innerHTML="g"; check();pick=4}
else if(xstart<=40 && ssetx-xarray[Math.round(xarray.length/2)]>30 && downtime==1){document.getElementById("prediction3").innerHTML="c"; check();pick=5}
else if(ystart<=40 && ssety-yarray[Math.round(yarray.length/2)]<-30 && downtime==1 && ssetx-xarray[Math.round(xarray.length/5)]>=-5){document.getElementById("prediction3").innerHTML="u"; check();pick=6}
else if(ystart<=40 && setx-ssetx>30 && downtime==1 && yarray[Math.round(yarray.length/2)]-ssety<=50 && yarray[Math.round(yarray.length/2)]-ssety>0 && yarray[Math.round(yarray.length/4)]-yarray[Math.round(yarray.length/2)]>0){document.getElementById("prediction3").innerHTML="w"; check();pick=7}
else if(ystart<=40 && ssety-yarray[Math.round(yarray.length/2)]<-30 && downtime==1){document.getElementById("prediction3").innerHTML="v"; check();pick=8}
else if(ymore<=10 && yless>10 && xstart<20 && downtime==1){document.getElementById("prediction3").innerHTML="i"; form1="i"; yoffset=sety; xoffset=setx; check();pick=9}
else if(form1=="i" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]<0 && yoffset-sety<=40){document.getElementById("prediction3").innerHTML="b"; check();pick=10}
else if(form1=="i" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]<0 && yoffset-sety>=40){document.getElementById("prediction3").innerHTML="p"; check();pick=11}
else if(form1=="i" && xstart<=40 && ssetx-xarray[Math.round(xarray.length/2)]>30 && yoffset-yarray[Math.round(yarray.length/2)]>40){document.getElementById("prediction3").innerHTML="k"; check();pick=12}
else if(form1=="i" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]>0 && yoffset-sety<=40){document.getElementById("prediction3").innerHTML="d"; check();pick=13}
else if(form1=="i" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]>0 && yoffset-sety>40){document.getElementById("prediction3").innerHTML="q"; check();pick=14}
else if(xmore==0 && xless>10 && xstart>=20 && form1=="l"){document.getElementById("prediction3").innerHTML="t";; check();pick=15}
else if(xmore==0 && xless>10 && xstart>=20 && form1=="q"){document.getElementById("prediction3").innerHTML="t";; check();pick=15}
else if(form1=="i" && xstart>30 && ssetx-xarray[Math.round(xarray.length/2)]<0){document.getElementById("prediction3").innerHTML="h"; check();pick=16}
else if(ystart<=40 && setx-ssetx>30 && downtime==1 && (setx-ssetx)>(ssety-yarray[Math.round(yarray.length/2)]) && yarray[Math.round(yarray.length/4)]-yarray[Math.round(yarray.length/2)]<0){document.getElementById("prediction3").innerHTML="m"; check();pick=17}
else if(ystart<=40 && ssety-yarray[Math.round(yarray.length/2)]>30 && downtime==1 && ssetx-xarray[Math.round(xarray.length/2.5)]<=-5){document.getElementById("prediction3").innerHTML="n"; check();pick=18}
else if(downtime==1 && ssetx-setx<-30 && ssety-yarray[Math.round(yarray.length/3)]>0 && ssety-sety<0){document.getElementById("prediction3").innerHTML="e"; check();pick=19}
else if(xstart>50 && sety-ssety>50 && downtime==1 && ssetx-xarray[(Math.round(xarray.length/3)+Math.round(xarray.length/3))]<30 && setx-xarray[Math.round(xarray.length/3)]<30){document.getElementById("prediction3").innerHTML="z"; check();pick=2; form2="j"; xoffset=ssetx;}
else if(downtime==1 && ssetx-setx>30 && ssetx-xarray[Math.round(xarray.length/4)]>30 && ssety-sety<0){document.getElementById("prediction3").innerHTML="s"; check();pick=20}
else if(ymore<=20 && yless>10 && xstart>=30 && downtime==1 && ssetx-setx>30){document.getElementById("prediction3").innerHTML="j"; check();pick=21;form2="j"; xoffset=ssetx;}
else if(ymore>10 && yless<=20 && xstart>=30 && downtime==1 && ssety-sety>10){document.getElementById("prediction3").innerHTML="r"; form1="r"; check();pick=22}
else if(ymore<=10 && yless>10 && xstart>=30 && downtime==1 && ssety-sety<-10){document.getElementById("prediction3").innerHTML="l"; form1="l"; xoffset=setx; check();pick=23}
else if(xmore<=25 && yless>10 && ymore>=5 && downtime==1){ form1="q";; check();pick=77}
else if(form1=="l" && ymore<=20 && yless>10 && xstart>=30 && ssetx-setx>30 && xoffset-ssetx>-30){document.getElementById("prediction3").innerHTML="x"; check();pick=24}
else if(form1=="l" && ymore<=20 && yless>10 && xstart>=30 && ssetx-setx>30 && xoffset-ssetx<-30){document.getElementById("prediction3").innerHTML="y"; check();pick=25}
else if(form2=="j" && ymore<=10 && yless>10 && xstart>=30 && ssety-sety<-10 && xoffset-setx<30){document.getElementById("prediction3").innerHTML="x"; check();pick=24}
else if(form2=="j" && ymore<=10 && yless>10 && xstart>=30 && ssety-sety<-10 && xoffset-setx>30){document.getElementById("prediction3").innerHTML="y"; check();pick=25}
else if(form1=="q" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]>0){document.getElementById("prediction3").innerHTML="q";; check();pick=14}
else if(xless>5 && xmore<=2 && form1=="r"){document.getElementById("prediction3").innerHTML="f"; check();pick=26}
else if(xless<=2 && xmore>5 && form1=="r"){document.getElementById("prediction3").innerHTML="f"; check();pick=26}
else{document.getElementById("prediction3").innerHTML="unknown"}}
else{if(subl<=30 && subm<=30 && xmore>0 && xless>0 && yless>0 && ymore>0 && xstart<=30 && ystart<=30 && downtime==1){document.getElementById("prediction3").innerHTML="O"; form1="o"; check();pick=1}
else if(form1=="o" && xmore<=3){document.getElementById("prediction3").innerHTML="A"; check();pick=3}
else if(form1=="o" && xless<=3){document.getElementById("prediction3").innerHTML="G"; check();pick=4}
else if(xstart<=40 && ssetx-xarray[Math.round(xarray.length/2)]>30 && downtime==1){document.getElementById("prediction3").innerHTML="C"; check();pick=5}
else if(ystart<=40 && ssety-yarray[Math.round(yarray.length/2)]<-30 && downtime==1 && ssetx-xarray[Math.round(xarray.length/5)]>=-5){document.getElementById("prediction3").innerHTML="U"; check();pick=6}
else if(ystart<=40 && setx-ssetx>30 && downtime==1 && yarray[Math.round(yarray.length/2)]-ssety<=50 && yarray[Math.round(yarray.length/2)]-ssety>0 && yarray[Math.round(yarray.length/4)]-yarray[Math.round(yarray.length/2)]>0){document.getElementById("prediction3").innerHTML="W"; check();pick=7}
else if(ystart<=40 && ssety-yarray[Math.round(yarray.length/2)]<-30 && downtime==1){document.getElementById("prediction3").innerHTML="V"; check();pick=8}
else if(ymore<=10 && yless>10 && xstart<20 && downtime==1){document.getElementById("prediction3").innerHTML="I"; form1="i"; yoffset=sety; xoffset=setx; check();pick=9}
else if(form1=="i" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]<0 && yoffset-sety<=40){document.getElementById("prediction3").innerHTML="B"; check();pick=10}
else if(form1=="i" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]<0 && yoffset-sety>=40){document.getElementById("prediction3").innerHTML="P"; check();pick=11}
else if(form1=="i" && xstart<=40 && ssetx-xarray[Math.round(xarray.length/2)]>30 && yoffset-yarray[Math.round(yarray.length/2)]>40){document.getElementById("prediction3").innerHTML="K"; check();pick=12}
else if(form1=="i" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]>0 && yoffset-sety<=40){document.getElementById("prediction3").innerHTML="D"; check();pick=13}
else if(form1=="i" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]>0 && yoffset-sety>40){document.getElementById("prediction3").innerHTML="Q"; check();pick=14}
else if(xmore==0 && xless>10 && xstart>=20 && form1=="l"){document.getElementById("prediction3").innerHTML="T";; check();pick=15}
else if(xmore==0 && xless>10 && xstart>=20 && form1=="q"){document.getElementById("prediction3").innerHTML="T";; check();pick=15}
else if(form1=="i" && xstart>30 && ssetx-xarray[Math.round(xarray.length/2)]<0){document.getElementById("prediction3").innerHTML="H"; check();pick=16}
else if(ystart<=40 && setx-ssetx>30 && downtime==1 && (setx-ssetx)>(ssety-yarray[Math.round(yarray.length/2)]) && yarray[Math.round(yarray.length/4)]-yarray[Math.round(yarray.length/2)]<0){document.getElementById("prediction3").innerHTML="M"; check();pick=17}
else if(ystart<=40 && ssety-yarray[Math.round(yarray.length/2)]>30 && downtime==1 && ssetx-xarray[Math.round(xarray.length/2.5)]<=-5){document.getElementById("prediction3").innerHTML="N"; check();pick=18}
else if(downtime==1 && ssetx-setx<-30 && ssety-yarray[Math.round(yarray.length/3)]>0 && ssety-sety<0){document.getElementById("prediction3").innerHTML="E"; check();pick=19}
else if(xstart>50 && sety-ssety>50 && downtime==1 && ssetx-xarray[(Math.round(xarray.length/3)+Math.round(xarray.length/3))]<30 && setx-xarray[Math.round(xarray.length/3)]<30){document.getElementById("prediction3").innerHTML="Z"; check();pick=2; form2="j"; xoffset=ssetx;}
else if(downtime==1 && ssetx-setx>30 && ssetx-xarray[Math.round(xarray.length/4)]>30 && ssety-sety<0){document.getElementById("prediction3").innerHTML="S"; check();pick=20}
else if(ymore<=20 && yless>10 && xstart>=30 && downtime==1 && ssetx-setx>30){document.getElementById("prediction3").innerHTML="J"; check();pick=21;form2="j"; xoffset=ssetx;}
else if(ymore>10 && yless<=20 && xstart>=30 && downtime==1 && ssety-sety>10){document.getElementById("prediction3").innerHTML="R"; form1="r"; check();pick=22}
else if(ymore<=10 && yless>10 && xstart>=30 && downtime==1 && ssety-sety<-10){document.getElementById("prediction3").innerHTML="L"; form1="l"; xoffset=setx; check();pick=23}
else if(xmore<=25 && yless>10 && ymore>=5 && downtime==1){ form1="q";; check();pick=77}
else if(form1=="l" && ymore<=20 && yless>10 && xstart>=30 && ssetx-setx>30 && xoffset-ssetx>-30){document.getElementById("prediction3").innerHTML="X"; check();pick=24}
else if(form1=="l" && ymore<=20 && yless>10 && xstart>=30 && ssetx-setx>30 && xoffset-ssetx<-30){document.getElementById("prediction3").innerHTML="Y"; check();pick=25}
else if(form2=="j" && ymore<=10 && yless>10 && xstart>=30 && ssety-sety<-10 && xoffset-setx<30){document.getElementById("prediction3").innerHTML="X"; check();pick=24}
else if(form2=="j" && ymore<=10 && yless>10 && xstart>=30 && ssety-sety<-10 && xoffset-setx>30){document.getElementById("prediction3").innerHTML="Y"; check();pick=25}
else if(form1=="q" && xstart<=30 && ssetx-xarray[Math.round(xarray.length/2)]>0){document.getElementById("prediction3").innerHTML="Q";; check();pick=14}
else if(xless>5 && xmore<=2 && form1=="r"){document.getElementById("prediction3").innerHTML="F"; check();pick=26}
else if(xless<=2 && xmore>5 && form1=="r"){document.getElementById("prediction3").innerHTML="F"; check();pick=26}
else{document.getElementById("prediction3").innerHTML="unknown"}}

if((setx-ssetx)>200 && ymore<=15 && xmore<=15 && yless<=15){document.getElementById("prediction3").innerHTML="space"; check()}


console.log(subl+"less more"+subm)
console.log(Math.round(xoffset)+" this that "+Math.round(setx))
console.log(form1)

setTimeout(() => {
if(drawing==false){ downtime=0; form1=""; xoffset=""; yoffset="" ; form2=""};
}, 1000);
setTimeout(() => {
if(drawing==false){ctx.clearRect(0, 0, canvas.width, canvas.height); }
}, 1000);
  });

  canvas.addEventListener("pointerleave", () => {
    drawing = false;

  });

let currenttime = 87
let inter;
video.currentTime = 87
window.addEventListener("load", ()=>{setTimeout(() => {
video.pause()
}, 6000)})

function check() {


if(document.getElementById("prediction3").innerHTML=="a" && pick==1){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 94; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="b" && pick==9){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 100; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000); })}
else if(document.getElementById("prediction3").innerHTML=="c" && pick==10){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 103; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="d" && pick==9){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 108; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="e" && pick==13){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 112; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="f" && pick==22){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 117; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="g" && pick==1){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 143; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="h" && pick==9){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 148; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="i" && pick==16){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 150; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="j" && pick==9){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 157; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="k" && pick==9){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 161; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="l" && pick==12){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 164; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="m" && pick==23){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 168; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }

else if(document.getElementById("prediction3").innerHTML=="n" && pick==17){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 170; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="o" && pick==18){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 174; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="p" && pick==9){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 179; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="q" && pick==77){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 205; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="r" && pick==14){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 207; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="s" && pick==22){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 209; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="t" && pick==23){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 222; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="u" && pick==15){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 225; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="v" && pick==6){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 227; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="w" && pick==8){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 231; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="x" && pick==21){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 246; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="y" && pick==21){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 253; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="x" && pick==23){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 246; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="y" && pick==23){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 253; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="z" && pick==25){setTimeout(() => {document.getElementById("prediction3").innerHTML="calibrated"; video.currentTime = 256; video.play();currenttime = video.currentTime;setTimeout(() => {
video.pause()
}, 5000)}, 1000); }
else if(document.getElementById("prediction3").innerHTML=="space" && pick==2){window.alert("calibration complete make sure to adhere to calibration patterns");location.href="/scribe/index.html"}
else{{setTimeout(() => {document.getElementById("prediction3").innerHTML="try again"; }, 1000);}}


}


