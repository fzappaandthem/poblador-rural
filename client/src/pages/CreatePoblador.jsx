import React from 'react';

export default function CreatePoblador() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>
        Crear un mensaje al poblador rural
      </h1>
      <form className='flex flex-col  gap-4'>
        <div className='flex flex-col gap-4 flex-1'>
          <input
            type='text'
            placeholder='A quién va dirigido'
            className='border p-3 rounded-lg'
            id='title'
            maxLength='62'
            minLength='10'
            required
          />
          <textarea
            type='text'
            placeholder='Mensaje...'
            className='border p-3 rounded-lg'
            id='description'
            required
          />
          <div className='flex gap-1'>
            <span className='font-semibold my-auto' >Cuántas veces se repetirá el mensaje:    </span>
                <input
                    className=' gap-1 p-2 w-16 border border-gray-300 rounded-lg'
                    type='number'
                    id='repeats'
                    min='1'
                    max='1000'
                    value='3'
                    required
                />
          </div>
          <div className='flex gap-6 flex-wrap justify-start'>
            <span className='font-semibold w-20'>Lunes</span>
            <div className='flex gap-6 flex-wrap'>
                <div className='flex gap-1'>
                <input type='checkbox' id='Mon0700' className='w-5' />
                <span>07:00</span>
                </div>
                <div className='flex gap-1'>
                <input type='checkbox' id='Mon1130' className='w-5' />
                <span>11:30</span>
                </div>
                <div className='flex gap-1'>
                <input type='checkbox' id='Mon1300' className='w-5' />
                <span>13:00</span>
                </div>
                <div className='flex gap-1'>
                <input type='checkbox' id='Mon1630' className='w-5' />
                <span>16:30</span>
                </div>
                <div className='flex gap-1'>
                <input type='checkbox' id='Mon1900' className='w-5' />
                <span>19:00</span>
                </div>
                <div className='flex gap-1'>
                <input type='checkbox' id='Mon2100' className='w-5' />
                <span>21:00</span>
                </div>
            </div>
          </div>
          <div className='flex gap-6 flex-wrap justify-start'>
            <span className='font-semibold w-20'>Martes</span>
            <div className='flex gap-1'>
              <input type='checkbox' id='Tue0700' className='w-5' />
              <span>07:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Tue1130' className='w-5' />
              <span>11:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Tue1300' className='w-5' />
              <span>13:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Tue1630' className='w-5' />
              <span>16:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Tue1900' className='w-5' />
              <span>19:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Tue2100' className='w-5' />
              <span>21:00</span>
            </div>
          </div>
          <div className='flex gap-6 flex-wrap justify-start'>
            <span className='font-semibold w-20'>Miercoles</span>
            <div className='flex gap-1'>
              <input type='checkbox' id='Wed0700' className='w-5' />
              <span>07:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Wed1130' className='w-5' />
              <span>11:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Wed1300' className='w-5' />
              <span>13:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Wed1630' className='w-5' />
              <span>16:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Wed1900' className='w-5' />
              <span>19:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Wed2100' className='w-5' />
              <span>21:00</span>
            </div>
          </div>
          <div className='flex gap-6 flex-wrap justify-start'>
            <span className='font-semibold w-20'>Jueves</span>
            <div className='flex gap-1'>
              <input type='checkbox' id='Thu0700' className='w-5' />
              <span>07:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Thu1130' className='w-5' />
              <span>11:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Thu1300' className='w-5' />
              <span>13:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Thu1630' className='w-5' />
              <span>16:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Thu1900' className='w-5' />
              <span>19:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Thu2100' className='w-5' />
              <span>21:00</span>
            </div>
          </div>
          <div className='flex gap-6 flex-wrap justify-start'>
            <span className='font-semibold  w-20'>Viernes</span>
            <div className='flex gap-1'>
              <input type='checkbox' id='Fri0700' className='w-5' />
              <span>07:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Fri1130' className='w-5' />
              <span>11:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Fri1300' className='w-5' />
              <span>13:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Fri1630' className='w-5' />
              <span>16:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Fri1900' className='w-5' />
              <span>19:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Fri2100' className='w-5' />
              <span>21:00</span>
            </div>
          </div>
          <div className='flex gap-6 flex-wrap justify-start'>
            <span className='font-semibold w-20'>Sábado</span>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sat0700' className='w-5' />
              <span>07:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sat1130' className='w-5' />
              <span>11:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sat1300' className='w-5' />
              <span>13:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sat1630' className='w-5' />
              <span>16:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sat1900' className='w-5' />
              <span>19:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sat2100' className='w-5' />
              <span>21:00</span>
            </div>
          </div>
          <div className='flex gap-6 flex-wrap justify-start'>
            <span className='font-semibold w-20'>Domingo</span>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sun0700' className='w-5' />
              <span>07:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sun1130' className='w-5' />
              <span>11:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sun1300' className='w-5' />
              <span>13:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sun1900' className='w-5' />
              <span>19:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sun2100' className='w-5' />
              <span>21:00</span>
            </div>
          </div>
        </div>

        
        <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Crear mensaje al poblador rural</button>
        
      </form>
    </main>
  );
}