import { useState } from 'react'

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='my-2'>
      {!isOpen && <button onClick={() => setIsOpen(true)}>Open</button>}
      {isOpen && (
        <div className='bg-white p-6 rounded shadow-lg'>
          <h2>Modal Title</h2>
          <p>This is simple modal content</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </div>
  )
}

export default Modal
