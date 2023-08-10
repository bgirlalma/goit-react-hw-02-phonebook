const { Component } = require("react")

export class BookContacts extends Component {
    render(){
        const {title, children} = this.props;
        return(
            <div>
                <h2>{title}</h2>
                {children}

                <ul>
                    <li>Стив Джобс</li>
                    <li>Eminem</li>
                    <li>Бейонсе</li>
                    <li>The Weeknd</li>
                    <li>Justin Bieber</li>
                    <li>Margo Robbi</li>
                    <li>As$p Rocky</li>
                    <li>Aron Paper</li>
                    <li>Kerem Bursin</li>
                </ul>
            </div>
        )
    }
}