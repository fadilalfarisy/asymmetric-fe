import '../App.css'
import { useState } from 'react'

export default function Generate() {
  const [publicKey, setPublicKey] = useState('')
  const [privateKey, setPrivateKey] = useState('')

  function generateKeyPair(event) {
    event.preventDefault();
    console.log('generate')
    fetch(`${import.meta.env.VITE_HOST}/generate`)
      .then((response) => response.json())
      .then((data) => {
        setPublicKey(data.publicKey)
        setPrivateKey(data.privateKey)
      })
      .catch((err) => {
        setPublicKey(`Error`)
        setPrivateKey(`Error`)
        console.log(err);
      });
  }

  return (
    <>
      <h3 className="centered">Get Your Public Key and Private Key</h3>

      <div className="centered" style={{ marginBottom: '20px' }}>
        <form>

          <label style={{ marginBottom: "10px" }}>Public Key
            <input
              type="text"
              className="generate"
              value={publicKey}
              onChange={(e) => setPublicKey(e.target.value)} />
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
            onClick={generateKeyPair}
          >
            Generate Key
          </button>
        </form>
      </div >
    </>
  )
}