import logo from './assets/logo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'
import clinicEquipment from './assets/clinic equipments.webp'
import clinicEquipment3 from './assets/clinc equipment3.webp'
import clinicEquipment6 from './assets/clinc equipment6.webp'

const AboutUs = () => {

    return (
        <section className='px-4 text-justify text-dustyGreen lg:relative'>
            <h1 className="text-2xl text-dustyGreen font-bold mb-2 lg:text-4xl  lg:mb-8 lg:text-center">About Us</h1>
            <img src={logo} alt='logo' className='w-52 mx-auto lg:hidden'/>
            <img src={clinicEquipment} alt='clinic equipment' className='mb-4 lg:w-full'/>

            <p className=' my-6 lg:text-lg lg:my-8 lg:px-20'>Skinova Clinics is a network of specialized medical aesthetic centers offering advanced skincare and cosmetic treatments. These clinics focus on providing non-invasive and minimally invasive procedures aimed at enhancing the skin&apos;s health and appearance.</p>
            
            <img src={clinicEquipment3} alt='clinic equipment' className='lg:w-full'/>

            <p className='my-6 lg:text-lg lg:my-8 lg:px-20'>We are staffed by dermatologists and certified practitioners, Skinova Clinics emphasize patient safety, quality care, and the use of cutting-edge technology to achieve natural, youthful results. Their focus is on delivering personalized treatment experiences, improving skin health, and enhancing overall aesthetic appearance</p>

            <img src={clinicEquipment6} alt='clinic equipment' className='mb-4 lg:w-full '/>

            <article className='my-8 '>
                <h2 className='text-2xl mb-5 lg:text-center lg:text-3xl font-semibold '>Contact Us</h2>
                <p className='mb-5'>We’d love to hear from you! Whether you have questions about our services, need skincare advice, or want to book an appointment, feel free to reach out.</p>

                <p className='mb-2'><FontAwesomeIcon icon={faPhone}/> 09072191987</p>
                <p className='mb-2'><FontAwesomeIcon icon={faEnvelope}/> contact@skinovaclinicservices.com</p>
                <p className='mb-2'><FontAwesomeIcon icon={faHome}/>Jahi, Abuja, Nigeria</p>

                <div>
                    <p className='mb-2'>Business Hours</p>
                    <ul>
                        <li className='mb-2'>Monday to Friday: 7am - 7pm</li>
                        <li className='mb-2'>Saturday: 9am-7pm</li>
                    </ul>
                </div>
                
            </article>
                

        </section>
    )

}

export default AboutUs;