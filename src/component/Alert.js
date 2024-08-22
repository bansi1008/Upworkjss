import React from 'react'

export default function Alert(props) {
  return (
  props.alert&&  <div>
      <div className={`alert alert-${props.alert.mystatus} alert-dismissible`} fade show role="alert">
  <strong>{props.alert.mystatus}</strong>  {props.alert.msg}
  
</div>
    </div>
  )
}
