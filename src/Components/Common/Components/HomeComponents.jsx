import React from 'react'
import { RiPlayListAddFill } from 'react-icons/ri'

export const SinifSubjectComponent = ({ _class, onClick, currentClassCode }) => {
    return <button
        disabled={_class._id === currentClassCode}
        style={{ backgroundColor: _class._id === currentClassCode && "var(--tertiary-color)" }}
        onClick={onClick}
        children={_class.className.toUpperCase()}
    />
}

export const SinifClassMessageComponent = ({ message, onClick, style }) => {
    return <div
        style={style}
        tabIndex="0"
        onKeyPress={onClick}
        onClick={onClick}
        className="SinifClassMessageComponentStyle"
    >
        <h4 style={{ marginBottom: message.description && 10 }}>{message.title}</h4>
        {message.description && <p>{message.description}</p>}
    </div>
}

export const SinifCommentMessageComponent = ({ comment, style }) => {
    return <div
        style={style}
        tabIndex="0"
        className="SinifClassMessageComponentStyle Comment"
    >
        {<p>{comment}</p>}
    </div>
}

export const AddClassButton = ({ onClick }) => <button className="HomeButtonStyle" onClick={onClick}>
    <RiPlayListAddFill />
</button>

export const LoadMessages = ({ onClick, label }) => <button className="LoadMessagesButtonStyle" onClick={onClick} children={label} />