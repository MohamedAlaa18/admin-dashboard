"use client"
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { EventApi, EventClickArg, formatDate } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./calendar.css";

function renderEventContent(eventInfo: { timeText: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; event: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }; }) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    );
}

function renderSidebarEvent(event: EventApi) {
    return (
        <li key={event.id}>
            <b>
                {formatDate(event.start!, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                })}
            </b>
            &nbsp; {event.title}
        </li>
    );
}

const Calendar = () => {
    const [weekendsVisible, setweekendsVisible] = useState(true);
    const [currentEvents, setcurrentEvents] = useState<EventApi[]>([]);

    const handleWeekendsToggle = () => {
        setweekendsVisible(!weekendsVisible);
    };

    let eventGuid = 0;
    function createEventId() {
        return String(eventGuid++);
    }

    const handleDateSelect = (selectInfo: { view: { calendar: any; }; startStr: any; endStr: any; allDay: any; }) => {
        let title = prompt("Please enter a new title for your event");
        let calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
            });
        }
    };

    const handleEventClick = (clickInfo: EventClickArg) => {
        if (
            confirm(
                `Are you sure you want to delete the event '${clickInfo.event.title}'`
            )
        ) {
            clickInfo.event.remove();
        }
    };

    const handleEvents = (events: EventApi[]) => {
        setcurrentEvents(events);
    };

    return (
        <Stack direction={"row"} gap={2}>
            <Paper className="demo-app-sidebar">
                <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold", my: 3 }}>All Events ({currentEvents.length})</Typography>
                <ul>{currentEvents.map(renderSidebarEvent)}</ul>

            </Paper>

            <Box flexGrow={1}>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={weekendsVisible}
                    select={handleDateSelect}
                    eventContent={renderEventContent}
                    eventClick={handleEventClick}
                    eventsSet={handleEvents}
                />
            </Box>
        </Stack>
    );
};

export default Calendar;