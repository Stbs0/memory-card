export function Menu() {
  return (
    <div className='justify-self-center self-end  backdrop-blur-md  bg-white/30 rounded-t-xl max-h-12 px-4 py-2 flex items-center justify-center min-w-52 text-nowrap'>
      <div>
        <h1 className='inline '>Created by Stbs0</h1>
        <a
          href='https://github.com/Stbs0'
          target='_blank'
          referrerPolicy='no-referrer'
          className=' pl-2'>
          <img
            className='size-7 -translate-y-0.5 inline'
            src='src\assets\githublogo.svg'
            alt=''
          />
        </a>
      </div>
    </div>
  );
}
