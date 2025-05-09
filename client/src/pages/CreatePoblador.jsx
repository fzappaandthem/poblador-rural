import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getNext3CheckBoxesIds, getFechaUltimaEmision } from '../fechas-basic.js';

let emisionesArr = [];

export default function CreatePoblador() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    recipient: '',
    message: '',
    userRef: currentUser._id,
    repetitions: 3,
    category: 'p2p',
    isEnabled: true,
    Mon0700: false,
    Mon1130: false,
    Mon1300: false,
    Mon1630: false,
    Mon1900: false,
    Mon2100: false,
    Tue0700: false,
    Tue1130: false,
    Tue1300: false,
    Tue1630: false,
    Tue1900: false,
    Tue2100: false,
    Wed0700: false,
    Wed1130: false,
    Wed1300: false,
    Wed1630: false,
    Wed1900: false,
    Wed2100: false,
    Thu0700: false,
    Thu1130: false,
    Thu1300: false,
    Thu1630: false,
    Thu1900: false,
    Thu2100: false,
    Fri0700: false,
    Fri1130: false,
    Fri1300: false,
    Fri1630: false,
    Fri1900: false,
    Fri2100: false,
    Sat0700: false,
    Sat1130: false,
    Sat1300: false,
    Sat1630: false,
    Sat1900: false,
    Sat2100: false,
    Sun0700: false,
    Sun1130: false,
    Sun1300: false,
    Sun1630: false,
    Sun1900: false,
    Sun2100: false, 
    fechaUltimaEmision: new Date(),
    cantEmisionesSemanales: 3,
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(formData);

  useEffect(() => {
    
    const next3CheckBoxesIds = getNext3CheckBoxesIds();
    emisionesArr = next3CheckBoxesIds;
    console.log("emisionesArr: ") ;
    console.log(emisionesArr);

    setFormData({
      ...formData,
      [next3CheckBoxesIds[0]]: true,
      [next3CheckBoxesIds[1]]: true,
      [next3CheckBoxesIds[2]]: true
    });

    for (let index = 0; index < next3CheckBoxesIds.length; index++) {
      const _id = next3CheckBoxesIds[index];
      document.getElementById(_id).checked = true;
    }

  }, []);



  const handleChange = (e) => {
    if (
      e.target.id === 'Mon0700' ||
      e.target.id === 'Mon1130' ||
      e.target.id === 'Mon1300' ||
      e.target.id === 'Mon1630' ||
      e.target.id === 'Mon1900' ||
      e.target.id === 'Mon2100' ||
      e.target.id === 'Tue0700' ||
      e.target.id === 'Tue1130' ||
      e.target.id === 'Tue1300' ||
      e.target.id === 'Tue1630' ||
      e.target.id === 'Tue1900' ||
      e.target.id === 'Tue2100' ||
      e.target.id === 'Wed0700' ||
      e.target.id === 'Wed1130' ||
      e.target.id === 'Wed1300' ||
      e.target.id === 'Wed1630' ||
      e.target.id === 'Wed1900' ||
      e.target.id === 'Wed2100' ||
      e.target.id === 'Thu0700' ||
      e.target.id === 'Thu1130' ||
      e.target.id === 'Thu1300' ||
      e.target.id === 'Thu1630' ||
      e.target.id === 'Thu1900' ||
      e.target.id === 'Thu2100' ||
      e.target.id === 'Fri0700' ||
      e.target.id === 'Fri1130' ||
      e.target.id === 'Fri1300' ||
      e.target.id === 'Fri1630' ||
      e.target.id === 'Fri1900' ||
      e.target.id === 'Fri2100' ||
      e.target.id === 'Sat0700' ||
      e.target.id === 'Sat1130' ||
      e.target.id === 'Sat1300' ||
      e.target.id === 'Sat1630' ||
      e.target.id === 'Sat1900' ||
      e.target.id === 'Sat2100' ||
      e.target.id === 'Sun0700' ||
      e.target.id === 'Sun1130' ||
      e.target.id === 'Sun1300' ||
      e.target.id === 'Sun1900' ||
      e.target.id === 'Sun2100'
    ) {
      let cantEmisionesSemanales = formData.cantEmisionesSemanales;
      setError (currentUser.error) ;
      if(e.target.checked){
        //enviar el e.target.id a fechas-basic junto con el array de emisiones semanales para que me lo agregue
        emisionesArr.push(e.target.id);
        cantEmisionesSemanales++;
      }
      else{
        //enviar el e.target.id a fechas-basic junto con el array de emisiones semanales para que me lo elimine
        emisionesArr = emisionesArr.filter(element => element !== e.target.id);
        cantEmisionesSemanales--;
      }

      console.log("emisionesArr: ") ;
      console.log(emisionesArr);
      
      setFormData({
        ...formData,
        cantEmisionesSemanales: cantEmisionesSemanales,
        [e.target.id]: e.target.checked,
      });
      console.log(cantEmisionesSemanales);
    }

    if (
      e.target.type === 'text' ||
      e.target.type === 'textarea'
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
    //['cortes', 'pedidosSangre', 'lostFound', 'p2p', 'institucionales', 'eventos', 'thanks', 'reminders', 'misas', 'fallecimientos']
    if(e.target.id === 'p2p' 
      || e.target.id === 'misas'
      || e.target.id === 'pedidosSangre'
      || e.target.id === 'cortes'
      || e.target.id === 'institucionales'
      || e.target.id === 'eventos'
      || e.target.id === 'thanks'
      || e.target.id === 'reminders'
      || e.target.id === 'fallecimientos'
      || e.target.id === 'lostFound'
      )
    {
      setFormData({...formData, category: e.target.id});
    }

    if (
      e.target.type === 'number'
    ){
      setFormData({
        ...formData,
        repetitions: +e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    const fecha = new Date ( ) ;
    //no necesito la primer emisión
    const fechaUltimaEmision = getFechaUltimaEmision( fecha, emisionesArr, formData.repetitions ) ;
    console.log("fechaUltimaEmision: ");
    console.log(fechaUltimaEmision)
    formData.fechaUltimaEmision = fechaUltimaEmision ;

    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/listing/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }
      navigate(`/`);
    } catch (error) {
      setError(error.message);
    }
  };


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
            id='recipient'
            maxLength='62'
            minLength='10'
            onChange={handleChange}
            required
          />
          <textarea
            type='text'
            placeholder='Mensaje...'
            className='border p-3 rounded-lg'
            id='message'
            onChange={handleChange}
            required
          />
          <div className='flex gap-1'>
            <span className='font-semibold my-auto' >Cuántas veces se repetirá el mensaje?</span>
                <input
                    className=' gap-1 p-2 w-16 border border-gray-300 rounded-lg'
                    type='number'
                    id='repetitions'
                    min='1'
                    max='1000'
                    value={formData.repetitions}
                    onChange={handleChange}
                    required
                />
          </div>
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" id="p2p" onChange={handleChange} checked={formData.category === 'p2p'} className='w-5'/>
              <span>Persona a persona</span>
            </div>
            <div className="flex gap-2">
	            <input type="checkbox" id="pedidosSangre" onChange={handleChange} checked={formData.category === 'pedidosSangre'} className='w-5'/>
	            <span>pedido de sangre</span>
            </div>
            <div className="flex gap-2">
	            <input type="checkbox" id="lostFound" onChange={handleChange} checked={formData.category === 'lostFound'} className='w-5'/>
	            <span>Objetos perdidos</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="institucionales" onChange={handleChange} checked={formData.category === 'institucionales'} className='w-5'/>
              <span>Institucionales</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="eventos" onChange={handleChange} checked={formData.category === 'eventos'} className='w-5'/>
              <span>Eventos</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="thanks" onChange={handleChange} checked={formData.category === 'thanks'} className='w-5'/>
              <span>Agradecimientos</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="reminders" onChange={handleChange} checked={formData.category === 'reminders'} className='w-5'/>
              <span>Recordatorios</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="fallecimientos" onChange={handleChange} checked={formData.category === 'fallecimientos'} className='w-5'/>
              <span>Fallecimientos</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="misas" onChange={handleChange} checked={formData.category === 'misas'} className='w-5'/>
              <span>Misa</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="cortes" onChange={handleChange} checked={formData.category === 'cortes'} className='w-5'/>
              <span>Cortes</span>
            </div>
          </div>

          <div className='flex gap-6 flex-wrap justify-start'>
            <span className='font-semibold w-20'>Lunes</span>
            <div className='flex gap-6 flex-wrap'>
                <div className='flex gap-1'>
                <input type='checkbox' id='Mon0700' className='w-5' onChange={handleChange}/>
                <span>07:00</span>
                </div>
                <div className='flex gap-1'>
                <input type='checkbox' id='Mon1130' className='w-5' onChange={handleChange}/>
                <span>11:30</span>
                </div>
                <div className='flex gap-1'>
                <input type='checkbox' id='Mon1300' className='w-5' onChange={handleChange}/>
                <span>13:00</span>
                </div>
                <div className='flex gap-1'>
                <input type='checkbox' id='Mon1630' className='w-5' onChange={handleChange}/>
                <span>16:30</span>
                </div>
                <div className='flex gap-1'>
                <input type='checkbox' id='Mon1900' className='w-5' onChange={handleChange}/>
                <span>19:00</span>
                </div>
                <div className='flex gap-1'>
                <input type='checkbox' id='Mon2100' className='w-5' onChange={handleChange}/>
                <span>21:00</span>
                </div>
            </div>
          </div>
          <div className='flex gap-6 flex-wrap justify-start'>
            <span className='font-semibold w-20'>Martes</span>
            <div className='flex gap-1'>
              <input type='checkbox' id='Tue0700' className='w-5' onChange={handleChange}/>
              <span>07:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Tue1130' className='w-5' onChange={handleChange}/>
              <span>11:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Tue1300' className='w-5' onChange={handleChange}/>
              <span>13:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Tue1630' className='w-5' onChange={handleChange}/>
              <span>16:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Tue1900' className='w-5' onChange={handleChange}/>
              <span>19:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Tue2100' className='w-5' onChange={handleChange}/>
              <span>21:00</span>
            </div>
          </div>
          <div className='flex gap-6 flex-wrap justify-start'>
            <span className='font-semibold w-20'>Miercoles</span>
            <div className='flex gap-1'>
              <input type='checkbox' id='Wed0700' className='w-5' onChange={handleChange}/>
              <span>07:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Wed1130' className='w-5' onChange={handleChange}/>
              <span>11:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Wed1300' className='w-5' onChange={handleChange}/>
              <span>13:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Wed1630' className='w-5' onChange={handleChange}/>
              <span>16:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Wed1900' className='w-5' onChange={handleChange}/>
              <span>19:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Wed2100' className='w-5' onChange={handleChange}/>
              <span>21:00</span>
            </div>
          </div>
          <div className='flex gap-6 flex-wrap justify-start'>
            <span className='font-semibold w-20'>Jueves</span>
            <div className='flex gap-1'>
              <input type='checkbox' id='Thu0700' className='w-5' onChange={handleChange}/>
              <span>07:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Thu1130' className='w-5' onChange={handleChange}/>
              <span>11:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Thu1300' className='w-5' onChange={handleChange}/>
              <span>13:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Thu1630' className='w-5' onChange={handleChange}/>
              <span>16:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Thu1900' className='w-5'onChange={handleChange} />
              <span>19:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Thu2100' className='w-5' onChange={handleChange}/>
              <span>21:00</span>
            </div>
          </div>
          <div className='flex gap-6 flex-wrap justify-start'>
            <span className='font-semibold  w-20'>Viernes</span>
            <div className='flex gap-1'>
              <input type='checkbox' id='Fri0700' className='w-5' onChange={handleChange}/>
              <span>07:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Fri1130' className='w-5' onChange={handleChange}/>
              <span>11:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Fri1300' className='w-5' onChange={handleChange}/>
              <span>13:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Fri1630' className='w-5' onChange={handleChange}/>
              <span>16:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Fri1900' className='w-5' onChange={handleChange}/>
              <span>19:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Fri2100' className='w-5' onChange={handleChange}/>
              <span>21:00</span>
            </div>
          </div>
          <div className='flex gap-6 flex-wrap justify-start'>
            <span className='font-semibold w-20'>Sábado</span>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sat0700' className='w-5' onChange={handleChange}/>
              <span>07:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sat1130' className='w-5' onChange={handleChange}/>
              <span>11:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sat1300' className='w-5' onChange={handleChange}/>
              <span>13:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sat1630' className='w-5' onChange={handleChange}/>
              <span>16:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sat1900' className='w-5' onChange={handleChange}/>
              <span>19:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sat2100' className='w-5' onChange={handleChange}/>
              <span>21:00</span>
            </div>
          </div>
          <div className='flex gap-6 flex-wrap justify-start'>
            <span className='font-semibold w-20'>Domingo</span>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sun0700' className='w-5' onChange={handleChange}/>
              <span>07:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sun1130' className='w-5' onChange={handleChange}/>
              <span>11:30</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sun1300' className='w-5' onChange={handleChange}/>
              <span>13:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sun1900' className='w-5' onChange={handleChange}/>
              <span>19:00</span>
            </div>
            <div className='flex gap-1'>
              <input type='checkbox' id='Sun2100' className='w-5' onChange={handleChange}/>
              <span>21:00</span>
            </div>
          </div>
        </div>

        
        <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80' disabled={loading} onClick={handleSubmit}>Crear mensaje al poblador rural</button>
        {error && <p className='text-red-500'>{error}</p>}
      </form>
    </main>
  );
}