import './Tours.css';
import Tour from './tour/Tour';
function Tours(props) {
    return (

        <div className="Main">
            <h1>Tours </h1>
            <div className="Container">
                <Tour data={props.data} />
            </div>

        </div>
    )
}
export default Tours;