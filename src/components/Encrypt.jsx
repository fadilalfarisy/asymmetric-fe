import '../App.css'
import { useState } from 'react'

export default function Encrypt() {
  const [plainText, setPlainText] = useState('')
  const [publicKey, setPublicKey] = useState('')
  const [encryptedText, setEncryptedText] = useState('')

  function encryptString(event) {
    event.preventDefault();
    console.log('encrypt')
    fetch(`${import.meta.env.VITE_HOST}/encrypt`, {
      method: "POST",
      body: JSON.stringify({
        plainText,
        publicKey,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setEncryptedText(data.encryptedMessage)
      })
      .catch((err) => {
        setEncryptedText(`Error`)
        console.log(err);
      });
  }
  return (
    <>
      <section style={{ alignItems: 'center', alignSelf: 'center' }}>

        <h3>Encrypt Your Text</h3>

        <div className="centered" style={{ marginBottom: '10px' }}>
          <form>

            <label style={{ marginBottom: "10px" }}>Your Message
              <input type="text"
                className="generate"
                value={plainText}
                onChange={(e) => setPlainText(e.target.value)} />
            </label>

            <label style={{ marginBottom: "10px" }}>Public Key
              <input type="text"
                className="generate"
                value={publicKey}
                onChange={(e) => setPublicKey(e.target.value)} />
            </label>

            <button
              className="tinggi"
              style={{ marginTop: '10px' }}
              onClick={encryptString}>
              Encrypt
            </button>

          </form>
        </div >

        <textarea
          cols="65"
          rows="10"
          value={encryptedText}
          onChange={(e) => setEncryptedText(e.target.value)}
        ></textarea>

      </section >
    </>
  )
}