
import { Avatar, Dropdown } from 'flowbite-react';
import {jwtDecode} from 'jwt-decode';
import { Link } from 'react-router-dom';

function IconButton() {
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);

  const imageSrc = decodedToken.profilePic;
  const altText = decodedToken.username;
  const email = decodedToken.email;

  return (
    <Dropdown arrowIcon={false} inline 
    label={<Avatar alt={altText} img={imageSrc} rounded/>
    } className='inline-block'>
<Dropdown.Header>
    <span className='block text-sm'>@{altText}</span>
    <span className='block text-sm font-m truncate'>{email}</span>
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