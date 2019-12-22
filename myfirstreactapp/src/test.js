import React from 'react'
import ContactCard from './contactCard.js'
import contactsData from './contactComponents.js'

function MyInfo(){

    const contactComponents = contactsData.map(item => <ContactCard key={item.id} contact={item}/>)

    return (
                      
       <div className="contacts">
            {contactComponents}
        </div>  
    )
}

export default MyInfo