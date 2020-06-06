import { getRandomNumber, createElement, removeElement, addClass } from './utils.js'

export function createBox() {
    const box = {
        element: createElement('div'),
        klass: 'box',
        cssStyles: {
            left: `${ getRandomNumber(101)}% `,
            top: `${ getRandomNumber(101)}% `,
            backgroundColor: '',
            width: `${ getRandomNumber(500)}px `,
            height: `${ getRandomNumber(500)}px `,
            display: 'inline-block',
            position: 'absolute',
            zIndex: '10',
            transition: 'all 300ms',
            borderRadius: '3px',
            opacity: 0.65,
            boxShadow: `0px 0px 10px 1px rgba(0,0,0,0.3)`
        }
    }

    // methods
    const setStylesOnElement = (el, styles) => Object.assign(el.style, styles)
    const addEvents = () => {
        box.element.addEventListener('mouseover', () => ( randomBackgroundColor(box.element) ))
        box.element.addEventListener('mouseout', () => ( randomBackgroundColor(box.element) ))
        box.element.addEventListener('click', () => ( removeElement(box.element) ))
    }
    const randomBackgroundColor = (el) => {
        let letters = '0123456789ABCDEF', color = '#'
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        el.style.backgroundColor = color
    }

    // init
    (function () {
        createElement()
        setStylesOnElement(box.element, box.cssStyles)
        randomBackgroundColor(box.element)
        addClass(box.element, box.klass)
        addEvents()
    })()

    return box.element
}
