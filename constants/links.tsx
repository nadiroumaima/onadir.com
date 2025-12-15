

import type {  NavLink } from '@/types/menu';
import { ROUTES } from './routes';
import {
 AtSign,
  Home,
} from '@/components/icons';

export const NAV_LINKS: NavLink[] = [
  {
    path: '/',
    label: 'Home',
    icon: <Home />,
    onlyShowOnDropdownMenu: false,
  },
  
  {
    path: ROUTES.about,
    label: 'About',
    icon: <AtSign />,
  },
  
 

];