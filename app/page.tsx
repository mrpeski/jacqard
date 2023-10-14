import BaseURL from '@/components/BaseURL'
import * as windy from '@/helpers/windy'

interface Props {
    searchParams: Record<string, string>
}

export default function Home({searchParams}: Props) {
  return (
    <main className={windy.pageBody}>
        <div className={windy.blackBg}/>
        <BaseURL url={searchParams?.['dest'] || 'https://2switches.com'}/>
    </main>
  )
}
