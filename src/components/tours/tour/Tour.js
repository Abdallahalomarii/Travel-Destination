import { Link } from 'react-router-dom';
import './Tour.css';
function Tour(props) {
    return (
        props.data.map(item => {
            return (

                <div key={item.id} className='Card'>

                    <Link to={`/city/${item.id}`}>
                        <img src={item.image} alt={item.info}></img>
                        <h3>
                            {item.name}
                        </h3>
                    </Link>
                </div>

            )

        })
    )
}
export default Tour;