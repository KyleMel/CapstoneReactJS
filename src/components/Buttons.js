import React from 'react'
import Modal from './Modal';
import './Button.css';

export default function Buttons({onCreate, onEdit, onDelete, item}) {
  return (
       <div>
        <button className="Button btn btn-primary" onClick={Modal, onCreate}>Create {item}</button>
        <button className="Button btn btn-primary" onClick={onEdit}>Edit {item}</button>
        <button className="Button btn btn-primary" onClick={onDelete}>Delete {item}</button>
      </div>
  )
}
