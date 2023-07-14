import './globals.css'
import NavBar from '../components/NavBar'
import Background from '@/components/Background'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Ninad\'s Blog',
  description: 'Thoughts: My goal with this blog is to share my thoughts and review some educational stuffs. It can be books, academics, technology, etc.',
  keywords: [],
  author: 'Ninad Naik',
  icons: {
    icon: '/logo.ico',
    apple: '/logo.ico',
  },
  openGraph: {
    title: 'Ninad\'s Blog',
    description: 'Thoughts: My goal with this blog is to share my thoughts and review some educational stuffs. It can be books, academics, technology, etc.',
    images: ['https://i.ibb.co/s9CTGPb/1.jpg'],
  },
  twitter: {
    title: 'Ninad\'s Blog',
    description: 'Thoughts: My goal with this blog is to share my thoughts and review some educational stuffs. It can be books, academics, technology, etc.',
    images: ['https://i.ibb.co/s9CTGPb/1.jpg']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {/* <Background/> */}
        {children}
        <Footer/>
        </body>
    </html>
  )
}
