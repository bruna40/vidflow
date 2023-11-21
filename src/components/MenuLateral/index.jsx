import './style.css'

export function MenuLateral() {
    return (
        <aside className="menu__container">
             <ul className="menu__lista">
                <li>
                    <a className="menu__itens" href="#">
                        <i className="icone__inicio icone-item"></i>
                        <span>Início</span></a>
                </li>
    
                <li>
                    <a className="menu__itens" href="#">
                        <i className="icone__explorar icone-item"></i>
                        <span>Explorar</span></a>
                </li>
    
                <li>
                    <a className="menu__itens" href="#">
                        <i className="icone__shorts icone-item"></i>
                        <span>Shorts</span></a>
                </li>
    
                <li>
                    <a className="menu__itens" href="#">
                        <i className="icone__inscricoes icone-item"></i>
                        <span>Inscrições</span></a>
                </li>
    
                <li>
                    <a className="menu__itens" href="#">
                        <i className="icone__biblioteca icone-item"></i>
                        <span>Biblioteca</span></a>
                </li>
            </ul>
    
            <ul className="menu__lista">
                <li>
                    <a className="menu__itens" href="#">
                        <i className="icone__historico icone-item"></i>
                        <span>Histórico</span></a>
                </li>
    
                <li>
                    <a className="menu__itens" href="#">
                        <i className="icone__relogio icone-item"></i>
                        <span>Assistir mais tarde</span></a>
                </li>
    
                <li>
                    <a className="menu__itens" href="#">
                        <i className="icone__like icone-item"></i>
                        <span>Marcados com like</span></a>
                </li>
            </ul>
    
            <ul className="menu__lista">
                <li>
                    <a className="menu__itens" href="#">
                        <i className="icone__mostrar icone-item"></i>
                        <span>Mostrar mais 2</span></a>
                </li>
    
                <li>
                    <a className="menu__itens" href="#">
                        <i className="icone__deschamps icone-item"></i>
                        <span>Felipe Deschamps</span></a>
                </li>
    
                <li>
                    <a className="menu__itens" href="#">
                        <i className="icone__nerd icone-item"></i>
                        <span>Jovem Nerd</span></a>
                </li>
    
                <li>
                    <a className="menu__itens" href="#">
                        <i className="icone__souto icone-item"></i>
                        <span>Mario Souto</span></a>
                </li>
    
                <li>
                    <a className="menu__itens" href="#">
                        <i className="icone__iamarino icone-item"></i>
                        <span>Atila Iamarino</span></a>
                </li>
    
                <li>
                    <a className="menu__itens" href="#">
                        <i className="icone__ballerini icone-item"></i>
                        <span>Rafaella Ballerini</span></a>
                </li>
    
                <li>
                    <a className="menu__itens" href="#">
                        <i className="icone__gaveta icone-item"></i>
                        <span>Gaveta</span></a>
                </li>
    
                <li>
                    <a className="menu__itens" href="#">
                        <i className="icone__alura icone-item"></i>
                        <span>Alura</span></a>
                </li>
    
                <li>
                    <a className="menu__itens inscricoes" href="#">INSCRIÇÕES</a>
                </li>
            </ul>
    
            <ul className="menu__lista">
                <li className="jogos">
                    <a className="menu__itens" href="#">
                        <i className="icone__jogos icone-item"></i>
                        <span>Jogos</span></a>
                </li>
    
                <li className="filmes">
                    <a className="menu__itens" href="#">
                        <i className="icone__filmes icone-item"></i>
                        <span>Filmes</span></a>
                </li>
                <li className="premium">
                    <a className="menu__itens" href="#">
                        <i className="icone__videos icone-item"></i>
                        <span>Vídeo Premium</span></a>
                </li>
    
                <li className="menu__itens">
                    <a href="#">MAIS DA PÁGINA</a>
                </li>
    
            </ul>
        </aside>
    )
}