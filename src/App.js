import { useState } from 'react'
import { Box } from './components'
import './App.css'
import ShoppingCart from './components/ShoppingCart'

export const App = () => {

  // const [info, setInfo] = useState({ nome: '', email: '', senha: '' })

  // const handleChange = (e) => { 
  //   const { name, value } = e.target
  //   setInfo({ ...info, [name]: value })
  // }

  const [idade, setIdade] = useState(18)

  const click = () => {
      setIdade(idade + 1)
  }
  
  return (
    <Box>
      {/* <div className="app">
        <Message message="ola mundo" type="warning" />
        <Input type="text" name="nome" placeholder="Digite seu nome:" onChange={handleChange} />
        <Input type="email" name="email" placeholder="Digite seu email:" onChange={handleChange} />
        <Input type="password" name="senha" placeholder="Digite sua senha:" onChange={handleChange} />
      </div>
      <Box color="blue" idade={idade} click={click}>
        <p>caixa um</p>
      </Box>
      <BoxDois color="red" idade={idade} click={click}>
        <p>caixa dois</p>
      </BoxDois> */}
      <ShoppingCart />
    </Box>

  );
}
