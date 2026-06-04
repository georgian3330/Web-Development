# Axios Module ✅

```
import axios from "axios";

app.get("/", async(req, res) => {
    try{
        const response = await axios.get("https://bored-api.appbrewery.com/random");
        res.render("index.ejs", {activity : response.data});
    }
    catch(error){
        console.error("Failed to make request:", error.message);
        res.status(500).send("Failed to fetch activity. Please try again.");
    }
});
```

| Axios Module | HTTPS Request Module |
|--------------| ---------------------|
| `import axios from "axios";`</br>`app.get("/", async(req, res) => {`</br>&emsp;`try{`</br>&emsp;&emsp;`const response = await axios.get("https://bored-api.appbrewery.com/random");`</br>&emsp;&emsp;`res.render("index.ejs", {activity : response.data});`</br>&emsp;`}`</br>&emsp;`catch(error){`</br>&emsp;&emsp;`console.error("Failed to make request:", error.message);`</br>&emsp;&emsp;`res.status(500).send("Failed to fetch activity. Please try again.");`</br>&emsp;`}`</br>`});` | `import https from "https";`</br>`app.get("/", (req, res) => {`</br>&emsp;`const options = {`</br>&emsp;&emsp;`hostname : "bored-api.appbrewery.com",`</br>&emsp;&emsp;`path : "/random",`</br>&emsp;&emsp;`method : "GET",`</br>&emsp;`};`</br>&emsp;`const request = https.request(options, (response) => {`</br>&emsp;&emsp;`let data = "";`</br>&emsp;&emsp;`response.on("data", (chunk) => {`</br>&emsp;&emsp;&emsp;`data += chunk;`</br>&emsp;&emsp;`});`</br>&emsp;&emsp;`response.on("end", () => {`</br>&emsp;&emsp;`try{`</br>&emsp;&emsp;&emsp;`const result = JSON.parse(data);`</br>&emsp;&emsp;&emsp;`res.render("index.ejs", {activity : data});`</br>&emsp;&emsp;`}`</br>&emsp;&emsp;`catch(error){`</br>&emsp;&emsp;&emsp;`console.error("Failed to parse response:", error.message);`</br>&emsp;&emsp;&emsp;`res.status(500).send("Failed to fetch activity. Please try again.");`</br>&emsp;&emsp;`}`</br>&emsp;`});`</br>&emsp;`});`</br>&emsp;`request.on("error", (error) => {`</br>&emsp;&emsp;`console.error("Failed to make request:", error.message);`</br>&emsp;&emsp;`res.status(500).send("Failed to fetch activity. Please try again.");`</br>&emsp;`});`</br>&emsp;`request.end();`</br>`});` |

* **Post Request Using Axios**

```
import axios from "axios";

app.post("/", async(req, res) => {
    try{
        await axios.post("URL", body, config);
        res.sendStatus(201);
    } catch(error){
        res.status(404).send(error.response.data);
    }
});
```

* **Put Request using Axios**

```
import axios from "axios";

app.put("/", async(req, res) => {
    try{
        await axios.put("URL", body, config);
        res.sendStatus(200);
    } catch(error){
        res.status(404).send(error.response.data);
    }
});
```

* **Patch Request using Axios**

```
import axios from "axios";

app.patch("/", async(req, res) => {
    try{
        await axios.patch("URL", body, config);
        res.sendStatus(200);
    }catch(error){
        res.status(404).send(error.response.data);
    }
});
```

* **Delete Request using Axios**

```
import axios from "axios";

app.delete("/", async(req, res) => {
    try{
        await axios.delete("URL", config);
        res.sendStatus(200);
    }catch(error){
        res.status(404).send(error.response.data);
    }
});
```

**GitHub Repo** 👉 [Axios GitHub Repository](https://github.com/axios/axios)