import React from "react";
import Character from "./Character";
import charInfo from "../data/characterData.json";
const CharacterGallery = () => {
    const charArray = charInfo.map(
        
        c => <Character {...c} key={c._id} />
    );
    return (
        <div data-test="component-char-gallery">
         {charArray}
        </div>
    )
}
//"component-char-gallery"

export default CharacterGallery;