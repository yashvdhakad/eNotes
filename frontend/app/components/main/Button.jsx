const Button = ({cta, clickHandler}) => {
  return (
    <button onClick={clickHandler} type='submit' className='py-2 px-4 border border-[bisque] rounded-md shadow-sm shadow-zinc-800/20 hover:shadow'>{cta}</button>
  )
}

export default Button