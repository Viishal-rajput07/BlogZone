import { NextResponse } from "next/server";

export default function MiddleWare(request){
    
        return NextResponse.redirect(new URL('/login', request.url))
}

export const config={
    matcher: '/study/lectures/:path*'
}
