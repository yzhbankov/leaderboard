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
    const urls = props.numbers.map(function (item) {
        return 'https://www.freecodecamp.com/' + item['username']
    });
    let listItems = numbers.map(function (number, index) {
        if (index % 2 == 0) {
            return (
                <tr key={index}>
                    <td className='number'>{index + 1}</td>
                    <td className='username'>
                        <a href={urls[index]}>
                            <img src={number['img']}/>{number['username']}
                        </a>
                    </td>
                    <td className='alltimePoints'>{number['alltime']}</td>
                    <td className='recentPoints'>{number['recent']}</td>
                </tr>)
        } else {
            return (
                <tr key={index} className='dark'>
                    <td className='number'>{index + 1}</td>
                    <td className='username'>
                        <a href={urls[index]}>
                            <img src={number['img']}/>{number['username']}
                        </a>
                    </td>
                    <td className='alltimePoints'>{number['alltime']}</td>
                    <td className='recentPoints'>{number['recent']}</td>
                </tr>)
        }

    });

    return (

        <tbody>
        <tr className='dark'>
            <td className='number'>Number</td>
            <td className='username'>Username</td>
            <td className='alltimePoints'>All time points</td>
            <td className='recentPoints'>Points in past 30 days</td>
        </tr>
        {listItems}</tbody>
    );
}


ReactDOM.render(
    <BoardList numbers={lastDaysCampers}/>,
    document.getElementById('root')
)