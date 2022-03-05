import './frommakeit.css';
import React from 'react';
import recetario from '../../assets/img/recetario.jpg'
import SaludFisica from '../../assets/img/SaludFisica.jpg'
import SaludMental from '../../assets/img/SaludMental.jpg'


function Frommaeit() {
    return (
        <div className="frommakeit">
            <h3 className="sobreNos">de make it keto para vos</h3>
            <p className="infoTexto">queremos hacerte la vida keto más fácil y rica!</p>
            <p className="infoTexto">para eso preparamos unos regalitos que teserán de gran ayuda!</p>
            <div> 
                <article className="articleFrommakeit">
                    <img className="imgFrommakeit" src={recetario} alt="recetario" /> 
                        <h3 className="titleFrommakeit">&nbsp;recetario&nbsp;</h3>  
                        <p className="textFrommakeit">e-books descargables conrecetas para tu día a día y tuseventos especiales</p>
                </article>
                <article className="articleFrommakeit">
                    <img className="imgFrommakeit" src={SaludFisica} alt="Salud Fisica" /> 
                        <h3 className="titleFrommakeit">&nbsp;salud fisica&nbsp;</h3>  
                        <p className="textFrommakeit">tips, información y ejerciciospara que fortalezcas tucuerpo</p>
                </article>
                <article className="articleFrommakeit">
                    <img className="imgFrommakeit" src={SaludMental} alt="Salud Mental" /> 
                        <h3 className="titleFrommakeit">&nbsp;salud mental&nbsp;</h3>  
                        <p className="textFrommakeit">tips, información y ejerciciospara que fortalezcas tumente y alma</p>
                </article>
            </div>
        </div>
    );
}

export default Frommaeit;