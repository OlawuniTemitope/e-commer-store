"use client"
import { PreviewModel } from '@/components/preview-model'
import React, { useEffect, useState } from 'react'

const ModelProvider = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false)
    useEffect(()=>{
        setIsMounted(true)
    },[])
    if(!isMounted){
        return null
    }
  return (
<PreviewModel/>
  )
}

export default ModelProvider