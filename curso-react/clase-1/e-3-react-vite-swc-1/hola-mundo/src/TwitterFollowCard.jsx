export function TwitterFollowCard({useName, name, isFollowing}) {
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src="https://avatars.githubusercontent.com/u/64764017?v=4" />
                <div className="tw-followCard-info">
                    <strong> Yon Cayllahua Utani</strong>
                    <span className="tw-followCard-infoUserName">@{useName}</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
    )    
}