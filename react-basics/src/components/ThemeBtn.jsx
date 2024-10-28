import React, { useContext, useEffect } from 'react'
import { UseTheme } from './ThemeContext'

const ThemeBtn = () => {
    const data = UseTheme()
    // console.log(data)
    useEffect(()=>{
        localStorage.setItem('theme',data.themeMode)
    },[data.themeMode])
  return (
    <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" onClick={()=>data.toggleTheme()}/>
    </div>
  )
}

export default ThemeBtn
