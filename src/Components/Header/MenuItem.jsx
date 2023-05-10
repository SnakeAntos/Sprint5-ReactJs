import './index.css'

const MenuItem = (props) => {
    return(
        <li className='header-menuitem-li header-font-setting'><a href={props.url} className='header-menuitem-a'>{props.item}</a></li>
    )
}

export default MenuItem