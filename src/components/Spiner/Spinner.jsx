import React from 'react';
import classes from './spinner.module.scss';

const Spinner = () => {
	return (
		<div className={classes.spinner}>
			<div className={classes.spinner__inner}> </div>
		</div>
	);
};

export default Spinner;
