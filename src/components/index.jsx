import styles from './styles.css'

export default function Landing(){
    return (
        <div className='wrapper'>
            <div className='background'>
                <div className='maindiv'>
                    <div className='top'>
                        <h1 className='top__headline'>Join our community</h1>
                        <p className='top__subtitle'>30-day, hassle-free money back guarantee</p>
                        <p className='top__txt'>Gain access to our full library of tutorials along with expert code reviews.
                         Perfect for any developers who are serious about honing their skills.</p>
                    </div>
                    <div className='bottom'>
                        <div className='bottoml'>
                        <h2 className='bottoml__headline'>Monthly Subscription</h2>
                        <p className='bottoml__txt transparent'><span className='bottoml__price'>$29</span> per month</p>
                        <p className='bottoml__txt'>Full access for less than $1 a day</p>
                        <button className='bottoml__btn' type='submit'>Sign Up</button>
                        </div>
                        <div className='bottomr'>
                            <h2 className='bottomr__headline'>Why Us</h2>
                            <ul className='bottomr__list'>
                                <li className='list__item'>Tutorials by industry experts </li>
                                <li className='list__item'>Peer & expert code review</li>
                                <li className='list__item'>Coding exercises</li>
                                <li className='list__item'>Access to our GitHub repos</li>
                                <li className='list__item'>Community forum</li>
                                <li className='list__item'>Flashcard decks</li>
                                <li className='list__item'>New videos every week</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
