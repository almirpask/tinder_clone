import React, { useState } from  'react'
import Logo from '../../assets/logo.svg'
import api from '../../services/api'
import { Container } from './styles'

export default function Login({history}) {
  const [username, setUserName] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    api.post('/devs',{ username }).then((response) => {
      history.push(`/main/${response.data._id}`)
    })
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <img src={Logo} alt="Tindev-Logo"/>
        <input type="text"
          placeholder="Digite seu usuario do Github"
          onChange={e=> setUserName(e.target.value)}
          value={username}
        />
        <button type="submit">Enviar</button>
      </form>      
    </Container>
  )
}