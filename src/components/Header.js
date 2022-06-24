import './header.css'
import Expandable from "../elements/Expandable"

export default function Header () {
    return (
        <div className="header">
            <Expandable words={["Amir", " &#x2764; ", "Michal"]} />
        </div>
    )
}
