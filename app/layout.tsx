import '../styles/index.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className='main-header'>
          <h1>Choose.com</h1>
          <h2>Luca Palminteri</h2>
        </header>
        {children}
      </body>
    </html>
  )
}
