import logo from '../assets/draw_building.png';

export default function MiniArticle(props) {
  return( 
    <div className='w-1/2 py-3 pr-10 flex flex-col gap-2'>
      <img src={logo} alt="building_drawing" className='w-10'></img>
      <h2 className="text-l font-bold md:text-3xl">{props.title}</h2>
      <p className='text-[12px] md:text-2xl'>{props.content}</p>
    </div>
  )
}