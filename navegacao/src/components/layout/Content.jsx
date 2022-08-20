import './Content.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom'
// Routes- escolha da rota, Route- rota

import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';
 
const Content = props => (
    <main className="Content">
        <Routes> 
            <Route path="/about" element={<About />} />
            <Route path="/param/:id" element={<Param />} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} /> {/* o * significa que qualquer outra url q não seja as urls que passei vai cai aqui na página de erro(Erro) */}
        </Routes>
    </main>
)
 
export default Content
