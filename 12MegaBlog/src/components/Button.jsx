/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function Button({
    children,
    type= 'button',
    bgColor= 'bg-blue-600',
    textColor= 'text-white',
    className= '',
    ...props
   
}){   
  return (
   <button className={`px-4 py-2 rounded-lg ${textColor} ${className}`} {...props}>
    {children}
   </button>
  )
}

export default Button
