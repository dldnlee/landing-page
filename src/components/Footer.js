import { ButtonPrimary } from "./Buttons";
import twitter from "../assets/Icon/Social/twitter.png"
import facebook from "../assets/Icon/Social/facebook.png"
import youtube from "../assets/Icon/Social/youtube.png"
import instagram from "../assets/Icon/Social/instagram.png"

function FooterMain() {
  return(
  <div className="footer-container py-10 bg-footer-bg bg-cover px-10 md:px-[20%] h-screen md:h-screen flex items-center">
    <div className="footer-inner-container md:bg-white md:py-20 md:px-[5%] md:w-full flex flex-col items-center gap-10 md:shadow-2xl rounded-3xl">
      <h2 className="text-6xl font-extrabold text-primary-color">A Price to Suit Everyone</h2>
      <p className="text-2xl">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-7xl font-extrabold">$40</h2>
        <p className="text-lg">UI Design Kit</p>
      </div>
      <div className="w-full md:w-1/3 flex flex-col gap-3 items-center">
        <p className="text-xl">See, One price, Simple</p>
        <div className="w-full">
          <ButtonPrimary text="Purchase Now"/>
        </div>
      </div>
    </div>
  </div>
  )
}

function FooterSub() {
  return (
    <section className="bg-blue-100 px-10 md:px-40 divide-y divide-gray-400">
      <div className="flex flex-col md:flex-row items-center md:justify-between py-10 md:py-20 text-center">
        <p className="w-60">@2023 Yourcompany</p>
        <h2 className="text-4xl font-extrabold">Landing</h2>
        <div className="w-60 hidden md:block">
          <ButtonPrimary text="Purchase Now"/>
        </div>
      </div>
      {/* <hr className="border-2"></hr> */}
      <div className="py-10 flex justify-between">
        <ul className="flex gap-5 md:gap-20 text-xl">
          <li><a href='/'>Home</a></li>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Contact</a></li>
        </ul>
        <ul className="flex gap-5 md:gap-20 text-xl">
          <li>
            <a href='/'>
              <img src={twitter} className="w-7"  alt=''></img>
            </a>
          </li>
          <li>
            <a href='/'>
              <img src={facebook} className="w-7" alt=''></img>
            </a>
          </li>
          <li>
            <a href='/'>
              <img src={instagram} className="w-7" alt=''></img>
            </a>
          </li>
          <li>
            <a href='/'>
              <img src={youtube} className="w-7" alt=''></img>
            </a>
          </li>
        </ul>
      </div>

    </section>
  )
}

export default function Footer() {
  return (
    <footer>
      <FooterMain />
      <FooterSub />
    </footer>
  )
}

