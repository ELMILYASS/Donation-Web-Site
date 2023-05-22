import Title from './Title'
import contact from '../../assets/contact.png'
import SocialMedia from './SocialMedia'
import Info from './Info'
import Info2 from './Info2'
const Contact = () => {
  return (
    <div className='relative overflow-x-hidden'>
        <Title title='Contact Us' color='bg-green2'/>
        <div className='flex md:flex-row flex-col-reverse items-center justify-center md:gap-20 gap-3 px-10'>
            <Info2/>
            <div className='flex-col gap-4 flex md:items-start items-center'>
                <h3 className='text-xl text-green6 font-bold'>Get in touch with us</h3>
                <p className='text-textcolor text-sm font-medium'>We are here for you! How can we help</p>
                <input className='sm:w-[400px] w-[90vw] rounded-xl px-2  bg-bginput py-2 border-none outline-none placeholder:text-textinput' type="text" placeholder='Enter your name' />
                <input className='sm:w-[400px] w-[90vw] rounded-xl px-2  bg-bginput py-2 border-none outline-none placeholder:text-textinput' type="text" placeholder='Enter your name' />
                <input className='sm:w-[400px] w-[90vw] rounded-xl px-2  bg-bginput pb-[200px] py-2 border-none outline-none placeholder:text-textinput' type="text" placeholder='Enter your name' />
                <button type='submit' className='sm:w-[400px] w-[90vw] rounded-xl px-2  bg-green6 text-textcolor font-bold py-2 '>Submit</button>
            </div>
            <div className='flex flex-col gap-2'>
                <img src={contact} width={400} height={500} alt='contact'/>
                <Info/>
            </div>
        </div>
        <SocialMedia/>
    </div>
  )
}

export default Contact