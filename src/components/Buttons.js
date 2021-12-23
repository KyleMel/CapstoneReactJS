import React from 'react'
import './Button.css';

export default function Buttons({handleOpen, onCreate, onEdit, onDelete, item}) {
  return (
       <div>
        <button className="Button btn btn-primary" onClick={handleOpen}>Create {item}</button>
        <button className="Button btn btn-primary" onClick={onEdit}>Edit {item}</button>
        <button className="Button btn btn-primary" onClick={onDelete}>Delete {item}</button>
      </div>
  )
}
