import { ReactNode, useEffect, useRef } from 'react'

type ModalProps = {
  isOpen: boolean
  closeModal: () => void
  children?: ReactNode
}
const Modal = ({ isOpen, closeModal, children }: ModalProps) => {
  const modalRef = useRef(null)
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <div className='text-black fixed inset-0 z-50 flex items-center justify-center '>
          <div className='fixed inset-0 transition-opacity' onClick={closeModal}>
            <div className='absolute inset-0 bg-[rgb(31_41_55)] opacity-75'></div>
          </div>
          <div
            className='modal-box bg-white shadow-xl z-10 max-h-[90vh] transform overflow-hidden overflow-y-auto rounded-lg  transition-all sm:w-full sm:max-w-lg'
            ref={modalRef}
          >
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
