import charity from '../../assets/charity.png'

const Main = () => {
  return (
    <main className=''>
        <div className='w-screen md:h-[27vh] h-[17vh] bg-green2 clip sm:px-20 px-4 py-10 gap-2 flex flex-col'>
            <h1 className='text-textcolor font-bold md:text-3xl sm:text-2xl text-xl md:text-start text-center'>We help You deliver your donations</h1>
            <h1 className='text-textcolor font-bold md:text-3xl md:ml-[150px] ml-0 sm:text-2xl text-xl md:text-start text-center'>to those in need</h1>
        </div>
        <section className='flex md:flex-row flex-col-reverse md:justify-between md:items-start items-center md:px-20 px-0 '>
            <div className='flex justify-center items-center gap-8 sm:py-20 py-6'>
                <button type='button' className='text-textcolor font-bold bg-green2 px-10 py-2'>Donate now</button>
                <button type='button' className='text-textcolor font-bold bg-green2 px-10 py-2'>Services</button>
            </div>
            <img className='w-[500px]' src={charity} alt='charity' width={500} height={200}/>
        </section>
        <p className='text-green3 font-light sm:text-xl text-sm text-center'>It’s not the amount that matters but the meaning behind your donation</p>
    </main>
  )
}

export default Main