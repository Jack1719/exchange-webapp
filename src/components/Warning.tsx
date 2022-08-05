import React from "react"

interface IProps {
  message: string
}
/**
 * Warning Component
 */

const Warning: React.FC<IProps> = ({ message }) => {
  return (
    <div className='p-4 text-sm text-gray-700 bg-gray-100 rounded-lg' role='alert' id='warning-id'>
      {message}
    </div>
  )
}

export default Warning
