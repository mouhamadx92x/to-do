"use client";
import {
    Box,
    Button,
    Input,
    List,
    ListItem,
    Typography,
    Checkbox,
} from "@mui/joy";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import {
    homePageMainBoxStyles,
    tittleTextStyles,
    toDoInputFieldStyles,
    toDoListStyles,
    toDoCheckBoxStyles,
} from "./styles";
import { v4 as uuidV4 } from "uuid";

interface ToDoItem {
    description: string;
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
            { description: inputValue, id: uuidV4(), completed: false },
        ]);
        setInputValue("");
    };

    const deleteHandler = (id: string) => {
        setToDo(toDo.filter((singleToDo) => singleToDo.id !== id));
    };

    return (
        <>
            <Typography component="h1" sx={tittleTextStyles}>
                TO DO
            </Typography>
            <Box
                component="form"
                onSubmit={submitHandler}
                sx={homePageMainBoxStyles}
            >
                <Input
                    placeholder="What is your mission?"
                    value={inputValue}
                    onChange={changeHandler}
                    required
                    sx={toDoInputFieldStyles}
                />
                <Button type="submit">Add to do</Button>
            </Box>

            {toDo && (
                <List sx={toDoListStyles}>
                    {toDo.map(({ description, id }) => (
                        <ListItem key={id}>
                            <Checkbox
                                label={description}
                                sx={toDoCheckBoxStyles}
                            />
                            <DeleteIcon onClick={() => deleteHandler(id)} />
                        </ListItem>
                    ))}
                </List>
            )}
        </>
    );
};

export default ToDo;
