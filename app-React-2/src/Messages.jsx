export function Messages(){

    const messaggi = [
        { testo: "Ciao, come stai?", inviato: false },
        { testo: "Tutto bene, grazie! E tu?", inviato: true },
        { testo: "Anch'io sto bene!", inviato: true },
        { testo: "Hai visto l'ultima partita?", inviato: false },
      ];
    return(
        <div>
            <h1>Messaggi</h1>
            <div className="chat">
            <ul>
                <h3>Chat</h3>
                {messaggi.map((x,index)=>(
                    <li className="messaggi" style={{alignItems:x.inviato? 'flex-end': 'flex-start' , margin: '10px', }} key={index}>{x.testo} </li>
                ))}

               
            </ul>


            </div>
           

        </div>
    )
}