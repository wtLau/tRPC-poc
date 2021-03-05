import React from 'react'
import Image from 'next/image'

const NotFound = () => (
  <div className='error-404'>
    <div>
      <Image
        src='/static/images/404.svg'
        alt='error404'
        width={500}
        height={500}
      />
    </div>
    <h3 style={{ textAlign: 'center' }}>
      Sorry, looks like the page you looked for
      doesn't exist :(
    </h3>
  </div>
)

export default NotFound
