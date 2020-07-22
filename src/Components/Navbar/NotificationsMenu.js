import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

export default function NotificationsMenu({ anchorEl, isNotificationOpen, handleNotificationsClose, menuId }) {
    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isNotificationOpen}
            onClose={handleNotificationsClose}
            >
            <MenuItem onClick={handleNotificationsClose}>Profile</MenuItem>
            <MenuItem onClick={handleNotificationsClose}>My account</MenuItem>
        </Menu>
    )
}
