import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if(data.success===false){
        console.log(data);
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/signup', 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    console.log(data);
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Crear una cuenta</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='Nombre de usuario'
        className='border p-3 rounded-lg' id='username' onChange={handleChange}/>
        <input type="text" placeholder='correo electrónico'
        className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type="password" placeholder='contraseña'
        className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
        <button disabled={loading} 
        className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Cargando...' : 'Registrarme'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Ya tenés una cuenta?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Iniciar sesión</span>
        </Link>
      </div>
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  )
}
