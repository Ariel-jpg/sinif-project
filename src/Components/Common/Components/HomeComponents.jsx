import React from 'react'
import { RiPlayListAddFill } from 'react-icons/ri'

export const SinifClassComponent = ({ _class, onClick, currentClassCode }) => {
    return <button
        key={_class._id}
        className="SinifClassComponentStyle"
        disabled={_class._id === currentClassCode}
        style={{ backgroundColor: _class._id === currentClassCode && "var(--tertiary-color)" }}
        onClick={onClick}
        children={_class.className.toUpperCase()}
    />
}

export const SinifClassMessageComponent = ({ message, onClick, style }) => {
    return <div
        key={message._id}
        style={style}
        tabIndex="0"
        onKeyPress={onClick}
        onClick={onClick}
        className="SinifClassMessageComponentStyle"
    >
        <h4 style={{ marginBottom: message.description && 5 }}>{message.title}</h4>
        {message.description && <p>{message.description}</p>}
    </div>
}

export const SinifCommentMessageComponent = ({ comment, style }) => {
    return <div
        style={style}
        className="SinifClassMessageComponentStyle Comment"
    >
        {<p>{comment}</p>}
    </div>
}

export const AddClassButton = ({ onClick }) => <button className="HomeButtonStyle" onClick={onClick}>
    <RiPlayListAddFill />
</button>

export const LoadMessages = ({ onClick, label }) => <button className="LoadMessagesButtonStyle" onClick={onClick} children={label} />