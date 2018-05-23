This page describes an overview of the entity structure and architecture of iCommit. 

# Farmer Entity
This entity records the data from the farmers at the point of signing up a farmer to iCommit. The Farmer entity would contain all personal information about each individual farmer. 

The data recorded by this entity is as follows:

### a. Personal Information
*    Name
*    Phone Number
*    location
*    Residential address & GPS coordinates of village
*    National ID ( This is an optional field and only required if the farmer needs to sign up for mobile money) 
*    Picture
*    Age
*    Gender 

### b. Agricultural Information
* The crops for which the farmer is going to purchase inputs from iCommit
* The number of acres on which the farmer plants each crop

### c. Financial Literacy Information
* Has the farmer used mobile money before? ( If the farmer has not used mobile money before, then the agent signs them up for a mobile money wallet and trains them in using it)
* How often has the farmer used mobile money? ( Options for this question: Over the last 30 days, Over the last 90 days, Over the last one year) 
* Which of the following financial services has the farmer used before( Options for this question: Credit schemes, savings schemes)

### d. Household Information
* Size of household
* Income level of household ( The farmers should be provided with a list of income ranges to choose from)
* Can the farmer read or has someone in the family who can read? 

### e. Farming Information
* What type and quantity of inputs does the farmer require? (can be multiple types)

### Crop Inputs 
A rule engine would be used to record the crops and crop inputs chosen by the farmers. These rules would then determine the calculations for the following:

* The optimum installment amount
* The suggested start of the payment period
* The suggested end of the payment period
* The latest cash out date
  
### Entity's Functionalities
* CRUD operations for recording farmer's information.However, a soft Delete option would be performed instead of a hard delete
* CRUD operations for the crop inputs.
* The ability to define and edit rules 

# Subscription Entity
This entity records the business logic of the application, i.e. the inputs that each farmer signs up for, and the payment amounts and payment periods for each farmer.The information in the subscription entity for each farmer would change every season. 

The entity contains information about the following
* Inputs that farmer signs up for
* The amount of each input
* The payment period for which the farmer would make regular deposits to their iCommit wallets
* The suggested individual payment amount 
* The next payment date  
* The notification policy that applies on each subscription
* A boolean field that is selected when a subscription is over (either when a user cashes out of the platform, or converts his savings into a voucher)

CRUD operations would be provided for this entity.
# Payments Entity 
This entity will record details about all the payment transactions made by a farmer to iCommit. Whenever the platform receives a payment from a farmer, a new payment line would be created. This line would contain the following information
* Date of payment
* Amount of payment
* A foreign key mapping each payment to its corresponding subscription from the Subscription entity

For this entity, the following functionalities would be provided:
* A GET endpoint, which would receive the farmer ID, the payment date and the amount of payment made. This endpoint would be used to record the farmer transactions received 
* A webhook, which would send a POST request with information about a transaction whenever a farmer makes a deposit 


Note: The subscription entity will have a one to many relationship with the payment entity. 

# Notification Entity 
This entity would loop through all active subscriptions from the subscription model every day. Depending on the notification policy that is valid for the subscription, the notification module will send an alert to the farmer about the upcoming payment. 

# Withdrawing Entity
This entity manages the cash out and "cashing out" functionalities of the platform.  The cash out date is activated at the end of the installment payment period for the farmers, whereas a farmer can activate the "cashing out" functionality at any time to withdraw all their deposits from iCommit after the deduction of a service charge. 
* At the cash out date, the total value of the deposits to date are converted into a digital voucher that the farmer can then use to purchase the inputs that they signed up for. 
* If a farmer triggers the "cash out" functionality, they withdraw the entire amount that has been deposited to date. 
* When a user cases out, either via withdrawing all money or converting the deposit amount to a voucher, the corresponding subscription is marked as being completed. 

# Voucher Entity
The voucher entity generates the digital voucher used by the farmers to purchase inputs. It contains the following fields
* Unique Voucher ID
* Name of Farmer
* Foreign key linked to the specific subscription  
* Voucher Expiration date
* Voucher value
* Date when voucher was claimed  
* Amount that has been claimed by the farmer from the total voucher value

The voucher entity will also run a daily automatic task that loops through the subscriptions. If any subscriptions have reached their cash out date, the value from these subscriptions will be automatically transferred to the voucher. 

This entity would also provide read and update functionalities via its endpoints.
# Manual Withdrawal Entity
This entity manages the actions triggered whenever a farmer logs a request to cash out of iCommit. The entity records the following fields

* Date of cash withdrawal
* The amount of withdrawal (by default, the farmers can only withdraw the entire amount of their deposits to date, after the subtraction of a service charge)
* The date when the withdrawal request was made
* The date when the farmer was paid
* The reason for withdrawal  

This entity would have CRUD operations accessed via REST endpoints.
This entity would have CRUD operations accessed via REST endpoints.

# Complaint Management Entity 
This entity manages the complaint resolution processes related to any complaints that the system receives from the farmers. 
The following fields are recorded by this entity
* Name of farmer reporting the issue
* Category of issue
* Date when issue was logged
* Date when issue was resolved 

The entity would have CRUD operations 

# Trader Entity 
This entity is triggered whenever a trader receives a voucher from the farmer for purchasing the inputs. The following functionalities are provided by this entity 

* Verify a voucher
* View the cost against a specific voucher number  

The entity would provide read functionality against its REST endpoint
