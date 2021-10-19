import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';

function Header(props){

    return <Fragment>
        <header className={styles.header}>
            <h1>Xomato</h1>
            <HeaderCartButton onCartClick = {props.onCartClick}></HeaderCartButton>
        </header>
        <div className={styles['main-image']}>
        <img src={mealsImage} alt="Library of delicius foods"></img>
        </div>
    </Fragment> 
}
export default Header;