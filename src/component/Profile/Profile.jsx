import React from "react";
import s from '../Profile/Profile.module.css'
import followers from '../assets/icon_group.png';
import follower from '../assets/icon_person.png'


const Profile = (props) => {

    return (<div>
        <div className={s.wrapper_profile}>
            <div className={s.personal_data}>
                <div className={s.photo}> <img src={props.avatar} alt={'photo'}/>
                    <h2  className={s.name}>{props.name}</h2>
                    <p className={s.nick_name}><a target="_blank" href={props.url}>{props.login}</a></p></div>
                <div className={s.subscriber}>
                    <div  > <img src={followers}/><span className={s.followers}>{props.followers}k followers</span></div>
                    <div className={s.following}> <img src={follower}/>  <span>{props.following} following</span></div>
                </div>
            </div>
              <div className={s.repo}><h1 className={s.repoLength}>Repositories()</h1> {props.repo.map((item) => (<div className='repo_box'>
                  <li key={item.id}><a className={s.itemName} target="_blank" href={item.html_url}>
                      {item.name} </a></li>
                  <span className="item_description">{item.description} </span></div>))} <div> { props.repo.length === 0 && <div>rrvgrgrfbg</div>} </div></div>
        </div>


    </div>)
}


export default Profile