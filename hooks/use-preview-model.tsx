import { Product } from "@/types";
import { create } from "zustand";

interface PreveiwModalProps {
    isOpen:boolean,
    data?:Product,
    onOpen:(data:Product)=>void,
    onClose:()=>void
}

const usePreveiwModel =create<PreveiwModalProps>((set)=>({
    isOpen:false,
    data:undefined,
    onOpen:(data:Product)=>set({data, isOpen:true}),
    onClose:()=>set({isOpen:false})
}))

export default usePreveiwModel