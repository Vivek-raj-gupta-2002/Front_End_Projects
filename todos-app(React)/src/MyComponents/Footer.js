import './footer.css'

export default function Footer(props) {
    return (
        <div className='footer'>
            <p>{props.text}</p>
        </div>
    )
}