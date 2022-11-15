import { useState } from "react";   //使用React Hook useState 這個function
import { v4 } from "uuid";    //使用 uuid 這 npm 做出 Random 的 id 值

const Edit = ({ add, submittingStatus }) => {
  const [note, setNote] = useState("");
  function noteChange(n) {
    setNote(n.target.value);
  }
  const [date, setDate] = useState("");
  function dateChange(d) {
    setDate(d.target.value);
  }
  const [time, setTime] = useState("");
  function timeChange(t) {
    setTime(t.target.value);
  }

  function addItem() {
    submittingStatus.current = true
    add(function (prevData) {
      return [
        {
          id: v4(),  
          note,
          date,
          time,
        },
        ...prevData
      ];
    });
  }

  return (
    <div>
      <h1>筆記簿</h1>
      <p>紀錄:</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>日期:</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間:</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
