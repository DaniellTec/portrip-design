import React from 'react'
import ReactDOM from 'react-dom'
import Mapshow from './Mapshow'
import { ChakraProvider, theme } from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Mapshow />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
