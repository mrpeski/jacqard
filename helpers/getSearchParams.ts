function getSearchParams(url: string): URLSearchParams {
    return new URLSearchParams(new URL(url).search)
}

export default getSearchParams
