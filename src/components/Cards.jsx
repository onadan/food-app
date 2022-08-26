import special from '../assets/images/stir-fry-pasta.png'

export const LandingPageCard = () => {
  return (
    <div className='flex flex-col items-center my-8 gap-2'>
        <div><img src={special} alt="stir-fry-pasta" className='max-w-[250px] h-[auto]'/></div>
        <div className='font-bold text-[1.5rem] text-[#ffcc1d]'>Stir fry Pasta</div>
        <div className='text-center font-normal text-lg max-w-[20rem]'><p>Stir fry pasta yada yada yada because of Sesan</p></div>
    </div>
  )
}
