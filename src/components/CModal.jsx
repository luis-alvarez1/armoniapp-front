import React from 'react'
import classNames from 'classnames'

const CModal = ({
  title = 'example...',
  children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  show,
  onClose,
  size = 'md',
  centered = false,
  backdrop = true,
  className,
}) => {
  const modalClasses = classNames(
    'modal',
    {
      'd-block': show,
      'modal-dialog-centered': centered,
    },
    className
  )

  const modalContentClasses = classNames(
    'modal-content',
    {
      [`modal-${size}`]: size !== 'md',
    }
  )

  const handleClose = (e) => {
    if (e.target === e.currentTarget || !backdrop) {
      onClose();
    }
  }

  return (
    <div
      className={modalClasses}
      onClick={handleClose}
      role="dialog"
      tabIndex="-1"
      aria-modal="true"
    >
      <div className="modal-dialog">
        <div className={modalContentClasses}>
          {title && (
            <div className="modal-header d-flex justify-content-between align-items-center">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="close border-0"
                onClick={onClose}
                aria-label="Close"
                data-dismiss="modal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default CModal