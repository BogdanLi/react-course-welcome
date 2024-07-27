import { VscExtensions } from 'react-icons/vsc';
import { VscCode } from 'react-icons/vsc';

import NavLink from './NavLink';

const links = [
  {
    id: 1,
    title: 'home',
    link: '/',
    icon: (
      <VscCode className="h-6 w-6 transition-all duration-150 group-hover:text-white" />
    ),
  },
  {
    id: 2,
    title: 'extensions',
    link: '/extensions',
    icon: (
      <VscExtensions className="h-6 w-6 transition-all duration-150 group-hover:text-white" />
    ),
  },
];

const Navbar = () => {
  return (
    <div className="fixed bottom-0 z-50 flex w-full gap-4 bg-slate-800 p-4 md:relative md:float-start md:min-h-full md:w-auto md:flex-col">
      {links.map((link) => (
        <NavLink key={link.id} {...link}>
          {link.icon}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
