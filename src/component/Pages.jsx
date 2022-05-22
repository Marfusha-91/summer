  import s from './paginate.module.css'


  const Pages = (props) =>  {
    return (
         <div>
              <div className={s.wrapper_pages}> {props.pages.map(el =>
             {return <span className={s.pages} key={el.id} onClick={() => {props.onPageChanged(el)}}>{el}</span>})}

             </div>
          </div>
      );
  }

  export default Pages