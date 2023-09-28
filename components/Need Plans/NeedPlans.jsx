import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './NeedPlans.css';
import moment from 'moment';
import SearchIcon from '@mui/icons-material/Search';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import IconButton from '@mui/material/IconButton'; // Import IconButton from Material-UI
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import TodayIcon from '@mui/icons-material/Today';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import noRecords from '../../assets/noRecords.png';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; // Import CalendarTodayIcon from Material-UI
import { useHistory } from  'react-router'
const localizer = momentLocalizer(moment);

const NeedPlans = () => {
  const [selectedDateOption, setSelectedDateOption] = useState(null); // State to store selected date option
  const [isDateSelectOpen, setIsDateSelectOpen] = useState(false); // State to control date select visibility
  const [filteredData, setFilteredData] = useState([])

  const toggleDateSelect = () => {
    setIsDateSelectOpen(!isDateSelectOpen);
  };

  const closeSelect = () => {
    setIsDateSelectOpen(false);
  };
  const history = useHistory()

  const gotoRaiseNeed = e => {
    history.push('/raiseneed')
  }

  const handleDateOptionChange = (option) => {
    setSelectedDateOption(option);
    setIsDateSelectOpen(false);
    // You can add logic here to handle the selected date option
  };
  const events = [
    {
      title: "Elderly Support",
      start: new Date(2023, 7, 29, 9, 0, 0),
      end: new Date(2023, 7, 29, 10, 0, 0),
      color: "blue",
    },
    {
      title: "Temple Premise Cleaning",
      start: new Date(2023, 7, 30, 9, 0, 0),
      end: new Date(2023, 7, 30, 10, 0, 0),
      color: "red",
    },
    {
      title: "Prasad Preparation",
      start: new Date(2023, 7, 31, 9, 0, 0),
      end: new Date(2023, 7, 31, 10, 0, 0),
      color: "red",
    },
    {
      title: "Prasad Preparation",
      start: new Date(2023, 8, 1, 15, 0, 0),
      end: new Date(2023, 8, 1, 16, 0, 0),
      color: "blue",
    },
    {
      title: "Temple Premise Cleaning",
      start: new Date(2023, 8, 2, 9, 0, 0),
      end: new Date(2023, 8, 2, 9, 0, 0),
      color: "blue",
    },
    {
      title: "Temple Premise Cleaning",
      start: new Date(2023, 8, 3, 9, 0, 0),
      end: new Date(2023, 8, 3, 3, 0, 0),
      color: "blue",
    },
    {
      title: "Prasad Preparation",
      start: new Date(2023, 8, 4, 9, 0, 0),
      end: new Date(2023, 8, 4, 10, 0, 0),
      color: "red",
    },
    {
      title: "Translation and Support",
      start: new Date(2023, 8, 5, 9, 0, 0),
      end: new Date(2023, 8, 5, 10, 0, 0),
      color: "red",
    },
    {
      title: "Prasad Preparation",
      start: new Date(2023, 8, 6, 15, 0, 0),
      end: new Date(2023, 8, 6, 16, 0, 0),
      color: "blue",
    },
    {
      title: "Translation and Support",
      start: new Date(2023, 8, 7, 9, 0, 0),
      end: new Date(2023, 8, 7, 10, 0, 0),
      color: "blue",
    }, {
      title: "Elderly Support",
      start: new Date(2023, 8, 8, 9, 0, 0),
      end: new Date(2023, 8, 8, 10, 0, 0),
      color: "blue",
    },
    {
      title: "Temple Premise Cleaning",
      start: new Date(2023, 8, 9, 9, 0, 0),
      end: new Date(2023, 8, 9, 10, 0, 0),
      color: "red",
    },
    {
      title: "Temple Premise Cleaning",
      start: new Date(2023, 8, 10, 9, 0, 0),
      end: new Date(2023, 8, 10, 10, 0, 0),
      color: "red",
    },
    {
      title: "Mentoring",
      start: new Date(2023, 8, 11, 15, 0, 0),
      end: new Date(2023, 8, 11, 16, 0, 0),
      color: "blue",
    },
    {
      title: "Elderly Support",
      start: new Date(2023, 8, 12, 9, 0, 0),
      end: new Date(2023, 8, 12, 10, 0, 0),
      color: "blue",
    },
    {
      title: "Translation and Support",
      start: new Date(2023, 8, 13, 9, 0, 0),
      end: new Date(2023, 8, 13, 10, 0, 0),
      color: "blue",
    },
    {
      title: "Event 2",
      start: new Date(2023, 8, 13, 11, 0, 0),
      end: new Date(2023, 8, 13, 12, 0, 0),
      color: "red",
    },
    {
      title: "Event 3",
      start: new Date(2023, 8, 14, 9, 0, 0),
      end: new Date(2023, 8, 14, 10, 0, 0),
      color: "red",
    },
    {
      title: "Event 4",
      start: new Date(2023, 8, 15, 15, 0, 0),
      end: new Date(2023, 8, 15, 16, 0, 0),
      color: "blue",
    },
    {
      title: "Event 5",
      start: new Date(2023, 8, 15, 9, 0, 0),
      end: new Date(2023, 8, 15, 10, 0, 0),
      color: "blue",
    },
  ];



  const views = {
    month: true,
    week: false,
    day: false,
    agenda: false,
  };

  const customEventPropGetter = (event, start, end, isSelected) => {
    const eventStyle = {
      backgroundColor: 'white', // Customize background color based on event property
      borderRadius: '5px',
      color: 'black',
      boxShadow: '2px 0px #0080BC inset',
      border: 'solid 1px #DBDBDB',
    };

    return {
      style: eventStyle,
    };
  };

  const CustomToolbar = ({ onNavigate, label }) => (
    <div className="custom-toolbar">
      <IconButton onClick={() => onNavigate('PREV')}>
        <KeyboardArrowLeftIcon />
      </IconButton>
      <IconButton onClick={() => onNavigate('TODAY')}>
        <TodayIcon />
      </IconButton>
      <IconButton onClick={() => onNavigate('NEXT')}>
        <KeyboardArrowRightIcon />
      </IconButton>

      <div className="calendar-month-year">
        {moment(label).format('MMMM YYYY')} {/* Display month and year */}
      </div>
      <div className="searchMenu">
        <i><SearchIcon /></i>
        <input type="search" name="msearch" placeholder="Search Needs, Volun...." className="d-none d-sm-inline" />
      </div>


      <div className="selectDates">
        <div className="custom-select date-select" onClick={toggleDateSelect} onBlur={closeSelect}>
          <CalendarTodayIcon className="calendar-icon" />
          <span className="selected-option">{selectedDateOption ? selectedDateOption : 'Date'}</span>
          <span className="dropdown-indicator">{isDateSelectOpen ? '^' : '^'}</span>
          {isDateSelectOpen && (
            <div className="options">
              <div onClick={() => handleDateOptionChange('Recent')}>Recent</div>
              <div onClick={() => handleDateOptionChange('Oldest')}>Oldest</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const [selectedDate, setSelectedDate] = useState(new Date()); // State to store selected date

  const handleSelectSlot = (slotInfo) => {
    const selectedDateString = moment(slotInfo.start).format('YYYY-MM-DD');
    setSelectedDate(selectedDateString); // Capture selected date
  };

  const customDayPropGetter = (date) => {
    const isSelectedDate = moment(date).format('YYYY-MM-DD') === selectedDate;
    const classNames = isSelectedDate ? 'selected-date-cell' : '';
    return { className: classNames };
  };

  return (
    <div>
      <div className="wrapCalender1">
        <Calendar
          className="vCalender1"
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={views} // which views to enable or disable
          style={{ width: 950 }} // Set the overall calendar width
          eventPropGetter={customEventPropGetter}
          components={{
            toolbar: CustomToolbar,
          }}
          selectable={true} // Enable date selection
          onSelectSlot={handleSelectSlot} // Handle date slot selection
          dayPropGetter={customDayPropGetter} // Apply custom day cell styling
        />


        {selectedDate && (

          <div className="event-list">

            <div className="headEventList">{moment(selectedDate).format('MMMM D, YYYY')}</div>
            {events.some((event) => moment(event.start).format('YYYY-MM-DD') === selectedDate) && (
              <div className="statsEventList"></div>
            )}
            <div className="leftTopBarNeedTable1">
              <div className="needCount1">
                <i><StickyNote2Icon /></i>
                <span>{filteredData.length}</span>
                <label>Needs</label>
              </div>
              <div className="volunteerCount1">
                <i><PeopleAltIcon /></i>
                <span> </span>
                <label>Volunteers</label>
              </div>
            </div>
            <br />

            {/*         
        <IconButton >
        <KeyboardArrowRightIcon />
      </IconButton> */}

            <div className="dayEventDetails1">Expand All</div>

            {events
              .filter((event) => moment(event.start).format('YYYY-MM-DD') === selectedDate)
              .map((event) => (

                <li className="dayEventList" key={event.title}>
                  <div className="dayEventTitle">
                    <span className="nameDayEvent">{event.title}</span>
                    <span className="timeDayEvent">{event.timeSlot}</span>
                  </div>
                  <div className="dayEventDate1"> Aug 15 - Aug 18</div>
                  {/* <div className="dayEventDetails">View Full Details</div> */}
                </li>
              ))}

            {!events.some((event) => moment(event.start).format('YYYY-MM-DD') === selectedDate) && (
              <div className="noEventsOnDay">
                <img src={noRecords} alt="No Events" />
                <p>No needs scheduled on this date</p>
                <div class="custom-text">
                  Get started by raising needs and appoint <br/>volunteer
                  <br/>
{/*              

                  <button class="raise-need-button">Raise Need   <ArrowRightIcon/>  </button> */}

                  
                  <button class="raise-need-button" onClick={gotoRaiseNeed}>Raise Need <ArrowRightIcon/></button> 

                </div>
                </div>
         
            )}
          </div>
          
        )}
      </div>
    </div>
    
  );
};

export default NeedPlans;