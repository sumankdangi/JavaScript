const myHeaders = new Headers();
myHeaders.append("x-api-key","01d3fcc68b-2b076fac3d-t9x85w");

const requestOptions = {
    method:'GET',
    headers : myHeaders,
    redirect: 'follow'
};

try{
    const result = await fetch("https://api.fastforex.io/fetch-all?base=USD",requestOptions);
    const resultObj= await result.json();
    console.log(JSON.stringify(resultObj,null,2));
}
catch(err){
    console.error(`Could not fetch Currency Data`);
    throw err;

}