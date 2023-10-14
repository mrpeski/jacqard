import getProtocol from "@/helpers/getProtocol";
import getHost from "@/helpers/getHost";
import * as windy from '@/helpers/windy'


export default function BaseURL({url}) {
    const dest = url ?? `https://2switches.com`
    return (
        <div>
            <div className="relative mt-2 rounded-md bg-gray-100 shadow-sm flex rounded-md">
                <div className="pointer-events-none inset-y-0 flex items-center pl-2">
                    <span className="text-gray-500 sm:text-sm pr-2">
                        {getProtocol(dest) +'//'}
                    </span>
                </div>
                <input
                    type="text"
                    name="domain"
                    id="domain"
                    className={windy.input}
                    placeholder="Domain name"
                    defaultValue={getHost(dest)}
                />
            </div>
        </div>
    )
}
