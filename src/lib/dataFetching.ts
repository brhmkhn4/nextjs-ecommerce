


 const getData = async (url:string) => {
    const dataReq = await fetch(url);
    const res = await dataReq.json();
    return res
}

export default getData;