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

var allTimeCampers = getInfo(allTimeUrl);
var sortedAllTime = allTimeCampers.sort(function (a, b) {
    return b.alltime - a.alltime
});

var BoardList = React.createClass({
    getInitialState: function () {
        return {
            list: sortedAllTime
        }
    },
    sortByRecent: function (e) {
        e.preventDefault();
        var sortedRecent = allTimeCampers.sort(function (a, b) {
            return b.recent - a.recent
        });
        this.setState({
            list: sortedRecent
        });
    },
    sortByAllTime: function (e) {
        e.preventDefault();
        var sortedAllTime = allTimeCampers.sort(function (a, b) {
            return b.alltime - a.alltime
        });
        this.setState({
            list: sortedAllTime
        });
    },
    render: function () {
        const numbers = this.props.numbers;
        const urls = this.props.numbers.map(function (item) {
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
                <td className='alltimePoints' onClick={this.sortByAllTime}><a href='#'>All time points</a></td>
                <td className='recentPoints' onClick={this.sortByRecent}><a href='#'>Points in past 30 days</a></td>
            </tr>
            {listItems}</tbody>
        )
    }
});


ReactDOM.render(
    <BoardList numbers={sortedAllTime}/>,
    document.getElementById('root')
)