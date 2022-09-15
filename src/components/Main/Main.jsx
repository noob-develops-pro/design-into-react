import React from 'react'
import {
  img_1,
  img_2,
  img_3,
  img_4,
  img_5,
  img_6,
  img_7,
  img_8,
  img_9,
  img_10,
  serve_chiken,
} from '../images/images'
import { FaShoppingBasket } from 'react-icons/fa'
import { BiDish } from 'react-icons/bi'
function Main() {
  return (
    <section className='main'>
      <MainTop />
      <MainGrid />
    </section>
  )
}

const OurStory = () => {
  return (
    <div className='story-relative'>
      <div className='story btn'>our Story</div>
      <div className='left'></div>
      <div className='right'></div>
    </div>
  )
}

function MainTop() {
  return (
    <>
      <div className='main-top'>
        <div className='top-left'>
          <div className='box'>
            <h2>
              Serving
              <br /> with <span>love</span>
            </h2>
            <img src={serve_chiken} alt='' />
          </div>
        </div>
        <div className='top-right'>
          <h2>Lorem ipsum dolor sit amet, has graeco</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            eligendi sapiente, quos velit cupiditate vitae a aperiam aut ducimus
            dignissimos, officiis eveniet dolore veniam magni odit, explicabo
            tenetur quas nobis!
          </p>
          <button className='btn btn-lg'>read more</button>
        </div>
      </div>
      <OurStory />
    </>
  )
}

const GridItem = ({ url, lg = false }) => {
  const lgWidth = 29.8 * 2 + 'rem'
  const smWidht = 29.25 + 'rem'
  console.log(lgWidth, lg)

  if (lg) {
    return (
      <div className='card'>
        <div className='card-top' style={{ width: lgWidth }}>
          <img src={url} alt='item-1' />
        </div>
      </div>
    )
  } else {
    return (
      <div className='card'>
        <div className='card-top' style={{ width: smWidht }}>
          <img src={url} alt='item-1' />
          <div className='card__catagory'>
            <div className='title-wraper'>
              <div className='card__catagory--title'>
                <p>coocking</p>
                <BiDish className='dish' />
              </div>
            </div>
            <div className='card__catagory--order'>
              <div className='basket-wraper'>
                <FaShoppingBasket className='shopingBasket' />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function MainGrid() {
  return (
    <div className='grid__container wrap'>
      <GridItem url={img_1} lg={true} />
      <GridItem url={img_2} />
      <GridItem url={img_3} />
      <GridItem url={img_4} />
      <GridItem url={img_5} />
      <GridItem url={img_6} />
      <GridItem url={img_7} />
      <GridItem url={img_8} />
      <GridItem url={img_9} />
      <GridItem url={img_10} />
      <GridItem url={img_8} />
    </div>
  )
}
export default Main
