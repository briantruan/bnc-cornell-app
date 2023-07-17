import './globals.css'
import { Montserrat } from 'next/font/google'
import Sidebar from '@/components/sidebar/sidebar'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Cornell Basic Needs',
    default: 'Cornell Basic Needs',
  },
  description: "Centralized space for Cornell students and affiliates to identify essential resources in supporting basic needs and well-being",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div>
          <Sidebar children={children}/>
        </div>
      </body>
    </html>
  )
}
