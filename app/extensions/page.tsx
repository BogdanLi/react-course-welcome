// import ExtensionItem from '';
import { Container } from '@mui/material';
import dynamic from 'next/dynamic';

const ExtensionItem = dynamic(
  () => import('@/components/extensions/ExtensionItem'),
);

export function generateMetadata() {
  return {
    title: 'Расширения',
    description: 'Все нужные расширения для VS Code',
    openGraph: {
      title: 'Расширения',
      description: 'Все нужные расширения для VS Code',
    },
  };
}

const ExtensionsPage = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-8">
        {Array.from(Array(20).keys()).map((el) => (
          <ExtensionItem
            href="/extensions/name"
            title="Title"
            description="
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        aperiam ab quibusdam fuga?"
            key={el}
          />
        ))}
      </div>
    </Container>
  );
};

export default ExtensionsPage;
