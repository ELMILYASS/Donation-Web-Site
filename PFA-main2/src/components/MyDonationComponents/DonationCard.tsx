import React from 'react'

const DonationCard = () => {
  return (
    <div className=' bg-green1 flex flex-col gap-2 items-center px-10 pt-2 pb-7 justify-center rounded-2xl donationcard relative'>
        <h3 className='text-lg font-bold text-white'>Donation1</h3>
        <p className='text-textinput font-medium text-sm'>Clothes</p>
        <p className='text-textinput font-medium text-sm'>T-Shirt</p>
        <p className='text-textinput font-medium text-sm'>Quantity</p>
        <p className='text-textinput font-medium text-[10px] absolute bottom-1 right-2'>2023/03/15</p>
    </div>
  )
}

export default DonationCard