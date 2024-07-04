import 'tailwindcss/tailwind.css';
import Providers from '@/utils/Provider';


export const metadata = {
  title: 'Solusi Wisata',
  description: 'Solusi Perjalanan Anda',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        <Providers>
          {children}
        </Providers>
        </body>
    </html>
  )
}
