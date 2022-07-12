import React from 'react'
import { Link } from 'react-router-dom'

function Button({ children, to, href, onClick, leftIcon, rightIcon, className = ''}) {
    let Comp = 'button'
    const props = {
        onClick,
    }

    if(to) {
        props.to = to
        Comp = Link
    } else if(href) {
        props.href = href
        Comp = 'a'
    }

    return (
        <Comp {...props} className={`text-base bg-dark-lighten hover:bg-dark-darken text-white rounded-md px-6 py-3 transition duration-300 inline-block ${className}`}>
            <span className='flex items-center'>
            {leftIcon}{children ? (<span className={`${leftIcon ? 'ml-2' : ''} ${rightIcon ? 'mr-2' : ''}`}>{children}</span>) : ''}{rightIcon}
            </span>
        </Comp>
    )
}

export default Button
