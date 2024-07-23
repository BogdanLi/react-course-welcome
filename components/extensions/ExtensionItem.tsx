import Link from 'next/link';

interface Props {
  href: string;
  title: string;
  description: string;
}

const ExtensionItem = ({ href, title, description }: Props) => {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-gray-300 p-4 text-slate-800 transition-all duration-150 hover:bg-slate-800 hover:text-gray-300"
    >
      <p className="mb-2 text-xl font-bold">{title}</p>
      <p className="mb-4">{description}</p>
      <p className="hover-underline font-semibold">Read More</p>
    </Link>
  );
};

export default ExtensionItem;
