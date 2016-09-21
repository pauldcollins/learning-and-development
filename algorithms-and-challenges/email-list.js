Requirements

  // CAPTURE COMPONENT
  - Capture the user's email address.
    
  // DISPLAY COMPONENT
  - Display the list of email addresses and the email id which is the index of the element in the data structure
  - Display the total number of contacts
  
  Bonus Items
   - [x] icon in RHS of row that will delete the contact from the list and in memory on click
   - Implement row striping for list of emails.


### JS ###

let contacts = [];

function onFormSubmit(event) {
  event.preventDefault();
  addEmail(event.currentTarget.value);
}

// To test:
//  - call addEmail
//  - assert that contacts.length is what the original count was + 1
function addEmail(email) { 
  // find email input field and get current value
  let email = $('#captureEmail').value();

  // push email into array
  contacts.push(email);
}

// show emails
function showEmails() {

  let emailList = $('email-list');
  
  // loop through array and append html with data added
  contacts.forEach(function(item, index) {      
      emailList.append(`<tr class="email-list">
        <td>${index}</td>
        <td><a href="mailto:${item}">item</a></td>
      </tr>`);
  })     
}



### HTML ###

<!--CAPTURE-->
  <form id="" onSubmit="addEmail()">
    <!--capture email-->
      <fieldset>
        <legend>Your details</legend>
        <label for="captureEmail">Capture email<label>
        <input type="email" name="email" id="captureEmail">
        <button type="submit">Submit</button> 
      </fieldset>
  </form>

<!--DISPLAY-->
<div id="">
  <table class="list">
    <thead>
      <tr>
        <th>ID</th>               
        <th>Email address</th>
      </tr>
    </thead>
    <tbody id="email-list">    
      // no emails currently available
    </tbody>
  </table>
</div>
