import Social from './Social';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
    <footer className="flex flex-col md:flex-row justify-between bg-[#1D2939] px-8 md:px-20 py-6 w-full text-gray-400">
      <div className="flex flex-col items-start mb-8 mt-3 md:mb-0">
        <div className="mb-4 footer-logo w-30">
          <a href="/">
          <div className='font-jolly-lodger gradient-text text-white text-6xl cursor-pointer'>Brokie Inu</div>
          </a>
        </div>
        <p className="text-white">Knocked down 7 times, get up 8, Brokies are not quitters and go again!</p>
      </div>
    </footer>
    <section class="flex items-center justify-between gap-4 py-8 bg-gray-900 w-full h-10">
    <div>
        <p class="font-normal text-gray-400 text-sm md:ml-36 mt-3 max-md:ml-5">
            All rights reserved.
        </p>
    </div>
    <div className='flex md:mr-44 max-md:mr-5'>
        <Social/>
        </div>
</section>
</>
  );
}
