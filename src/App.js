import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Showcard from './Showcard'
import contacts from './contacts'

function App() {
  const [search, setSearch] = useState('')

  const contactsSearched = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div>
      <form>
        <TextField
          label="Type Search..."
          variant="standard"
          value={search}
          name="search"
          onChange={e => setSearch(e.target.value)}
        />
      </form>
      <Typography variant="h3">My Contacts</Typography>
      {contactsSearched.map(eachContact => {
        return (
          <Showcard
            key={eachContact.id}
            name={eachContact.name}
            img={eachContact.imgURL}
            tel={eachContact.phone}
            email={eachContact.email}
          />
        )
      })}
    </div>
  )
}

export default App
