import './app-info.css';

const AppInfo = ({employersCount, increaseCount}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании ПАН</h1>
            <h2>Общее число сотрудников: {employersCount()}</h2>
            <h2>Премию получат: {increaseCount()}</h2>
        </div>
    );
}

export default AppInfo;