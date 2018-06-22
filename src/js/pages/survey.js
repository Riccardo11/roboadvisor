const json_survey = {
	questions: [{
		name: "birthdate",
		type: "text",
		inputType: "date",
		title: "Your Birthdate",
		isRequired: true
	}, {
		name: "job",
		type: "text",
		title: "Your Job",
		isRequired: true
	}, {
		name: "educational level",
		type: "dropdown",
		title: "Your Educational Level",
		isRequired: true,
		colCount: 0,
		choices: [
			"High School",
			"Bachelor Degree",
			"Master Degree",
			"PhD",
			"Other"
		]
	}, {
		name: "financial products",
		type: "radiogroup",
		title: "Do you know financial markets and products?",
		isRequired: true,
		colCount: 2,
		choices: [ "Yes", "No" ]
	}, {
		name: "frequency of operations",
		type: "radiogroup",
		title: "How often do you work on financial markets? (Mettere risposte più precise)",
		isRequired: true,
		colCount: 3,
		choices: [ "Never", "Rarely", "Often" ]
	}, {
		name: "kind of investments",
		type: "text",
		title: "What kind of financial products do (or did) you invest in? (rivedere inglese)",
		isRequired: true
	}, {
		name: "kind of services",
		type: "text",
		title: "What kind of financial services do you know?",
		isRequired: true
	}, {
		name: "kind of products",
		type: "text",
		title: "What kind of financial products do you know?",
		isRequired: true
	}, {
		name: "source of income",
		type: "text",
		title: "What's your primary source of income?",
		isRequired: true
	}, {
		name: "net income",
		type: "text",
		title: "What's your net annual income?",
		isRequired: true
	}, {
		name: "patrimonial quantity",
		type: "text",
		title: "What's your patrimonial quantity, in terms of real estates, liquidity and financial products?",
		isRequired: true
	},  {
		name: "save net income",
		type: "text",
		title: "How much can you save of your net annual income? (quali scelte mettere?)",
		isRequired: true
	}, {
		name: "percentage investments",
		type: "text",
		title: "What percentage of your savings do you invest in financial prdoucts?",
		isRequired: true
	}, {
		name: "patrimonial quantity",
		type: "radiogroup",
		title: "What's your patrimonial quantity, in terms of real estates, liquidity and financial products?",
		isRequired: true,
		colCount: 5,
		choices: [ "<10%", "10%-20%", "20%-30%","30%-40%",">40%" ]
	}, {
		name: "real estate investments",
		type: "text",
		title: "How much are your investments in real estate business?",
		isRequired: true
	}, {
		name: "real estate investments",
		type: "text",
		title: "How much are your investments in real estate business?",
		isRequired: true
	}, {
		name: "target",
		type: "text",
		title: "What's the target of your investments?",
		isRequired: true
	}, {
		name: "real estate investments",
		type: "text",
		title: "How much are your investments in real estate business?",
		isRequired: true
	}, {
		name: "time period",
		type: "text",
		title: "What's the time period in which you want to preserve your investment?",
		isRequired: true
	}, {
		name: "reaction",
		type: "text",
		title: "How do you react to market movements?",
		isRequired: true
	}, 

	]
}

window.survey = new Survey.Model(json_survey);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

$(document).ready(function() {
	$("#survey").Survey({model: survey});
});