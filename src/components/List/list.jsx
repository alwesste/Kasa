import './list.scss'

function List(props) {
    return (
        <div className='list'>
            <i class="fa-solid fa-chevron-up"></i>
            <p>{props.label}</p>
        </div>
    )
}

export default List