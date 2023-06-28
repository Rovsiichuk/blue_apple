import React, { useRef } from 'react';
import { motion } from 'framer-motion'
import { variantsMain } from '@/const/animation'
import Slider from 'react-slick'

const ReviewsSection = () => {
  const sliderRef = useRef(null);

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const cardReview = [
    {
      img: '1',
      name: 'Jason Seed',
      role: 'CEO, ActionHRM, Inc',
      review: 'BlueApple was an essential part of our global rebrand. The team rapidly understood our requirements, quoted quickly and accurately and the execution of the process was top-notch.'
    },
    {
      img: '2',
      name: 'Wendy Caceres',
      role: 'CMO, Inseego Corp.',
      review: 'BlueApple gets it. Whether a professional pitch deck, a trade show booth, or website – they understand how to tell the story visually.'
    },
    {
      img: '3',
      name: 'Don Haugen',
      role: 'Creative Director, Inseego Corp.',
      review: 'Working with BlueApple was like collaborating with an internal team, clear and concise communication, a truly receptive environment.'
    },
    {
      img: '2',
      name: 'Wendy Test',
      role: 'Creative Director, Inseego Corp.',
      review: 'Working with BlueApple was like collaborating with an internal team, clear and concise communication, a truly receptive environment.'
    }
  ]
  return (
    <>
      <div className="reviewSection">
        <motion.h1 className="mainTitle" style={ { margin: '0 auto 50px auto' } } variants={ variantsMain } initial="hidden" whileInView="visible" custom={ 4 }>What our clients say</motion.h1>
        <div className="slider-container">
          <Slider {...settings} ref={sliderRef}>
            {
              cardReview.map((x, index) => {
                return (
                  <div key={ index } className="card">
                    <img src={ `../avatar/${ x.img }.png` } />
                    <div className="name">{ x.name }</div>
                    <div className="role">{ x.role }</div>
                    <div className="review">{ x.review }</div>
                  </div>
                )
              })
            }
          </Slider>
          <div className="slider-buttons">
            <button onClick={goToPrevSlide}>Previous</button>
            <button onClick={goToNextSlide}>Next</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewsSection