function Card({ img, name }) {
  return (
    <div className=' flex flex-col items-center bg-slate-400/40 rounded-lg w-fit px-2 pt-2  space-y-2'>
      <img
        className='size-40 rounded-md'
        src={img}
        alt=''
      />

      <p>{name}</p>
    </div>
  );
}
export default Card;
