import ReactHtmlParser from 'react-html-parser'
import "./style.scss";

export default function ImageCard(props) {
    return (
        <div className="image-card">
            <img alt={props.item.name} src={process.env.PUBLIC_URL + props.item.imageUrl} />
            <div>
                {props.item.tagline && <div className="tagline">{props.item.tagline}</div>}
                <h4>{props.item.name}</h4>
                <p>{ReactHtmlParser(props.item.desc)} {props.item.planLink && <a rel="noreferrer" target="_blank" href={props.item.planLink}>View Plans</a>}</p>
            </div>
        </div>
    )
}