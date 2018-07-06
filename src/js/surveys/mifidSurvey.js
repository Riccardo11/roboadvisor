import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';


const MIFID_SURVEY = 
    <div>
        <label>
            Servizi legati alla consulenza in materia di investimento
        </label>
        <br />
        <input type="radio" name="Servizi" value="Sì" required/> Sì
        <br />
        <input type="radio" name="Servizi" value="No" required/> No
        <br />
        <br />

        <label>
            Conti correnti con dossier titoli
        </label>
        <br />
        <input type="radio" name="dossier" value="Sì" required/> Sì
        <br />
        <input type="radio" name="dossier" value="No" required/> No
        <br />
        <br />

        <label>
            Investimenti in strumenti del risparmio gestito (Fondi, ETF, Gestioni etc)
        </label>
        <br />
        <input type="radio" name="gestito" value="Sì" required/> Sì
        <br />
        <input type="radio" name="gestito" value="No" required/> No
        <br />
        <br />

        <label>
            Trasmissioni di ordini di acquisto e vendita di strumenti finanziari su deposito amministrato
        </label>
        <br />
        <input type="radio" name="trasmissioni" value="Sì" required/> Sì
        <br />
        <input type="radio" name="trasmissioni" value="No" required/> No
        <br />
        <br />

        <label>
            Servizi informatici offerti dagli intermediari per i propri investimenti (Online banking, trading online)?
        </label>
        <br />
        <input type="radio" name="online" value="Sì" required/> Sì
        <br />
        <input type="radio" name="online" value="No" required/> No
        <br />
        <br />

        <input type="submit" value="Procedi" />

    </div>


export default MIFID_SURVEY