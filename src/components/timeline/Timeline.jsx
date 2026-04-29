import './Timeline.css'

export default function Timeline({ ano, emprego, empresa }) {
    return (
        <div className="timeline-item">
            <div className='timeline-year'>{ano}</div>
            
            <div className="timeline-divider">
                <div className='timeline-dot'></div>
                <div className='timeline-line'></div>
            </div>
            
            <div className='timeline-content'>
                <h3 className='timeline-job'>{emprego}</h3>
                <p className='timeline-company'>{empresa}</p>
            </div>
        </div>
    )
}