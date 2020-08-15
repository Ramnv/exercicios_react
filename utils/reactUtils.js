import React from 'react'

function childrenWIthProps(children, props) {
    React.Children.map(props.children,
        child => React.cloneElement(child, { ...props }))
}

export { childrenWIthProps }