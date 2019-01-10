import React from 'react'

interface Props {
	version?: string
}

const VersionLabel: React.SFC<Props> = (props) => (
	<div className='version-label'>{props.version ? props.version : '-'}</div>
)

export default VersionLabel
