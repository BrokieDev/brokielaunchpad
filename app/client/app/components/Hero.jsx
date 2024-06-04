import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <>
    <div className='flex md:justify-end'>
    <Image
          src="/gradient2.png"
          alt="Background-gradient"
          width={600}
          height={150}
          className="absolute -z-50 mr-64"
        />
        <Image
          src="/gradient1.png"
          alt="Background-gradient"
          width={600}
          height={150}
          className="absolute -z-50 mr-96"
        />
    </div>
    <div className="mt-16 flex flex-col items-center justify-center md:flex-row md:space-x-20">
      <div className="bg-customBlue rounded-lg p-6 text-center border border-gray-800 mb-8 md:mr-12 md:mb-0">
        <Image
          src="/broton.png"
          alt="Broton"
          width={150}
          height={150}
          className="mx-auto"
        />
        <div className="flex justify-center mt-6 mb-6 space-x-4">
          <div className="flex items-center bg-[#182235] text-green-400 px-3 py-1 rounded-full text-sm">
            <span className="h-2.5 w-2.5 bg-green-600 rounded-full mr-2"></span>
            COMPLETED
          </div>
          <div className="flex items-center bg-[#0B94F3] text-white px-3 py-1 rounded-full text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            419
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:gap-x-28">
          <h2 className="text-white text-xl font-bold">BROTON</h2>
          <p className="text-white font-bold">38170 TON RAISED</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Hero;
