import { useContext } from 'react';
import { SidebarContext } from './../../../Contexts/SidebarContext';
import ultragroupla_logo from '../../../Assets/ultragroupla_logo.png';

import {
  Box,
  Drawer
} from '@mui/material';


import { styled } from '@mui/material/styles';

import SidebarMenu from './SidebarMenu';
import ButtonAppBar from '../Header';


const TopSection = styled(Box)(
  ({ theme }) => `
    display: flex;
    height: 88px;
    justify-content: center;
    align-items: center;
    margin: 0 ${theme.spacing(2)} ${theme.spacing(2)};
    border-bottom: ${theme.sidebar.dividerBg} solid 1px;
`
);


function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);

  const closeSidebar = () => toggleSidebar();

  return (
    <>
      <ButtonAppBar toggleSidebar={closeSidebar}/>
      <Drawer
        anchor="left"
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
        ModalProps={{
          keepMounted: true // mejora rendimiento mobile
        }}
      >
          <TopSection>
            <img width="160" src={ultragroupla_logo} alt="ultragroupla_logo" />
          </TopSection>

          <SidebarMenu />
      </Drawer>
    </>
  );
}

export default Sidebar;