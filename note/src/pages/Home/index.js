import { useState, useEffect, useRef, useContext } from "react";
import { API_GET_DATA } from "../../global/constants";
import { ThemeContext } from "../../global/themeProvider";
import { BrightnessHighFill } from "react-bootstrap-icons";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

async function fetchData(setData) {
  //從後端fetch db.json的data資料 set到 useState 的data中
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
}

const Home = () => {
  const [data, setData] = useState([]);
  const submittingStatus = useRef(false); //用useRef 宣告不變的false

  useEffect(() => {
    if (!submittingStatus.current) {
      //防止頁面重整時 將後端db.json 的資料被洗掉
      return; //當false時 直接return 不執行下面的fetch
    }
    fetchSetData(data).then((data) => (submittingStatus.current = false)); //執行完改回false
  }, [data]);

  useEffect(() => {
    fetchData(setData);
  }, []);

  const { theme } = useContext(ThemeContext);

  const ThemeButton = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
      <button
        className="lightBtn"
        style={{ color: theme.background, backgroundColor: theme.foreground }}
        onClick={toggleTheme}
      >
        <BrightnessHighFill /> Light Change
      </button>
    );
  };

  return (
    <div
      className="app"
      style={{ color: theme.foreground, backgroundColor: theme.background }}
    >
      <ThemeButton />
      <Edit add={setData} submittingStatus={submittingStatus} />
      <List
        listData={data}
        deleteData={setData}
        submittingStatus={submittingStatus}
      />
    </div>
  );
};

export default Home;
