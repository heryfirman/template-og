// import {banner} from '../assets/img/banner.png'

export default function Banner({labelName,bannerName}) {
  return (
    <>
     <div className="banner relative flex justify-center">
        {/* <img src={banner} alt="" className=''/> */}
        {/* px-[9px] py-[7px]  */}
        <div className="absolute w-[74px] h-[30px] leading-[30px] text-center left-[50%] -top-0.5 -translate-[49%] text-sm font-light tracking-wide rounded-lg bg-primary text-slate-300">{labelName}</div>
        <img src="/banner.png" alt="" className='relative'/>
        <div className="absolute top-[50%] -translate-y-[50%] text-2xl tracking-wide font-light">{bannerName}</div>
     </div>   
    </>
  )
}
