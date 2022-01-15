// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
    
function destructivelyAppendCat(name){
    cats.push("Ralph")
    
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
  const coppyOfCats = [...cats]
  coppyOfCats.push("Broom")
  return coppyOfCats
}

function prependCat(name){
    const coppyOfCats = [...cats]
    coppyOfCats.unshift("Arnold")
    return coppyOfCats
}

function removeLastCat(){
    const coppyOfCats = [...cats]
    coppyOfCats.pop()
    return coppyOfCats
}

function  removeFirstCat(){
    const coppyOfCats = [...cats]
    coppyOfCats.shift()
    return coppyOfCats
}