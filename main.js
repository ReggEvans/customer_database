
const customer = customers.results

// Grab container node
let container = document.querySelector(".container")

// Create header node
let header = document.createElement("header")
let h1 = document.createElement("h1")
let h1Text = document.createTextNode("INTERNAL COMPANY DIRECTOR")
header.append(h1)
h1.append(h1Text)
header.append(h1)
container.append(header)


//********************************************
// CREATING CUSTOMER LIST - LONG WAY (NON-ES6)
//********************************************

// Create main node
let main = document.createElement("main")
container.append(main)

// Create customer list
for (let i = 0; i < customer.length; i++) {

  // Create and append a div element for each customer
  let div = document.createElement("div")
  main.append(div)

  // Create and append img for each customer
  let img = document.createElement("img")
  img.src = customer[i].picture.large
  img.width = "250"
  div.append(img)

  // Create and append name for each customer
  let name = document.createElement("p")
  let nameText = document.createTextNode(customer[i].name.first + " " + customer[i].name.last)
  name.className = "name"
  name.append(nameText)
  div.append(name)

  // Create and append email for each customer
  let email = document.createElement("p")
  let emailText = document.createTextNode(customer[i].email)
  email.className = "email"
  email.append(emailText)
  div.append(email)

  // Create and append street for each customer
  let street = document.createElement("p")
  let streetText = document.createTextNode(customer[i].location.street)
  street.append(streetText)
  div.append(street)

  // Create and append location for each customer
  let location = document.createElement("p")
  let locationText = document.createTextNode(customer[i].location.city + ", " + customer[i].location.state + " " + customer[i].location.postcode)
  location.append(locationText)
  div.append(location)

  // Create and append phone for each customer
  let phone = document.createElement("p")
  let phoneText = document.createTextNode(customer[i].phone)
  phone.append(phoneText)
  div.append(phone)

  // Create and append ssn for each customer
  let ssn = document.createElement("p")
  let ssnText = document.createTextNode(customer[i].id.value)
  ssn.className = "ssn"
  ssn.append(ssnText)
  div.append(ssn)

}



//*****************************************************
// CREATING CUSTOMER LIST - TEMPLATE LITERAL WAY (ES6)
//*****************************************************
let eachCustomer = ""
for (let i = 0; i < customer.length; i++) {
  eachCustomer += `
    <div>
       <img src=${customer[i].picture.large} width="250">
       <p class="name">${customer[i].name.first} ${customer[i].name.last}</p>
       <p class="email">${customer[i].email}</p>
       <p>${customer[i].location.street}</p>
       <p>${customer[i].location.city} ${customer[i].location.state} ${customer[i].location.postcode}</p>
       <p>${customer[i].phone}</p>
       <p class="ssn">${customer[i].id.value}</p>
    </div>
  `
}
main.innerHTML = eachCustomer
