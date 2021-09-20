import {Link} from 'react-router-dom';
import classes from './Header.module.css';
import logo from '../images/Pet Shop Paw Logo.jfif';
import bg from '../images/Fotos de husky en estudio.png';
import cat from '../images/Котэ обои.png';
function Header (){
    return(
        <header className={classes.header}>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <img src={bg} alt="pet" className={classes.img1}/>
            <img src={cat} alt="pet" className={classes.img2}/>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/Favorite">Favorite</Link>
                    </li>
                    <li>
                        <Link to="/Basket">Basket</Link>
                    </li>
                    <li>
                        <Link to="/Add">Add</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header ;