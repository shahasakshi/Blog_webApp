import React from 'react'
import './settings.css'
import Sidebar from '../../Sidebar/Sidebar'

const Settings = () => {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          
        </div>
        <form className='settingsForm'>
            <label>Profile Picture</label>
            <div className='settingsPP'>
              <img 
              src='http://4kwallpapers.com/images/walls/thumbs_2t/5667.jpg'
              alt=''
              />
              <label htmlFor='fileInput'>
              <i className="settingsPPIcon fa-solid fa-circle-user"></i>
              </label>
              <input type='file' id='fileInput' style={{display:'none'}}/>
            </div>
            <label>Username</label>
            <input type='text' placeholder='Safak'/>
            <label>Email</label>
            <input type='email' placeholder='Safak@gmail.com'/>
            <label>Password</label>
            <input type='password'/>
            <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings