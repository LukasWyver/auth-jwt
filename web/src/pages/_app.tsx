import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/contexts/AuthContext';

import { Roboto_Flex as Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <main className={`${roboto.className}`}>
        <Component {...pageProps} />
      </main>
    </AuthProvider>
  );
}
