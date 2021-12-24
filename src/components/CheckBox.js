export const CheckBox = props => {

  return (
    <>
     <input style={{float: "right"}} key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} />
    </>
  )
}

export default CheckBox