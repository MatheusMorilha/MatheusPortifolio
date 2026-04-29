import './Timeline.css'

export default function Timeline({ano, descricao, emprego, empresa}) {
    return (    
        <div className="timeline">
            <h3 className='timeline-year'>{ano}</h3>
            <div className="lineDot">
                <div className='dot'></div>
                <div className='line'></div>
            </div>
            <div className='jobecargo'>
                <h3>{emprego}</h3>
                <p>{empresa}</p>
                <div className='informacoes'>
                <p>{descricao}</p>
            </div>
            </div>
            
        </div>
    )
}