/**
 * Created by Iaroslav Zhbankov on 18.01.2017.
 */
var lastDaysUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
var allTimeUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
function getInfo(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    return JSON.parse(xhr.responseText);
}

var lastDaysCampers = getInfo(lastDaysUrl);
var allTimeCampers = getInfo(allTimeUrl);

function BoardList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>

            <tr>
                <td className='number'>{index + 1}</td>
                <td className='username'><img src={number['img']}/>{number['username']}</td>
                <td className='alltimePoints'>{number['alltime']}</td>
                <td className='recentPoints'>{number['recent']}</td>
            </tr>
    );
    return (
        <table className='container'>{listItems}</table>
    );
}


ReactDOM.render(
    <BoardList numbers={lastDaysCampers}/>,
    document.getElementById('root')
)