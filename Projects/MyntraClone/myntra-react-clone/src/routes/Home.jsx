/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

function Home() {
  const items = useSelector((store) => store.items);
  // console.log(items);
  return (
    <>
      <main>
        <div className="items-container">
          {items.map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
