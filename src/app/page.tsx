
function Home() {

  // const queryParams = {
  //   type: "fiction",
  //   limit: "2"
  // }
  
  // const baseUrl = "https://simple-books-api.glitch.me/books"

  // const urlWithParams = new URL(baseUrl)

  // Object.keys(queryParams).forEach(key => urlWithParams.searchParams.append(key, queryParams[key]))

  // console.log(urlWithParams)
  
  // async function getData (){
  //   const res = await fetch(urlWithParams)
  //   // console.log(res)
  //   const data = await res.json()
  //   console.log(data, "some extra text", 1235)
  //   return data
  // }
  // getData();


  //Making Fetch request to place order

  const url = "https://simple-books-api.glitch.me/api-clients/"
  const userDetails = {
    clientName: "brhmkhn4",
    clientEmail: "gh155889@gmail.com"
 }

  const token = 'f11bd8527b76bed51310c5bde8804cd35e48d93160d9c43c4548133bd660b121'

  //Making function to get authorization token

  async function signUp(){
    
    const signupData = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(userDetails)
      })
      const res = await signupData.json();
      console.log(res)
     }

 if(token === undefined){
    signUp();
  }

return (
    <>
  
    {

    }
    <div className="container min-h-screen grid grid-cols-[22rem,1fr] gap-4 mb-2 max-w-none w-auto">
           <div className="bg-pink-600">
            <h1 className="text-white">Sidebar</h1>
            <ul>
              <li className="text-white">1</li>
              <li className="text-white">2</li>
              <li className="text-white">3</li>
              <li className="text-white">4</li>
              <li className="text-white">5</li>
            </ul>
           </div>
           <div className="items bg-blue-300">Div 2</div>
    </div>
           {/* <div className="items bg-blue-300">Div 3</div>
           <div className="items bg-blue-300">Div 4</div>
           <div className="items bg-blue-300">Div 5</div>
           <div className="items bg-blue-300">Div 6</div>
           <div className="items bg-blue-300">Div 7</div> */}
    </>
  )
}

export default Home
