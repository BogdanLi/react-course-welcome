import { Container } from '@mui/material';

interface Props {
  params: { id: string };
}

const ExtensionPage = ({ params: { id } }: Props) => {
  return <Container>{id}</Container>;
};

export default ExtensionPage;
