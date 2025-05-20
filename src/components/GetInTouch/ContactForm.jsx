// components/contact/ContactForm.jsx
import { TextField, Button, Box } from "@mui/material";
import { useTheme } from "../../context/ThemeContext";
import { useContactForm } from "../../hooks/useContactForm";

export default function ContactForm() {
  const { theme } = useTheme();
  const {
    formValues,
    isSubmitting,
    isSuccess,
    messageError,
    handleInputChange,
    handleFormSubmit,
  } = useContactForm();

  const textFieldProps = {
    variant: "standard",
    fullWidth: true,
    InputLabelProps: { style: { color: "#94a3b8" } },
    InputProps: {
      style: {
        color: theme === "dark" ? "white" : "black",
        fontSize: "1.1rem",
        borderBottom:
          theme === "dark" ? "1px solid #475569" : "1px solid #e2e8f0",
      },
      disableUnderline: false,
    },
  };

  return (
    <Box
      component="form"
      onSubmit={handleFormSubmit}
      sx={{
        width: "100%",
        maxWidth: "400px",
        minWidth: "unset",
        backgroundColor: theme === "dark" ? "#0f172a" : "#f8fafc",
        p: 4,
        borderRadius: 4,
        boxShadow:
          theme === "dark"
            ? "0 10px 30px rgba(0,0,0,0.3)"
            : "0 10px 30px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        gap: 4,
        backdropFilter: "blur(6px)",
        border: theme === "dark" ? "1px solid #334155" : "1px solid #e2e8f0",
        minHeight: "500px",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Your Name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
        inputProps={{ maxLength: 50 }}
        {...textFieldProps}
      />
      <TextField
        label="Email Address"
        name="email"
        type="email"
        value={formValues.email}
        onChange={handleInputChange}
        {...textFieldProps}
      />
      <TextField
        label="Your Message"
        name="message"
        multiline
        rows={4}
        value={formValues.message}
        onChange={handleInputChange}
        inputProps={{ maxLength: 500 }}
        {...textFieldProps}
      />

      <div className="min-h-[1.5rem] md:w-max text-center text-sm relative transition-all duration-300">
        {isSuccess ? (
          <p className="text-blue-300 text-md drop-shadow-xl bg-gradient-to-r bg-clip-text from-white via-blue-500 to-blue-700">
            Thank you! Message sent successfully!
          </p>
        ) : messageError ? (
          <p className="text-red-400">{messageError}</p>
        ) : null}
      </div>
      <Button
        type="submit"
        disabled={isSubmitting || isSuccess}
        variant="contained"
        sx={{
          mt: 2,
          py: 1.5,
          fontWeight: 600,
          fontSize: "1rem",
          letterSpacing: 1,
          backgroundColor: "whiteblue",
          borderRadius: "0.5rem",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#2563eb",
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(59,130,246,0.4)",
          },
        }}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </Box>
  );
}
