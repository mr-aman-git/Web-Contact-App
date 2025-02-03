import React, {useState} from 'react'


const CustomHook = () => {

    let [open, setOpen]= useState(false);
    
    let onOpen=()=>{
      setOpen(true);
    }

    let onClose =()=>{
        setOpen(false);
    };
  return {onClose, onOpen, open, setOpen};
}

export default CustomHook