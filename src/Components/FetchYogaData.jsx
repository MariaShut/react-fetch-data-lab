import FetchDataList from './FetchDataList';

const FetchYogaData = () => {
  const renderItem = (elem) => (
    <>
      <h3>{elem.name}</h3>
      <p><strong>Benefits: </strong>{elem.benefits}</p>
      <p><strong>Time duration: </strong>{elem.time_duration}</p>
    </>
  )

  return (
    <FetchDataList 
      apiUrl='https://api.npoint.io/4459a9a10e43812e1152' 
      heading='Fetch Yoga Data' 
      renderItem={renderItem} 
    />
  )
}

export default FetchYogaData