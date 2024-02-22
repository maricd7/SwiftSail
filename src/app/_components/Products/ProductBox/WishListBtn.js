'use client'
import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'

export const WishListBtn = ({product}) => {
    const [iconColor,setIconColor] = useState('#808080')
    const [wishList, setWishList] = useState([])


    const handleClick = ()=>{
        setWishList(localStorage.getItem('wishlist'))
        localStorage.setItem('wishlist', JSON.stringify([...wishList,product]))
        iconColor === '#808080' ? setIconColor('#FF6961') : setIconColor('#808080');
    }
  return (
    <Icon className='absolute left-2 top-2 z-40' onClick={()=>handleClick()} icon="ph:heart-straight-fill" width="24" height="24"  style={{color: iconColor}} />
  )
}
