export default function TableRow({rowsData}){
    return(
        <>
        {rowsData.map((row)=>(
        <tr key={row.id}>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.email}</td>
        </tr>
        ))}
        </>
    )
}
