import { useEffect, useState } from 'react'
import TableRow from "./components/TableRow"

function App() {
    const [dataDisplay, setDataDisplay] = useState()
    const [isFetching, setIsFetching] = useState(false)

    useEffect(()=>{
        async function fetchUsers(){
            setIsFetching(true)
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const resData = await response.json()
            setDataDisplay(resData)

            setIsFetching(false)
        }

        fetchUsers()
    },[])

  return (
    <>
      <h1>Hello world</h1>
      {isFetching && <p>Fetchin data...</p>}
      {!isFetching && dataDisplay && <div>
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
