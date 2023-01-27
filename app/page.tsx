import { Inter } from '@next/font/google'
import { use } from "react"
import supabase from "@/utils/supabase"
import { question,options } from '@/types/questions'
import Cards from '@/components/Cards'

const inter = Inter({ subsets: ['latin'] })

export const revalidate = 0;

async function getQuestions(){
    try {
        const { data, error}= await supabase.from('questions').select()
        return data
      } catch (error) {
        alert(error)
      }
}


export default function Home() {
  let data = use(getQuestions())

  let result:question = data != null ? data[Math.floor(Math.random() * data.length)] : ""
  let options:options = {
    option_one: result.option_one,
    option_two: result.option_two,
    option_one_value:result.option_one_value,
    option_two_value:result.option_two_value,
  } 
  
  return (
    <main className={inter.className}>
      <h2>{result.question}</h2>
      <Cards options={options}/>
    </main>
  )
}
