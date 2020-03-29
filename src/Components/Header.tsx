import React from 'react';
import styled from 'styled-components';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

const InfoPrompt = styled(Alert)`
  position: relative;
  border-radius: 0;
  min-height: 63px;
`;

const HeaderToolbar = styled(Toolbar)`
  padding: 0 7px;
  font-family: 'Roboto,Helvetica,Arial,sans-serif';
  font-weight: bold;
  min-height: 40px;
`;

const DrawerIcon = styled(MenuIcon)`
  color: white;
  margin-left: -4px;
`;

const HeaderText = styled(Typography)`
  font-size: 1.3rem;
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  right: 5px;
  top: 5px;
  fill: #fff;
  color: #fff;
`;

const AlertText = styled.div``;

// NOTE: Update this date when changing info text, so new versions will appear closed earlier
const LAST_VERSION =
  'Sun Mar 29 2020 18:50:03 GMT-0400 (Eastern Daylight Time)';
const LOCAL_STORAGE_KEY = 'InfoPrompt';

type HeaderProps = {
  toggleDrawer: Function;
};

const Header = ({ toggleDrawer }: HeaderProps) => {
  const savedValue = localStorage.getItem(LOCAL_STORAGE_KEY);
  const hasBeenClosed = savedValue === LAST_VERSION;
  const [closed, setClosed] = React.useState<boolean>(hasBeenClosed);

  const handleClose = () => {
    setClosed(true);
    localStorage.setItem(LOCAL_STORAGE_KEY, LAST_VERSION);
  };

  return (
    <AppBar position="static">
      <HeaderToolbar variant="dense">
        <IconButton onClick={() => toggleDrawer()}>
          <DrawerIcon />
        </IconButton>

        <HeaderText variant="h5">Find Covid Testing</HeaderText>
      </HeaderToolbar>

      {!closed && (
        <InfoPrompt variant="filled" severity="info">
          <AlertTitle>
            Thanks to student volunteers at Georgetown School of Medicine, 150+
            locations were added across eleven (11) states.
          </AlertTitle>
          <AlertText>
            Next update will add new sites for 10+ states. You can help by&#32;
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSe2sCuCrQwEHwi3FLiyRB9CYWRmSUiGyyK8RLsQPwhfrJTI4g/viewform"
              target="_blank"
              rel="noopener"
            >
              adding a new location
            </Link>
            .
          </AlertText>

          <CloseButton onClick={handleClose} size="small">
            <CloseRoundedIcon />
          </CloseButton>
        </InfoPrompt>
      )}
    </AppBar>
  );
};

export default Header;
