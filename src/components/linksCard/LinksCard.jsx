import './LinksCard.css'

export default function LinkCard ({ name, url }) {
    return (
        <div className="link-container">
            <a href={url} className="link-button" target='_blank'>
                {name}
            </a>
        </div>
    )
}