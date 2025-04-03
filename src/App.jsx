/*
3. Fetch and display users with useEffect

With this exercise you can learn how to use the useEffect hook to fetch data from an API when the component is rendered. Practice managing loading and error states in a clean and user-friendly way.

When you open the app in the browser, the component fetches user data from the API. At first, you see a "Loading..." message. After the data is fetched, it shows a table of users. If there is an error, a message is displayed instead of the table.

    Set up a new project:
        Create a new React project using Vite.
        Run npm install and then npm run dev.
    Create a new component called UserList:
        This component will be responsible for fetching and displaying user data from an external API.
    Use the following API: https://jsonplaceholder.typicode.com/users
        It returns an array of user objects. Each user object contains fields like name, email, and id.
    Use the useEffect hook:
        Fetch the user data only once — when the component is first mounted.
        Store the fetched data in state using useState.
    Handle loading and error states:
        While data is being fetched, show a "Loading..." message.
        If the fetch fails, show a user-friendly error message. Remember to test error handling also (by breaking the url)
        Once the data is successfully loaded, display it.
    Display the data:
        Show a table of all users, where each row includes the user’s id, name and email address.

 */
/*
4. Extend your app with Live Clock

    Create a new component called LiveClock:
        This component will display the current time and update it every second. Clock can be hidden with button and then a cleanup function also is called.
    Use useState to store the current time:
        Use new Date().toLocaleTimeString() to get a human-readable time string (e.g., "13:42:01").
        Update the time once per second.
    Use useEffect with setInterval:
        Inside the useEffect hook, set up an interval using setInterval to update the time every 1000 milliseconds.
        This side effect should run only once — when the component is first mounted.
    Return a cleanup function:
        Inside the useEffect, return a function that clears the interval using clearInterval.
        This ensures that the interval is removed when the component is unmounted.
    Add button and the component in App.jsx:
        Control showing the clock with state

 */
import { useEffect, useState } from 'react'
import TableRow from "./components/TableRow"
import LiveClock from './components/LiveClock'

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
      <LiveClock />
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
