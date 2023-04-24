import { useParams } from "react-router-dom";
import Header from '../header/Header';
import { Card, Button } from 'react-bootstrap';
import './TourDetails.css';
import { useState } from 'react';

const numberOfChar = 122;

function TourDetails(props) {

    const { id } = useParams();

    let [showmore, increaseLine] = useState('');

    const showMoreLines = () => {
       
            document.getElementById("shrinklinebtn").style.display = "none";
            props.data.filter(item => item.id === id).map(item => (
                increaseLine((item.info.substring(numberOfChar, item.info.length)))

            ))
        
       
        document.getElementById("shrinklinebtn").style.display = "inline-block";
        document.getElementById("addlinebtn").style.display = "none";


    }

    const showLessLines = () => {

       
            document.getElementById("addlinebtn").style.display = "none";
            props.data.filter(item => item.id === id).map(item => (
                increaseLine('')

            ))
       
        document.getElementById("shrinklinebtn").style.display = "none";
        document.getElementById("addlinebtn").style.display = "inline-block";
    }



    return (
        <>
            <Header />
            <Card>
                <Card.Body>{
                    props.data.filter(item => item.id === id).map(item => (
                        <div className="Details" key={item.id}>
                            <h1>{item.name}</h1>
                            <p>
                                  {item.info.substring(0,numberOfChar) + showmore }
                            </p>
                            <Button onClick={showMoreLines} id="addlinebtn">showmore</Button>
                            <Button onClick={showLessLines} id="shrinklinebtn">showless</Button>
                        </div>
                    ))}
                </Card.Body>
            </Card>
        </>
    )

}
export default TourDetails;