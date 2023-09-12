import React from 'react'
import "./Detail.css"
import back from "../../images/back.png"
import { useLocation, useNavigate, useParams} from 'react-router-dom';
function DetailEvent() {
    const location = useLocation();
    const { eventtype,name } = useParams()
    const navigate= useNavigate();
    const { state } = location;
    const coordinatorsArray = state.coordinators.split(',');
    const descriptionPoints = state.description.split('\n').filter(point => point.trim() !== '');
    console.log(eventtype,name)
    const gotoevent=()=>{
      
        navigate(-1)
      }
  return (
    <div className='main_detail'>
       <div className='first'>
        <div className='first_2'><div class="content">
          <h2 className='h2'>{name}</h2>
          <h2 className='h2'>{name}</h2>
        </div></div>
        <div className='first_1' onClick={gotoevent}><img onClick={gotoevent} src={back} className='goback'/></div>
       </div>
        <div class="card">
            <div class="card__content">
            <div id='detail_inside'>
          
          <h2 className='detail_dura'> Timing:<span style={{color:"white", textShadow:"none" }}>{state.duration}</span> </h2>
          <h2 className='detail_time'>Duration:<span style={{color:"white", textShadow:"none"}}> {state.timing}</span></h2>
          <div>
            <h2 className='detail_descp'>Event description:</h2>
            {/* Map through the description points and render each as a separate <p> element */}
            {descriptionPoints.map((point, index) => (
              <h3 key={index} className='detail_descp_point'>{point}</h3>
            ))}
          </div>


          <h2 className='detail_time'>Coordinators:</h2>
          <div className='coordinatorsList'>
          {coordinatorsArray.map((coordinator, index) => (
            <div key={index}>{coordinator}<br/></div>
          ))}
            </div> 
          {/* Display other event details */}
        </div>

            </div>
        </div>
    </div>
  )
}

export default DetailEvent
