import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Puoi anche definire gli stili in un file separato

const Presentazione = () => {
  return (
    <div style={{ marginTop: '-20px', marginBottom: '30px', backgroundColor: 'bisque' }}>
      <div className="container-fluid imageBorder">
        <div className="row">
          <p></p>
        </div>

        <div
          className="row customFont"
        >
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div
              style={{
                marginTop: '20px',
                textAlign: 'center',
                marginBottom: '50px',
                fontSize: 'clamp(1.5rem, 1.5vw, 3rem)',
              }}
            >
              <em>
                Amiche e Amici di Visitare Parigi, <br />
                sarò lieta di accompagnarvi nell'organizzazione di questa vacanza, dandovi tutti i
                consigli necessari e creando per voi un itinerario ad hoc rispettoso soprattutto del
                vostro tempo e di quello necessario per le visite imperdibili.
                <br />
                Abbiate fiducia in me e farò di tutto per rendere il vostro viaggio
                indimenticabile!
                <br />
                <br />
                <b>
                  Importante: prima di effettuare il pagamento vi chiedo di contattarmi per
                  verificare la disponibilità del momento.
                </b>
                <br />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '10px',
                    marginRight: '40px',
                  }}
                >
                  Micky Siddi
                </div>

                <img
                  width="50%"
                  className="imageBorder"
                  style={{ marginTop: '20px', marginBottom: '60px' }}
                  src="micky.png"
                  alt="Micky"
                />
                <br />

                <center>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          Consulenza e Itinerario personalizzato da 2 a 4 giorni<sup>*</sup>
                        </td>
                        <td>120€</td>
                      </tr>
                      <tr>
                        <td>
                          Consulenza e Itinerario personalizzato da 5 o 6 giorni<sup>*</sup>
                        </td>
                        <td>150€</td>
                      </tr>
                      <tr>
                        <td>
                          Consulenza e Itinerario personalizzato da 7 giorni in poi<sup>*</sup>
                        </td>
                        <td>
                          a partire da 180€<sup>**</sup>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <span style={{ marginBottom: '20px', fontSize: 'clamp(1.4rem, 1.4vw, 3rem)' }}>
                    (*) sono da includersi nel conteggio anche i giorni di arrivo e di partenza
                    (anche in caso di arrivo in tarda serata e/o partenza in prima mattinata) ed
                    eventuali trasferte a Disneyland o altrove
                  </span>
                  <br />
                  <span style={{ marginBottom: '20px', fontSize: 'clamp(1.4rem, 1.4vw, 3rem)' }}>
                    (**) da considerare 30€ di aggiunta alle 150€ per ciascuna giornata oltre la
                    sesta
                  </span>

                  <br />
                  <br />

                  <div style={{ padding: '10px' }} className="imageBorder">
                    <span style={{ fontStyle: 'normal' }}>
                      <b>IBAN: IT 19 W 03475 01605 CC0012703943</b>
                    </span>
                    <b>
                      <br />
                      <em>
                        <u>Si richiede bonifico istantaneo</u> intestato a Michela Siddi <br />
                        Causale: Consulenza e Itinerario personalizzato Viaggio Parigi
                      </em>
                    </b>
                  </div>
                  <br />
                  <b>
                    N.B: Gli importi indicati si riferiscono ad un singolo nucleo familiare
                  </b>
                  <br />
                  <br />
                </center>

                <div
                  style={{
                    textAlign: 'center',
                    marginBottom: '0px',
                    fontSize: 'clamp(0.8rem, 1.3vw, 3rem)',
                  }}
                >
                  <img
                    height="40px"  width="40px"
                    style={{ marginTop: '20px', marginBottom: '20px' }}
                    src="cuoreanimato.gif"
                    alt="Cuore animato"
                   
                  />
                  <br />
                </div>
              </em>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <center>
          <footer style={{ fontSize: 'clamp(0.6rem, 1.2vw, 3rem)' }}>
            <p>
              <em>
                <b>&copy; Michela Siddi - Travel Designer - Partita IVA 04107530927</b>
              </em>
            </p>
          </footer>
        </center>
      </div>
    </div>
  );
};

export default Presentazione;
