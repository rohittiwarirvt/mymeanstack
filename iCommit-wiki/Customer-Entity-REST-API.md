Name of Attribute | Description | Data Type | Required | Validations
--- | --- | --- | --- | --- |
name | Name of the customer | String | Yes | Should be pure alphabetical String
phone | phone of the customer | String | Yes | Should be pure numerical String with valid 10 digit phone number
address| Address of the customer | JSON Object | Yes | It consists of fields: street, chiefdom, district, location- discussed in following rows. Also, all fields are compulsory.
address.street | Street address of the Customer |String | Yes | It can be combination of alpha numeric character but is compulsory.
 address.chiefdom | chiefdom of the Customer |String | Yes | Only code is to be supplied
  address.district | district  of the Customer |String | Yes | Only code is to be supplied
  address.location | GPS coordinates of the residence of Customer |Decimal | Yes | Both X and Y coordinates are to be supplied
 identification | Identity proof of the Customer, It is combination of 3 fields type,number and expiration |JSON Object| Yes | Description and acceptable values of each sub field are given in rows below.
 identification.type | type of Identification document of Customer | String | Yes | It is a String field and the acceptable values are:national,driver,voter
 identification.number | number of identification document | String | Yes | It can be aplha numeric String 
 identification.expiration | Expiry date of Identification document | String | Yes | Date string in "YYYY-MM-DD" format
dob | date of birth | Date of birth of Customer | Yes | Date string in "YYYY-MM-DD" format
 gender | gender of Customer | String | Yes | It is a String field and the acceptable values are:male and female
 financialLiteracyData  | information about financial literact of the Customer, It is combination of 4 fields usedMobileMoney,lastUseOfMobileMoney,usedCredit,usedSavings |JSON Object| Yes | Description and acceptable values of each sub field are given in rows below.
financialLiteracyData.usedMobileMoney | boolean fields which indicates whether customer has ever used mobile money before | boolean | Yes | is boolean field and requires either true or false value.
financialLiteracyData.lastUseOfMobileMoney |  number of days since the customer used mobile money | integer | Yes | positive integer values accepted
financialLiteracyData.usedCredit| boolean fields which indicates whether customer has ever used credit scheme/product before | boolean | Yes | is boolean field and requires either true or false value.
financialLiteracyData.usedSaving| boolean fields which indicates whether customer has ever used savings scheme/product before | boolean | Yes | is boolean field and requires either true or false value.
 householdData| information about household of the Customer, It is combination of 4 fields numberOfMembers,incomeOfHouseHold,isLiterate,hasLiterateFamilyMember |JSON Object| Yes | Description and acceptable values of each sub field are given in rows below.
householdData.numberOfMembers|  number of member present in the customer's family | integer | Yes | positive integer values accepted
householdData.incomeOfHouseHold|  Total income of all the members of customer's family | integer | Yes | positive integer values accepted
householdData.isLiterate| boolean fields which indicates whether customer is literate and is able to read/write | boolean | Yes | is boolean field and requires either true or false value.
householdData.hasLiterateFamilyMember | boolean fields which indicates whether customer has someone in the family who is able to read/write | boolean | Yes | is boolean field and requires either true or false value.


# Create Customer


This endpoint is used to create a customer

## POST /customers

### Request body
```
{
  "name": "John Oliver",
  "phone": "1234567890",
  "address": {
    "street": "103 w st",
    "chiefdom": "nyc",
    "district": "nycd",
    "location": {
      "x":1234,
      "y": 456
    }
  },
  "identification": {
    "type": "national",
    "number": "1234567",
    "expiration": "2018-02-12"
  },
  "dob": "2018-02-12",
  "gender": "male",
  "imageBase64": "1qwertu6545464",
  "financialLiteracyData": {
    "usedMobileMoney": true,
    "lastUseOfMobileMoney": 34,
    "usedCredit": true,
    "usedSaving": true
  },
  "householdData": {
    "numberOfMembers": 4,
    "incomeOfHouseHold": 12345,
    "isLiterate": true,
    "hasLiterateFamilyMember": false
  }
}

```
### Response body:

```
{
  "id": "1",
  "name": "John Oliver",
  "phone": "1234567890",
  "address": {
    "street": "103 w st",
    "chiefdom": {
      "name": "soho",
      "code": "nyc"
    },
    "district": {
      "code": "NY",
      "name": "New York"
    },
    "location": {
      "x": 1234,
      "y": 456
    }
  },
  "identification": {
    "type": "national",
    "number": "1234567",
    "expiration": "2018-02-12"
  },
  "dob": "2018-02-12",
  "gender": "male",
  "financialLiteracyData": {
    "usedMobileMoney": true,
    "lastUseOfMobileMoney": 34,
    "usedCredit": true,
    "usedSaving": true
  },
  "householdData": {
    "numberOfMembers": 4,
    "incomeOfHouseHold": 12345,
    "isLiterate": true,
    "hasLiterateFamilyMember": false
  },
  "defaultCurrency": "USD",
  "user": {
    "id": 1,
    "email": "zayn@gmail.com",
    "username": "yyn123",
    "password": "qwerty",
    "phone": "123456780",
    "roles": [
      {
        "authority": "ROLE_ADMIN",
        "role": "Admin"
      }
    ],
    "active": true,
    "deleted": false,
    "created": "2018-01-01 00:00:00",
    "modified": "2018-01-01 00:00:00"
  },
  "deleted": false,
  "created": "2018-01-01 00:00:00",
  "modified": "2018-01-01 00:00:00"
}

```

# Edit Customer

## PUT /customers/{id}

### Request body:

```

{
  "name": "John Oliver",
  "phone": "1234567890",
  "address": {
    "street": "103 w st",
    "chiefdom": "nyc",
    "district": "nycd",
    "location": {
      "x":1234,
      "y": 456
    }
  },
  "identification": {
    "type": "national",
    "number": "1234567",
    "expiration": "2018-02-12"
  },
  "dob": "2018-02-12",
  "gender": "male",
  "imageBase64": "1qwertu6545464",
  "financialLiteracyData": {
    "usedMobileMoney": true,
    "lastUseOfMobileMoney": 34,
    "usedCredit": true,
    "usedSaving": true
  },
  "householdData": {
    "numberOfMembers": 4,
    "incomeOfHouseHold": 12345,
    "isLiterate": true,
    "hasLiterateFamilyMember": false
  }
}

```

### Response body:

```
{
  "id": "1",
  "name": "John Oliver",
  "phone": "1234567890",
  "address": {
    "street": "103 w st",
    "chiefdom": {
      "name": "soho",
      "code": "nyc"
    },
    "district": {
      "code": "NY",
      "name": "New York"
    },
    "location": {
      "x": 1234,
      "y": 456
    }
  },
  "identification": {
    "type": "national",
    "number": "1234567",
    "expiration": "2018-02-12"
  },
  "dob": "2018-02-12",
  "gender": "male",
  "financialLiteracyData": {
    "usedMobileMoney": true,
    "lastUseOfMobileMoney": 34,
    "usedCredit": true,
    "usedSaving": true
  },
  "householdData": {
    "numberOfMembers": 4,
    "incomeOfHouseHold": 12345,
    "isLiterate": true,
    "hasLiterateFamilyMember": false
  },
  "defaultCurrency": "USD",
  "user": {
    "id": 1,
    "email": "zayn@gmail.com",
    "username": "yyn123",
    "password": "qwerty",
    "phone": "123456780",
    "roles": [
      {
        "authority": "ROLE_ADMIN",
        "role": "Admin"
      }
    ],
    "active": true,
    "deleted": false,
    "created": "2018-01-01 00:00:00",
    "modified": "2018-01-01 00:00:00"
  },
  "deleted": false,
  "created": "2018-01-01 00:00:00",
  "modified": "2018-01-01 00:00:00"
}

```

# Customer Template

## GET /customers/template

### Response body

```


{
  "identification": [
    {
      "type": "national"
    },
    {
      "type": "driver"
    },
    {
      "type": "voter"
    }
  ],
  "gender": [
    {
      "code": "male"
    },
    {
      "code": "Female"
    }
  ]
}

```
# List all Customers

## GET /customers

### Response Body

```



  [
    {
  "id": "1",
  "name": "John Oliver",
  "phone": "1234567890",
  "address": {
    "street": "103 w st",
    "chiefdom": {
      "name": "soho",
      "code": "nyc"
    },
    "district": {
      "code": "NY",
      "name": "New York"
    },
    "location": {
      "x": 1234,
      "y": 456
    }
  },
  "identification": {
    "type": "national",
    "number": "1234567",
    "expiration": "2018-02-12"
  },
  "dob": "2018-02-12",
  "gender": "male",
  "financialLiteracyData": {
    "usedMobileMoney": true,
    "lastUseOfMobileMoney": 34,
    "usedCredit": true,
    "usedSaving": true
  },
  "householdData": {
    "numberOfMembers": 4,
    "incomeOfHouseHold": 12345,
    "isLiterate": true,
    "hasLiterateFamilyMember": false
  },
  "defaultCurrency": "USD",
  "user": {
    "id": 1,
    "email": "zayn@gmail.com",
    "username": "yyn123",
    "password": "qwerty",
    "phone": "123456780",
    "roles": [
      {
        "authority": "ROLE_ADMIN",
        "role": "Admin"
      }
    ],
    "active": true,
    "deleted": false,
    "created": "2018-01-01 00:00:00",
    "modified": "2018-01-01 00:00:00"
  },
  "deleted": false,
  "created": "2018-01-01 00:00:00",
  "modified": "2018-01-01 00:00:00"
},
{
  "id": "1",
  "name": "John Oliver",
  "phone": "1234567890",
  "address": {
    "street": "103 w st",
    "chiefdom": {
      "name": "soho",
      "code": "nyc"
    },
    "district": {
      "code": "NY",
      "name": "New York"
    },
    "location": {
      "x": 1234,
      "y": 456
    }
  },
  "identification": {
    "type": "national",
    "number": "1234567",
    "expiration": "2018-02-12"
  },
  "dob": "2018-02-12",
  "gender": "male",
  "financialLiteracyData": {
    "usedMobileMoney": true,
    "lastUseOfMobileMoney": 34,
    "usedCredit": true,
    "usedSaving": true
  },
  "householdData": {
    "numberOfMembers": 4,
    "incomeOfHouseHold": 12345,
    "isLiterate": true,
    "hasLiterateFamilyMember": false
  },
  "defaultCurrency": "USD",
  "user": {
    "id": 1,
    "email": "zayn@gmail.com",
    "username": "yyn123",
    "password": "qwerty",
    "phone": "123456780",
    "roles": [
      {
        "authority": "ROLE_ADMIN",
        "role": "Admin"
      }
    ],
    "active": true,
    "deleted": false,
    "created": "2018-01-01 00:00:00",
    "modified": "2018-01-01 00:00:00"
  },
  "deleted": false,
  "created": "2018-01-01 00:00:00",
  "modified": "2018-01-01 00:00:00"
}
  ]

```

# Fetch single Customer

## GET /customers/{id}

### Response body

```
{
  "id": "1",
  "name": "John Oliver",
  "phone": "1234567890",
  "address": {
    "street": "103 w st",
    "chiefdom": {
      "name": "soho",
      "code": "nyc"
    },
    "district": {
      "code": "NY",
      "name": "New York"
    },
    "location": {
      "x": 1234,
      "y": 456
    }
  },
  "identification": {
    "type": "national",
    "number": "1234567",
    "expiration": "2018-02-12"
  },
  "dob": "2018-02-12",
  "gender": "male",
  "financialLiteracyData": {
    "usedMobileMoney": true,
    "lastUseOfMobileMoney": 34,
    "usedCredit": true,
    "usedSaving": true
  },
  "householdData": {
    "numberOfMembers": 4,
    "incomeOfHouseHold": 12345,
    "isLiterate": true,
    "hasLiterateFamilyMember": false
  },
  "defaultCurrency": "USD",
  "user": {
    "id": 1,
    "email": "zayn@gmail.com",
    "username": "yyn123",
    "password": "qwerty",
    "phone": "123456780",
    "roles": [
      {
        "authority": "ROLE_ADMIN",
        "role": "Admin"
      }
    ],
    "active": true,
    "deleted": false,
    "created": "2018-01-01 00:00:00",
    "modified": "2018-01-01 00:00:00"
  },
  "deleted": false,
  "created": "2018-01-01 00:00:00",
  "modified": "2018-01-01 00:00:00"
}

```

# Fetch image of  Customer

## GET /customers/{id}/image

### Response body

```
{
  "imagebase64": "12sdsdfdfgfgfdgdg"
}

```

# Set image of  Customer

## POST /customers/{id}/image


### Request body

```
{
  "imagebase64": "12sdsdfdfgfgfdgdg"
}

```


### Response body

```
{
  "imagebase64": "12sdsdfdfgfgfdgdg"
}
```


