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

const createElement = (type, text, className, children = []) => {
    const el = document.createElement(type)
    el.innerText = text
    el.className = className
    if(children.length > 0){
        children.forEach(child => {
            el.appendChild(child)
        })
    }
    return el
    }

    const emojis = ['👊','⬆️','🐰','📤','🎩']

    // const emojiElements = emojis.map((emoji) => createElement('div', emoji,'emoji-sm'))
    // const app = createElement('div', null,'app-container')
    // emojiElements.forEach((el) => app.appendChild(el))
    // root.appendChild(app)

    root.appendChild(createElement('div', null, 'app-container', emojis.map(emoji => createElement('div', emoji, 'emoji-sm'))))


    // const app = createElement('div',null, 'app-container')
    // app.appendChild(createElement('div','🐰', 'emoji-sm'))
    // app.appendChild(createElement('div','🎩', 'emoji-sm'))
    // root.appendChild(app)
    

   // emojis.map((emoji) => root.appendChild(createElement('div', emoji,'emoji-sm')))


// const createElement = (type, props = {}) => {
//     const div = document.createElement(type)
  
//     if('text' in props){
//         div.innerText = props.text
//     }
//     if('className' in props){
//         div.className = 'emoji-lg'
//     }
    
//     return div
// }