import './sections.css';
import React from 'react';
import IMG_5462 from '../../assets/img/carousel/IMG_5462.jpg'
import IMG_5538 from '../../assets/img/carousel/IMG_5538.jpg'
import tips from '../../assets/img/tips.jpg'


function Sections() {
    return (
        <div className="sections">
            <h3 className="sobreNos">qué tenemos para vos</h3>
            <div> 
                <article className="articleSections">
                    <img className="imgSections" src={IMG_5538} alt="recetas" /> 
                        <h3 className="titleSections">&nbsp;recetas&nbsp;</h3>  
                        <p className="textSections">Scholars consult aneducation specialist on theacademic program bestsuited to their talents,aptitude, and interests.</p>
                </article>
                <article className="articleSections">
                    <img className="imgSections" src={IMG_5462} alt="productos" /> 
                        <h3 className="titleSections">&nbsp;productos&nbsp;</h3>  
                        <p className="textSections">Scholars receive a monthlyallowance to cover schooland living expenses.</p>
                </article>
                <article className="articleSections">
                    <img className="imgSections" src={tips} alt="info y tips" /> 
                        <h3 className="titleSections">&nbsp;info & tips&nbsp;</h3>  
                        <p className="textSections">Scholars are paired withindustry partners to applytheir learning in a practicalsetting.</p>
                </article>
            </div>
        </div>
    );
}

export default Sections;