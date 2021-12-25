import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'material-ui-image';

function cardWithContent(imagePath: string, title: string, description: string) {
    return (<>
        <CardContent >
            <Image src={imagePath} />
            <div>{title}</div>
            <div>{description}</div>
        </CardContent>
    </>);
}

export default function OutlinedCard({ imagePath, title, description, clickHandler }: { imagePath: string, title: string, description: string, clickHandler: () => void }) {
    return (
        <Box sx={{ width: 275, textAlign: 'center', borderRadius: '15px', boxShadow: 1 }} onClick={clickHandler}>
            <Card style={{ textAlign: 'center' }}>{cardWithContent(imagePath, title, description)}</Card>
        </Box>
    );
}