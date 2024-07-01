export function Menu() {
  return (
    <div className='  backdrop-blur-md  rounded-b-xl  px-4 py-2 flex flex-col sm:flex-row items-center gap-4 text-white'>
      <div>
        <h1 className="text-4xl font-bold">Pokemon Memory Card Game</h1>
        <p className="text-xl font-semibold">
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      </div>
      <div className='  px-2 w-[100px]  '>
        <p>score:</p>
        <p>best score:fb</p>
      </div>
      <div>
        <a
          href='https://github.com/Stbs0'
          target='_blank'
          referrerPolicy='no-referrer'
          className=' pl-2'>
          <img
            className='min-w-fit size-7 -translate-y-0.5 inline'
            src='src\assets\githublogo.svg'
            alt=''
          />
        </a>
      </div>
    </div>
  );
}
