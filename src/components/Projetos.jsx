import Avatar from "../img/a.gif"
import Quiz from "../img/b.gif"
import Gerador from "../img/c.gif"
import Mercado from "../img/e.gif"
import Cep from "../img/h.gif"
import Relogio from "../img/u.gif"

const Projetos = ()=>{


    return(
        <div className="Projetos">
             <div className="linha"><h2> Projetos</h2>
          <span></span>
          </div>  
          <div className="cardc">
            <div className="card">
                <img src={Avatar}/>
                <p className="fifa">PAGINA DE GAMES DA EA SPORTS</p>
                <a href="https://eategame.netlify.app/" target="_blank" className="btn">Ver Projeto</a>
                
            </div>
            <div className="card">
                <img src={Quiz}/>
                <p>QUESTIONÁRIO COPA DO MUNDO</p>
                <a href="https://quizh.netlify.app/" target="_blank" className="btn">Ver Projeto</a>
                
            </div>
            <div className="card">
                <img src={Mercado}  />
                <p className="mercado"> PROJETO  MINI MERCADO </p>
                <a href="https://mercardofranca.netlify.app/" target="_blank" className="btn">Ver Projeto</a>
                
                
            </div>
            <div className="card">
                <img src={Gerador} />
                <p>GERADOR DE SENHAS</p>
                <a href="https://geradorsenhageo.netlify.app/" target="_blank" className="btn">Ver Projeto</a>
                
                
            </div>
            <div className="card">
                <img src={Cep} />
                <p className="mercado"> BUSCADOR VIA CEP</p>
                <a href="https://via-cep-three.vercel.app/" target="_blank" className="btn">Ver Projeto</a>
                
                
            </div>
            <div className="card">
                <img src={Relogio} />
                <p > RELOGIO ANALOGICO E DIGITAL</p>
                <a href="https://relogiogeo.netlify.app/" target="_blank" className="btn">Ver Projeto</a>
                
                
            </div>
           
          </div>
          <a href="https://github.com/gfranca11" target="_blank" className="btn ls">Ver Mais Projetos</a>
                
             </div>
       
    )
}
export default Projetos