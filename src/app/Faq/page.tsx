"use client"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/material';
import { accordionData } from './data';
import Title from 'components/Title';

function Faq() {
    return (
        <Stack direction={"column"} gap={2}>
            <Title title={"FAQ"} subtitle={"Frequently Asked Questions Page"} isDashboard={false} />
            {accordionData.map(({ panel, heading, details, summary }, index) => (
                <Accordion key={index} defaultExpanded={index == 0} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${panel}bh-content`}
                        id={`${panel}bh-header`}
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>{heading}</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>{summary}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{details}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Stack>
    )
}

export default Faq