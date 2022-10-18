import React from 'react'
import ItemListContainer from '../ItemListContainer'

export const Initial = () => {
  return (
    <div>
      <div className='envio'>
        <p>
          <strong className='text-danger'>
      ¡Envío Gratis!</strong> Con tu compra Online mayor a <strong className='text-danger'>$15000.-</strong>
        </p>
      </div>
      <div>
      <img className='imageninicio' src="/img/inicio.png" alt="maquillaje" />
      </div>
      <div className='trabajando'>
        <p>
        <strong className='text-light'>¡VENTAS HABILITADAS! ESTAMOS TRABAJANDO CON NORMALIDAD</strong>
        </p>
      </div>
      <div>
        <br /><br /><br />
      <ItemListContainer/>
      </div>
    </div>
  )
}
