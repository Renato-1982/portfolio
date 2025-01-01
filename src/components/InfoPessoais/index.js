import React from 'react';
import { FaDev, FaYoutube, FaLinkedin, FaGithub, FaMapMarkerAlt, FaRegEnvelope } from 'react-icons/fa';
import { Container, Informacoes, DadosPerfil, Funcao, RedeSociais, Detalhes,DadosEndereco } from './styles';
import Imagem from "../../img/1.jpg";

export default function InfoPessoais() {
  return (
    <Container>
      <Informacoes>
        <DadosPerfil>
          <img src={Imagem} alt='Imagem Perfil'/>
          <h1>Renato Antônio</h1>
        </DadosPerfil>
        <Funcao>
          <FaDev size={20} />
          <span>Web Developer</span>
        </Funcao >
        <RedeSociais>
          <div>
            <a href='https://www.youtube.com/@renatoantonio1982' target={'_blank'}><FaYoutube size={25} /></a>
            <a href='https://www.linkedin.com/in/renato-antonio-12b810338/' target={'_blank'}><FaLinkedin size={25} /></a>
            <a href='https://github.com/Renato-1982' target={'_blank'}><FaGithub size={25} /></a>
          </div>
        </RedeSociais>
        <DadosEndereco>
          <Detalhes>
            <FaMapMarkerAlt size={20} />
            <span>Sete Lagoas - MG, Brasil</span>
          </Detalhes>
          <Detalhes>
            <FaRegEnvelope size={20}/>
            <span>renatoantonio219@gmail.com</span>
          </Detalhes>
        </DadosEndereco>
      </Informacoes>
    </Container>
  );
}
