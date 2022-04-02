import {useState} from "react";
import MainLayout from "../../components/MainLayout";


const Brief = () => {
    const [step, setStep] = useState({
        id: 0,
        name: 'initial',
        completed: false,
    })

    return (
        <MainLayout>
            <section className="container">
                <h1>Brief</h1>
                <pre>
                <hr/>
                    {step.id}
                    <hr/>
                    {step.name}
                    <hr/>
                    {String(step.completed)}
            </pre>
            </section>
        </MainLayout>

    );
};

export default Brief;