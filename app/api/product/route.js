export async function GET(req){
    const categoryName=req.nextUrl.searchParams.get('prodCategory');
    try{
        const res=await fetch(`https://dummyjson.com/products/category/${categoryName}`);
        const data=await res.json();
        return new Response(JSON.stringify(data),{
            headers: {'Content-Type': 'application/json'},
            status: 200
        });
    }catch(e){
        console.error(e); 
        return new Response(JSON.stringify({error:`${e.message}`}),{
            headers: {'Content-Type': 'application/json'}
        });
    }
}