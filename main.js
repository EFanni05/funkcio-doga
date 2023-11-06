import {quotes} from './quotes.json'

function idezet(){
  const vs = Array.from(quotes)
  vs.sort(function (a, b){
    if(a.author < b.author){
      return -1
    }
    if(a.author > b.author){
      return 1
    }
    return 0
  })
  //console.table(vs)
  for(let i = 0; i < vs.length; i++){
    table(vs[i].quote, "idezet-lista")
  }
}

function theSearch(){
//   const vs = Array.from(quotes)
//   let a = []
//   const start = "<b>"
//   const end = "</b>"
//   for(let i = 0; i < vs.length; i++){
//     let startIndex = 0
//     if(vs.length - 3 != start){
//       if(vs[i].quote.substring(startIndex, startIndex + 3).toLowerCase === "the"){
//         a.push(start + vs[i].quote.substring(startIndex, startIndex + 3) + end)
//       }
//       else{
//         a.push(vs[i].quote.substring(start, start + 3))
//       }
//       startIndex += 3
//     }
//     //console.table(a)
//   }  
}

function table(vs, tag){
  const li = document.createElement('li')
  const list = document.getElementById(tag)
  li.textContent = vs
  list.appendChild(li)
}

function hossz(){
  const vs = Array.from(quotes)
  let a = []
  const p = document.getElementById('hossz-p')
  vs.forEach(element => {
    let b = element.quote.length
    a.push(b)
  });
  let final = a.join(',')
  p.innerText = final
  //console.log(final);
}

function darab(){
  const vs = Array.from(quotes)
  let name = document.getElementById('name').value 
  const output = document.getElementById('final')
  const a = vs.filter(x => x.author == name).length
  output.value = a
}

function init(){
  document.getElementById('idezet').addEventListener('click', idezet)
  document.getElementById('the').addEventListener('click', theSearch)
  document.getElementById('hossz').addEventListener('click', hossz)
  document.getElementById('darab').addEventListener('click', darab)
}

document.addEventListener('DOMContentLoaded', init)
