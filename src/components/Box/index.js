import { useState } from 'react'

const Box = ({ children, color }) => {
    return (
        <div className={color}>
            {children}
        </div>
    )
}

export default Box