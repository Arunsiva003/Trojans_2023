import React from 'react';
import { useLocation,useNavigate,useParams  } from 'react-router-dom';
import "./Event.css"
function EventTemp() {
  const location = useLocation();
  const { eventName } = useParams()
  const navigate= useNavigate();
  const eventData = location.state.eventData;
  const senddata=(event)=>{
    navigate(`/detail/${eventName}/${event.eventname}`, { state: { eventname: event.eventname,
    duration:event.duration,
  description:event.description,
coordinators:event.coordinators,
timing:event.timing,
} });
  }
  return (
    <div className='container_event'>
      <h1 className='heading_event'>{eventName}</h1>
    <div className='event_cont'>
      {eventData.map((event, index) => (
        <article className="article-wrapper" key={index}>
          <div className="rounded-lg container-project">
            {/* You can render the image (imageSrc) here */}
            <img src={event.imageSrc} alt={event.eventname} className='image_event'/>
          </div>
          <div className="project-info">
            <div className="flex-pr">
              <div className="project-title text-nowrap">
                {event.eventname} {/* Render the event name */}
              </div>
              <div className="project-hover" onClick={()=>senddata(event)}>
                <svg
                  style={{ color: 'black' }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  color="black"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  fill="none"
                  stroke="currentColor"
                >
                  <line y2={12} x2={19} y1={12} x1={5} />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
            <div className="types">
                <span style={{backgroundColor: 'rgba(165, 96, 247, 0.43)', color: 'rgb(85, 27, 177)'}} className="project-type">• Analytics</span>
                <span className="project-type">• Dashboards</span>
          </div>

          </div>
        </article>
      ))}
    </div>
    </div>
  );
}

export default EventTemp;
