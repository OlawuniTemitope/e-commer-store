"use client"
import Button from '@/components/ui/button'
import { IconButton } from '@/components/ui/icon-button'
import { Color, Size } from '@/types'
import { Dialog } from '@headlessui/react'
import {Plus, X } from 'lucide-react'
import React, { useState } from 'react'
import { Filter } from './filter'

interface MobileFilterProps{
    sizes:Size[],
    colors:Color[],
}

export const MobileFilter = ({sizes,colors}:MobileFilterProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const onOpen = ()=>setOpen(true)
    const onClose=()=>setOpen(false)
  return (
    <>
    <Button onClick={onOpen} className='flex items-center gap-x-2 lg:hidden'>
        <Plus/>
    </Button>
    <Dialog as='div' className="relative z-40 lg:hidden" 
    onClose={onClose} open={open}>
      <div className=' fixed inset-0 bg-black bg-opacity-25'/>
      <div className='fixed z-40 inset-0 flex'>
        <Dialog.Panel className="relative ml-auto w-full h-full flex
         max-w-xs flex-col overflow-y-auto pb-6 bg-white py-4 shadow-xl">
          <div className='flex items-center justify-end px-4'>
            <IconButton icon={<X size={25} />}onClick={onClose}/>
          </div>
          <div className='p-4'>
            <Filter
              valueKey="sizeId"
              name="Sizes"
              data={sizes}/>
            <Filter
              valueKey="sizeId"
              name="Sizes"
              data={colors}/>
            
          </div>
         </Dialog.Panel>
      </div>
    </Dialog>
    </>
  )
}
