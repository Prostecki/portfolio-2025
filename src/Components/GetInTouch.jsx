import { TextField, Button, Box, Typography } from "@mui/material";

export default function GetInTouch() {
  return (
    <section className="w-full py-24 flex flex-col items-center gap-5 justify-center bg-gray-950 text-white">
      <span className="inline-block py-1 px-4 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-blue-400 mb-4 tracking-wide">
        Contact
      </span>
      <h1 className="text-4xl md:text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-300 drop-shadow-sm">
        Let's Connect
      </h1>
      <h3 className="mb-10 mt-4 text-lg md:text-xl text-center font-light text-gray-400 max-w-2xl mx-auto">
        Have a project in mind or just want to say hello? I’m always open to new
        ideas and collaborations.
      </h3>
      <div className="max-md:w-[25rem] w-[30rem] max-w-7xl px-6">
        <Box
          component="form"
          sx={{
            backgroundColor: "#0f172a",
            p: 4,
            borderRadius: 4,
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            backdropFilter: "blur(6px)",
            border: "1px solid #334155",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Your Name"
            name="name"
            variant="standard"
            fullWidth
            InputLabelProps={{ style: { color: "#94a3b8" } }}
            InputProps={{
              style: {
                color: "white",
                fontSize: "1.1rem",
                borderBottom: "1px solid #475569",
              },
              disableUnderline: false,
            }}
          />
          <TextField
            label="Email Address"
            name="email"
            type="email"
            variant="standard"
            fullWidth
            InputLabelProps={{ style: { color: "#94a3b8" } }}
            InputProps={{
              style: {
                color: "white",
                fontSize: "1.1rem",
                borderBottom: "1px solid #475569",
              },
              disableUnderline: false,
            }}
          />
          <TextField
            label="Your Message"
            name="message"
            multiline
            rows={4}
            variant="standard"
            fullWidth
            InputLabelProps={{ style: { color: "#94a3b8" } }}
            InputProps={{
              style: {
                color: "white",
                fontSize: "1.1rem",
                borderBottom: "1px solid #475569",
              },
              disableUnderline: false,
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              py: 1.5,
              fontWeight: 600,
              fontSize: "1rem",
              letterSpacing: 1,
              backgroundColor: "#3b82f6",
              borderRadius: "0.5rem",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#2563eb",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(59,130,246,0.4)",
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </div>
    </section>
  );
}
