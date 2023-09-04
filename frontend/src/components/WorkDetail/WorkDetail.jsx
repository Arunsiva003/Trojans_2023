import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./workdetail.css";
import back from "../../images/back.png"

function WorkDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const coordinatorsArray = state.coordinators.split(',');
  console.log(state)
  // Split the description into an array of points
  const descriptionPoints = state.description.split('\n').filter(point => point.trim() !== '');
  console.log("points: ",descriptionPoints);
  const gotoevent=()=>{
      
    navigate(-1)
  }

  return (
    <div className='main_detail'>
      <div className='first'>
        <div className='first_2'><div class="content">
          <h2 className='h2'> Detail</h2>
          <h2 className='h2'> Detail</h2>
        </div></div>
        <div className='first_1'><img onClick={gotoevent} src={back} className='goback'/></div>
       </div>
      <div className='detail_cont'>
        <div className='detail_inside'>
          <h2 className='detail_head'>{state.eventname}</h2>
          <h2 className='detail_dura'>Timing: <span style={{color:"white", textShadow:"none"}}>{state.duration}</span> </h2>
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
  );
}

export default WorkDetail;
