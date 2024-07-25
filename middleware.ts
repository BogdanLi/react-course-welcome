import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ru', 'en'],

  defaultLocale: 'ru',
});

export const config = {
  matcher: ['/', '/(ru|en)/:path*'],
};
