import Navbar from './components/navbar/Navbar'
import Card from './components/card/Card'
import LinkCard from './components/linksCard/LinksCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.css'
import fotoMatheus from './img/foto_matheus.png';
import anexar from './img/anexar.jpg'
export default function App() { 
  return (
    <>
      <Navbar/>
      <main className='container-principal'>
        <section className='hero-section'>
          <div className='hero-text'>
          <h1>Matheus Bruckmann Morilha Teles</h1>
          <p>Analista Funcional focado na sustentação de sistemas de Recursos Humanos, com atuação 
            em suporte N3, SAP HCM e SuccessFactors. Possuo experiência em projetos envolvendo integrações 
            com soluções terceiras, sendo responsável pelo entendimento de processos, análise de requisitos, 
            validações, testes de software e elaboração de documentações. Presto também apoio técnico na 
            construção e manutenção de integrações no Integration Suite (CPI), garantindo o alinhamento com 
            as áreas de negócio e a qualidade técnica das entregas.</p>
            <div className='hero-links'>
              <LinkCard name='LinkedIn' url='https://www.linkedin.com/in/matheus-bruckmann-morilha-teles-64b536256/' />
              <LinkCard name='GitHub' url='https://github.com/MatheusMorilha' />
              <LinkCard name='Gmail' url='mailto:matheusmorilha04@gmail.com' />
            </div>
            </div>
            <div className='hero-img'>
              <img src={fotoMatheus} alt="foto" />
            </div>
        </section>
        <section id='project-link' className='project-section'>
          <div className='project-text'>
            <h1>Projetos</h1>
            <p>Nesta seção, apresento alguns dos projetos que desenvolvi ao longo da minha trajetória. Cada 
              um deles representa um desafio superado e uma oportunidade de aprendizado, onde pude aplicar 
              conhecimentos técnicos e explorar novas tecnologias na prática.</p>
          </div>
          <div className='card-container'>
            <Card
            image={anexar}
            title='Projeto'
            description='Descrição do projeto'/>

            <Card
            image={anexar}
            title='Projeto'
            description='Descrição do projeto'/>

            <Card
            image={fotoMatheus}
            title='Projeto'
            description='Descrição do projeto'/>

            <Card
            image={anexar}
            title='Projeto'
            description='Descrição do projeto'/>          
          </div>
        </section>
      </main>
    </>
  )
}