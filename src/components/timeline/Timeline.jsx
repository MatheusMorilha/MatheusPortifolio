import './Timeline.css'

export default function Timeline({ano, descricao, emprego}) {
    return (    
        <div className="timeline">
            <h3>{ano}</h3>
            <div className="lineDot">
                <div className='dot'></div>
                <div className='line'></div>
            </div>
            <div className='jobecargo'>
                <h3>{emprego}</h3>
                <div className='informacoes'>
                <p>{descricao}</p>
            </div>
            </div>
            
        </div>
    )
}