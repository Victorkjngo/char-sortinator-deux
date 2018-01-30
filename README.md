# char-sortinator-deux


## Higher Level PoV
- Client has a form that accepts and string and submits to server. Server takes string and sorts it in reverse alph order and sends back to client.
- Client takes the sorted string and adds a row w/ unsorted and sorted string onto a table


## Client Side
### Components
[x] Create form that posts stuff to /reverseString endpoint
[x] Create input field inside form
[x] Create table (located outside form) (table rows - string, sorted)

### Actions
[x] When form submitted, prevent default send request to /reverseString endpoint. Upon response, add new row onto table! 

### Design
[ ] TODO Center the form (vertically and horizontally)

### Error handling
[ ] Invalid inputs on server side, invalid inputs client side, debouncing.

## Server Side
### Routes
[x] /reverseString post, takes input and string and returns reversed string as response
