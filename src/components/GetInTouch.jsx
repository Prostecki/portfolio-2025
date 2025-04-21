import { TextField, Button, Box, Typography } from "@mui/material";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";

export default function GetInTouch() {
  return (
    <section className="w-full px-4 min-h-screen max-md:mt-32 flex flex-col items-center justify-center gap-4 text-white">
      <span className="inline-block py-1 px-8 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-blue-400 mb-4 tracking-wide">
        Contact
      </span>
      <h1 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-white via-gray-400 to-slate-500 text-transparent bg-clip-text drop-shadow-sm max-md:mb-0">
        Let's Connect
      </h1>
      <div className="flex max-md:flex-col gap-5 p-5">
        <div className="flex flex-col items-start max-md:items-center justify-center">
          <h3 className="mb-10 mt-4 text-lg md:text-xl max-md:text-center text-start font-light text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I’m always open to
            new ideas and collaborations.
          </h3>
          <div className=" flex flex-col max-md:gap-8 items-start gap-3 justify-center max-w-[20rem]">
            <div className="flex gap-3 items-center">
              <div className="bg-purple-500/10 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Email</h1>
                <h3 className="text-lg text-gray-400">
                  mark.taratynov@gmail.com
                </h3>
              </div>
            </div>
            <div className="flex gap-3 items-center justify-between">
              <div className="bg-pink-500/10 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Location</h1>
                <h3 className="text-lg text-gray-400">Stockholm, Sweden</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md px-4 max-md:m-auto">
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
      </div>
    </section>
  );
}
