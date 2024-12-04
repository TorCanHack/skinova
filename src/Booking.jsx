import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const Booking = () => {

    return (
        <section className='text-dustyGreen px-4'>
            <h1 className='text-2xl text-dustyGreen font-bold lg:text-4xl lg:mb-8 '>
                BOOK AN APPOINTMENT
                <FontAwesomeIcon icon={faCalendar} className='lg:ml-4'/>
            </h1>

            <form className='border border-dustyGreen rounded-2xl px-4 lg:text-lg lg:w-600 lg:mx-auto lg:px-6 lg:mb-6'>
                <label className='flex justify-between my-4 '>
                    Name
                    <input name='full_name' type='text' required minLength={2} maxLength={50} className='ml-4 border border-dustyGreen rounded-2xl px-4 lg:w-4/5'/>
                </label>

                <label className='flex justify-between  my-4 lg:mb-6'>
                    Email
                    <input name='email' type='email' required className='ml-4 border border-dustyGreen rounded-2xl px-4 lg:lg:w-4/5' />
                </label>

                <label className='flex justify-between  my-4 lg:mb-6'>
                    Phone
                    <input name='phone' type='tel' required minLength={11} className='ml-4 border border-dustyGreen rounded-2xl px-4 lg:w-4/5' />
                </label>

                <label className='flex   my-4 lg:mb-6'>
                    Date
                    <input name='date' type='date'  className=' border border-dustyGreen rounded-2xl px-4 ml-20 lg:w-4/5 '/>
                </label>

                <select name='time' className='w-full border border-dustyGreen rounded-2xl px-4 mb-4 lg:mb-6'>
                    <option value="" disabled selected>Pick a time</option>
                    <option value="morning">Monring</option>
                    <option value="Noon">Noon</option>
                    <option value="Evening">Evening</option>
                </select>

                <select name="services" className='w-full border border-dustyGreen rounded-2xl px-4 mb-4 lg:mb-8 '>
                    <option value="" disabled selected className='w-full'>Select a service </option>
                    <option value="laser therapy"> Laser Therapy</option>
                    <option value="Injectbales">Injectables</option>
                    <option value="skin rejuvenation procedure">Skin Rejuvenation Procedure</option>
                    <option value='body contouring'>Body Contouring</option>
                </select>

                <label className='lg:my-8'>
                    I agree to the clinic’s terms and cancellation policy.
                    <input type='checkbox' className='accent-dustyGreen'  required/>
                </label>

                <button type='submit' className='h-6 w-full my-4 bg-dustyGreen rounded-2xl text-white lg:h-12 lg:text-lg lg:my-8'>Submit</button>

            </form>
        </section>
    )

}

export default Booking;