import React from 'react';

export default function ImportHeader(props) {
  return (
    <div className="detail-header">
      <h1>{props.import.wsdlServiceName}</h1>
    </div>
  )
}
