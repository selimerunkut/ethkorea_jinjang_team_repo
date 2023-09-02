// @ts-nocheck

import React, { Component } from 'react';

interface Props {
    text: {
        about: string
        aboutTitle: string
        aboutParagraph: string
        aboutFirstParagraph: string
        aboutFirstParagraphPart1: string
        aboutSecondParagraphPart2: string
        aboutFollowMePart2: string
        aboutFollowMePart1: string
        aboutSecondParagraphPart1: string
        logo1:string
        logo2:string
        logo3:string
        logo4:string
        logo5:string
        logo6:string
        logo7:string
        logo8:string
        logo9:string
        logo10:string
        logo11:string
        logo12:string
        logo13:string
        logo14:string
        logo15:string
        logo16:string
        logo17:string
        logo18:string
        logo19:string
        logo20:string
        logo21:string
        logo22:string
        logo23:string
        logo24:string
        logo25:string
        logo26:string
        logo27:string
        logo28:string
        logo29:string
        logo30:string
        logo31:string
        logo32:string
        logo33:string
        logo34:string
    }
    lang: number
}

const About = ({ text, lang }: Props) => {


    function closeDiv() {
        // @ts-ignore
        document.querySelector('.absolute-content-div-About').className = "doNOTdisplay absolute-content-div-About"
        // @ts-ignore
        document.querySelector('.black-overlay').className = 'doNOTdisplay black-overlay';
    }


    var className = "doNOTdisplay absolute-content-div-About"


    return (
        <div className={className}>
            <span className="closing_cross" onClick={() => {}}><img src="./pictures/closing_picture.png"></img></span>
            <h2>{text.aboutTitle[lang]}</h2>
            <p>{text.aboutFirstParagraph[lang]}</p>
            <p>{text.aboutSecondParagraphPart1[lang]}<a href='https://thenounproject.com/' target='_blank'>{text.aboutSecondParagraphPart2[lang]}</a></p>
            <p>{text.logo1[lang]}</p>
            <p>{text.logo2[lang]}</p>
            <p>{text.logo3[lang]}</p>
            <p>{text.logo4[lang]}</p>
            <p>{text.logo5[lang]}</p>
            <p>{text.logo6[lang]}</p>
            <p>{text.logo7[lang]}</p>
            <p>{text.logo8[lang]}</p>
            <p>{text.logo9[lang]}</p>
            <p>{text.logo10[lang]}</p>
            <p>{text.logo11[lang]}</p>
            <p>{text.logo12[lang]}</p>
            <p>{text.logo13[lang]}</p>
            <p>{text.logo14[lang]}</p>
            <p>{text.logo15[lang]}</p>
            <p>{text.logo16[lang]}</p>
            <p>{text.logo17[lang]}</p>
            <p>{text.logo18[lang]}</p>
            <p>{text.logo19[lang]}</p>
            <p>{text.logo20[lang]}</p>
            <p>{text.logo21[lang]}</p>
            <p>{text.logo22[lang]}</p>
            <p>{text.logo23[lang]}</p>
            <p>{text.logo24[lang]}</p>
            <p>{text.logo25[lang]}</p>
            <p>{text.logo26[lang]}</p>
            <p>{text.logo27[lang]}</p>
            <p>{text.logo28[lang]}</p>
            <p>{text.logo29[lang]}</p>
            <p>{text.logo30[lang]}</p>
            <p>{text.logo31[lang]}</p>
            <p>{text.logo32[lang]}</p>
            <p>{text.logo33[lang]}</p>
            <p>{text.logo34[lang]}</p>

            <p>{text.aboutFollowMePart1[lang]}<a href="https://twitter.com/Yoann_Buzenet?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false" target='_blank'>{text.aboutFollowMePart2[lang]}</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></p>
        </div>
    );
}


export default About