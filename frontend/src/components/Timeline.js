// src/components/Timeline.js

import React from "react";
import { Container, Typography } from "@mui/material";
import { Timeline as MuiTimeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const Timeline = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Timeline
      </Typography>
      <MuiTimeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Event 1 - Legal Reform</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Event 2 - Civic Education</TimelineContent>
        </TimelineItem>
        {/* Add more timeline items as needed */}
      </MuiTimeline>
    </Container>
  );
};

export default Timeline;
