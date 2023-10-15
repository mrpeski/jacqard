import getProtocol from "@/helpers/getProtocol";
import getHost from "@/helpers/getHost";
import {input} from '@/helpers/windy'

interface Props {
    url: string;
}
export default function BaseURL({url}: Props) {
    console.log(url)
    const dest = url ?? `https://2switches.com`
    return (
            <div className="relative mt-20 m-auto rounded-md bg-gray-100 shadow-sm flex rounded-md">
                <div className="pointer-events-none inset-y-0 flex items-center pl-2">
                    <span className="text-gray-500 sm:text-sm pr-2">
                        {getProtocol(dest) +'//'}
                    </span>
                </div>
                <input
                    type="text"
                    name="domain"
                    id="domain"
                    className={input}
                    placeholder="Domain name"
                    defaultValue={getHost(dest)}
                />
            </div>
    )
}
