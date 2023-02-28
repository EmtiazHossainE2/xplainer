export const callLeadAPI = async (payload) => {
    // console.log(payload)
    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbx5BwaPgBvb6xYn4meqWhMqkR53jYESSfKyrHB51168_LKoBcvNcdqoY48Gv9hs5qbH-A/exec";
  
    const scriptURL = SCRIPT_URL;
  
    let formData = new FormData();
    formData.append("email", payload.email);
    formData.append("url", payload.url);
    formData.append("hostName", payload.hostName);
  
    const response = await fetch(scriptURL, { method: "POST", body: formData });
  
    return response;
  };
  