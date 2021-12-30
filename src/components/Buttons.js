import React from 'react'
import './Button.css';

export default function Buttons({show, onEdit, onDelete, item}) {
  return (
       <div>
        <button className="Button btn btn-primary" onClick={show}>Create {item}</button>
        <button className="Button btn btn-primary" onClick={onEdit}>Edit {item}</button>
        <button className="Button btn btn-primary" onClick={onDelete}>Delete {item}</button>
      </div>
  )
}
