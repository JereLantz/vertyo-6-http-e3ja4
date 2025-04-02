import { useEffect, useState } from 'react'
import TableRow from "./components/TableRow"

function App() {
    const [dataDisplay, setDataDisplay] = useState()
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState()

    useEffect(()=>{
        async function fetchUsers(){
            setIsFetching(true)
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const resData = await response.json()
                setDataDisplay(resData)

                if(!response.ok){
                    throw new Error("Failed to fetch data from the server.")
                }
            }
            catch(error){
                setError({message:error.message || "Error fetching data from server"})
            }

            setIsFetching(false)
        }

        fetchUsers()
    },[])

  return (
    <>
      <h1>Hello world</h1>
      {error && <p className='error-message'>{error.message}</p>}
      {!error && isFetching && <p>Fetchin data...</p>}
      {!error && !isFetching && dataDisplay && <div>
          <table>
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                  </tr>
              </thead>
              <tbody>
                  <TableRow rowsData={dataDisplay}/>
              </tbody>
          </table>
      </div> }
    </>
  )
}

export default App
