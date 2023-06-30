export default function Screen({ content, status}) {
  return (
    <div id="display" className='flex items-center w-[85%] aspect-[34/14] mx-auto my-4 border-solid border-[1rem] border-[#4A505A] bg-[#606976] shadow-screen font-mono'>
      <div className="w-[88%] mx-auto aspect-[17/5] bg-[#556B5B] flex items-center">
        <div className={ 'flex justify-center items-center mx-auto bg-[#BEEECB] text-[2rem] sm:text-[3rem] md:text-[3vw] lg:text-[2.3rem] overflow-hidden ' + (status ? 'on': 'off') }>
          <p className={status? '': 'hidden'}>{content}</p>
        </div>
      </div>
    </div>
  );
}
