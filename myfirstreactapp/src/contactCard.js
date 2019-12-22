import React from 'react'

// function ContactCard(props){

//     console.log(props);
//     console.info(React.version)

//        return (
//                 <div className="contact">
//                     <h3>{props.contact.name}</h3>
//                     <p>Phone: {props.contact.phone}</p>
//                     <p>Email: {props.contact.email}</p>
//                 </div>
//        )

// }


class ContactCard extends React.Component{
    
    render(){

        return(

        <div className="contact">
        <h3>{this.props.contact.name}</h3>
        <p>Phone: {this.props.contact.phone}</p>
        <p>Email: {this.props.contact.email}</p>
        </div>
        )
}
}

export default ContactCard