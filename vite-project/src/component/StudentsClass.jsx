import React from "react"
export default class StudentClass extends React.Component{

    render(props)
    {
   return <>
            <h1>Student Info</h1>
            <p>Name:{props.name}</p>
         </>
    }
}


