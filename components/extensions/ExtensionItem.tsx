'use client';

import Link from 'next/link';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';

interface Props {
  href: string;
  title: string;
  description: string;
}

const ExtensionItem = ({ href, title, description }: Props) => {
  return (
    <Link href={href}>
      <Paper sx={{ px: 3, py: 2 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Button variant="text" sx={{ pl: 0 }}>
          Read More
        </Button>
      </Paper>
    </Link>
  );
};

export default ExtensionItem;
