const Contacts = () => {
    return ( 
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Ivano-Frankivsk, Ukraine</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <p><a href="tel:+380936425017">+38 (093) 642-50-17</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:nikto242422@gmail.com">nikto242422@gmail.com</a></p>
                    </li>
                </ul>

            </div>
         </main>
     );
}
 
export default Contacts;