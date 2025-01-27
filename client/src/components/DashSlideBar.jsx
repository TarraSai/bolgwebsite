import { Sidebar } from 'flowbite-react';
import { FaUserAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function DashSlideBar() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const name = query.get('tab');
  const [tab, setTab] = useState('');

  useEffect(() => {
    if (name) {
      setTab(name);
    }
  }, [location.search]);

  return (
    <div>
      <Sidebar className="w-full md:w-56">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {/* Use 'as' prop to pass Link component */}
            <Sidebar.Item
              as={Link}
              to="/dashboard?tab=profile"
              active={tab === 'profile'}
              icon={FaUserAlt}
              label="user"
              labelColor="dark"
            >
              Profile
            </Sidebar.Item>
            <Sidebar.Item icon={FaSignOutAlt}>
              Sign Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default DashSlideBar;
