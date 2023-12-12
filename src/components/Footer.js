import { ButtonPrimary } from "./Buttons";


export default function Footer() {
  return(
    <footer className="footer-container py-10 bg-footer-bg bg-cover md:px-[30%] h-screen md:h-screen flex items-center">
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-6xl font-extrabold text-primary-color">A Price to Suit Everyone</h2>
        <p className="text-2xl">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-7xl font-extrabold">$40</h2>
          <p>UI Design Kit</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <p>See, One price, Simple</p>
          <ButtonPrimary text="Purchase Now"/>
        </div>
      </div>


    </footer>
  )
}