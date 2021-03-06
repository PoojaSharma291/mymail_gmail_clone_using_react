import { Button } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";

import SidebarOption from "./SidebarOption";
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import SnoozeIcon from '@material-ui/icons/Snooze';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import MoreIcon from '@material-ui/icons/More';

import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <Button className="sidebar__compose" startIcon={<AddIcon fontSize="large" />} onClick={() => dispatch(openSendMessage())}>Compose</Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
            <SidebarOption Icon={StarIcon} title="Starred" number={23} selected={false} />
            <SidebarOption Icon={SnoozeIcon} title="Snoozed" number={22} selected={false} />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={33} selected={false} />
            <SidebarOption Icon={SendIcon} title="Sent" number={33} selected={false} />
            <SidebarOption Icon={DraftsIcon} title="Drafts" number={45} selected={false} />
            <SidebarOption Icon={MoreIcon} title="More" number={54} selected={false} />
        </div>
    )
}

export default Sidebar;
