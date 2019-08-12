import React, { useEffect, useState } from  'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'
import { Container } from './styles'
import api from '../../services/api'
export default function Login({match}) {
  const [devs, setDevs] = useState([])
  useEffect(()=> {
    api.get('/devs', {
      headers: {
        user: match.params.id
      }
    }).then( resp => {
      setDevs(resp.data)    
    })
  },[match.params.id])

  async function handleLikes(id){
     api.post(`/devs/${id}/likes`, null, {
       headers: {user: match.params.id}
     }).then(resp => {
       setDevs(devs.filter(dev => dev._id !== id))
     })
  }

  async function handleDislikes(id){
    api.post(`/devs/${id}/dislikes`, null, {
      headers: {user: match.params.id}
    }).then(resp => {
      setDevs(devs.filter(dev => dev._id !== id))
    })
  }
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Tindev"/> 
      </Link>
      { devs.length > 0 ? (
        <ul>
          {devs.map( dev => (
            <li key={dev._id}>
              <img src={dev.avatar} alt=""/>
              <footer>
                <strong>{dev.name} - {dev.user}</strong>
                <p>{dev.bio}</p>
              </footer>
              <div className="buttons">
                <button type="button" onClick={() => handleDislikes(dev._id)}><img src={dislike} alt="dislike"/></button>
                <button type="button" onClick={() => handleLikes(dev._id)}><img src={like} alt="like"/></button>
              </div>
            </li>
          ))}        
        </ul>
          ) : (
            <div className="empty"> Acabou :( </div>
          )}
    </Container>
  )
}
