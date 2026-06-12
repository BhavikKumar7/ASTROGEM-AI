import { createRequire } from "module";

const require = createRequire(import.meta.url);

const { BirthChartGenerator } = require(
    "vedic-astrology-api/lib/utils/birthchart"
);

const { BehaviorPredictor } = require(
    "vedic-astrology-api/lib/utils/behaviorPredictor"
);

const {
    createDate,
    calculatePlanetaryPositions,
    calculateAscendant,
    getRashiFromLongitude,
    getNakshatraFromLongitude
} = require(
    "vedic-astrology-api/lib/utils/common"
);

const birthChartGenerator = new BirthChartGenerator();
const behaviorPredictor = new BehaviorPredictor();

const generateVedicData = async (user) => {
    try {

        const dob = new Date(user.dob);

        const year = dob.getFullYear();
        const month = dob.getMonth() + 1;
        const day = dob.getDate();

        const [hour, minute] = user.birthTime
            .split(":")
            .map(Number);

        const timezone = 5.5;

        const latitude = user.birthLocation.latitude;
        const longitude = user.birthLocation.longitude;

        const date = createDate(
            year,
            month,
            day,
            hour,
            minute,
            timezone
        );

        const {
            positions,
            ayanamsa
        } = calculatePlanetaryPositions(
            date,
            latitude,
            longitude
        );

        const ascendant = calculateAscendant(
            date,
            latitude,
            longitude
        );

        const birthChart =
            birthChartGenerator.generateBirthChart(
                positions,
                ascendant
            );

        const rawPositions = Object.fromEntries(
            Object.entries(positions).map(
                ([planet, data]) => [
                    planet,
                    data.longitude
                ]
            )
        );

        const moonLongitude =
            positions.Moon.longitude;

        const rashi =
            getRashiFromLongitude(
                moonLongitude
            );

        const nakshatra =
            getNakshatraFromLongitude(
                moonLongitude
            );

        const lagna =
            getRashiFromLongitude(
                ascendant
            );

        const behaviorPredictions =
            behaviorPredictor.generateBehaviorPredictions(
                birthChart,
                {
                    ayanamsa,
                    ascendant,
                    rawPositions
                },
                ascendant,
                {
                    birthDateTime:
                        date.toISOString(),

                    coordinates: {
                        latitude,
                        longitude
                    },

                    timezone
                }
            );

        return {
            rashi,
            nakshatra,
            lagna,
            ascendant,
            ayanamsa,
            planetaryPositions: positions,
            birthChart,
            behaviorPredictions
        };

    } catch (error) {

        throw new Error(
            `Failed to generate Vedic data: ${error.message}`
        );

    }
};

export default generateVedicData;