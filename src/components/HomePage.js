import {ButtonPrimary, ButtonSecondary} from "./Buttons";
import { hello } from "./textContent";
import Article from "./Article";

export default function HomePage() {
  return (
    <div className='home-page-container 
    md:bg-home-bg-img-big
    bg-home-bg-img-small
    
    bg-60%
    md:bg-contain
    h-screen 
    bg-white bg-no-repeat  bg-right-bottom
    flex items-center px-10 md:px-40'>
      <div className="flex flex-col gap-10 md:w-1/2">
        <div>
          <Article title={hello[0].title} content ={hello[0].content}/>
        </div>
        <div className="flex flex-col md:flex-row gap-7 w-full md:justify-between">
          <ButtonPrimary text="Purchase Now" />
          <ButtonSecondary text="Learn More"/>
        </div>
      </div>
    </div>
  )
}