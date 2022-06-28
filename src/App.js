
import './App.css';
import loginIMG from '../src/assets/img/login.png';
function App() {
  return (
    <>

    
<div class="bg-background  flex ">
  <div class="bg-white   flex flex-col items-center ">
    <div>
      <img src={loginIMG} alt='banner' className="lg-hidden img-banner" />
    </div>
  </div>

  <div class="bg-background w-full justify-center flex items-center ">
    <div className='py-32'>
      <div>
        <h3 class="text-3xl font-bold text-primaryColor text-center mb-4">
            Quiver
        </h3>
        <span className='text-center'>
          Bem vindo! Faça seu login.
        </span>
      </div>
      <div>
        <form action="#" class="w-full flex flex-col justify-center mt-5">
          
          <div class="my-2">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              </div>
              <input class="input w-64" id="grid-email" type="email" placeholder="Seu e-mail"/>
            </div>
          </div>

          <span className='text-lg text-center'>ou</span>

          <div class=" my-2">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="input w-64" placeholder="Seu telefone" required />
            </div>
          </div>


          
          <button type="button" class="mt-8 button bg-primaryColor text-white text-sm">Receber código</button>
            
          
          <button type="button" class="my-2 button bg-danger text-white text-sm">Entrar com o google</button>
              
          <span className='mt-5 text-lg text-center'>Ainda não usa a Quiver?</span>
          <span className='text-lg text-center'>Fale com um especialista</span>    

        </form>
      </div>
    </div>        
  </div>

</div>


{/* 
    <div class="bg-background h-screen w-full flex justify-center items-center">
      <div class="bg-background w-full sm:w-1/2 md:w-11/12 lg:w-1/2 shadow-md flex  md:flex-row items-center  sm:m-0 rounded">
      <div class="bg-white w-full md:w-1/2 flex flex-col items-center ">
        <div>
          <img src={loginIMG} alt='banner' className="lg-hidden"/>
        </div>
      </div>
     
      <div class="bg-background w-full md:w-1/2 flex flex-col items-center py-32 px-8">
        <h3 class="text-3xl font-bold text-green-600 mb-4">
          LOGIN
        </h3>
        <form action="#" class="w-full flex flex-col justify-center">
          <div class="mb-4">
            <input type="email" placeholder="Email" class="input " />
          </div>
          <div class="mb-4">
            <input type="password" placeholder="Password" class="input" />
          </div>
          <button class="bg-green-600 font-bold text-white focus:outline-none rounded p-3">
            Submit
          </button>
        </form>
      </div>



    </div>
  </div> */}
    </>                        
  )
}

export default App;
