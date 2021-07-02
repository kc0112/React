import React,{useEffect,useState} from 'react'
import './covid.css';

function Covid() {

    const [objdata, setData] = useState([]);
    const [totalData,setTotalData] = useState([])
    const getCovidData = async () => {
        try {
            const response = await fetch('https://api.covid19india.org/data.json');
            let data = await response.json();
            data = data.statewise;
            console.log(data);
            setData(data);
            setTotalData(data[0]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, [])
    console.log("hy",objdata)
    return (
        <>
            <div className="jumbotron">
                <table className="table">
                    <thead>
                        {
                            <tr style={{ backgroundColor:"grey",fontWeight:"bold",color:"red"}} scope='row' key={totalData.statecode}>
                                    <th>{totalData.state}</th>
                                    <th>{totalData.active}</th>
                                    <th>{totalData.confirmed}</th>
                                    <th>{totalData.recovered}</th>
                                    <th>{totalData.deaths}</th>
                                    <th>{totalData.lastupdatedtime}</th>
                                </tr>
                            
                        }
                    </thead>
                    <br/>
                    <thead>
                        <tr>
                            <th scope="col">State</th>
                            <th scope="col">Active</th>
                            <th scope="col">Confirmed</th>
                            <th scope="col">Recovered</th>
                            <th scope="col">Deaths</th>
                            <th scope="col">Last Updated Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            objdata.map((obj) => (
                                <tr scope='row' key={obj.statecode}>
                                    <td><b>{obj.state}</b></td>
                                    <td>{obj.active}</td>
                                    <td>{obj.confirmed}</td>
                                    <td>{obj.recovered}</td>
                                    <td>{obj.deaths}</td>
                                    <td>{obj.lastupdatedtime}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
        
    )
}

export default Covid;
