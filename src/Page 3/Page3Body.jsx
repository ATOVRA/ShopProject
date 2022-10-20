import React from 'react'
import './Page3Body.css'
import Header from '../Page 1/Header'
import Footer from '../Page 1/Footer'
import WomensWear from '../Image/Womens wear.png'
import MensWear from '../Image/Mans wear.png'
import KidsWear from '../Image/Kids wear.png'
import Shoes from '../Image/Shoes.png'
import Sumki from '../Image/Sumki.png'
import Glasses from '../Image/Glasses.png'
import Underwear from '../Image/Underwear.png'
import Decorations from '../Image/Decorations.png'
import HomeTextiles from '../Image/Home texttiles.png'
import Toys from '../Image/Toys.png'
import FooterResponsive from '../Page 1/FooterResponsive'








const Page3Body = () => {
  return (
    <main>
        <Center/>
    </main>
  )
}
export default Page3Body;

const Center = () =>{
    return(
        <section className='Center'>
            <h1>Категории</h1>
            <div className='catigoriesDivs'>
                <div>
                    <img src={WomensWear} alt="" />
                    <p>Women’s wear</p>
                </div>
                <div>
                    <img src={MensWear} alt="" />
                    <p>Men’s wear</p>
                </div>
                <div>
                    <img src={KidsWear} alt="" />
                    <p>Kid’s wear</p>
                </div>
                <div>
                    <img src={Shoes} alt="" />
                    <p>Shoes</p>
                </div>
            </div>

            <div className='catigoriesDivs'>
                <div>
                    <img src={Sumki} alt="" />
                    <p>Сумки</p>
                </div>
                <div>
                    <img src={Glasses} alt="" />
                    <p>Accessories</p>
                </div>
                <div>
                    <img src={Underwear} alt="" />
                    <p>Underwear</p>
                </div>
                <div>
                    <img src={Decorations} alt="" />
                    <p>Decorations</p>
                </div>
            </div>

            <div className='catigoriesDivsBottom'>
                <div>
                    <img src={HomeTextiles} alt="" />
                    <p>Home textiles</p>
                </div>
                <div>
                    <img src={Toys} alt="" />
                    <p>Wholesale</p>
                </div>
            </div>
        </section>
    )
}