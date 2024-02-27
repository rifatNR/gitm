import React, { useState } from 'react';
import { Box } from 'ink';
import AsciiIntro from './components/AsciiArt/AsciiIntro.js';
import Sender from './components/Sender/Sender.js';
import Receiver from './components/Receiver/Receiver.js';
export default function App({ name = 'Stranger' }) {
    const [action, setAction] = useState(process.argv[2]);
    return (React.createElement(Box, { flexDirection: "column" },
        action == null && React.createElement(AsciiIntro, null),
        action == 'SEND' && React.createElement(Sender, null),
        action == 'RECEIVE' && React.createElement(Receiver, null)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiLi4vc291cmNlL2FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDdEMsT0FBTyxFQUFDLEdBQUcsRUFBTyxNQUFNLEtBQUssQ0FBQztBQUM5QixPQUFPLFVBQVUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3RCxPQUFPLE1BQU0sTUFBTSwrQkFBK0IsQ0FBQztBQUNuRCxPQUFPLFFBQVEsTUFBTSxtQ0FBbUMsQ0FBQztBQU16RCxNQUFNLENBQUMsT0FBTyxVQUFVLEdBQUcsQ0FBQyxFQUFDLElBQUksR0FBRyxVQUFVLEVBQVE7SUFDckQsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRELE9BQU8sQ0FDTixvQkFBQyxHQUFHLElBQUMsYUFBYSxFQUFDLFFBQVE7UUFDekIsTUFBTSxJQUFJLElBQUksSUFBSSxvQkFBQyxVQUFVLE9BQUc7UUFFaEMsTUFBTSxJQUFJLE1BQU0sSUFBSSxvQkFBQyxNQUFNLE9BQVU7UUFDckMsTUFBTSxJQUFJLFNBQVMsSUFBSSxvQkFBQyxRQUFRLE9BQVksQ0FDeEMsQ0FDTixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0JveCwgVGV4dH0gZnJvbSAnaW5rJztcbmltcG9ydCBBc2NpaUludHJvIGZyb20gJy4vY29tcG9uZW50cy9Bc2NpaUFydC9Bc2NpaUludHJvLmpzJztcbmltcG9ydCBTZW5kZXIgZnJvbSAnLi9jb21wb25lbnRzL1NlbmRlci9TZW5kZXIuanMnO1xuaW1wb3J0IFJlY2VpdmVyIGZyb20gJy4vY29tcG9uZW50cy9SZWNlaXZlci9SZWNlaXZlci5qcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG5cdG5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7bmFtZSA9ICdTdHJhbmdlcid9OiBQcm9wcykge1xuXHRjb25zdCBbYWN0aW9uLCBzZXRBY3Rpb25dID0gdXNlU3RhdGUocHJvY2Vzcy5hcmd2WzJdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxCb3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuXHRcdFx0e2FjdGlvbiA9PSBudWxsICYmIDxBc2NpaUludHJvIC8+fVxuXG5cdFx0XHR7YWN0aW9uID09ICdTRU5EJyAmJiA8U2VuZGVyPjwvU2VuZGVyPn1cblx0XHRcdHthY3Rpb24gPT0gJ1JFQ0VJVkUnICYmIDxSZWNlaXZlcj48L1JlY2VpdmVyPn1cblx0XHQ8L0JveD5cblx0KTtcbn1cbiJdfQ==