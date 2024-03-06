'use client'
import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from "@mui/material"
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";


const role = [
    {
        value: 'Admin',
        label: 'Admin',
    },
    {
        value: 'Manger',
        label: 'Manger',
    },
    {
        value: 'User',
        label: 'User',
    },
];

type Inputs = {
    firstName: string,
    lastName: string,
    email: string,
    ContactNumber: string
};
const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regContactNumber = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        handleClick();
    };

    const [open, setOpen] = useState(false);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const handleClick = () => {
        setOpen(true);
    };

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
            }}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Stack direction={'row'} gap={2}>
                <TextField
                    error={Boolean(errors.firstName)}
                    helperText={
                        Boolean(errors.firstName)
                            ? "This field is required with at least 3 character"
                            : null
                    }
                    {...register("firstName", { required: true, minLength: 3 })}

                    label="First Name"
                    variant="filled"
                    sx={{ flex: 1 }}
                />

                <TextField
                    error={Boolean(errors.lastName)}
                    helperText={
                        Boolean(errors.lastName)
                            ? "This field is required with at least 3 character"
                            : null
                    }
                    {...register("lastName", { required: true, minLength: 3 })}
                    label="Last Name"
                    variant="filled"
                    sx={{ flex: 1 }} />
            </Stack>
            <TextField
                error={Boolean(errors.email)}
                helperText={
                    Boolean(errors.email)
                        ? "This field is required with at least 3 character"
                        : null
                }
                {...register("email", { required: true, pattern: regEmail })}
                label="Email"
                variant="filled"
                sx={{ flexGrow: 2 }} />
            <TextField
                error={Boolean(errors.ContactNumber)}
                helperText={
                    Boolean(errors.ContactNumber)
                        ? "This field is required with at least 3 character"
                        : null
                }
                {...register("ContactNumber", { required: true, pattern: regContactNumber })}
                label="Contact Number"
                variant="filled" />
            <TextField label="Address 1" variant="filled" />
            <TextField label="Address 2" variant="filled" />

            <TextField
                select
                label="Role"
                defaultValue="Admin"
                variant="filled"
            >
                {role.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <Box sx={{ textAlign: "right" }}>
                <Button type="submit" variant="contained" sx={{ textTransform: "capitalize" }}> Create New User</Button>
            </Box>


            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                    Account created successfully
                </Alert>
            </Snackbar>

        </Box>
    )
}

export default Form