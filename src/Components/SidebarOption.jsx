import '../CSS/sidebarOption.css'

const SidebarOption = ({Icon,title,number,selected}) => {
    return (
        <div className={selected?"sidebarOption selected":"sidebarOption"}>
            <div className="sidebarOption__left">
                <Icon className="sidebarOption__icon" fontSize="large" />
                <h4>{title}</h4>
            </div>
           { selected && <p className="sidebarOption__number">{number}</p>}
        </div>
    )
}

export default SidebarOption
