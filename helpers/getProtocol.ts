function getProtocol(url: string): string {
    return new URL(url).protocol
}

export default getProtocol
