import { Box, Button, Input } from "@mui/joy";
import React, { useState } from "react";

const ToDo = () => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Input Value:", inputValue);
    };

    return (
        <Box component="form" onSubmit={submitHandler}>
            <Input
                placeholder="Try to submit with no text!"
                value={inputValue}
                onChange={handleChange}
                required
            />
            <Button type="submit">Submit</Button>
        </Box>
    );
};

export default ToDo;
