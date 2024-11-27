import { v4 as uuid } from 'uuid';
import UseFetch from "./UseFetch";
import './FetchData.css';

// eslint-disable-next-line react/prop-types
const FetchDataList = ({ apiUrl, heading, renderItem }) => {
  const [data] = UseFetch(apiUrl);
  console.log(data);

  return (
    <div className='list'>
      <h2 className='list__heading'>{heading}</h2>
      <ul className='list__body'>
        {data && data.map((elem) => {
          return (
            <li key={uuid()} className='list__item'>
              {renderItem(elem)}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FetchDataList