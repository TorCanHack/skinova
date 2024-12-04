import hero from './assets/models.png'
import Slider from 'react-slick';
import body_contouring from './assets/bodyC.png'
import injectables from './assets/injectables.jpeg'
import laserTherapy from './assets/laser therapy.webp'
import skinRejuvenation from './assets/sjp1.png'
import skincare from './assets/skincare.webp'
import headshot1 from './assets/headshot1.webp'
import headshot2 from './assets/headshot2.jpeg'
import headshot3 from './assets/headshot3.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {

    const settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <section>
             <article className='px-4 '>
                <img src={hero} alt='models smilling' className='rounded-2xl lg:w-full lg:blur '/>
                <h1 className='relative bottom-28 lg:bottom-80 font-bold text-white text-3xl lg:text-6xl'>UNLOCK YOUR NATURAL GLOW</h1>

                <div className='flex flex-row  justify-between items-center -mt-16 lg:-mt-0'>
                    <div className='h-0.5 w-12 bg-dustyGreen rounded-2xl blur-sm lg:w-64'></div>
                    <button className='h4 w-44 bg-dustyGreen rounded-2xl  text-white lg:h-12 lg:w-64 lg:text-lg'>
                         Book an Appointment
                    </button>
                    <div className='h-0.5 w-12 bg-dustyGreen rounded-2xl blur-sm lg:w-64'></div>
                </div>

                <div className='flex flex-row justify-between items-center my-8 lg:text-lg'>
                    <div className='h-16 w-0.5 bg-dustyGreen blur-sm lg:h-48'></div>
                    <div className='lg:flex lg:flex-col lg:justify-center lg:items-center'>
                        <h2 className='text-dustyGreen'>Transform Your Skin</h2>
                        <div className='w-48 h-0.5 bg-dustyGreen blur-sm mb-2'></div>
                        <h2 className='text-dustyGreen'>Transform Your Appearance </h2>
                        <div className='w-48 h-0.5 bg-dustyGreen blur-sm mb-2 lg:w-56'></div>
                        <h2 className='text-dustyGreen'>Transform Your Life</h2>
                        <div className='w-48 h-0.5 bg-dustyGreen blur-sm mb-2'></div>
                    </div>
                    <div className='h-16 w-0.5 bg-dustyGreen blur-sm lg:h-48'></div>
                </div>
      </article>

     <article className='px-8 lg:w-600  lg:mx-auto lg:mb-8'>
            <h2 className='mb-4 text-dustyGreen font-bold lg:text-4xl'>OUR SERVICES</h2>
            <Slider {...settings}>
                <div className='h-60 lg:h-72'>
                    <img src={laserTherapy} alt='a woman having laser therapy' className='h-96 w-full '/>
                    <h3 className='text-dustyGreen lg:text-xl lg:my-6 lg:font-semibold'>Laser Therapy</h3>
                </div>

                <div className='h-60 lg:h-72'>
                    <img src={body_contouring} alt='a woman getting her body contoured' className='h-96 w-full'/>
                    <h3 className='text-dustyGreen lg:text-xl lg:my-6 lg:font-semibold'>Body Contouring</h3>
                </div>

                <div className='h-60 lg:h-72'>
                    <img src={skinRejuvenation} alt='a woman getting sking therapy'  className='h-96 w-full' />
                    <h3 className='text-dustyGreen lg:text-xl lg:my-6 lg:font-semibold'> Skin Rejuvenation Procedure</h3>
                </div>

                <div className='h-60 lg:h-72'>
                    <img src={injectables} alt='a woman getting injectables'  className='h-96 w-full'/>
                    <h3 className='text-dustyGreen lg:text-xl lg:my-6 lg:font-semibold'>Injectables</h3>
                </div>
        
            </Slider>
        </article>

        <article className='my-8 px-8'>
            <div className='bg-dustyGreen w-full h-2 mt-4 lg:h-0.5 lg:bg-transparent lg:mt-10'></div>
            <h2 className='mb-4 text-dustyGreen font-bold lg:text-4xl lg:mt-6'>BLOG</h2>
            <img src={skincare} alt='skin care' className='w-full h-48 px-8 lg:w-600 lg:h-72 lg:mx-auto'/>
            <h3 className='text-dustyGreen text-2xl font-bold my-3 underline lg:my-8'>Glow Up: Essential Tips for Radiant Skin</h3>
            <p className='font-light text-justify lg:text-lg lg:w-600 lg:mx-auto'>Your skin is your body’s largest organ and plays a vital role in protecting you from the outside world. Caring for it not only enhances your appearance but also supports your overall health. Whether you’re starting your skincare journey or looking to refine your routine, these simple yet effective tips will help you achieve healthy, glowing skin...<a className='underline text-dustyGreen' href='www.example.com'>Read more</a></p>
        </article>

        <article className='lg:mb-8'>
            <h2 className='font-bold text-dustyGreen underline text-2xl lg:text-4xl'>TESTIMONIALS</h2>
            <div className='lg:flex lg:flex-row lg:justify-around'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={headshot1} alt='woman smiling' className='relative top-8 h-14 w-14 rounded-full'/>
          
                    <p className='bg-dustyGreen w-72 px-4 py-8 rounded-2xl text-cream'> Mary<br className='mb-4'/>&quot;I’ve struggled with acne for years, trying countless products with little success. But after visiting this skinova clinic, everything changed. The personalized treatments and expert advice have transformed my skin! My confidence has soared, and I finally feel comfortable in my own skin. I can’t recommend this clinic enough—it’s truly life-changing!&quot;</p>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <img src={headshot2} alt='woman smiling' className='relative top-8 h-14 w-14 rounded-full'/>
          
                    <p className='bg-dustyGreen w-72 px-4 py-8 rounded-2xl text-cream'> Lisa<br className='mb-4'/> &quot;The team at the Skinova clinic is phenomenal! From the moment I walked in, I felt welcomed and cared for. They took the time to understand my concerns and explained every step of the process. Their expertise and professionalism are unmatched. I always leave with glowing skin and a smile on my face. Highly recommended!&quot;</p>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <img src={headshot3} alt='woman smiling' className='relative top-8 h-14 w-14 rounded-full' />
          
                    <p className='bg-dustyGreen w-72 px-4 py-8 rounded-2xl text-cream'> Chineye<br className='mb-4'/>  &quot;Visiting the Skinova clinic feels like a mini getaway. The atmosphere is so calming, and the treatments are pure luxury. My skin has never felt so soft and radiant, and I love how they use top-quality products. If you’re looking for a place to pamper yourself while getting real results, this is it!&quot;</p>
                </div>
            </div>

        </article>
    </section>
    )

}

export default Home;