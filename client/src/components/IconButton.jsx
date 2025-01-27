
import { Avatar, Dropdown } from 'flowbite-react';
import { useApi } from '../context/ContextApi';
import { Link } from 'react-router-dom';

function IconButton() {
  const { userData } = useApi();
console.log(userData)
  return (
    <Dropdown arrowIcon={false} inline 
    label={<Avatar alt={
      userData.username} img={userData.profilePic} rounded/>
    } className='inline-block'>
<Dropdown.Header>
    <span className='block text-sm'>@{userData.
username}</span>
    <span className='block text-sm font-m truncate'>{userData.email}</span>
</Dropdown.Header>
<Link to ='/dashboard?tab=profile'>
<Dropdown.Item>Profile</Dropdown.Item>
</Link>
<Dropdown.Divider/>
<Dropdown.Item >Logout</Dropdown.Item>

    </Dropdown>
  );
}

export default IconButton;