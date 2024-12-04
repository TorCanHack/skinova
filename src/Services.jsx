import body_contouring from './assets/bodyC.png'
import injectables from './assets/injectables.jpeg'
import laserTherapy from './assets/laser therapy.webp'
import skinRejuvenation from './assets/sjp1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Services = () => {

    return (
        <article className="w-360 lg:w-full bg-cream p-8">
            <h1 className="text-2xl text-dustyGreen font-bold mb-2 lg:text-4xl lg:-mt-8 lg:mb-8">SERVICES</h1>

            <p className='text-dustyGreen font-medium text-justify'>At Skinova Clinic, we believe that glowing skin is a reflection of both health and confidence. Our expert team is dedicated to providing tailored skincare solutions that combine science, innovation, and luxury. Whether you&apos;re looking to rejuvenate, treat specific concerns, or simply maintain your skin’s natural radiance, our range of services is designed to meet your unique needs. Explore our offerings and discover the path to your best skin yet.</p>

            <div className='lg:w-600 lg:mx-auto'>
                <div className='border border-dustyGreen rounded-3xl my-8 lg:w-360 lg:ml-auto'>
                    <h3 className='text-dustyGreen font-bold underline  my-2'>Laser Therapy</h3>
                    <img src={laserTherapy} alt='a woman having laser therapy' className='h-96 w-full rounded-2xl'/>
                    <p className='text-dustyGreen text-justify px-4 py-2'>Achieve smooth, flawless skin with our advanced laser therapy services, including hair removal, skin resurfacing, and targeted treatments for pigmentation, scars, and acne.</p>
                
                </div>

                <div className='border border-dustyGreen rounded-3xl my-8 lg:w-360 lg:mr-auto'>
                    <h3 className='text-dustyGreen font-bold underline  my-2'>Body Contouring</h3>
                    <img src={body_contouring} alt='a woman getting her body contoured' className='h-96 w-full rounded-2xl'/>
                    <p className='text-dustyGreen text-justify px-4 py-2'>Sculpt and define your body with our non-surgical fat reduction and skin tightening treatments, designed to help you achieve a toned, contoured look effortlessly.</p>
            
                </div>

                <div className='border border-dustyGreen rounded-3xl my-8 lg:w-360 lg:ml-auto'>
                    <h3 className='text-dustyGreen font-bold underline  my-2'> Skin Rejuvenation Procedure</h3>
                    <img src={skinRejuvenation} alt='a woman getting sking therapy'  className='h-96 w-full rounded-2xl' />
                    <p className='text-dustyGreen text-justify px-4 py-2'>Revitalize your skin with transformative treatments like microneedling, radiofrequency, and chemical peels. Enhance texture, even out tone, and boost elasticity for a smoother, firmer complexion.</p>
                </div>
                <div className='border border-dustyGreen rounded-3xl my-8 lg:w-360 lg:mr-auto'>
                    <h3 className='text-dustyGreen font-bold underline  my-2'>Injectables</h3>
                    <img src={injectables} alt='a woman getting injectables'  className='h-96 w-full rounded-2xl'/>
                    <p className='text-dustyGreen text-justify px-4 py-2'> Slow down the clock premium anti-aging treatments, including Botox, dermal fillers, and more. Smooth away wrinkles, enhance facial contours, and restore your skin’s youthful glow</p>
                </div>
            </div>

          <div className='flex flex-row justify-center items-center blur-sm lg:hidden'>
                <div className='h-24 w-0.5 mx-2 bg-dustyGreen '></div>
                <div className='h-24 w-0.5 mx-2 bg-dustyGreen '></div>
                <div className='h-24 w-0.5 mx-2 bg-dustyGreen '></div>
          </div>

          <button className='h-7 w-52 bg-dustyGreen rounded-2xl text-white mt-4 lg:h-12 lg:w-64 lg:text-lg'>
            <Link to='/booking'>
                Book an Appointment <FontAwesomeIcon icon={faCalendar} color='white'/>
            </Link>
          </button>
            
        </article>

    )

}

export default Services