
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';

// import  { Axios} from 'axios'

// export default function SingleMovies() {  
//   let imageUrl = "https://image.tmdb.org/t/p/w500/"
//   let peopleID = useParams();
//   const [peopleData, setPeopleData] = useState(null)
//   useEffect(() => {
//     Axios.get( `https://api.themoviedb.org/3/person/${peopleID.id}?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US`)
//       .then((res) => {
//         setPeopleData(res.data);
//         console.log(res.data);
//       })
//       .catch((error) => {
//         console.log(error.massage);
//       })
//       Axsios.get("")
//   }, []);



 
//   return (
//     <div>
//       {(peopleData)?
//       <div>
//         <img src={imageUrl + peopleData.profile_path} alt="" />
//       </div>
//       :<>Loding...</>}
//     </div>
//   );
// }
