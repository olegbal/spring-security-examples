import * as React from 'react';
import {FC, useEffect} from 'react';
import {Box, IconButton} from "@mui/material";
import {SnackbarKey, useSnackbar} from "notistack";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import CloseIcon from "@mui/icons-material/Close";

//FIXME REFACTORING REQUIRED
const CommonNotificationsComponent: FC = () => {
  const {enqueueSnackbar, closeSnackbar} = useSnackbar();
  const dispatch = useAppDispatch();
  // const empNotifications = useAppSelector(state => state.employees.notifications);

  const action = (snackbarId: SnackbarKey) => (
      <IconButton
          size="small"
          onClick={() => closeSnackbar(snackbarId)}>
        <CloseIcon fontSize="small"/>
      </IconButton>
  );

  // useEffect(() => {
  //   if (empNotifications.length > 0) {
  //     let lastNotification = [...empNotifications].pop();
  //     enqueueSnackbar(lastNotification?.message, {
  //       ...defualtNotificationOpts,
  //       ...lastNotification?.options,
  //       action: action
  //     });
  //     dispatch(popEmpNotification({}));
  //   }
  // }, [empNotifications]);

  return (
      <Box>
      </Box>
  );
}
export default CommonNotificationsComponent;