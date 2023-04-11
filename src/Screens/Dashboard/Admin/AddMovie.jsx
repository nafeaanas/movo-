import React from 'react'
import SideBar from '../SideBar'
import { Input, Message, Select } from '../../../Components/UsedInputs'
import Uploder from '../../../Components/Uploder'
import { Category } from '../../../Data/CategoriesData'
import { UsersData } from '../../../Data/MovieData'
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import { ImUpload } from 'react-icons/im'


function AddMovie() {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-bold'>Create Movie</h2>
          <div className='w-full grid md:grid-cols-2 gap-6'>
          <Input
            label='Movie Title' 
            placeholder='Game of Thrones' 
            type='text' 
            bg={true}
          />
          <Input
            label='Hours' 
            placeholder='2hr' 
            type='text' 
            bg={true}
          />
          </div>
          
          <div className='w-full grid md:grid-cols-2 gap-6'>
          <Input
            label='Language Used' 
            placeholder='English' 
            type='text' 
            bg={true}
          />
          <Input
            label='Year of Release' 
            placeholder='2022' 
            type='number' 
            bg={true}
          />
          </div>
          <div className='w-full grid md:grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2'>
                <p className='text-border font-semibold text-sm'>
                    Image without Title
                </p>
                <Uploder/>
                <div className='w-32 h-32 p-2 bg-main border border-border rounded'>
                    <img
                     src='/images/movies/1.jpg' 
                     alt='' 
                     className='w-full h-full object-cover rounded'
                    />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <p className='text-border font-semibold text-sm'>
                    Image with Title
                </p>
                <Uploder/>
                <div className='w-32 h-32 p-2 bg-main border border-border rounded'>
                    <img
                     src='/images/movies/2.jpg' 
                     alt='' 
                     className='w-full h-full object-cover rounded'
                    />
                </div>
            </div>

          </div>
          <Message
           label='Movie Description' 
           placeholder='Make it short and sweet'
          />
          <div className='text-sm w-full'>
            <Select label='Movie Category' options={Category}/>
          </div>

          <div className='flex flex-col gap-2 w-full'>
                <label className='text-border font-semibold text-sm'>
                    Movie Video
                </label>
                <Uploder/>
            </div>
            <div className='w-full grid lg:grid-cols-2 gap-6 items-start'>
                <button className='w-full py-4 bg-main border-subMain border-dashed text-white rounded'>
                    Add Cast
                </button>
                <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4'>
                    {UsersData.map((user, i) => (
                        <div
                         key={i} 
                         className='p-2 italic text-xs text-text rounded flex-colo bg-main border border-border'
                        >
                            <img
                             src={`/images/${user.Image ? user.Image : '/images/user.jpg'}`} 
                             alt={user.fullName} 
                             className='w-full h-24 object-cover rounded mb-2'
                            />
                            <p>{user.fullName}</p>
                            <div className='flex-rows mt-2 w-full gap-2'>
                              <button className='w-6 h-6 flex-colo bg-dry border border-border text-subMain rounded'>
                                <MdDelete />
                              </button>
                              <button className='w-6 h-6 flex-colo bg-dry border border-border text-green-600 rounded'>
                                <FaEdit />
                              </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
         
            <button className='bg-subMain w-full flex-rows gap-6 font-medium text-white py-4 rounded'>
              <ImUpload/> Publish Movie
            </button>
          
        </div>
    </SideBar>
  )
}

export default AddMovie