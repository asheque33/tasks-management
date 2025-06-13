const Header = () => {
  return (
    <nav className='py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50'>
      <div className='container  flex items-center justify-between gap-x-6'>
        <a href='/' className='font-bold'>
          TASKER
        </a>
      </div>
    </nav>
  );
};

export default Header;
