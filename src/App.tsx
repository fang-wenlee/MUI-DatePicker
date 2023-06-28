import * as React from "react";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Box from "@mui/material/Box";
import DatePickerV4 from "@mui/lab/DatePicker";
import LocalizationProviderV4 from "@mui/lab/LocalizationProvider";
import { Stack } from "@mui/material";

/**
 * Paste your code here.
 * All the necessary dependencies are installed.
 */
export default function App() {
  const currentyear = new Date().getFullYear();
  //cosole.log("Year: ", currentyeara);
  return (
    <Box sx={{ height: "1500px", marginTop: "800px" }}>
      <Stack direction="row">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            showDaysOutsideCurrentMonth
            // When toolbar is disabled, you will see the datepicker do as you'd expect, swap to render on the top the moment you scroll it off the screen
            showToolbar
            // When toolbar is enabled, you will see the datepicker fall off the screen as you scroll, failing to swap to rendering on top in time
            //slotProps={{ toolbar: { hidden: false } }}
            orientation="portrait"
            closeOnSelect
            value={null}
            open
            onChange={() => {}}
            label={currentyear}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <LocalizationProviderV4 dateAdapter={AdapterDayjs}>
          <DatePickerV4
            showDaysOutsideCurrentMonth
            // When toolbar is disabled, you will see the datepicker do as you'd expect, swap to render on the top the moment you scroll it off the screen
            showToolbar
            // When toolbar is enabled, you will see the datepicker fall off the screen as you scroll, failing to swap to rendering on top in time
            //slotProps={{ toolbar: { hidden: false } }}
            orientation="portrait"
            closeOnSelect
            value={null}
            open
            onChange={() => {}}
            label="v4 picker"
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProviderV4>
      </Stack>
    </Box>
  );
}
