import { use } from "react"
import supabase from "@/utils/supabase"

export const revalidate = 0;

async function getQuestions(){
    try {
        const { data, error} = await supabase.from('questions').select()
        return data
      } catch (error) {
        alert(error)
      }
}

function page() {
    let data = use(getQuestions())
    return <pre>{JSON.stringify(data,null,2)}</pre>
}

export default page