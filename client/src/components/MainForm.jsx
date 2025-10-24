import './gencomp.css';

function MainForm({ title, subtitle, buttonText }) {

    return (
        <div className="parent-form">
            <div className="child-form">
                <div>
                    <h1>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
                <div>
                    <input className="input-field" type="text" placeholder="Username" /> <br />
                    <input className="input-field" type="password" placeholder="Password" />
                </div>
                <button>
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

export default MainForm;