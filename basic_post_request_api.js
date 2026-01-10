// it is a example of post request

async function CreateuserData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {   // headers (not header)
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`http error! status ${response.status}`);
    }

    const newuser = await response.json();
    console.log(newuser);

  } catch (e) {
    console.error("create user error:", e);
  }
}

CreateuserData("https://reqres.in/api/users", {
  name: "lalit",
  job: "student"
});
