import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import BedTwoToneIcon from '@mui/icons-material/BedTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import DomainTwoToneIcon from '@mui/icons-material/DomainTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';

export const menuAgencia = [
  {
    heading: '',
    items: [
      {
        name: 'Inicio',
        icon: HomeTwoToneIcon,
        link: '/home',
        items: null
      },
    ]
  },
  {
    heading: 'Administración',
    items: [
      {
        name: 'Hoteles',
        icon: DomainTwoToneIcon,
        link: '/admin/hotel/list',
        items: null
      },
      {
        name: 'Habitaciones',
        icon: BedTwoToneIcon,
        link: '/admin/room/list',
        items: null
      },
      {
        name: 'Reservas',
        icon: CalendarMonthTwoToneIcon,
        link: '/admin/booking/list',
        items: null
      },
    ]
  },
  {
    heading: null,
    items: [
      {
        name: 'Logout',
        icon: LogoutTwoToneIcon,
        link: '/logout',
        items: null
      },
    ]
  }
];

export const menuViajero = [
  {
    heading: '',
    items: [
      {
        name: 'Inicio',
        icon: HomeTwoToneIcon,
        link: '/home',
        items: null
      },
    ]
  },
  {
    heading: 'Administración',
    items: [
      {
        name: 'Reservar',
        icon: CalendarMonthTwoToneIcon,
        link: '/home',
        items: null
      },
    ]
  },
  {
    heading: null,
    items: [
      {
        name: 'Logout',
        icon: LogoutTwoToneIcon,
        link: '/logout',
        items: null
      },
    ]
  }
];


