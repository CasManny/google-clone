import React from 'react'
import {Routes as RenderRoute, Route } from 'react-router-dom'
import Results from './Results'
import Search from './Search'

const Routes = () => {
  return (
    <RenderRoute>
      <Route path='/' element={<Search />} />
      <Route path='/search' element={<Results />} />
      <Route path='/images' element={<Results />} />
      <Route path='/videos' element={<Results />} />
      <Route path='/news' element={<Results />} />

    </RenderRoute>
  )
}

export default Routes