import React from 'react'

export const OpenPdf= () => {
    return (
        <div>
            <object data={require("../../documents/CV.pdf")} type="application/pdf" 
            width="100%" height="100%" title="pdf" className="pdf"></object>
           
        </div>
    )
}
