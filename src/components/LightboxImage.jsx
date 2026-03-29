import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

function LightboxImage({ src, alt = '', className = '' }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-zoom-in`}
        onClick={() => setIsOpen(true)}
      />

      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-120 flex items-center justify-center bg-text-main/85 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={alt || 'Nuotraukos perziura'}
            onClick={() => setIsOpen(false)}
          >
            <button
              type="button"
              aria-label="Uzdaryti nuotrauka"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/50 text-2xl text-background transition hover:border-secondary-blue hover:text-secondary-blue"
            >
              ×
            </button>

            <img
              src={src}
              alt={alt}
              className="max-h-[90vh] max-w-[95vw] rounded-2xl shadow-2xl cursor-zoom-out"
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  )
}

export default LightboxImage
