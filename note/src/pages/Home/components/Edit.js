const Edit = () => {
    return <div>
        <h1>筆記簿</h1>
        <p>紀錄:</p>
        <input type='text'/>
        <p>日期:</p>
        <input type='date'/>
        <p>時間:</p>
        <input type='time'/>
        <button className="add">新增</button>
    </div>
}

export default Edit