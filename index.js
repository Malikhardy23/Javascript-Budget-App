// VARIABLES //

const userName = document.getElementById("name");
const expenseName = document.getElementById("expenseName");
const expensePrice = document.getElementById("expensePrice");
const budgetInput = document.getElementById("budget");
const submitBtn = document.getElementById("submitBtn");
const budgetBalance = document.getElementById("budgetBalance");

// EXPENSE VALIDATOR FUNCTION //

const expenseValidator = () => {
    if(isNaN(expensePrice.value)){
        expensePrice.style.borderBottom = "2px solid red";
        expensePrice.value = '';
        document.getElementById("expensePrice").placeholder = "Letters Prohibited"
    } 
    else if(expensePrice.value === ''){
        expensePrice.style.borderBottom = "2px solid red";
        document.getElementById("expensePrice").placeholder = "Price Required"
    }
}

// USER NAME VALIDATOR FUNCTION //

const userValidator = () => {
    if(userName.value === ""){
        userName.style.borderBottom = "2px solid red";
        userName.value = '';
        document.getElementById("name").placeholder = "Name Required"
    }

    if(userName.value !== NaN){
        userName.style.borderBottom = "2px solid red";
        userName.value = '';
        document.getElementById("name").placeholder = "Numbers Prohibited";
    }

    if(isNaN(userName.value)){
        userName.style.borderBottom = "2px solid green";
    }
}

// EXPENSE NAME VALIDATOR FUNCTION //

const expenseNameValidator = () => {
    if(expenseName.value === ""){
        expenseName.style.borderBottom = "2px solid red";
        expenseName.value = '';
        document.getElementById("expenseName").placeholder = "Expense Name Required"
    } 

    if(expenseName !== isNaN){
        expenseName.style.borderBottom = "2px solid red";
        expenseName.value = '';
        document.getElementById("expenseName").placeholder = "Numbers Prohibited"
    }

    if(isNaN(expenseName.value)){
        expenseName.style.borderBottom = "2px solid green";
    }
}

// BUDGET VALIDATOR //

const budgetValidator = () => {
    if(budgetInput.value === ''){
        budgetInput.style.borderBottom = "2px solid red";
        budgetInput.value = '';
        document.getElementById("budget").placeholder = "Budget Price Required";
    } else if(isNaN(budgetInput.value)){
        budgetInput.style.borderBottom = "2px solid red";
        budgetInput.value = '';
        document.getElementById("budget").placeholder = "Letters Prohibited";
    }
}

// BUDGET EVENT LISTENER //
budgetInput.addEventListener('change', budgetValidator);

// USER NAME EVENT-LISTENER
userName.addEventListener('change', userValidator);

// EXPENSE PRICE EVENT-LISTENER
expensePrice.addEventListener('change', expenseValidator);

// EXPENSE NAME EVENT-LISTENER
expenseName.addEventListener('change', expenseNameValidator);

// SUBMIT BUTTON EVENT LISTENER 

submitBtn.addEventListener('submit', (e) => {
    document.getElementById("submitBtn").submit();
})
