


function ButtonPrimary(props) {
  return (
    <div>
      <a href='/' className='
            px-7 
            py-1 
            bg-primary-color
            text-white 
            border-2
            border-primary-color
            hover:bg-white 
          
          
            hover:text-primary-color'>{props.text}</a>
    </div>
  )
}

function ButtonSecondary(props) {
  return (
    <div>
      <a href='/' className='
            px-7 
            py-1 
            border-2 
            border-primary-color 
            text-primary-color 
            hover:bg-primary-color hover:text-white'>{props.text}</a>
    </div>
  )
}

export {
  ButtonPrimary,
  ButtonSecondary,
}