const Button = (props) => {
  return (
    <button onClick={props.clickHandler} type='submit' className='py-2 px-4 border border-[bisque] rounded-md shadow-sm shadow-zinc-800/20 hover:shadow'>{props.cta}</button>
  )
}

export default Button