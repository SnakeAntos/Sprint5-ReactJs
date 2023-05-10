import './index.css'

const FooterMenuItem = ({text, url}) =>{
    return(
        <>
        <a className='footerMenuItem-a' href={`${url}`}>{text}</a>
        </>
    )
}
export default FooterMenuItem;