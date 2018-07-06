import React from 'react';

const FIELDS = ["age", "gender", "job", "civil_state", "children", "privacy"];

const ANAGRAPHIC_SURVEY =
        <div>
            <label className="component">
                Età:
            </label>
                <br />
                <input type="number" name={FIELDS[0]} required/>
            <br />

            <label className="component">
                Sesso:
            </label>
                <br />
                <input type="radio" name={FIELDS[1]} value="male" required />
                Uomo
                <br />
                <input type="radio" name={FIELDS[1]} value="female" required />
                Donna
            <br />

            <label className="component">
                Professione:
            </label>
                <br />
                <input type="text" name={FIELDS[2]} required />
            <br />

            <label className="component">
                Stato Civile:
            </label>
                <br />
                <input type="text" name={FIELDS[3]} required/>
            <br />
            
            <label className="component">
                Figli:
            </label>
                <br />
                <input type="number" name={FIELDS[4]} required/>
            <br />

            <input type="radio" name={FIELDS[5]} value="privacy" required />
            Consenso alla privacy
            <br />

            <input type="submit" value="Prosegui" />
        </div>

export default ANAGRAPHIC_SURVEY