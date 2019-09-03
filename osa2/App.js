import React, { useState, useEffect } from 'react'
import Person from './persons'
import personService from './services/notes'
import Axios from 'axios';

const App = () => {

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ infoMessage, setInfoMessage ] = useState('Tietojen lisäys ja poisto')

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="info">
        {message}
      </div>
    )
  }

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const [persons, setPersons] = useState([
    {}
  ])

  const rows = () => persons.map(person =>
    <Person
      key={person.id}
      person={person}
      toggleDelete={() => toggleDeleteOf(person.id)}
    />
  )

  const toggleDeleteOf = id => {
    const url =`http://localhost:3001/persons/${id}`

    if (window.confirm('Poistetaanko ' + id + '?')) {
      Axios.delete(url).then(response => {
        setPersons(persons.map(person => person.id !== id ? person : response.data))
      })

      setInfoMessage(
        `${id} nimi poistettu puhelinluettelosta `
      )

      setTimeout(() => {
        setInfoMessage(null)
      }, 5000)

      window.location.reload()
    }

  }

  const addPerson = (event) => {

    if (persons.find(person => person.name === newName)) {

          setInfoMessage(
            `${newName} nimi löytyy puhelinluettelosta `
          )

          setTimeout(() => {
            setInfoMessage(null)
          }, 3000)
     
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
        })

        setInfoMessage(
          `${newName} nimi lisätty luetteloon `
        )

        setTimeout(() => {
          setInfoMessage(null)
        }, 3000)
    }
    setNewName('')
    setNewNumber('')
    event.preventDefault()
 
  }


  const handlePersonChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handlePersonChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }


  return (
    <div>
      <h2>Puhelinluettelo</h2>

      <Notification message={infoMessage} />

      <form onSubmit={addPerson}>
        <div>
            Nimi: <input value={newName} onChange={handlePersonChangeName}/> <br />
            Numero: <input value={newNumber} onChange={handlePersonChangeNumber}/>
        </div>
        <div>
            <button type='submit'>Lisää</button>
        </div>
    </form>
      <h2>Numerot</h2>
      <div>
        {rows()}
      </div>
    </div>

  )
}

export default App