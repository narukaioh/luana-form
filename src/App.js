import { useState } from 'react'
import './App.css'

const Input = ({ onChange, type, name, placeholder }) => {
  return (
    <input 
      onChange={onChange}
      name={name}
      type={type} 
      placeholder={placeholder} />)
}

export const App = () => {

  const [info, setInfo] = useState({ nome: '', email: '', senha: '' })
  
  console.log(info)

  const handleChange = (e) => { 
    const { name, value } = e.target
    setInfo({ ...info, [name]: value })
  }
  
  return (
    <div className="app">
      <Input type="text" name="nome" placeholder="Digite seu nome:" onChange={handleChange} />
      <Input 
        type="email" 
        name="email"
        placeholder="Digite seu email:" 
        onChange={handleChange}
      />
      
      <Input 
        type="password" 
        name="senha"
        placeholder="Digite sua senha:" 
        onChange={handleChange}
      />
    </div>
  );
}
