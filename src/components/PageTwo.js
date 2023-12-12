import Article from "./Article";
import MiniArticle from "./MiniArticle";
import { hello } from "./textContent";
import infographic from "../assets/undraw_mobile_login_ikmv.png";


export default function PageTwo() {
  return( 
    <div className="px-10 py-40 md:py-0 md:px-40 h-screen md:flex items-center justify-between">
      <div className="md:w-1/2 flex flex-col gap-10">
          <div className="">
            <Article title={hello[2].title} content={hello[2].content}/>
          </div>
          <div className="flex">
            <MiniArticle title={hello[1].title} content={hello[1].content}/>
            <MiniArticle title={hello[1].title} content={hello[1].content}/>
          </div>
      </div>
      <div>
        <img src={infographic} alt='' className="mx-auto"></img>
      </div>
    </div>
  )
}