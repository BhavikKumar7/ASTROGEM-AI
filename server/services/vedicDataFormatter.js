const planetHindiNames = {
    Sun: "सूर्य",
    Moon: "चन्द्र",
    Mars: "मंगल",
    Mercury: "बुध",
    Jupiter: "गुरु",
    Venus: "शुक्र",
    Saturn: "शनि",
    Rahu: "राहु",
    Ketu: "केतु"
};

const rashiHindiNames = {
    Mesha: "मेष",
    Vrishabha: "वृषभ",
    Mithuna: "मिथुन",
    Karka: "कर्क",
    Simha: "सिंह",
    Kanya: "कन्या",
    Tula: "तुला",
    Vrishchika: "वृश्चिक",
    Dhanu: "धनु",
    Makara: "मकर",
    Kumbha: "कुंभ",
    Meena: "मीन"
};

const formatVedicData = (vedicData) => {
    const planets = {};

    Object.entries(
        vedicData.birthChart.planets
    ).forEach(([planet, value]) => {

        planets[planet] = {

            englishName: planet,
            hindiName:
                planetHindiNames[planet],
            sign:
                value.sign,
            signHindi:
                rashiHindiNames[value.sign],
            house:
                value.house,
            nakshatra:
                value.nakshatra,
            lord:
                value.lord,
            dignity:
                value.dignity.english
        };
    });

    return {
        rashi: {
            english:
                vedicData.rashi.name,
            hindi:
                rashiHindiNames[
                vedicData.rashi.name
                ],
            lord:
                vedicData.rashi.lord,
            element:
                vedicData.rashi.element
        },

        nakshatra: {
            name:
                vedicData.nakshatra.name,
            lord:
                vedicData.nakshatra.lord,
            deity:
                vedicData.nakshatra.deity,
            pada:
                vedicData.nakshatra.pada
        },

        lagna: {
            english:
                vedicData.lagna.name,
            hindi:
                rashiHindiNames[
                vedicData.lagna.name
                ],
            lord:
                vedicData.lagna.lord,
            element:
                vedicData.lagna.element
        },
        planets
    };
};

export default formatVedicData;