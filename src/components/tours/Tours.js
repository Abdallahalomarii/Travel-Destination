import './Tours.css';
function Tours(props) {
    return (

        <div className="Main">
            <h1>Tours </h1>
            <div className="Container">
            {
                props.data.map(item => {
                    return (
                        <div key={item.id} className='Card'>
                           
                            <img src={item.image} alt={item.info}></img>
                            <h3>
                                {item.name}
                            </h3>
                        </div>
                    )
                })
            }
            </div>

        </div>
    )
}
export default Tours;