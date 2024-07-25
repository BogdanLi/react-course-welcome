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
    <div className="float-start flex min-h-full flex-col gap-4 bg-slate-800 p-4">
      {links.map((link) => (
        <NavLink key={link.id} {...link}>
          {link.icon}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
