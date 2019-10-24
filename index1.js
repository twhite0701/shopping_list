// users to add, check, uncheck, and remove items from a shopping list.
// change button to check & uncheck when each different button is selected


// create a way to check if .button-label currently has text of 'check' or 'uncheck'
// this function sets a true/false boolean to determine the current states of the check button throughout the next function

function isButtonNameCheck (item) {
    if(item == 'check') {
        return true;
    } else {
        return false;
    }
}

// creating global variable for check and uncheck
// cant be inside the function because you're always checking the current value inside function

let isButtonCurrentlyCheck = true;


// create jQuery object for check & unchecking items
// event delegate so button works after you add new item

function addDynamicsToShoppingList () {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        event.preventDefault();

        // establish variable to represent the current target's current state
        let isButtonTrue = isButtonCurrentlyCheck;

        // console.log isButtonTrue to see if it works
        console.log(isButtonTrue);

        // create a conditional statement to change event.currentTarget's inner text based on current state
        if(isButtonTrue == true) {

            // change button label to uncheck

            $(this).text('uncheck');
            isButtonCurrentlyCheck = false;

            // when changing from uncheck to check, you need to add class ('.shopping-item_checked')
            $(this).parent().prev().addClass('shopping-item__checked');

        } else if (isButtonTrue == false) {

            // change button label to check
            $(this).text('check');
            isButtonCurrentlyCheck = true;

            // when changing from check to uncheck, you need to remove class ('.shopping-item_checked')
            $(this).parent().prev().removeClass('shopping-item__checked');
        }
    });

        $('.shopping-list').on('click', '.shopping-item-delete' , function(event)  {
            console.log($(this));
            // target li parent of .shopping-item-delete to remove entire li from shopping list
            $(this).parent().parent().remove();
        });
        
        $('#js-shopping-list-form').on('submit', function(event) {
                event.preventDefault();
                
                // created a variable to represent the current target within the form
                let formInputField= $(this).find('#shopping-list-entry');
        
                // getting the value from the input field
                let inputText = formInputField.val();
        
                // add variable inputText to the ul 'shopping-list'
                $('.shopping-list').append(
                    '<li>' +
                    '<span class="shopping-item">' + inputText + '</span>' +
                    '<div class="shopping-item-controls">' +
                      '<button class="shopping-item-toggle">' +
                        '<span class="button-label">check</span>' +
                      '</button>' +
                      '<button class="shopping-item-delete">' +
                        '<span class="button-label">delete</span>' +
                      '</button>' +
                    '</div>' +
                  '</li>'
                );
                
                // addClass to all .shopping-list li so even new li has the same styling
                $('.shopping-list').addClass('.shopping-list > li');
        
                //empty the input form text field
                formInputField.val("");
            });        
}

$(addDynamicsToShoppingList);
