
const Line = ({right,color}) => {
  return (
    <>
    {
        right
        ?
        (
            <div className='flex items-center w-full'>
                <div className={` h-[0.1rem]  ${color} w-full`}></div>
                <div className={`${color} h-[0.7rem] w-[0.7rem] rounded-full`}></div>
            </div>
        )
        :
        (
            <div className='flex items-center w-full'>
                <div className={`${color} h-[0.7rem] w-[0.7rem] rounded-full`}></div>
                <div className={`${color} h-[0.1rem] w-full  `}></div>
            </div>
        )
    }
    
    
    </>
  )
}

export default Line