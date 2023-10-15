import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside

export function middleware(request: NextRequest) {
    const dest = request.url.split('dest=')[1]
    const response = NextResponse.next()
    // noinspection TypeScriptValidateTypes
    response.cookies.set('dest', dest)

    return response
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/',
}
