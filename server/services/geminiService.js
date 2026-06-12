import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateWithRetry = async (
    model,
    prompt,
    retries = 3
) => {

    for (let i = 0; i < retries; i++) {

        try {

            const result =
                await model.generateContent(
                    prompt
                );

            const response =
                await result.response;

            return response.text();

        } catch (err) {

            if (
                err.status === 503 &&
                i < retries - 1
            ) {

                console.log(
                    `Retrying Gemini... attempt ${i + 1}`
                );

                await new Promise(
                    res =>
                        setTimeout(
                            res,
                            1000 * (i + 1)
                        )
                );

            } else {

                throw err;

            }

        }

    }

};

// const generateGemstoneRecommendation = async (problem, vedicData) => {

//     const prompt = `
// You are an expert Vedic astrologer following Sanatan Dharma.

// Use only Hindu mythology and Vedic astrology.

// IMPORTANT RULES:

// 1. Moon Rashi is the primary zodiac sign.
// 2. Moon Rashi MUST remain "${vedicData.rashi.name}".
// 3. Never change the zodiac sign.
// 4. Lagna is only a secondary influence.
// 5. Do not use western astrology.
// 6. Recommend gemstones to wear according to Moon Rashi Lord, Nakshatra Lord, planetary strengths and the user's problem.

// Problem:
// ${problem}

// Moon Rashi:
// ${vedicData.rashi.name}
// Lord:
// ${vedicData.rashi.lord}

// Nakshatra:
// ${vedicData.nakshatra.name}
// Lord:
// ${vedicData.nakshatra.lord}

// Lagna:
// ${vedicData.lagna.name}
// Lord:
// ${vedicData.lagna.lord}

// Planetary Summary:
// ${JSON.stringify(vedicData.planets)}

// Return ONLY valid JSON:

// {
//   "moonRashi":"${vedicData.rashi.name}",
//   "moonRashiHindi":"${vedicData.rashi.hindi}",

//   "moonRashiLord":"",
//   "moonRashiLordHindi":"",

//   "lagna":"${vedicData.lagna.name}",
//   "lagnaHindi":"${vedicData.lagna.hindi}",

//   "gemstone":"",
//   "gemstoneHindi":"",

//   "rulingPlanet":"",
//   "rulingPlanetHindi":"",

//   "metal":"",
//   "metalHindi":"",

//   "finger":"",
//   "fingerHindi":"",

//   "bestDay":"",
//   "bestDayHindi":"",

//   "bestTime":"",

//   "mantra":"",

//   "deity":"",
//   "deityHindi":"",

//   "luckyColor":"",
//   "luckyColorHindi":"",

//   "luckyNumber":"",

//   "benefits":[],
//   "benefitsHindi":[],

//   "precautions":[],
//   "precautionsHindi":[],

//   "otherRemedies":[],
//   "otherRemediesHindi":[]
// }
// `;

//     const models = [
//         "gemini-2.5-flash-lite",
//         "gemini-2.5-flash",
//         "gemini-1.5-flash"
//     ];

//     let rawText = null;

//     for (const modelName of models) {

//         try {

//             console.log(
//                 "Trying:",
//                 modelName
//             );

//             const model =
//                 genAI.getGenerativeModel({
//                     model: modelName
//                 });

//             rawText =
//                 await generateWithRetry(
//                     model,
//                     prompt
//                 );

//             break;

//         } catch (err) {

//             console.log(
//                 `${modelName} failed`
//             );

//         }

//     }

//     if (!rawText) {

//         throw new Error(
//             "AI service busy. Try again later."
//         );

//     }

//     const jsonMatch =
//         rawText.match(
//             /\{[\s\S]*\}/
//         );

//     if (!jsonMatch) {

//         throw new Error(
//             "Invalid AI response"
//         );

//     }

//     return JSON.parse(
//         jsonMatch[0]
//     );

// };

const generateGemstoneRecommendation = async (
    problem,
    vedicData
) => {

const prompt = `
You are an expert Vedic astrologer following Sanatan Dharma.

Use only Hindu mythology and Vedic astrology.

IMPORTANT:

Moon Rashi is the PRIMARY zodiac sign.

Moon Rashi MUST remain:

${vedicData.rashi.english}

Hindi:

${vedicData.rashi.hindi}

Never change it.

Problem:

${problem}

Moon Rashi:

${vedicData.rashi.english}

Moon Rashi Lord:

${vedicData.rashi.lord}

Nakshatra:

${vedicData.nakshatra.name}

Nakshatra Lord:

${vedicData.nakshatra.lord}

Lagna:

${vedicData.lagna.english}

Lagna Lord:

${vedicData.lagna.lord}

Planet Summary:

${JSON.stringify(
    vedicData.planets,
    null,
    2
)}

Return ONLY valid JSON.

{
"moonRashi":{
"english":"${vedicData.rashi.english}",
"hindi":"${vedicData.rashi.hindi}"
},

"lagna":{
"english":"${vedicData.lagna.english}",
"hindi":"${vedicData.lagna.hindi}"
},

"rulingPlanet":{
"english":"",
"hindi":""
},

"gemstone":{
"english":"",
"hindi":""
},

"metal":{
"english":"",
"hindi":""
},

"finger":{
"english":"",
"hindi":""
},

"bestDay":{
"english":"",
"hindi":""
},

"bestTime":"",

"mantra":"",

"deity":{
"english":"",
"hindi":""
},

"luckyColor":{
"english":"",
"hindi":""
},

"luckyNumber":"",

"benefits":[
{
"english":"",
"hindi":""
}
],

"precautions":[
{
"english":"",
"hindi":""
}
],

"otherRemedies":[
{
"english":"",
"hindi":""
}
]

}
`;

    const models = [
        "gemini-2.5-flash-lite",
        "gemini-2.5-flash",
        "gemini-1.5-flash"
    ];

    let rawText = null;

    for (const modelName of models) {

        try {

            console.log(
                "Trying:",
                modelName
            );

            const model =
                genAI.getGenerativeModel({
                    model: modelName
                });

            rawText =
                await generateWithRetry(
                    model,
                    prompt
                );

            break;

        }

        catch (err) {

            console.log(
                `${modelName} failed`
            );

        }

    }

    if (!rawText) {

        throw new Error(
            "AI service busy. Try again later."
        );

    }

    const jsonMatch =
        rawText.match(
            /\{[\s\S]*\}/
        );

    if (!jsonMatch) {

        throw new Error(
            "Invalid AI response"
        );

    }

    return JSON.parse(
        jsonMatch[0]
    );

};

export default generateGemstoneRecommendation;