import { TextField } from "@material-ui/core";


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
        <TextField
            label={label}
            fullWidth
            value={value}
            type={type}
            error={!!error && touched}
            helperText={!!error && touched ? error : ""}
            name={name}
            variant="standard"
            onChange={onChange}
            onBlur={onBlur}
            autoComplete=""
        />
    );
};