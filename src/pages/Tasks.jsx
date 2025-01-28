import { useState } from "react";
import Banner from "../components/Banner";
import CardTask from "../components/CardTask";

export default function Tasks() {
  const [isDone, setIsDone] = useState(true)

  return (
    <div className="wrapper">
      <div className="mt-6 mx-auto">
        <Banner bannerName="Current Tasks" labelName="3 Task" />
      </div>
      <div className="list-tasks">
        <div className="content">
          <div className="wrap-card_tasks" />
          <CardTask taskName="Invite your friends" isDone/>
          <CardTask taskName="Invite your friends" isDone/>
          <CardTask taskName="Invite your friends" isDone={false}/>
          <CardTask taskName="Invite your friends" isDone={false}/>
        </div>
      </div>
    </div>
  )
}
