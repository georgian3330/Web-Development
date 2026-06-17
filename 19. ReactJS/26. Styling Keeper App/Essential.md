# Styling the Keeper App

<p>You should include the following latest packages in the package.json:</p>

```
"@mui/icons-material": "^5.15.11",
"@mui/material": "^5.15.11",
"@emotion/react": "^11.11.4",
"@emotion/styled": "^11.11.0",
```

> And in the .jsx files should import the icons and the components like so:


**CreateArea.jsx**

```
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
```

**Header.jsx**

```
import HighlightIcon from "@mui/icons-material/Highlight";
```

**Note.jsx**

```
import DeleteIcon from "@mui/icons-material/Delete";
```

<p>This way you'll avoid any warnings and errors. This is also the code you'll see used in the downloadable completed projects.</p>



> Previous version of the code:

* This is the code you'll see in the video in the package.json. Use the new code above:

```
"@material-ui/core": "4.6.1",
"@material-ui/icons":"4.5.1",
```

and in the .jsx files, you'll see these imports, but use the code from above instead:



**CreateArea.jsx**

```
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
```

**Header.jsx**

```
import HighlightIcon from "@material-ui/icons/Highlight";
```

**Note.jsx**

```
import DeleteIcon from"@material-ui/icons/Delete"; 
```