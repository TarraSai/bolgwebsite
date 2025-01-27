import { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DashSlideBar from '../components/DashSlideBar'
import DashProfilePaage from '../components/DashProfilePaage'
function Dashboard() {
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const name = query.get('tab')
  const [tab ,setTab]=useState('')
  useEffect(() => {
    if (name) {
      setTab(name);
    }
  }, [location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56 bg-back'>
<DashSlideBar/>
      </div>
      {tab === 'profile' && <DashProfilePaage/>}
       </div>
  )
}

export default Dashboard