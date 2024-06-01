import Navbar from '@/component/navbar/Navbar'
import Footer from '@/component/footer/Footer'
import 'tailwindcss/tailwind.css';


export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        <div className=''>
          <div className=' '>
          <Navbar />
          <div className=''>
          {children }
          <Footer />
          </div>
          </div>
          </div>
        </body>
    </html>
  )
}
