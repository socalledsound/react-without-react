const createElement = (type, props = {}, children= []) => {
    const div = document.createElement(type)
    // if('text' in props){
    //     div.innerText = props.text
    // }
    // if('className' in props){
    //     div.className = props.className
    // }
    // console.log('array from')
    // // console.log(Array.from(props))
    // const arr = Array.from(props, key => {
    //     div[key] = props[key]
    // })
    // console.log(arr)

    Object.keys(props).map(key => {
        div[key] = props[key]
        // console.log(key === 'style')
        // if(key === 'style'){
        //     Object.keys(props[key]).map(styleKey => {
        //         div.style[styleKey] = props.style[styleKey]
        //     })
        // }
    })



    if(children.length > 0){
        children.map(child => div.appendChild(child))
    }
    
    return div
}

const render = (node, target) => {
    
    target.appendChild(node)
}

const EmojiDiv = (txt) => {
    return createElement('div', {innerText: txt, className: 'emoji-sm', })
}

const emojis = ['👊','⬆️','🐰','📤','🎩']
// const App = () => {
//     return createElement('div', { className: 'app-container', 
//                                     style: {backgroundColor: 'pink', 
//                                     borderRadius: '0.8rem', padding: '0.8rem'}
//                                 }, emojis.map(txt => EmojiDiv(txt)))
// }

const App = () => {
    return createElement('div', { className: 'app-container'}, emojis.map(txt => EmojiDiv(txt)))
}
console.log(App())
render(App(), document.getElementById('root'))