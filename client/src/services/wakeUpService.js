import axios from "axios";

const wakeUpServer = async () => {
    try {
        await axios.get(
            import.meta.env.VITE_BACKEND_URL
        );

        console.log(
            "Backend awakened"
        );
    }

    catch (error) {

        console.log(
            "Wake up failed"
        );

    }
};

export default wakeUpServer;