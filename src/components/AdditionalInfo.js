import Article from "./Article";
import { hello } from "./textContent";
import imgOne from "../assets/undraw_happy_news_hxmt.png";
import imgTwo from "../assets/undraw_social_influencer_sgsv.png";
import imgThree from "../assets/undraw_mention_6k5d.png";
import { ButtonPrimary } from "./Buttons";

function AddInfoTemplate(props) {
  return(
    <div className="px-10 flex flex-col gap-10 items-center md:flex-row md:px-40">
      <figure className="w-90 md:w-1/2">
        <img src={props.image} alt="" className="md:mx-auto"></img>
      </figure>
      <div className="md:w-1/2">
        <Article title={props.title} content={props.content}/>
      </div>
    </div>
  )
} 

function WithButton(props) {
  return(
    <div className="px-10 flex flex-col gap-10 items-center md:flex-row md:px-40">
      <figure className="w-90 md:w-1/2">
        <img src={props.image} alt="" className="md:mx-auto"></img>
      </figure>
      <div className="md:w-1/2 flex flex-col gap-10">
        <Article title={props.title} content={props.content}/>
        <div className="md:w-80">
          <ButtonPrimary text="Purchase Now"/>
        </div>
      </div>
    </div>
  )
}

export default function AdditionalInfo() {
  return(
    <div className="flex flex-col gap-40">
      <AddInfoTemplate title={hello[0].title} content={hello[0].content} image={imgOne}/>
      <AddInfoTemplate title={hello[0].title} content={hello[0].content} image={imgTwo}/>
      <WithButton title={hello[0].title} content={hello[0].content} image={imgThree}/>
    </div>
    
  )
}

