import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='flex justify-between px-5 h-[50px] bg-gray-400 items-center shadow-md'>
      <Link to="/">Airport</Link>

      <Link to="/auth">Auth</Link>
    </div>
  )
}

export default Navigation