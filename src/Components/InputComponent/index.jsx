import { TextField } from "@material-ui/core";
import styled from "styled-components";


export const InputComponent = ({
    label = "",
    value = "",
    type = "text",
    error = "",
    touched = false,
    name = "",
    onChange = () => {},
    onBlur = () => {}
}) => {

    return (
        <StyledTextField>
            <TextField
                label={label}
                fullWidth
                value={value}
                type={type}
                error={!!error && touched}
                helperText={!!error && touched ? error : ""}
                name={name}
                variant="outlined"
                onChange={onChange}
                onBlur={onBlur}
                autoComplete=""
            />
        </StyledTextField>
    );
};

const StyledTextField = styled.div`
    .MuiFormLabel-root {
        color: #fff;
    }

    .MuiInputBase-root {
        color: #fff;
    }

    .MuiOutlinedInput-notchedOutline {
        border-color: #fff;
    }

    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
        border-color: #fff;
    }

    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #fff;
    }

    .MuiFormLabel-root.Mui-focused {
        color: #fff;
    }
    
    .MuiFormLabel-root.Mui-error {
        color: #f44336;
    }

    .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
        border-color: #f44336;
    }

    .MuiFormLabel-root.Mui-disabled {
        color: #fff;
    }

    .MuiInputBase-root.Mui-disabled {
        color: #fff;
    }

    .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {
        border-color: #fff;
    }
`;