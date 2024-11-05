export  async function GET(request){
   const searchParams=request.nextUrl.searchParams
   const query=searchParams.get('query')    
  try {
    const res= await fetch(`${process.env.NEXT_PUBLIC_BACKEND_POINT}srsearch=${query}`)
    const data= await res.json()
    return   Response.json(data?.query?.search)
  } catch (error) {
    throw new Error(error)
  }
}