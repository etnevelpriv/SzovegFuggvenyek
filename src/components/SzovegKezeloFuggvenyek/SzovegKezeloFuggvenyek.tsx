import { useState } from "react";

export const SzovegKezeloFuggvenyek = function () {
    const [szoveg, changeSzoveg] = useState<string>("");
    return (
        <>
            <div className="input-group">
                <label htmlFor="szoveg">Szoveg mezo</label>
                <input onChange={(input) => {
                    changeSzoveg(input.target.value)
                }} type="text" id="szovegInput" name="szoveg" />
            </div>
            <p>{szoveg}</p>
        </>
    )
};