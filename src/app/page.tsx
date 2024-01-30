"use client";
import { Box, Button, Input, Typography } from "@mui/joy";
import React, { useState } from "react";
import { homePageMainBox, tittleText, toDoInputField } from "./styles";
import { v4 as uuidV4 } from "uuid";
import { clearScreenDown } from "readline";

interface ToDoItem {
    name: string;
    id: string;
    completed: boolean;
}

const ToDo = () => {
    const [inputValue, setInputValue] = useState("");
    const [toDo, setToDo] = useState<ToDoItem[]>([]);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setToDo([
            ...toDo,
            { name: inputValue, id: uuidV4(), completed: false },
        ]);
        console.log("1", toDo);
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
                <Button type="submit">Add to do</Button>
            </Box>
        </>
    );
};

export default ToDo;
