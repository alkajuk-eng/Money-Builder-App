// Import the logo image
import Logo from '../assets/Images/Logo.png'

export const Header = () => {
  return (
    <header 
      className='flex 
        flex-col 
        items-center 
        px-5 py-5 
        sm:py-[30px] 
        bg-[#f5f7fa] 
        border-b 
        border-[#e2e8f0]'
    >
      {/* Display the logo */}
      <img
        className='w-[80px] 
          h-auto 
          mb-3 
          sm:w-[120px] 
          sm:mb-[15px]'
        src={Logo}
        alt='Header logo'
      />
      {/* Display the main Header title */}
      <h1 
        className='m-0 
          text-[22px] 
          sm:text-[32px] 
          font-bold 
          text-center 
          text-[#1e293b]'
      >
        Your Personal Investment Assistant
      </h1>
    </header>
  )
}

