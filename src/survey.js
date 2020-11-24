const survey = {
    "author": "Carlos Palacios",
    "survey_name": "Test",
    "survey_questions": [
        {
            "question": "Write your full name",
            "type": "text",
            "required": true,
            "id": 1
        },
        {
            "question": "Select the JS framework that you've worked in the past",
            "type": "checkbox",
            "options": [ "React", "Vue", "Angular", "Polymer", "Lit-Element" ],
            "required": false,
            "id": 2
        },
        {
            "question": "Current time that you're answering this survey",
            "type": "hour-init",
            "required": true,
            "id": 3
        }, 
        {
            "question": "What you think that is the best frontend framework? ( Can be more than one )",
            "type": "checkbox",
            "options": [ "React", "Vue", "Angular", "Polymer", "Lit-Element" ],
            "required": true,
            "id": 4
        },
        {
            "question": "What programming languajes you used in the past?",
            "type": "text",
            "required": true,
            "id": 5
        },
        {
            "question": "Are you a backend, frontend or fullstack developer?",
            "type": "select",
            "options": [ "backend", "frontend", "fullstack" ],
            "required": true,
            "id": 6
        },
        {
            "question": "Choose your favorite frontend framweork",
            "type": "radio",
            "options": [ "React", "Vue", "Angular", "Polymer", "Lit-Element" ],
            "required": true,
            "id": 7
        }
    ],
    "send_to": "https://some-domain/imaginary-api/imaginary-endpoint/"
}
export default survey