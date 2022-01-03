import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
const ColorButton = styled(Button)<ButtonProps>(() => ({
	background: 'linear-gradient(to right,#A45BE4 0%, #6B42F6 70%)',
	margin: '10px',
	padding: '5px 45px',
	textAlign: 'center',
	transition: '0.5s',
	fontSize: '12px',
	color: 'white',
	boxShadow: '0 0 20px #eee',
	borderRadius: '30px',
	display: 'block',
	textTransform: 'none',
	'&:hover': {
		backgroundPosition: 'right center', /* change the direction of the change here */
		color: '#fff',
		textDecoration: 'none',
	},
}));

export function CustomizedButtons({ label, onClickHandler }: { label: string, onClickHandler: () => void }) {
	return (
		<>
			<ColorButton variant="contained" onClick={onClickHandler}>{label}</ColorButton>
		</>
	);
}