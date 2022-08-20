import "./Menu.css"
import React from "react"

import { Link } from 'react-router-dom' //tag a

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link> {/*Esse conponente link gera uma tag a*/}
                </li>
                <li>
                    <Link to="/param/123">Pram # 01</Link>
                </li>
                <li>
                    <Link to="/param/legal">Pram # 02</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/naoExiste">Não existe</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu;