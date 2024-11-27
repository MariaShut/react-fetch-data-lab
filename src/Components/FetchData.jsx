import FetchDataList from './FetchDataList';

const FetchData = () => {
  const renderItem = (elem) => {
    const displayName = elem.name === "Banana Data" ? "Banana" : elem.name; // handle special case for "Banana Data"

    return (
      <>
        <h3>{displayName}</h3>
        <p><strong>Importance: </strong>{elem.importance}</p>
        <p><strong>Benefits: </strong>{elem.benefits}</p>
        <p><strong>Time to eat: </strong>{elem.best_time_to_intake}</p>
      </>
    )
  }

  return (
    <FetchDataList 
      apiUrl='https://api.npoint.io/9045c260b1565daa9e15' 
      heading='Use Fetch Custom Hook' 
      renderItem={renderItem} 
    />
  )
}

export default FetchData