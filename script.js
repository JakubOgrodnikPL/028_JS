const newDiv = document.createElement('div')
document.body.appendChild(newDiv)
const getNewDiv = document.getElementsByName('newDiv')
console.log(getNewDiv)
const newPar = document.createElement('p')
newDiv.appendChild(newPar)

newDiv.append(newPar, 'Hello' )