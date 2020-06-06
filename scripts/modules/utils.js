export function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit)
}

export function createElement(selector) {
    return document.createElement(selector)
}

export function removeElement(el) {
    el.remove()
}

export function addClass(el, klass) {
    el.classList.add(klass)
}
