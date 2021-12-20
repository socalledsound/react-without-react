const root = document.getElementById('root')
const newDiv = document.createElement('div')
newDiv.innerText = '🐰'
newDiv.className = 'emoji-lg'
console.log(newDiv)

const createDiv = (text, className) => {
    const div = document.createElement('div')
    div.innerText = text
    div.className = className
    return div
}

const createElement = (type, props = {}) => {
    const div = document.createElement(type)
  
    if('text' in props){
        div.innerText = props.text
    }
    if('className' in props){
        div.className = 'emoji-lg'
    }
    
    return div
}

const render = (node, target) => {
    target.appendChild(node)
}

render(createDiv('🐰', 'emoji-lg'), document.getElementById('root'))
render(createElement('div', {text: '🐰', className: 'emoji-lg'}), document.getElementById('root'))
console.log(document)