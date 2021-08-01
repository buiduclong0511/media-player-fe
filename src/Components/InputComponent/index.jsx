import TextField from "@material-ui/core/TextField";

export const InputComponent = ({
    label = "",
    value = "",
    onChange = () => {},
    onBlur = () => {},
    error = "",
    touched = false,
    name = "",
    type = "text"
}) => {
    return (
        <TextField 
            label={label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            helperText={touched && !!error ? error : ""}
            error={!!error && touched}
            fullWidth
            name={name}
            type={type}
            autoComplete={""}
        />
    );
};