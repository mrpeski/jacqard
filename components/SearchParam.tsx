"use client"
import {input} from '@/helpers/windy'
import getSearchParams from "@/helpers/getSearchParams";
import {ReactNode} from "react";

interface Props {
    url: string;
}
export default function SearchParam({url}: Props) {
    const queryParams = getSearchParams(url)
    const nodeArr: ReactNode[] = []
    queryParams.forEach((value, key) => {
        nodeArr.push(<div
            key={key}
            className="relative mt-20 m-auto rounded-md bg-gray-100 shadow-sm flex rounded-md">
            <div className="pointer-events-none inset-y-0 flex items-center pl-2">
                <span className="text-gray-500 sm:text-sm pr-2">
                    {key}
                </span>
            </div>
            <input
                type="text"
                name="domain"
                id="domain"
                className={input}
                placeholder="Domain name"
                defaultValue={value}
            />
        </div>)
    })
    return nodeArr
}
