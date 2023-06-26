'use strict';


const account1 = {
    userName: 'Cecil Ireland',
    transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
    interest: 1.5,
    pin: 1111,
    transactionsDates: [
        '2020-10-02T14:43:31.074Z',
        '2020-10-29T11:24:19.761Z',
        '2020-11-15T10:45:23.907Z',
        '2021-01-22T12:17:46.255Z',
        '2021-02-12T15:14:06.486Z',
        '2021-03-09T11:42:26.371Z',
        '2021-05-21T07:43:59.331Z',
        '2021-06-22T15:21:20.814Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const account2 = {
    userName: 'Amani Salt',
    transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
    interest: 1.3,
    pin: 2222,
    transactionsDates: [
        '2020-10-02T14:43:31.074Z',
        '2020-10-29T11:24:19.761Z',
        '2020-11-15T10:45:23.907Z',
        '2021-01-22T12:17:46.255Z',
        '2021-02-12T15:14:06.486Z',
        '2021-03-09T11:42:26.371Z',
        '2021-05-21T07:43:59.331Z',
        '2021-06-22T15:21:20.814Z',
    ],
    currency: 'UAH',
    locale: 'uk-UA',
};

const account3 = {
    userName: 'Corey Martinez',
    transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
    interest: 0.8,
    pin: 3333,
    transactionsDates: [
        '2020-10-02T14:43:31.074Z',
        '2020-10-29T11:24:19.761Z',
        '2020-11-15T10:45:23.907Z',
        '2021-01-22T12:17:46.255Z',
        '2021-02-12T15:14:06.486Z',
        '2021-03-09T11:42:26.371Z',
        '2021-05-21T07:43:59.331Z',
        '2021-06-22T15:21:20.814Z',
    ],
    currency: 'RUB',
    locale: 'ru-RU',
};

const account4 = {
    userName: 'Kamile Searle',
    transactions: [530, 1300, 500, 40, 190],
    interest: 1,
    pin: 4444,
    transactionsDates: [
        '2020-10-02T14:43:31.074Z',
        '2020-10-29T11:24:19.761Z',
        '2020-11-15T10:45:23.907Z',
        '2021-01-22T12:17:46.255Z',
        '2021-02-12T15:14:06.486Z',

    ],
    currency: 'EUR',
    locale: 'fr-CA',
};

const account5 = {
    userName: 'Oliver Avila',
    transactions: [630, 800, 300, 50, 120],
    interest: 1.1,
    pin: 5555,
    transactionsDates: [
        '2020-10-02T14:43:31.074Z',
        '2020-10-29T11:24:19.761Z',
        '2020-11-15T10:45:23.907Z',
        '2021-01-22T12:17:46.255Z',
        '2021-02-12T15:14:06.486Z',

    ],
    currency: 'USD',
    locale: 'en-US',
};

const accounts = [account1, account2, account3, account4, account5];
console.log(accounts)
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.total__value--in');
const labelSumOut = document.querySelector('.total__value--out');
const labelSumInterest = document.querySelector('.total__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.transactions');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

function updateUi(obj) {
    displayTransactions(obj)
    displayBalance(obj)
    displayTotal(obj)
}

const displayTransactions = (arr, sort = false) => {

    const trans = sort ? arr.transactions.slice().sort((a, b) => a - b) : arr.transactions

    containerTransactions.innerHTML = ''
    trans.forEach((el, index) => {

        const transType = el > 0 ? 'deposit' : 'withdrawal'
        const transDate = new Date(arr.transactionsDates[index]).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        })

        const transactionRow = `
        <div class="transactions__row">
           <div class="transactions__type transactions__type--${transType}">
                ${index + 1}  ${transType}       </div>
            <div class="transactions__date">${transDate}</div>

          <div class="transactions__value">${el.toFixed(2)} </div>
         </div>
        `;
        containerTransactions.insertAdjacentHTML('afterbegin', transactionRow)

    })
}

const createNicknames = (arr) => {

    arr.forEach(el => el.nickName = el.userName.toLowerCase().split(' ').map(el => el.slice(0, 1)).join(''))
}

createNicknames(accounts)


const displayBalance = (account) => {
    const balance = account.transactions.reduce((acc, el) => {

        return acc + el
    }, 0).toFixed(2)
    account.balance = balance
    labelBalance.innerHTML = balance + "$"
}


const displayTotal = (obj) => {
    const depositsTotal = obj.transactions.filter(el => el >= 0).reduce((acc, el) => acc + el
        , 0).toFixed(2)
    labelSumIn.textContent = depositsTotal + "$"


    const withdrawaalsTotal = obj.transactions.filter(el => el < 0).reduce((acc, el) => acc + el
        , 0).toFixed(2)
    labelSumOut.textContent = withdrawaalsTotal + "$"


    const interestTotal = obj.transactions.filter(el => el > 0).map(dep => (dep * obj.interest) / 100).filter(el => el > 5).reduce((acc, el) => acc + el
        , 0).toFixed(2)

    labelSumInterest.textContent = interestTotal + '$'
}

let currentAccount;

// Always LogIn
currentAccount = account1
updateUi(currentAccount)
containerApp.style.opacity = 100


btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    currentAccount = accounts.find((el) => {
        console.log(inputLoginUsername.value)
        return el.nickName === inputLoginUsername.value

    })

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        labelWelcome.textContent = `Welcome back, ${currentAccount.userName.split(' ')[0]}!`
        containerApp.style.opacity = 100
        inputLoginUsername.value = inputLoginPin.value = ''
        updateUi(currentAccount)
    } else {
        labelWelcome.textContent = 'Wrong credentials'
        containerApp.style.opacity = 0
        inputLoginUsername.value = inputLoginPin.value = ''
        inputLoginPin.blur()
    }


    const now = new Date();
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    };

    const formattedDate = now.toLocaleDateString('en-US', options);
    const [month, day, year] = formattedDate.split('/');

    const formattedMonth = month.padStart(2, '0');
    const formattedDay = day.padStart(2, '0');

    labelDate.textContent = `${formattedMonth}-${formattedDay}-${year}`;
})

btnTransfer.addEventListener('click', (e) => {


    e.preventDefault()


    const amount = Number(inputTransferAmount.value)
    const receiverAccount = accounts.find(el => el.nickName === inputTransferTo.value)
    console.log(amount, receiverAccount)
    if (amount > 0 && receiverAccount && currentAccount.balance >= amount && receiverAccount.nickName !== currentAccount.nickName) {
        currentAccount.transactions.push(-amount)
        receiverAccount.transactions.push(amount)

        const currentDate = new Date().toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
        currentAccount.transactionsDates.push(currentDate)
        receiverAccount.transactionsDates.push(currentDate)
        updateUi(currentAccount)
    } else {
        let errorDiv = document.createElement('div');
        errorDiv.classList.add('error');
        document.querySelector('.operation--transfer').append(errorDiv)
        errorDiv.textContent = 'Недостаточно денег или вы делаете перевод сами себе!!!';
        setTimeout(() => {
            errorDiv.textContent = '';

        }, 3000)

    }
    inputTransferAmount.value = inputTransferTo.value = ''
})

btnClose.addEventListener('click', (e) => {
    e.preventDefault()
    if (currentAccount.nickName === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)) {

        const currentAccountIndex = accounts.findIndex(el => el.nickName === currentAccount.nickName)
        accounts.splice(currentAccountIndex, 1)

        console.log(currentAccountIndex)
        inputCloseUsername.value = inputClosePin.value = ''
        containerApp.style.opacity = 0
        labelWelcome.textContent = 'Log in to get started'

    }
})


btnLoan.addEventListener('click', (e) => {
    e.preventDefault()

    const loanAmount = Math.floor(inputLoanAmount.value)
    if (loanAmount > 0 && currentAccount.transactions.some(el => el >= loanAmount * 10 / 100)) {
        currentAccount.transactions.push(loanAmount)
        currentAccount.transactionsDates.push(new Date().toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }))
        updateUi(currentAccount)
    }
    inputLoanAmount.value = ''

})
let arrTransactionSort = false
btnSort.addEventListener('click', (e) => {
    e.preventDefault()
    displayTransactions(currentAccount, !arrTransactionSort)
    arrTransactionSort = !arrTransactionSort
})
const logoImg = document.querySelector('.logo')
logoImg.addEventListener('click', (e) => {
    e.preventDefault()
    Array.from(document.querySelectorAll('.transactions__row')).forEach((el, i) => {
        if (i % 2 === 0) {
            el.style.backgroundColor = '#f7f'
        }
    })
})
