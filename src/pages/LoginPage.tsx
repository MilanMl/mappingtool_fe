import React from 'react'
import DICTIONARY from '../config/dictionary'

export default function NotFound(any: {}) {
	return (
		<div className='not-found-grid'>
			<div className='not-found-picture' />
			<div className='not-found-text'>
				<p> {DICTIONARY.EN.NOT_FOUND} </p>
			</div>
		</div>
	)
}
/*
< div className="not-found-grid" >
            <
  div className="not-found-picture" > < /div> <
div className="not-found-text" > < p > {
                        DICTIONARY.EN.NOT_FOUND
                    } < /p></div >
                    <
  /div>
                  
  */
