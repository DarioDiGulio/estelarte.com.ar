import React, { useEffect, useRef, useState } from "react"

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './styles.css'
import logo from "../../assets/logo.png"
import close from "../../assets/close-x.png"
import arrow from "../../assets/arrow.png"
import { Category } from "./Cuadro";
import { categories } from "./Categorias"

function Arrow(props: any) {
    const { className, style, onClick } = props;

    return (
        <div
        className={className}
        style={{ ...style, background: "#c2b58f", borderRadius: "10px" }}
        onClick={onClick}
      />
    );
  }
  
export const Galeria: React.FC = () => {    
    const [openModal, setOpenModal] = useState(false)
    const [modalData, setModalData] = useState()

    useEffect(() => {
        openModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
     }, [openModal]);

    const handleModal = (data: any) => {
        setOpenModal(!openModal)
        setModalData(data)
    }
    
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true, 
        infinite: true,
        pauseOnHover: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 1000,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />    
    }
    
    return <section className="static">
        <section className="galeryHeader">
            <img className='w-11/12 my-[165px]' src={logo} alt='Estelarte'/>
            <p className="w-10/12 text-grey300 mt-10 mb-[120px]">
                El mágico momento de estar frente a un
                <span className="font-bold text-grey300"> lienzo blanco</span>
                y ser al mismo tiempo protagonista y espectadora de la maravillosa transformación de la obra que empieza a vivir desde las
                <span className="font-bold text-grey300"> pinceladas</span>,
                tomando de mi el patrimonio más sensible, para mostrarlo a quien quiera ver
                <span className="font-bold text-grey300"> mis emociones pintadas.</span>
            </p>
        </section>

        {renderSections()}

        {
            openModal && renderModal(modalData)
        }
    </section>

    function renderSections() {
        return <div className="sectionsContainer">
            {categories.map(category => render(category))}
        </div>
    }

    function render(category: Category) {
        return <div key={category.title} className="w-full h-fit flex flex-col justify-center items-center gap-5">
            <h1 className="title">{category.title}</h1>
            <Slider {...settings} className="w-10/12 h-[560px]">
                {
                    category.items.map(item => (                        
                            <div className="w-fit">
                                <img key={item.src} className='h-[550px] object-contain cursor-pointer m-auto z-40' src={item.src} alt={item.title} onClick={() => handleModal(item)}/>
                            </div>
                        ))
                    }
            </Slider>
        </div>
    }

    function renderModal(modalData: any) {
        return <div className="w-screen h-screen flex justify-center items-center bg-white fixed top-0 z-1">
            <img src={close} alt="" className="absolute top-5 right-5 w-8"  onClick={() => handleModal(null)}/>
            <img src={modalData.src} alt="" className="w-1/2 h-full object-cover" />
            <div className="w-1/2 p-[30px] flex flex-col gap-5">
                <h3 className="text-4xl text-black100">{modalData.title}</h3>
                <p className="text-black200">{modalData.description}</p>
            </div>
        </div>
    }
}
