export const LandingPageCard = ({image, name, desc}) => {
  return (
    <div className='flex flex-col items-center my-8 gap-2'>
        <div><img src={image} alt="stir-fry-pasta" className='max-w-[250px] h-[auto]'/></div>
        <div className='font-bold text-[1.5rem] text-[#ffcc1d]'>{name}</div>
        <div className='text-center font-normal text-lg max-w-[20rem]'><p>{desc}</p></div>
    </div>
  )
}
