import Scroll from "./Scroll"
import element from "../resources/element.svg"
import Info from "./Info"
function Main() {
  return (
    <>
      <div className=' h-screen w-screen lsm:w-4/5 gradients'>
        <div className='mb-32'>
          <div className='pt-32 pl-20 '>
            <h1 className='  font-poppins font-semibold text-5xl text-white'>
              Farshad
              <br />
              Ghoratolhamid
            </h1>
            <p className=' mt-3 text-white font-poppins'>Scroll 👇</p>
            <Scroll style='mt-4' />
          </div>
          <img
            src={element}
            className='hidden lsm:flex w-80 m-auto -mr-40 -mt-52'
            alt=''
          />
        </div>

        <Info />
        <div className=' hidden lsm:flex bg-white h-20 wdth absolute right-0 m-auto btm rounded-bl-3xl'></div>
        <div className='h-screen w-screen  gradients2'></div>
      </div>
    </>
  )
}

export default Main
