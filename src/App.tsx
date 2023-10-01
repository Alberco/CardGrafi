import './App.css'
import BarraR from './components/BarraR'
import LayoutC from './components/Layout'
import LinealR from './components/LinealR'
import RadarR from './components/RadarR'


function App() {
  return (
    <LayoutC>
      <article className='grid grid-cols-1 gap-4 py-4 lg:grid-cols-6 lg:h-screen h-full w-full'>
        
      <section className='bg-[#1F2125]/90  shadow-2xl rounded-md col-span-1'>
        <div className='flex py-6 px-6 flex-col h-full w-full'>
              <p className=" text-white font-medium pb-0">Card</p>
                <div className='min-w-full h-full flex justify-center items-center'>
                    <img src='/card1.png' className='mx-auto hover:scale-105 transition-transform duration-20' alt='card1' />
                </div>  
          </div>
        </section>


        <section className='bg-[#1F2125]/90  shadow-2xl rounded-md md:col-span-2 col-span-1'>
          <div className='flex  py-6 px-6 flex-col h-full w-full'>
            <p className=" text-white font-medium  pb-4 ">Visualization Score</p>
              <div className='min-w-full h-full'>
                  <RadarR />
              </div>          
          </div>
        </section>


        <section className='bg-[#1F2125]/90  shadow-2xl rounded-md md:col-span-3 col-span-1'>          
          <div className='flex py-6 px-6 flex-col h-full w-full'>
            <p className="text-white font-medium pb-4 ">Visualization Category</p>
            <div className='grid grid-cols-1 md:grid-cols-3'>
               <img src='/card2.png' className='mx-auto w-full hover:scale-105 transition-transform duration-200 ' alt='card1' />
               <img src='/card3.png' className='mx-auto w-full hover:scale-105 transition-transform duration-200 ' alt='card1' />
               <img src='/card4.png' className='mx-auto w-full hover:scale-105 transition-transform duration-200 ' alt='card1' />
            </div>  
          </div>
        </section>
        
        <section className=' bg-[#1F2125]/90 shadow-2xl rounded-md md:col-span-3 col-span-1 h-full'>
        <div className='h-full w-full flex justify-stretch '>
          <div className='flex py-6 px-6 flex-col h-full w-full'>
              <p className=" text-white font-medium pb-4 ">General processes</p>
              <div className='min-w-full h-full'>
                  <BarraR />
              </div>
          </div>
          </div>
        </section>



        <section className='bg-[#1F2125]/90 shadow-2xl backdrop-blur-md rounded-md w-full h-full   md:col-span-3 col-span-1'>
           <div className='flex py-6 px-6  flex-col h-full w-full'>
              <p className=" text-white font-medium pb-4 ">Completed actions</p>
              <div className='min-w-full h-full'>
                  <LinealR />
              </div>  
          </div>

        </section>

      </article>
    </LayoutC>
  )
}

export default App
