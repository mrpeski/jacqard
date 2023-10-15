function getSearchParams(url: string): URLSearchParams {
    return <URLSearchParams>new URL(url).searchParams
}

export default getSearchParams
