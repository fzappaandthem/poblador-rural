import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
  const {currentUser} = useSelector((state) => state.user)
  //======================================================
  return (
    <header className='bg-slate-200 shadow-md '>
      <div className="flex justify-between items-center max-w-10xl mx-auto p-3">
        <h1 className='font-bold text-sm  sm:text-xl flex flex-wrap'>
          <Link to='/'>
            <span className='text-slate-500'>Poblador</span>
            <span className='text-slate-700'>Rural</span>
          </Link>
        </h1>
        {/* <form className='bg-slate-100 p-1 rounded-lg flex items-center'>
          <input
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            type='text'
            name='search'
            placeholder='Buscar...'
          />
          <FaSearch className='text-slate-600' />
        </form> */}
        <ul className='flex gap-4'>
          <Link to='/create-poblador'>
            <li className='text-slate-700 hover:underline'>Crear mensaje</li>
          </Link>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Inicio</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.avatar} alt='foto-de-perfil' className='w-7 h-7 rounded-full object-cover' />
              ) : 
              (
                <li className='text-slate-700 hover:underline'>Iniciar sesión</li>
              )}
          </Link>
          <Link to='/about'>
                <li className='text-slate-700 hover:underline'>Instrucciones</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}
