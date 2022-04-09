import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time:string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt={'avatar'} className={s.avatar}/>

            <div className={s.angle}/>

            <div className={s.content}>
                <div>{props.name}</div>
                <div>{props.message}</div>
                <div>{props.time}</div>
            </div>

        </div>
    )
}

export default Message


