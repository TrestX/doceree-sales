import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'material-ui-image';

function cardWithContent(imagePath: string, title: string, description: string,imgWidth:string) {
    return (<>
        <CardContent >
            <Image src={imagePath}/>
            <div>{title}</div>
            <div>{description}</div>
        </CardContent>
    </>);
}

export function OutlinedCard({ imagePath, title, description,imgWidth, clickHandler }: { imagePath: string, title: string, description: string,imgWidth:string, clickHandler: () => void }) {
    return (
        <Box sx={{ width: 275, textAlign: 'center', borderRadius: '17px', boxShadow: 1 }} onClick={clickHandler}>
            <Card style={{ textAlign: 'center',borderRadius:'17px' }}>{cardWithContent(imagePath, title, description,imgWidth)}</Card>
        </Box>
    );
}

export function HomePageCustomCard({ imagePath, title, description,imgWidth, clickHandler }: { imagePath: string, title: string, description: string,imgWidth:string, clickHandler: () => void }) {
    return (
        <Box sx={{ width: 180, textAlign: 'center', borderRadius: '17px', boxShadow: 1,marginLeft:'auto',marginRight:'auto' }} onClick={clickHandler}>
            <Card style={{ textAlign: 'center',borderRadius:'17px' }}>
                    <CardContent >
                        <div>
                    <img src={imagePath} style={{width:imgWidth}}/>
                    <h4 style={{color:'gray',fontSize:'13px'}}>{title}</h4>
                    <div style={{color:'gray',fontSize:'11px',fontWeight:400}}>{description}</div>
                    </div>
                </CardContent></Card>
        </Box>
    );
}

