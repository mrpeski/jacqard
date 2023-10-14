import BaseURL from '@/components/BaseURL'
import * as windy from '@/helpers/windy'

export default function Home({searchParams}) {
  return (
    <main className={windy.pageBody}>
        <div className={windy.blackBg}/>
        <BaseURL url={searchParams?.['dest'] || 'https://2switches.com'}/>
    </main>
  )
}
