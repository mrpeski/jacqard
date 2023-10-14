function getHost(url: string): string {
    return new URL(url).hostname
}

export default getHost
