import logo from '../assets/draw_building.png';

export default function MiniArticle(props) {
  return( 
    <div className='w-1/2 py-3 px-10'>
      <img src={logo} alt="building_drawing"></img>
      <h2 className="text-l font-bold">{props.title}</h2>
      <p className='text-[12px]'>{props.content}</p>
    </div>
  )
}