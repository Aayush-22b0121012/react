import React from 'react'

export default function footer() {
    const today =new Date();
    
  return (
    <div>Copyright &copy; {today.getFullYear()} </div>
  )
}
