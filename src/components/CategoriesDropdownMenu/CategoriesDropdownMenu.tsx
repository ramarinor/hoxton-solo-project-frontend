import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useStore } from '../../store';
import { useNavigate } from 'react-router-dom';

export default function CategoriesDropdownMenu() {
  const categories = useStore((store) => store.categories);
  const navigate = useNavigate();
  return (
    <PopupState variant='popover' popupId='demo-popup-menu'>
      {(popupState) => (
        <React.Fragment>
          <Button variant='contained' {...bindTrigger(popupState)}>
            Categories
          </Button>
          <Menu {...bindMenu(popupState)}>
            {categories.map((category) => (
              <MenuItem
                onClick={() => {
                  navigate(`category/${category.name}`);
                  popupState.close();
                }}
              >
                {category.name}
              </MenuItem>
            ))}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
