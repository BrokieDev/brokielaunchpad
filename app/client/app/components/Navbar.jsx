import React from 'react'
import Image from 'next/image'
function Navbar() {
  return (
    <div>
      <Image
          src="/gradient1.png"
          alt="Background-Gradient"
          width={600}
          height={200}
          className="rounded-lg absolute -z-40 -ml-48 -mt-56 max-md:-mt-36"
        />
      <Image
          src="/brokie.png"
          alt="Dog with cap"
          width={80}
          height={80}
          className="rounded-lg md:hidden absolute ml-14 mt-3"
        />
        <div className="font-jolly-lodger gradient-text text-white text-6xl mt-8 cursor-pointer ml-36 md:hidden">
          Brokie Inu
        </div>
        <div className="flex justify-center mt-7 md:hidden"> 
          <a className="text-xl font-bold gradient-text text-white underline-orange cursor-pointer mt-2">
            Launchpad
          </a>
          <a href='https://brokieinu.wtf/' target='_blank' className="text-xl font-bold text-gray-300 cursor-pointer ml-10 mt-2">
            BrokieInu
          </a>
        </div>
      <nav className="flex items-center p-4 md:justify-end">
        
        <Image
          src="/brokie.png"
          alt="Dog with cap"
          width={80}
          height={80}
          className="rounded-lg ml-20 max-md:hidden"
        />
        <div className="font-jolly-lodger gradient-text text-white text-6xl mt-8 cursor-pointer ml-1 max-md:hidden">
          Brokie Inu
        </div>
        
        <div className="flex items-center ml-auto mr-20"> 
          <a className="text-xl font-bold gradient-text text-white underline-orange cursor-pointer ml-32 mt-2 max-md:hidden">
            Launchpad
          </a>
          <a href='https://brokieinu.wtf/' target='_blank' className="text-xl font-bold text-gray-300 cursor-pointer ml-10 mt-2 max-md:hidden">
            BrokieInu
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar