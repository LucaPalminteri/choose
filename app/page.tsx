import { Inter } from '@next/font/google'
import Cards from '../components/Cards'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
      <h2>MAIN QUESTION</h2>
      <Cards/>
    </main>
  )
}
