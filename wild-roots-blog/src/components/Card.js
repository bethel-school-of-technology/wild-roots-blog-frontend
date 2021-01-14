import '../assets/Scripture.css';
function Card(props){
return (
    <div className="scripture-card">
        <h3>{props.scriptureVerse.reference}</h3>
        <p>{props.scriptureVerse.verse}</p>
    </div>
)
}
export default Card