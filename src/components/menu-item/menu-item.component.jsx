import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<article className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<div
			className="background-image"
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/>
		<div className="content">
			<h2 className="title">{title.toUpperCase()}</h2>
			<span className="subtitle">Shop now</span>
		</div>
	</article>
);

export default withRouter(MenuItem);
