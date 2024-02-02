import './globals.css'
import { oswaldFont } from '@/utils/fonts';

export const metadata = {
  title: 'MediaCollege Denmark',
  description: 'Vi arbejder...',
}

export default function RootLayout({ children, params }) {

  console.log('params', params)

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={oswaldFont.className}>
        {children}
      </body>
    </html>
  )
}
