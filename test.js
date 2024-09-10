import { saveFile } from "./modules/file.js";

fetch("https://www.instagram.com/api/v1/users/web_profile_info/?username=cadocuir", {
    "headers": {
    
      "x-ig-app-id": "936619743392459", //Important
      "Referer": "https://www.instagram.com/",
    },
    "body": null,
    "method": "GET"
  }).then(async function(response) {

    console.log(response.status);
    const data = await response.json()
    console.log(data);
    saveFile("profile.json",data);
  })