import BaseURL from '@/components/BaseURL'
import {pageBody, blackBg} from '@/helpers/windy'
import SearchParam from "@/components/SearchParam";
import { cookies } from 'next/headers'

interface Props {
    searchParams: Record<string, string>
}

export default function Home() {
    const cookieStore = cookies()
    const dest = decodeURIComponent(cookieStore.get('dest')?.value || '')
  return (
    <main className={pageBody}>
        <div className={blackBg}></div>
        <BaseURL url={dest || 'https://2switches.com'}/>
        <SearchParam url={dest || 'https://2switches.com'}/>
    </main>
  )
}
