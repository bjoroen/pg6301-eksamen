export class HttpException extends Error {
    constructor(res, url) {
        super(`Error while loading ${url}: ${res.status} ${res.statusText}`)

    }

}

function checkResult(res, url) {
    if (!res.ok) {
        throw new HttpException(res, url)
    }

}

export async function fetchJson(url) {
    const res = await fetch(url)
    checkResult(res, url)
    return await res.json()

}