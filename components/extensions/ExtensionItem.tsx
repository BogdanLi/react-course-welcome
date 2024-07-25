'use client';

import Link from 'next/link';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';

interface Props {
  link: string;
  name: string;
  description: string;
}

const ExtensionItem = ({ link, name, description }: Props) => {
  return (
    <Paper
      sx={{
        px: 3,
        py: 2,
        width: '100%',
        ':hover': {
          boxShadow: 10,
        },
      }}
    >
      <Link
        href={link}
        className="flex h-full flex-col items-start justify-between"
        target="_blank"
      >
        <Box sx={{ height: '100%' }}>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {description}
          </Typography>
        </Box>
        <Button variant="text" sx={{ pl: 0 }}>
          Read More
        </Button>
      </Link>
    </Paper>
  );
};

export default ExtensionItem;
