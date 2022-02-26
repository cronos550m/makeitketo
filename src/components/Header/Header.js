import './header.css';
import logo from '../../logo.png';

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={logo} className="header-logo-image" alt="logo" />
            </div>
 
            <div className="header-slogan">
                <p>
                    make it simple. make it keto
                </p>
            </div>
            <div className="header-search">
            <form action="#" className="header-search-form">
                <input className="header-search-input" type="text" placeholder="Buscar.." name="search"/>
                <button className="header-search-button" type="submit"><i className="fa fa-search"></i></button>
            </form>
            </div>
            <div className="header-buttons">
                <ol className="botonera">
                    <li>
                        productos
                    </li>
                    <li>
                        recetas
                    </li>
                    <li>
                        info & tips
                    </li>
                    <li>
                        regalos
                    </li>
                    <li>
                        contacto
                    </li>
                </ol>
            </div>

        </header>
    );
}

export default Header;