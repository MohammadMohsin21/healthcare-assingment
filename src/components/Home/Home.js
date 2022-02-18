import React from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner 01.jpg';
import banner2 from '../../images/banner 02.jpg';
import banner3 from '../../images/banner 03.jpg';
import Services from '../Services/Services';
import Doctors from '../Doctors/Doctors';
import OurMassage from '../OurMassage/OurMassage';

const Home = () => {
    return (
        <div>
            <div className='banner'>
            <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide" 
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
            </div>
            <br /><br /><br />
            <Services></Services>
            <Doctors></Doctors>
            <OurMassage></OurMassage>
        </div>
    );
};

export default Home;