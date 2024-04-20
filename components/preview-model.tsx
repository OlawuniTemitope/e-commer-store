"use client"
import usePreveiwModel from '@/hooks/use-preview-model'
import React from 'react'
import Model from './ui/model'
import Gallery from './gallery'
import { Info } from './info'

export const PreviewModel = () => {
  const previewModel = usePreveiwModel()
  const product = usePreveiwModel((state)=>state.data)
  if(!product){
    return null
  }
  return (
    <Model onClose={previewModel.onClose} open={previewModel.isOpen}>
      <div className='grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8'>
        <div className='sm:col-span-4 lg:col-span-5'>
          <Gallery images={product?.images}/>
        </div>
        <div className='sm:col-span-8 lg:col-span-7'>
          <Info data={product}/>
        </div>
      </div>
    </Model>
  )
}
