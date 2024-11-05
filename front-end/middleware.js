import { NextResponse } from "next/server"

export const middleware=(request)=>{
    const response =NextResponse.next()
    const themePreference=request.cookies.get("theme")
    if(!themePreference)
    {
        response.cookies.set("theme","dark")
    }
    response.headers.set('custom-header','custom-value')
    return response
    // if(request.nextUrl.pathname==="/seen-wiki")
    // {
    //   return NextResponse.rewrite(new URL("/",request.url))
    // }
// return NextResponse.redirect(new URL("/",request.url))
}
// export const config={
//     matcher:"/seen"
// }