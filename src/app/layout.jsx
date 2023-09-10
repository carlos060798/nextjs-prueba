import Navigate from '@/components/Navigate'
import './globals.css'
// componete que tiene la pagina principal

export const metadata = {
  title: 'Prueba 1',
  description: 'Prueba 1',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://bootswatch.com/5/flatly/bootstrap.min.css" />
      </head>
      <body >
      <Navigate/>
      <div className='container p-4'>
      {children}
      </div>
        </body>
    </html>
  )
}
