import React, {useState} from "react";
import './App.css';
import Header from "./component/Header/Header";
import Profile from "./component/Profile/Profile";
import s from "./component/Header/Header.module.css";
import loop from './component/assets/loop.png'
import Pages from "./component/Pages";


function App() {
    const [repo, setRepo] = useState([])
    const [searchInput, setSearchInput] = useState('')

    const [name, setName] = useState('');
    const [userName, setUsername] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [avatar, setAvatar] = useState('');
    const [login, setLogin] = useState(null);
    const [userInput] = useState('');
    const [url, setUrl] = useState()
    let pageSize = 4;
    let [totalUserCount, setTotalUserCount] = useState(0);
    let [currentPage, setPage] = useState(1)


    const setData = ({name, userName, followers, following, avatar_url, login, html_url}) => {
        setName(name)
        setUsername(userName)
        setFollowers(followers)
        setFollowing(following)
        setAvatar(avatar_url)
        setLogin(login)
        setUrl(html_url)
    }


    function repoData() {

        fetch(`https://api.github.com/users/${searchInput}/repos?page=${currentPage}&per_page=${pageSize}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    setTotalUserCount(40)
                    setRepo(result)
                }
            );


        fetch(`https://api.github.com/users/${searchInput}`)
            .then(res => res.json())
            .then(data => {
                setData(data)

            })
    }


    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    let pageCount = Math.ceil(totalUserCount / pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const onPageChanged = (pageNumber) => {


        fetch(`https://api.github.com/users/${searchInput}/repos?page=${pageNumber}&per_page=${pageSize}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    setRepo(result)
                    setPage(pageNumber)

                }
            )
    }

    return (
        <div className="wrapperWebsite">
            <div><Header repoData={repoData} handleChange={handleChange}/>
            </div>
            <div className="profile">
                {!login && <div className={s.loop}><img src={loop} alt={''}/> <p className={"startSearch"}>Start with searching
                    a GitHub user</p></div>}
                {login &&
                <div><Profile name={name} userName={userName} followers={followers}
                              login={login} avatar={avatar}
                              following={following}
                              userInput={userInput} url={url}
                              repo={repo}/>
                    <Pages pages={pages} onPageChanged={onPageChanged}/>

                </div>
                }

            </div>
        </div>


    );

}

export default App;
