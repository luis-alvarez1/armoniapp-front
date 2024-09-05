import React from 'react'
import "../../scss/custom.css";
import CButton from '../components/CButton'

const Test = () => {
  return (
    <div className='dotted vh-100 vw-100 d-flex text-center justify-content-center'>
        <div className='bg-primary test-bg w-75 text-white custom-bg rounded border p-3 border-secondary mt-5'>
            <h1 className='mt-1 display-4 test-title'>Test</h1>
            <div className='bg-terciary h-25 w-100 rounded mx-auto mt-3'>
                <p className='ins-text mt-1'>Conteste la encuesta teniendo en cuenta los siguientes valores</p>
                <h6>1. Nunca</h6>
                <h6>2. A veces</h6>
                <h6>3. Casi Siempre</h6>
                <h6>4. Siempre</h6>
            </div>
            <div className='bg-terciary rounded mx-auto mt-3 h-50 w-100'>
                <h2 className='mb-3'>Me siento comúnmente cansado</h2>
                <input className="form-check-input" type="radio" name="test" id="" />
                <label className="form-check-label" htmlFor="">1</label><br />
                <input className="form-check-input" type="radio" name="test" id="" />
                <label className="form-check-label" htmlFor="">2</label><br />
                <input className="form-check-input" type="radio" name="test" id="" />
                <label className="form-check-label" htmlFor="">3</label><br />
                <input className="form-check-input" type="radio" name="test" id="" />
                <label className="form-check-label" htmlFor="">4</label><br />
                <CButton color='dark-blue'>Siguiente</CButton>
            </div>
        </div>
    </div>
  )
}

export default Test