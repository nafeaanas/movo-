import React from 'react'
import SideBar from './SideBar'
import Uploder from '../../Components/Uploder'
import { Input } from '../../Components/UsedInputs'

function Profile() {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-bold'>Profile</h2>
          <Uploder />
          <Input
            label='FullName' 
            placeholder='movo' 
            type='email' 
            bg={true}
          />
          <Input
            label='Email' 
            placeholder='movo@gmail.com' 
            type='email' 
            bg={true}
          />
          <div className='flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4'>
            <button className='bg-subMain font-medium transition hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
              Delete Account
            </button>
            <button className='bg-main font-medium transition hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
              Update Profile
            </button>
          </div>
        </div>
    </SideBar>
    )
}

export default Profile