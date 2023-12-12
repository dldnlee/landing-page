


function ButtonPrimary(props) {
  return (
    <div className="
    flex-grow
    text-center
    text-xl
    py-4 
    md:py-2
    bg-primary-color
    text-white 
    border-2
    border-primary-color
    hover:bg-white 
    hover:text-primary-color">
      <a href='/'>{props.text}</a>
    </div>
  )
}

function ButtonSecondary(props) {
  return (
    <div className="
    flex-grow 
    text-center
    md:py-2
    py-4 
    text-xl
    bg-white
    text-primary-color 
    border-2
    border-primary-color
    hover:bg-primary-color 
    hover:text-white">
      <a href='/'>{props.text}</a>
    </div>
  )
}

export {
  ButtonPrimary,
  ButtonSecondary,
}