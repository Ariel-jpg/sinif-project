import React from 'react';

import { RiPlayListAddFill } from 'react-icons/ri';

export const SinifClassComponent = ({ _class, onClick, currentClassCode }) => <button
    key={_class._id}
    className="SinifClassComponentStyle"
    disabled={_class._id === currentClassCode}
    style={{ backgroundColor: _class._id === currentClassCode && "var(--tertiary-color)" }}
    onClick={onClick}
    children={_class.className.toUpperCase()}
/>

export const SinifClassMessageComponent = ({ message, onClick, style }) => <div
    style={style}
    tabIndex="0"
    onKeyPress={onClick}
    onClick={onClick}
    className="SinifClassMessageComponentStyle"
>
    <h4 style={{ marginBottom: message.description && 5 }}>{message.title}</h4>
    {message.description && <p>{message.description}</p>}
</div>

export const SinifCommentMessageComponent = ({ comment, style }) => <div
    style={style}
    className="SinifClassMessageComponentStyle Comment"
    children={<p>{comment}</p>}
/>

export const AddButton = ({ onClick, icon: Icon, style }) => <button className="HomeButtonStyle" style={style} onClick={onClick}>
    {Icon ? <Icon /> : <RiPlayListAddFill />}
</button>

export const LoadMessages = ({ onClick, label }) => <button className="LoadMessagesButtonStyle" onClick={onClick} children={label} />