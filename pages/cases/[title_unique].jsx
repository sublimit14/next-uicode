import axios from "axios";

const Case = () => {
    return (
        <>
            <h1>Case!</h1>
        </>
    );
};

Case.getStaticPaths = async() => {
    try {
        const res = await axios.get('http://localhost:1337/api/cases');
        const cases = res.data;
        return {
            path: [
                {
                    params: {
                        title_unique: cases.title_unique
                    }
                }
            ],
            fallback: false
        }
    } catch (error) {
        return { error };
    }
};

export default Case;