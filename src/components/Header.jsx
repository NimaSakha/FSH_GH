import facebook from "../resources/facebook.svg"
import instagram from "../resources/Instagram.svg"
function Header() {
  return (
    <>
      <div className='flex justify-items-stretch h-fit '>
        <div className=' lsm:w-4/5 bg-back '>
          <div className=' h-full items-center lsm:w-auto rounded-none w-screen just flex-col lsm:flex-row  p-3  bg-orange lsm:rounded-br-3xl  flex justify-between justify-items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
            <h1 className=' text-center font-poppins font-bold text-white '>
              Farshad Ghoratolhamid
            </h1>
            <div className='w-52 flex justify-between lsm:mr-8 text-white font-poppins text-sm'>
              <a href=''>Home</a>
              <a href=''>Info</a>
              <a href=''>Contact</a>
            </div>
          </div>
        </div>

        <div className=' hidden sm:flex flex-1 justify-around'>
          <img className='w-12 mt-1' src={facebook} alt='' />
          <img className='w-12 mt-1' src={instagram} alt='' />
        </div>
      </div>
    </>
  )
}

export default Header
