import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  title: string;
  link: string;
  children: ReactNode;
}

const NavLink = ({ title, link, children }: Props) => {
  return (
    <Link
      href={link}
      className="group relative block rounded-[100%] bg-indigo-300 p-4 transition-all duration-150 hover:rounded-xl hover:bg-indigo-500"
    >
      {children}
      <div className="absolute left-20 top-1/2 hidden -translate-y-1/2 rounded-lg bg-indigo-100 px-2 py-1 group-hover:block">
        {title}
      </div>
    </Link>
  );
};

export default NavLink;
