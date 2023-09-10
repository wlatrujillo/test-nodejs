const data = require("./data.json");

let applicantDocuments = data.data.applicantDocuments;

let TYPES = Object.freeze({ INDIVIDUAL: "Individual", BUSINESS: "Business", ACCOUNT: "Account" });

let result = [
    {
        "applicantId": 1, "applicantName": "", "applicantType": TYPES.INDIVIDUAL,
        documents: applicantDocuments
            .filter(item => item.applicantType == TYPES.INDIVIDUAL)
            .reduce((acumulator, item) => acumulator.concat(item.documents), [])
    },
    {
        "applicantId": 2, "applicantName": "", "applicantType": TYPES.BUSINESS,
        documents: applicantDocuments
            .filter(item => item.applicantType == TYPES.BUSINESS)
            .reduce((acumulator, item) => acumulator.concat(item.documents), [])

    },
    {
        "applicantId": 3, "applicantName": "", "applicantType": TYPES.ACCOUNT,
        documents: applicantDocuments
            .filter(item => item.applicantType == TYPES.ACCOUNT)
            .reduce((acumulator, item) => acumulator.concat(item.documents), [])
    }
]

console.log(result);
