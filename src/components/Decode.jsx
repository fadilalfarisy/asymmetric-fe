import '../App.css'
import { useState } from 'react'

export default function Decode() {
  const [encryptedMessage, setEncryptedMessage] = useState('')
  const [privateKey, setPrivateKey] = useState('')
  const [decodedMessage, setDecodedMessage] = useState('')

  function decryptString(event) {
    event.preventDefault();
    console.log('decrypt')
    fetch(`${import.meta.env.VITE_HOST}/decode`, {
      method: "POST",
      body: JSON.stringify({
        encryptedMessage,
        privateKey,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDecodedMessage(data.decodedMessage)
      })
      .catch((err) => {
        setDecodedMessage(`Error`)
        console.log(err);
      });
  }

  return (
    <>
      <section style={{ alignItems: 'center', alignSelf: 'center' }}>

        <h3>Decode Your Text</h3>

        <div className="centered" style={{ marginBottom: '10px' }}>
          <form>

            <label style={{ marginBottom: "10px" }}>Encrypted Message
              <input
                type="text"
                className="generate"
                value={encryptedMessage}
                onChange={(e) => setEncryptedMessage(e.target.value)} />
            </label>

            <label style={{ marginBottom: "10px" }}>Private Key
              <input
                type="text"
                className="generate"
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
              />
            </label>

            <button
              className="tinggi"
              style={{ marginTop: '10px' }}
              onClick={decryptString}>
              Decode
            </button>

          </form>
        </div >

        <textarea
          cols="65"
          rows="10"
          value={decodedMessage}
          onChange={(e) => setDecodedMessage(e.target.value)}
        ></textarea>

      </section >
    </>
  )
}