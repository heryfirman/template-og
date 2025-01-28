import { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner";
import CardLeaderboard from "../components/CardLeaderboard";

export default function Leaderboard() {
  const [lists, setLists] = useState([])
  const loaded = useRef(false)

  useEffect(() => {
    if (loaded.current === false) {
        fetch("/leaderboards.json")
            .then((response) => response.json())
            .then((data) => setLists(data))
            .then(() => loaded.current = true)
    }

    return () => {
        console.log('clean up');
    }
  }, [loaded])
  
  console.log(lists);
  
  return (
    <div className="wrapper">
      <div className="mt-6 mx-auto">
        <Banner bannerName="Leaderboards" labelName="TOP 100" />
      </div>
      <div className="list-leaderboard">
        <div className="content">
          <div className="wrap-card_leaderboard" />
          {lists.map((list) => (
            <CardLeaderboard key={list.id} nickname={list.nickname} username={list.username} total={list.total} rank={list.rank} />
          ))}
          {/* <CardLeaderboard nickname="firman" username="firman21" total="180.629" rank="2" />
          <CardLeaderboard nickname="firman" username="firman21" total="180.629" rank="3" />
          <CardLeaderboard nickname="firman" username="firman21" total="180.629" rank="4" />
          <CardLeaderboard nickname="firman" username="firman21" total="180.629" rank="5" /> */}
        </div>
      </div>
    </div>
  );
}
