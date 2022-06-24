export default function Expandable({ words }) {
    return (
        <div className="title" key="exp">
            {words.map(word => {
                if (word === " &#x2764; ")
                    return <span className="heart" key="heart"> &#x2764; </span>
                return [<span key="firstWord">{word[0]}</span>,
                        <span key="secondWord">{word.substring(1)}</span>]
            })}
        </div>
    )
}
