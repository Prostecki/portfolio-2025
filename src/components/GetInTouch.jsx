import { TextField, Button, Box, Typography } from "@mui/material";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import HomeSocial from "./HomeSocial";
import { useState } from "react";

export default function GetInTouch() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessageError(false);

    const form = event.target;

    // Validate form with RegEx
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !formValues.name ||
      !formValues.email ||
      !formValues.message ||
      formValues.name.length > 50 ||
      formValues.message.length > 500 ||
      !emailRegex.test(formValues.email)
    ) {
      setMessageError("Please fill in the fields properly and try again.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/mark.taratynov@yh.nackademin.se",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );

      if (!response.ok) throw new Error("Send failed");
      // mail was sent successfully
      setIsSuccess(true);
      setFormValues({ name: "", email: "", message: "" });

      //Show modal if there is
      setIsModalOpen(true);
      form.reset();
    } catch (error) {
      console.error(`Error, ${error}`);

      //show error if the mail wasn't sent
      setMessageError("Something went wrong. Please, try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full px-4 min-h-screen max-md:mt-32 flex flex-col items-center justify-center gap-4 text-white">
      <span className="inline-block py-1 px-3 rounded-full text-sm font-medium dark:bg-teal-500/10 dark:text-blue-500 bg-slate-300/30 drop-shadow-2xl text-slate-800/60 mb-4">
        Contact
      </span>
      <h1 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-white via-gray-400 to-slate-500 text-transparent bg-clip-text drop-shadow-sm max-md:mb-0">
        Let's Connect
      </h1>
      <div className="flex max-md:flex-col max-md:items-center gap-5 p-5">
        <div className="flex flex-col items-start max-md:items-center justify-center max-h-[30rem]">
          <h3 className="mb-10 mt-4 text-lg md:text-xl max-md:text-center text-start font-light text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I’m always open to
            new ideas and collaborations.
          </h3>
          <div className=" flex flex-col max-md:gap-8 items-start gap-3 justify-center max-w-[20rem]">
            <address>
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
            </address>
            <div className="flex gap-3 items-center justify-between">
              <div className="bg-pink-500/10 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Location</h1>
                <h3 className="text-lg text-gray-400">Stockholm, Sweden</h3>
              </div>
            </div>
            <nav className="flex gap-3 items-center justify-center w-full mt-2 mb-5">
              <HomeSocial />
            </nav>
          </div>
        </div>

        <div className="md:w-1/2 w-[20rem] flex flex-col items-center px-4 md:m-auto">
          <Box
            component="form"
            onSubmit={handleFormSubmit}
            sx={{
              backgroundColor: "#0f172a",
              p: 4,
              borderRadius: 4,
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              gap: 4,
              backdropFilter: "blur(6px)",
              border: "1px solid #334155",
              minHeight: "500px",
              minWidth: "400px",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Your Name"
              name="name"
              variant="standard"
              fullWidth
              value={formValues.name}
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
              inputProps={{ maxLength: 50 }}
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
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
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
              value={formValues.message}
              onChange={(e) =>
                setFormValues({ ...formValues, message: e.target.value })
              }
              inputProps={{ maxLength: 500 }}
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
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}
