import { useState } from "react";
import { TextField } from "@mui/material"
import './todo-form.css'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material'

export default function TodoForm ({ addTask }) {

    const [userInput, setUserInput] = useState('')

    const handleChange = e => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    return (
        <div className="todo-form">
            <form onSubmit={handleSubmit}>
                <ThemeProvider theme={theme}>
                    <TextField
                        autoComplete="off"
                        label="Enter a new item"
                        variant="outlined"
                        color="neutral"
                        fullWidth="true"
                        value={userInput}
                        onChange={handleChange}
                        />
                </ThemeProvider>
            </form>
        </div>
    )


}

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      neutral: {
        main: '#3A4750',
        contrastText: '#3A4750',
      },
    },
  });
