import React from 'react'
import './message.scss'
export default function Message({msg}) {
    return (
        <div className="Mensaje">
            <span>{msg}</span>
        </div>
    )
}
