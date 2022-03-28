import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    {url: '/search', text: 'All'},
    {url: '/news', text: 'News'},
    {url: '/videos', text: 'Videos'},
    {url: '/image', text: 'Image'},
]

const Links = () => {
     let activeStyle = {
    textDecoration: "underline"
  }
  return (
    <div className='flex sm:justify-around justify-between items-center'>
        {links.map(({url, text}) => (
            <NavLink to={url} className='text-blue-700 border-b-2 dark:text-blue-300 hover:border-blue-700 pb-2 mx-3' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } >
                {text}
            </NavLink>
        ))}

    </div>
  )
}

export default Links