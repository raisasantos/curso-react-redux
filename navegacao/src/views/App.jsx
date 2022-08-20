import './App.css'
import React from 'react'
 
import { BrowserRouter as Router } from  'react-router-dom' // essa importação é assim agora
 
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
 
const App = props => (
    <div className="App">
        <Router> {/* Usamos a importação acima bem aqui*/}
            <Menu />
            <Content />
        </Router>
    </div>
)
 
export default App