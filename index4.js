const root = document.getElementById('root')

const createElement = (type, props={}, children = []) => {
    const el = document.createElement(type)
    Object.keys(props).map(key => {
        el[key] = props[key]
    })
    if(children.length > 0){
        children.forEach(child => {
            el.appendChild(child)
        })
    }
    return el
    }

    const emojis = ['👊','⬆️','🐰','📤','🎩']

    const EmojiElement = (emoji) => {
        return createElement('div', {innerText: emoji, className:'emoji-sm'})
    }

    const App = () => {
        return createElement('div', {className: 'app-container'}, emojis.map(emoji => EmojiElement(emoji)))
    }


    root.appendChild(App())