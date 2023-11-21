import './style.css'
import logo from '../../assets/logo.svg'
import { GridNine, Keyboard, MagnifyingGlass, Microphone, VideoCamera, Bell, UserCircle  } from '@phosphor-icons/react'


export function Header() {
    return (
        <header>
            <nav className="header__container">
                <div className='logo__item'>
                    <img src={logo} alt='logo vidflow'/>
                </div>
                <div className="search__item">
                    <form className="search__form">

                        <input type='search' placeholder='Pesquisar' className="search__input" />
                        <Keyboard size={24} className="search__input-teclado"/>
                        <button className="search__btn"><MagnifyingGlass size={24}/></button>
                        <button className="search__audio"><Microphone size={24}/></button>
                    </form>

                </div>
                <div className="header__icons">
                    <a href='#' className='header__videos'>
                        <VideoCamera size={24}/>
                    </a>
                    <a href='#' className='header__apps'>
                        <GridNine size={24}/>
                    </a>
                    <a href='#' className='header__notificacoes'>
                        <Bell size={24}/>
                    </a>
                    <a href='#' className='header__avatar'>
                        <UserCircle size={24}/>
                    </a>
                    <label className='header__switch'>
                        <input type='checkbox' className='switch__input'/>
                        <span className='switch__slider'></span>
                    </label>
                </div>
            </nav>
        </header>
    )
}
