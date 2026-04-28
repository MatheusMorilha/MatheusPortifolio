import './Contact.css'


export default function Contact ({ name, url }) {
    return (
        <div className="link-container">
            <a href={url} className="link-button" target='_blank'>
                {name}
            </a>
        </div>
    )
}