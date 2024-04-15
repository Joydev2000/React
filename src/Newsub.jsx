import React, { useState } from "react";
import { flushSync } from "react-dom";

function Newsub({ age, data }) {
  let [d, e] = useState(false);
  return (
    <div className="newsub">
      <h1 className="newsubh">New sub h1</h1>
      <h1 className="newsubh">{age}</h1>
      <h1 className='newsubh'>{data.age }{data.name}</h1>

      <h1 className={'${d === false ? "text-red-600" : "new"}'}>
          {d == false ? "hello" : "hey"}</h1>
      <h1 className={d === false ? "newsubh" : "new"}>
        {d === false ? "hello" : "hey"}
      </h1>

      <button onClick={()=>e(!d)}>change</button>
    </div>
  );
}

export default Newsub;
