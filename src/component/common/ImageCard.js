import ReactHtmlParser from 'react-html-parser'
import "./style.scss";

export default function ImageCard(props) {
    return (
        <div className="image-card">
            <img alt={props.eachItem.name} src={process.env.PUBLIC_URL + props.eachItem.imageUrl} />
            <div>
                {props.eachItem.tagline && <div className="tagline">{props.eachItem.tagline}</div>}
                <h4>{props.eachItem.name}</h4>
                <p>{ReactHtmlParser(props.eachItem.desc)} {props.eachItem.planLink && <a  rel="noreferrer" target="_blank" href={props.eachItem.planLink}>View Plans</a>}</p>
            </div>
        </div>
    )
}