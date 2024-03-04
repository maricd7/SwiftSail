import React from 'react'
import { Nav } from '../_components'
import UserProfile from '../_components/UserProfile/UserProfile'
import supabase from '../supabase'


function ProfilePage() {
    
    return (
    <div>
        <Nav/>
        <UserProfile/>
    </div>
  )
}

export default ProfilePage