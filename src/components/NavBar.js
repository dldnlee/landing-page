import { ButtonPrimary } from "./Buttons"




export default function NavBar() {
  return (
    <nav className="
    navigation-bar-container bg-white text-primary-color 
    flex justify-between items-center px-40 py-2 fixed w-full top-0 shadow-lg">
      <ul className="flex py-5 gap-8 font-thin">
        <li><a href='/'>Home</a></li>
        <li><a href='/'>About</a></li>
        <li><a href='/'>Contact</a></li>
      </ul>
      <div className="website-logo text-4xl font-extrabold">
        Landing
      </div>
      <div>
        <ButtonPrimary text="Buy Now"/>
      </div>
    </nav>
  )
}