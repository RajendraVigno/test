import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
    return (
        <div style={{ width: "15rem" }}>
            <Accordion className='bgAsh rounded-lg' style={{height:"3rem"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span"><div>
                        <div className='fontSize10'>ROOMS & GUESTS</div>
                        <div className='fontSize12'><b>1 Room, 2 Adults</b></div>
                    </div></Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <div className='flex justify-between'>
                    <div>Rooms</div>
                    <div>
                        <button>1</button>
                    </div>
                   </div>
                </AccordionDetails>
                <AccordionDetails>
                   <div className='flex justify-between'>
                    <div>Adults</div>
                    <div>
                        <button>4</button>
                    </div>
                   </div>
                </AccordionDetails>
                <AccordionDetails>
                    <div className='flex justify-between'>
                    <div>Childrens</div>
                    <div>
                        <button>3</button>
                    </div>
                   </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
