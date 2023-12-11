import {ButtonPrimary, ButtonSecondary} from "./Buttons";
import { hello } from "./textContent";
import Article from "./Article";

export default function HomePage() {
  return (
    <div className='home-page-container 
    bg-home-background-image 
    h-screen 
    bg-white bg-no-repeat bg-right
    flex items-center pl-40'>
      <div className="w-1/3 flex flex-col gap-10">
        <Article title={hello[0].title} content ={hello[0].content}/>
        <div className="flex gap-10">
          <ButtonPrimary  text="Purchase Now" />
          <ButtonSecondary text="Learn More"/>
        </div>
      </div>
    </div>
  )
  
}