'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';

const LanguageChoice = () => {
  const [choice, setChoice] = useState('');

  const t = useTranslations('home');

  const locale = useLocale();
  const router = useRouter();
  const path = usePathname();

  useLayoutEffect(() => {
    setChoice(locale);
  }, [locale]);

  const toggleLang = (lang: string) => {
    if (lang !== choice) {
      setChoice(lang);
      router.replace(`/${lang}${path.slice(3)}`);
    }
  };

  return (
    <Container
      sx={{ width: '100%', py: 4, display: 'flex', justifyContent: 'center' }}
    >
      <Box>
        <Typography variant="h3" sx={{ mb: 4, textAlign: 'center' }}>
          {t('title')}
        </Typography>
        <Box
          sx={{
            p: 1,
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            gap: 4,
          }}
        >
          <Button
            onClick={() => toggleLang('ru')}
            variant={choice === 'ru' ? 'contained' : 'outlined'}
          >
            Русский
          </Button>
          <Button
            onClick={() => toggleLang('en')}
            variant={choice === 'en' ? 'contained' : 'outlined'}
          >
            English
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LanguageChoice;
