import { useState } from "react";

export function TwitterFollowCard({children, userName='unknown', name, initialIsFollowing}) {
    // const imgSrc =  `https://unavatar.io/${userName}`;
    // console.log(isFollowing);
    // const addAt = (userName) => `@${userName}`; // en vez de tener una funcion dentro, se podria pasar desde fuera.
    // const [isFollowing, setIsFollowing] = useState(false);
    console.log(initialIsFollowing)
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguiendo':'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    console.log('Render with userName ', userName )

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img alt="el avatar de cayllahua yon" className="tw-followCard-avatar" src={`https://unavatar.io/${userName}`} />
                <div className="tw-followCard-info">
                    {/* <strong>{name}</strong> */}
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                    {/* <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span> */}
                    {/* <span className="tw-followCard-infoUserName">{formatterUserName}</span> */}
                    {/* <span className="tw-followCard-infoUserName">@{userName}</span> */}
                    {/* <span className="tw-followCard-infoUserName">{addAt(userName)}</span> */}
                </div>
            </header>

            <aside>
                {/* <button className="tw-followCard-button"> */}
                <button className={buttonClassName} onClick={handleClick} >
                   {/* Seguir        <-- Children ?   */}
                   
                   <span className="tw-followCard-text">{text}</span>
                   <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )    
}
