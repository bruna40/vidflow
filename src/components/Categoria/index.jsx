import { ArrowRight } from "@phosphor-icons/react";
import './style.css'

export function Categoria() {
    return (
        <section className="superior__secao__container">
            <div className="superior__secao__container-wrapper">
                <a href="#" name="Tudo" className="superior__item">Tudo</a>
                <a href="#" name="Debates" className="superior__item">Debates</a>
                <a href="#" name="Ao Vivo" className="superior__item">Ao Vivo</a>
                <a href="#" name="Podcasts" className="superior__item">Podcasts</a>
                <a href="#" name="Front-end" className="superior__item">Front-end</a>
                <a href="#" name="Mobile" className="superior__item">Mobile</a>
                <a href="#" name="Data Science" className="superior__item">Data Science</a>
                <a href="#" name="Apps" className="superior__item">Apps</a>
                <a href="#" name="Programação" className="superior__item">Programação</a>
                <a href="#" name="Inteligência Artificial" className="superior__item">Inteligência Artificial</a>
                <a href="#" name="Inovação" className="superior__item">Inovação</a>
            </div>
            <label className="superior__slider">
                <span><ArrowRight size={24} /></span>
            </label>
        </section>
    )
}