// import { useEffect, useState } from "react";
import {useLoaderData} from 'react-router-dom'

function Github() {

    const data = useLoaderData();
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/sanwwarhussaingit")
//       .then(function (res) {
//         return res.json();
//       })
//       .then(function (data) {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <div className="text-center m-5 bg-gray-700 text-white p-5 text-3xl">
      Github followers: {data.followers}
      <img
        src={data.avatar_url}
        alt="Git Picture"
        className="w-40 h-30 rounded-full"
      />
    </div>
  );
}

export default Github;


export const githubInfoLoader = async function(){
    const res = await fetch('https://api.github.com/users/sanwwarhussaingit')
    return res.json();

}