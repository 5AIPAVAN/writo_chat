import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Mentors.css';

// Install Swiper modules


const cardData = [
  {
    name: 'Suresh Iyer 1',
    imageUrl: 'https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg',
    qualifications: 'IIT Madras, 2016',
    subjects: ['Maths', 'Physics'],
  },
  {
    name: 'Suresh Iyer 2',
    imageUrl: 'https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg',
    qualifications: 'IIT Madras, 2016',
    subjects: ['Maths', 'Physics'],
  },
  {
    name: 'Suresh Iyer 3',
    imageUrl: 'https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg',
    qualifications: 'IIT Madras, 2016',
    subjects: ['Maths', 'Physics'],
  },
  {
    name: 'Suresh Iyer 4',
    imageUrl: 'https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg',
    qualifications: 'IIT Madras, 2016',
    subjects: ['Maths', 'Physics'],
  },
  {
    name: 'Suresh Iyer 5',
    imageUrl: 'https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg',
    qualifications: 'IIT Madras, 2016',
    subjects: ['Maths', 'Physics'],
  },
  {
    name: 'Suresh Iyer 6',
    imageUrl: 'https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg',
    qualifications: 'IIT Madras, 2016',
    subjects: ['Maths', 'Physics'],
  },
  // Add more objects as needed
];

export default function Mentors() {
  return (
    <div className="outermentors my-5">

      <div className="mentorshead gradientheading">
        <h1> Prestigious & Renowed Faculty at Writo</h1>
        {/* <p> Faculty at writo</p> */}
      </div>

    <div className="slide-container swiper my-3">
      <Swiper
        className="slide-content"
        slidesPerView={3}
        spaceBetween={25}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
        }}
      >
        {cardData.map((data, i) => (
          <SwiperSlide key={i}>
          <div className="card swiper-slide">
            <div className="image-content">
              <span className="overlay"></span>
              <div className="card-image">
                <img
                  src={data.imageUrl}
                  alt={data.name}
                  className="card-img"
                />
              </div>
            </div>
            <div className="card-content">
              <h2 className="name" style={{ fontWeight: 600 }}>{data.name}</h2>
              <div className="d-flex">
                {data.subjects.map((subject, index) => (
                  <button className="button" key={index}>{subject}</button>
                ))}
              </div>
              <h5 className="name my-3">{data.qualifications}</h5>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next swiper-navBtn"></div>
      <div className="swiper-button-prev swiper-navBtn"></div>
      <div className="swiper-pagination"></div>
    </div>
    </div>
  );
}
