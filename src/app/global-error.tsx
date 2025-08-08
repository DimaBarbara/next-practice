'use client'

import React from 'react'

export interface GlobalErrorComponentProps {
    error: Error;
    reset: () => void;
}

export default function GlobalErrorComponent({error}: ErrorComponentProps) {
  return (
    <html>
        <body> 
            <div>
               <p>{`Something globally went wrong ${error.message}`}</p>
            </div>
        </body>
    </html>
   
  )
}