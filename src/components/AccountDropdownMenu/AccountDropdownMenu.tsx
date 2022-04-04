import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useStore } from '../../store';
import { useNavigate } from 'react-router-dom';
type Props = {
  loggedInUser: User;
};
export default function AccountDropdownMenu({ loggedInUser }: Props) {
  const signOut = useStore((store) => store.signOut);
  const navigate = useNavigate();
  return (
    <PopupState variant='popover' popupId='demo-popup-menu'>
      {(popupState) => (
        <React.Fragment>
          <Button variant='contained' {...bindTrigger(popupState)}>
            {`${loggedInUser.firstName} ${loggedInUser.lastName}`}
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem
              onClick={() => {
                popupState.close();
                signOut();
              }}
            >
              Log Out
            </MenuItem>
            {loggedInUser.roleId <= 2 && (
              <>
                <MenuItem
                  onClick={() => {
                    popupState.close();
                    navigate(`/users/${loggedInUser.username}`);
                  }}
                >
                  My Articles
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    popupState.close();
                    navigate('/create');
                  }}
                >
                  Create an Article
                </MenuItem>
              </>
            )}
            {loggedInUser.roleId === 1 && (
              <MenuItem
                onClick={() => {
                  popupState.close();
                  navigate('/users');
                }}
              >
                Manage Users
              </MenuItem>
            )}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
