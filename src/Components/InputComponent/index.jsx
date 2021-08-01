import TextField from "@material-ui/core/TextField";

export const InputComponent = ({
    label = "",
    value = "",
    onChange = () => {},
    onBlur = () => {},
    error = "",
    touched = false
}) => {
    return (
        <TextField 
            label={label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            helperText={error}
            error={!!error && touched}
            fullWidth
        />
    );
};