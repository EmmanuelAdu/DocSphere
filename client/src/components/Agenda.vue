<template>
    <div>
        <FullCalendar :plugins="calendarPlugins" :initialView="initialView" :events="calendarEvents" />
    </div>
</template>
    
<script>
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default {
    name: 'Agenda',
    components: {
        FullCalendar
    },
    data() {
        return {
            calendarPlugins: [dayGridPlugin, interactionPlugin],
            initialView: 'dayGridMonth',
            calendarEvents: [
                // Your events data here
            ]
        };
    }
};
</script>
  
<style></style>
  