import Mailjet from "node-mailjet";

const mailjet = Mailjet.apiConnect(
    process.env.REACT_APP_MAILJET_API_KEY,
    process.env.REACT_APP_MAILJET_API_SECRET
  );


const sendGeneralMail = function (mail,sub, msg) {
    console.log(process.env)
    return mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Name: process.env.NAME,
            Email: process.env.EMAIL,
          },
          To: [
            {
              Email: mail,
              Name: "name",
            },
          ],
          Subject: sub,
          TextPart: msg,
        },
      ],
    });
  };

  export {sendGeneralMail}