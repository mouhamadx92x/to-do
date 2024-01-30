"use client";
import { Box, Button, Input, Typography } from "@mui/joy";
import React, { useState } from "react";
import { homePageMainBox, tittleText, toDoInputField } from "./styles";

const ToDo = () => {
    const [inputValue, setInputValue] = useState("");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Input Value:", inputValue);
    };

    return (
        <>
            <Typography component="h1" sx={tittleText}>
                TO DO
            </Typography>
            <Box component="form" onSubmit={submitHandler} sx={homePageMainBox}>
                <Input
                    placeholder="Try to submit with no text!"
                    value={inputValue}
                    onChange={changeHandler}
                    required
                    sx={toDoInputField}
                />
                <Button type="submit">Submit</Button>
            </Box>
        </>
    );
};

export default ToDo;
