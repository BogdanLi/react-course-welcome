// import ExtensionItem from '';
import ExtensionsGrid from '@/components/extensions/ExtensionsGrid';
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
      <ExtensionsGrid />
    </Container>
  );
};

export default ExtensionsPage;
