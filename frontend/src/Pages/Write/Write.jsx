import React from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import './write.css'
import { display } from '@mui/system';

const Write = () => {
  return (
    <div className='write'>
        <img
        className='writeImg'
        src='http://4kwallpapers.com/images/walls/thumbs_2t/5667.jpg'
        alt=''/>
        <form className='writeForm'>
            <div className='writeFormGroup'>
                <label htmlFor='fileInput' >
                <i class="writeIcon fa-solid fa-plus"></i>
                   {/* <AddRoundedIcon/> */}
                   
                </label>
                <input type='file' id='fileInput' style={{display:'none'}}/>
                <input type='text' placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story..'
                type='text'
                className='writeInput writeText'
                ></textarea>
            </div>
            <button className='writeSubmit'>publish</button>
        </form>
    </div>
  )
}

export default Write