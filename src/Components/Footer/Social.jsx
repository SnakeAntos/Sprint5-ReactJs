import './index.css'

const Social = ({url, icon})=>{
    return (
        <>
        <div className={`social-icon ${icon}`}><a href={`${url}`}></a></div>
        </>
    )
}

export default Social;