export default async function Revalidation(req,res){
if(req.query.secretKey!=="mysecretkey"){
    return res.status(401).json({message:"Yanlış token girmişsin!"})
}
try{
    await res.revalidate("/test-static-page");
    return res.json({revalidated:true});
}catch(err){
    return res.status(500).send("Error revalidating");
}

}