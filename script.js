let frases = [
  "Eres google? o por qué tienes todo lo que busco?",
  "Tienes un diccionario? es que me dejas sin palabras",
  "y el papel? donde venias envuelta bombom",
  "Me gustaria ser tu sombra para estar todo el dia a tu lado",
  "No estas cansada? de andar dando vueltas por mi mente",
  "Eres como el sol, con acercarme a ti me derrito",
  "Sabias que me duermo mas temprano? para soñarte mas tiempo",
  "Tu papá es pirata? es que eres un hermoso tesoro",
  "Sabes primero auxilios? es que me muero por ti",
  "Voy a llamar a la policia, es que me robaste el corazon"
];
let gatos=[
  "https://i.pinimg.com/236x/f8/d1/19/f8d1198c8b0dd7c3ef5af898a2257967.jpg",
  "https://i.pinimg.com/originals/f0/2c/ea/f02cea1ba1d480243c90cdbb9737f3b4.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSiowPhHB22TgiUZUQ7MbiSnjwHriw9NedTQ&usqp=CAU",
  "https://i.pinimg.com/originals/de/3a/0e/de3a0eee2ffc76b3bd354a37982b3ae5.jpg",
  "https://i.pinimg.com/736x/e0/1e/82/e01e8208ec5288673ee16b8e291380a5.jpg",
  "https://i.pinimg.com/474x/1e/e6/41/1ee641558a12ee2ee20b75aad5b8ae25.jpg",
  "https://i.pinimg.com/474x/24/40/76/24407687817f585f81add2795e96c239.jpg",
  "https://i.pinimg.com/originals/9d/b7/c1/9db7c13f761c9e1afcc0fa99468fde9a.jpg",
  "https://i.pinimg.com/736x/c0/76/37/c076372a81f22ab28b21471dc4002965.jpg",
  "https://i.pinimg.com/236x/0c/1c/b2/0c1cb2da2361d23ec3a1cf21bd1c45ff.jpg"
];

function closeOnClose(){
  document.getElementById('onClose').style.display="none";
}

function closeOnYass(){
  document.getElementById('yasss').style.display="none";
}

function openOnClose(){
  console.log("hey");
  document.getElementById('onClose').style.display="block";
}

function move(){
  var top=Math.floor(Math.random() * 101);
var left=  Math.floor(Math.random() * 101);
  document.getElementById('niLoIntentes').style.left= left+"%";
    document.getElementById('niLoIntentes').style.top= top+"%";
}
function piropo(){
  document.getElementById('gatos').style.backgroundImage="url("+gatos[Math.floor(Math.random() * 10) ]+")";
  document.getElementById('yasss').style.display="block";
  document.getElementById('awwwn').innerText = frases[Math.floor(Math.random() * 10) ];
}
