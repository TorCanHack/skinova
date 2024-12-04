import skincare from './assets/skincare.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
const Blog = () => {

    return (
        <section>
            <h1 className='text-2xl text-dustyGreen font-bold'>
                <span className='mr-4'>BLOG</span>
                <FontAwesomeIcon icon={faNewspaper}/>
            </h1>
            <div className="flex flex-col justify-center items-center">
                <div className='w-48 h-0.5 bg-dustyGreen blur-md mb-4'></div>
                <div className='w-48 h-0.5 bg-dustyGreen blur-md mb-4'></div>
                <div className='w-48 h-0.5 bg-dustyGreen blur-md mb-4'></div>
            </div>

            <article className='px-8 text-dustyGreen text-justify'>
                <img src={skincare} alt='skin care' className='w-full h-48 px-8 lg:w-600 lg:h-96 lg:mx-auto lg:mb-8'/>

                <h3 className='text-dustyGreen text-2xl font-bold my-3 underline lg:text-center lg:mb-8'>Glow Up: Essential Tips for Radiant Skin</h3>

                <p className='font-light lg:text-lg'>Your skin is your body’s largest organ and plays a vital role in protecting you from the outside world. Caring for it not only enhances your appearance but also supports your overall health. Whether you’re starting your skincare journey or looking to refine your routine, these simple yet effective tips will help you achieve healthy, glowing skin</p>

                <ol className='list-decimal pl-8 mt-4 font-light lg:text-lg'>
                    <li className='mb-4'>Cleanse Daily: Wash your face twice a day to remove dirt, oil, and impurities. Use a gentle cleanser suited to your skin type to prevent irritation.</li>

                    <li className='mb-4'>Stay Hydrated: Drink plenty of water throughout the day to keep your skin plump and moisturized from within.</li>

                    <li className='mb-4'>Moisturize: Apply a moisturizer daily, even if you have oily skin. Opt for lightweight, non-comedogenic products for oily or acne-prone skin and richer creams for dry skin.</li>

                    <li className='mb-4'>Protect with Sunscreen: Use a broad-spectrum sunscreen with SPF 30 or higher every day, even on cloudy days. This prevents sun damage and reduces the risk of premature aging.</li>

                    <li className='mb-4'>Exfoliate Gently: Exfoliate 1-2 times per week to remove dead skin cells and promote cell turnover. Avoid over-exfoliating, as it can cause irritation.</li>

                    <li className='mb-4'>Healthy Diet: Include fruits, vegetables, and healthy fats in your diet. Foods rich in antioxidants and omega-3 fatty acids promote glowing skin.</li>

                    <li className='mb-4'>Limit Stress: High stress levels can trigger skin issues like acne. Practice stress-relieving activities like meditation or exercise.</li>

                    <li className='mb-4'>Sleep Well: Aim for 7-9 hours of quality sleep each night to allow your skin time to repair and regenerate.</li>

                </ol>

                <p className='font-light lg:text-lg'>Consistency is key when it comes to skincare. Adopting these habits can lead to healthier, glowing skin over time.</p>

            </article>

            <div className="flex flex-col justify-center items-center mt-8">
                <div className='w-48 h-0.5 bg-dustyGreen blur-md mb-4'></div>
                <div className='w-48 h-0.5 bg-dustyGreen blur-md mb-4'></div>
                <div className='w-48 h-0.5 bg-dustyGreen blur-md mb-4'></div>
            </div>



        </section>
    )

}

export default Blog;