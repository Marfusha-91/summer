import s from './paginate.module.css'




const PaginatedItems = (props) =>  {


    return (
        <>
            <div className={s.wrapper_pages}> {props.pages.map(el =>
            {return <span className={s.pages} key={el.id} onClick={() => {props.onPageChanged(el)}}>{el}</span>})}

            </div>
        </>
    );
}

 export default PaginatedItems