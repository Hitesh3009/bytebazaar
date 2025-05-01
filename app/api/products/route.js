export async function GET(){
    try{
        const res=await fetch(`https://dummyjson.com/products/categories`);
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