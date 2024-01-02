import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mertz International Limited',
  description: 'Streamline your Cross-border Taxes, Maximize Savings, and Embrace your Expat Life',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/react-modal/3.14.3/react-modal.min.js"
        integrity="sha512-MY2jfK3DBnVzdS2V8MXo5lRtr0mNRroUI9hoLVv2/yL3vrJTam3VzASuKQ96fLEpyYIT4a8o7YgtUs5lPjiLVQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"></script> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
