import { useState } from 'react'

const Box = ({ children, color, idade, click }) => {
    return (
        <div className={color}>
            {children} - {idade}
            <button onClick={click}>clique</button>
        </div>
    )
}

export default Box