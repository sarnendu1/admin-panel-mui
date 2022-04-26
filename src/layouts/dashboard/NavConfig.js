// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'app',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'E-Commerce',
    path: '#',
    icon: getIcon('eva:shopping-bag-fill') ,
  },
  {
    title: 'Analytics',
    path: '#',
    icon: getIcon('eva:activity-outline'),
  },
  {
    title: 'Banking',
    path: '#',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Booking',
    path: '#',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'User',
    path: '#',
    icon: getIcon('eva:person-add-fill'),
  },
  {
    title: 'Blog',
    path: '#',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Mail',
    path: '#',
    icon: getIcon('eva:email-outline'),
  },
];

export default navConfig;
