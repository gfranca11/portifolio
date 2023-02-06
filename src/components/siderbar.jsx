
import "../styles/components/sidebar.sass"

import {AiFillLinkedin, AiFillGithub, AiFillPhone, AiOutlineMail, AiFillEnvironment
   } from "react-icons/ai";

import Avatar from "../img/W.jpg"
const Sidebar = () => {
  return (
    <div id="side">
       <img src={Avatar}/>
        <p className="title"> Desenvolvedor Front-end</p>
       
        <section id="information">
           <div className="icon">
            <a href="https://www.linkedin.com/in/geovani-fran%C3%A7a-/" target="_blank" rel="noopener noreferrer"> <AiFillLinkedin className="lik"/></a>
            <a href="https://www.linkedin.com/in/geovani-fran%C3%A7a-/" target="_blank" rel="noopener noreferrer"> <AiFillGithub className="git"/></a>
          
           </div>
      <div className="info-card">
       
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(11)97955-4194</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>geovanifrancaprogramador@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>CARAPICUIBA / SP</p>
        </div>
      </div>
    </section>
        
      
       
        <a href="" className="btn">Download curriculo</a>
       
    </div>
    
  );
};

export default Sidebar;