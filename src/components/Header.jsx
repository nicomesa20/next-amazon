import Image from 'next/image';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header>
      <div className='flex items-center flex-grow bg-amazon_blue px-1  py-2'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit={'contain'}
            className='cursor-pointer'
          />
        </div>

        <div className=' hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
          <input
            className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
            type='text'
          />
          <MagnifyingGlassIcon className='h-12 p-4 ' />
        </div>

        <div className='flex items-center gap-6 mx-6 text-xs text-white whitespace-nowrap'>
          <div className='link'>
            <p>Hello Sonny Sangha</p>
            <p className='font-extrabold md:text-sm '>Account & Lists</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm '>& Orders</p>
          </div>
          <div className='link relative flex items-center'>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
              3
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline-flex font-extrabold md:text-sm '>
              Basket
            </p>
          </div>
        </div>
      </div>

      <div className='flex items-center gap-3 p-2 pl-6 bg-amazon_blue-light text-white'>
        <p className='link flex items-center'>
          <Bars3Icon className='h-6 mr-1' />
          All
        </p>
        <p className='link'>Prime video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='hidden link lg:inline-flex'>Electronics</p>
        <p className='hidden link lg:inline-flex'>Electronics</p>
        <p className='hidden link lg:inline-flex'>Food & Grocery</p>
        <p className='hidden link lg:inline-flex'>Prime</p>
        <p className='hidden link lg:inline-flex'>Buy Again</p>
        <p className='hidden link lg:inline-flex'>Shopper Toolkit</p>
        <p className='hidden link lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  );
};
export default Header;
