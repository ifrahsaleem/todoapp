import React from 'react'

export default function TodoItem (props) {

	const CompStyle = {
		color: 'red',
		fontStyle: "italic",
		textDecoration: "line-through"
	}


	return	(
	<div className="items">
      <input type="checkbox" 
      checked={props.item.completed} 
      onChange={() => props.handleChange(props.item.id)}
      />
      <span style={props.item.completed ? CompStyle : null}> {props.item.text} </span>
 	</div> )
}