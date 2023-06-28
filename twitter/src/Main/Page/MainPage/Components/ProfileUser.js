
import React from 'react'
import UserChecked from './UserChecked'
import '../Design/DesignProfile.css'

const ProfileUser = () => {
  const storageName = [{
    userName: '',
    nickName: '',
    userStatus: null
  }]
  return (
    <div className='boxPositionProfileInfo' >
      <p className='userName'>{storageName.userName = 'santiago'} {storageName.userStatus=<UserChecked/>}</p>
      <p className='nickName'>{storageName.nickName = '@devsantiag'}</p>
    </div>
  )
}
export default ProfileUser