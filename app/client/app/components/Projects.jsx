import React from 'react';
import Image from 'next/image';

function Projects() {
  return (
    <>
      <h1 className='text-5xl md:text-5xl max-md:mt-20 max-md:text-center text-white font-jolly-lodger mt-10 md:mt-20 mb-6 md:mb-10 text-center md:text-left mx-4 md:ml-24'>
        Latest Projects🔥
      </h1>
      <div className='relative mx-auto mb-10 max-w-screen-xl md:ml-28 max-md:hidden'>
        <Image
          src="/announcement.png"
          alt="announcement"
          width={1320}
          height={500}
          className="bg-customBlue border border-gray-800 rounded-lg"
          quality={100}
          unoptimized={true}
        />
        <div className='absolute inset-0 flex justify-center items-center ml-40'>
          <div className='text-center md:text-left mx-4 md:ml-36'>
            <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 md:ml-28'>
              <h1 className='text-white text-4xl md:text-5xl font-jolly-lodger mb-2 md:mb-0 ml-5'>
                COMING
              </h1>
              <h1 className='text-customBlue text-4xl md:text-5xl font-jolly-lodger'>
                SOON
              </h1>
            </div>
            <p className='text-white mt-2 md:mt-1 ml-10'>
            Apply Now below and we will get on a call to discuss . 
            </p>
            <button className='bg-customBlue text-white px-16 md:px-48 py-3 rounded-lg mt-4 font-bold'>
              Apply Now!!!
            </button>
          </div>
        </div>
      </div>
      <div className=' md:hidden'>
      <div className='relative mx-auto mb-10 max-w-screen-xl md:ml-28'>
        <div className="bg-customBlue border border-gray-800 rounded-lg overflow-hidden">
          <Image
            src="/squareannouncement.png"
            alt="announcement"
            className="w-full h-auto"
            width={200}
            height={200}
          />
        </div>
        <div className='absolute inset-0 flex justify-center items-center'>
          <div className='text-center md:text-left mx-4 md:ml-36'>
            <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 md:ml-28'>
              <h1 className='text-white text-4xl md:text-5xl font-jolly-lodger mb-2 md:mb-0'>
                COMING
              </h1>
              <h1 className='text-customBlue text-4xl md:text-5xl font-jolly-lodger'>
                SOON
              </h1>
            </div>
            <p className='text-white mt-2 md:mt-1'>
            Apply Now below and we will get on a call to discuss . 
            </p>
            <button className='bg-customBlue text-white px-16 md:px-48 py-3 rounded-lg mt-4 font-bold'>
              Apply Now!!!
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Projects;
