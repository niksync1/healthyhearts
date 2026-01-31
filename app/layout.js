import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Life From 30 - Healthy Living Matters From 30',
  description: 'Life From 30 is a health & lifestyle charity encouraging adults to live healthy lives.'
}

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
