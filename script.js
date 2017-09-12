var req = new XMLHttpRequest();
req.addEventListener('load', function(){
  if (req.status !== 200){
    return;
  }
var info = JSON.parse(req.responseText);

console.log(info);

var name1 = document.createTextNode(info.name);
var types1 = document.createTextNode(info.types[0].type.name);
var abs1 = document.createTextNode(info.abilities[0].ability.name);
var abs1a = document.createTextNode(info.abilities[1].ability.name);
var p1 = document.createElement('p');
var h = document.createElement('h3');
var div1 = document.createElement('div');
var i1 = document.createElement('IMG');
i1.src = info.sprites.back_default;
var ab1 = document.createElement('p');
var ab1a = document.createElement('p');
document.body.appendChild(div1);
h.appendChild(name1);
div1.appendChild(h);
p1.appendChild(types1);
div1.appendChild(p1);
div1.appendChild(i1);
ab1.appendChild(abs1);
ab1a.appendChild(abs1a);
div1.appendChild(ab1a);
div1.appendChild(ab1);
})


req.open('GET', 'http://pokeapi.co/api/v2/pokemon/10');

req.send();

var req2 = new XMLHttpRequest();
req2.addEventListener('load', function(){
  if (req2.status !== 200){
    return;
  }
var info = JSON.parse(req2.responseText);

console.log(info);

var name2 = document.createTextNode(info.name);
var types2 = document.createTextNode(info.types[0].type.name);
var abs2 = document.createTextNode(info.abilities[0].ability.name);
var abs2a = document.createTextNode(info.abilities[1].ability.name)
var p2 = document.createElement('p');
var h2 = document.createElement('h3');
var div2 = document.createElement('div');
var i2 = document.createElement('IMG');
i2.src = info.sprites.back_default;
var ab2 = document.createElement('p')
var ab2a = document.createElement('p')
document.body.appendChild(div2);
h2.appendChild(name2);
div2.appendChild(h2);
p2.appendChild(types2);
div2.appendChild(p2);
div2.appendChild(i2);
ab2.appendChild(abs2);
ab2a.appendChild(abs2a);
div2.appendChild(ab2a);
div2.appendChild(ab2);
})


req2.open('GET', 'http://pokeapi.co/api/v2/pokemon/6');

req2.send();

var req3 = new XMLHttpRequest();
req3.addEventListener('load', function(){
  if (req3.status !== 200){
    return;
  }
var info = JSON.parse(req3.responseText);

console.log(info);

var name3 = document.createTextNode(info.name);
var types3 = document.createTextNode(info.types[0].type.name);
var abs3 = document.createTextNode(info.abilities[0].ability.name);
var p3 = document.createElement('p');
var h3 = document.createElement('h3');
var div3 = document.createElement('div');
var i3 = document.createElement('IMG');
i3.src = info.sprites.back_default;
var ab3 = document.createElement('p')
document.body.appendChild(div3);
h3.appendChild(name3);
div3.appendChild(h3);
p3.appendChild(types3);
div3.appendChild(p3);
div3.appendChild(i3);
ab3.appendChild(abs3);
div3.appendChild(ab3);
})


req3.open('GET', 'http://pokeapi.co/api/v2/pokemon/11');

req3.send();
