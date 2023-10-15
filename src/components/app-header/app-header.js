import './app-header.scss'

function Header () {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <img src="../../imgs/icons/coffee-beans.png" alt="beans" />
                <a href="#">Coffee house</a>
                <a href="#">Our coffee</a>
                <a href="#">For your pleasure</a>
            </nav>

            <h2 className='header__title'>Our Coffee</h2>
        </header>
    )
};

export default Header;