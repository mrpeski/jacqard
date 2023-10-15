const blackBg = `relative flex place-items-center before:absolute
       before:w-[480px]
       before:-translate-x-1/2
       before:rounded-full
       before:bg-gradient-radial
       before:from-white before:to-transparent
       before:blur-2xl before:content-['']
       after:absolute after:-z-20
       after:h-[180px] after:w-[240px]
       after:translate-x-1/3 after:bg-gradient-conic
       after:from-sky-200 after:via-blue-200
       after:blur-2xl after:content-['']
       before:dark:bg-gradient-to-br
       before:dark:from-transparent
       before:dark:to-blue-700 before:dark:opacity-10
       after:dark:from-sky-900 after:dark:via-[#0141ff]
       after:dark:opacity-40 before:lg:h-[360px] z-[-1]
`
const input = `block w-full border-0 rounded-md py-1.5 
pl-1 pr-20 text-gray-900 ring-gray-300 
placeholder:text-gray-400 sm:text-sm sm:leading-6
`

const pageBody = `flex flex-col items-center justify-between p-24`

export {pageBody, input, blackBg}
