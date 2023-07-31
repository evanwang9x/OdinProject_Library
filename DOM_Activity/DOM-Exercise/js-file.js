const container = document.getElementById('container')
const paragraph = document.createElement('p')
const header3 = document.createElement('h3')
const div = document.createElement('div')

paragraph.textContent = `Hey I'm Red!`
header3.textContent = (`I'm a blue h3!`)
div.style.cssText = 'border: black; background: pink'
paragraph.style.cssText = 'color: Red'
header3.style.cssText = 'color: Blue'

div.innerHTML = `
    <p>ME TOO!</p>
    <h1>I'm in a Div</h1>
`

div.setAttribute('p', `ME TOO!`)

div.appendChild(paragraph)
div.appendChild(header3)
container.appendChild(div)