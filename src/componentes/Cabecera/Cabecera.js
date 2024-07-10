import "./Cabecera.css"


function Cabecera(){

    return (
        <header className="Cabecera">
            <img src="image 1.png" alt='flix'/>
            <button name="NuevoVideo" color="#fff" to='/video' >Nuevo Video</button>
            </header>
    );
}

export default Cabecera;