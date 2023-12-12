import { ButtonPrimary } from "./Buttons";


export default function Footer() {
  return(
    <footer>
      <h2>A Price to Suit Everyone</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
      <div>
        <h2>$40</h2>
        <p>UI Design Kit</p>
      </div>
      <div>
        <p>See, One price, Simple</p>
        <ButtonPrimary text="PurchaseNow" />
      </div>


    </footer>
  )
}