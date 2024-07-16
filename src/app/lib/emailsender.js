"use server";
import { ServerClient } from "postmark";

export const emailsender = async (formdata) => {
  console.log(formdata);
  const name = formdata.get("name");
  const email = formdata.get("email");
  const message = formdata.get("message");
  const newErrors = {};
  var client = new ServerClient("d6c84294-ac69-406d-a66b-f7ff80b7d88e");

  if (!name) newErrors.name = "Name is required";
  if (!email) newErrors.email = "Email is required";
  if (!message) newErrors.message = "Message is required";

  // Send email using EmailJS
  client.sendEmail({
    From: "shahadat.shamim@brainstation-23.com",
    To: "studio23contact@brainstation-23.com",
    Subject: "Message From Studio-23 Website",
    HtmlBody: `<strong>My name is: ${name}</strong> 
                <br/> 
                <strong>Email: ${email}</strong> 
                <br/>
                <strong>Message: ${message}</strong> 
                
                <br/>
                `,
    TextBody: "Hello from Postmark!",
    MessageStream: "outbound",
  });
};
